import api from '@/api/axios';
import { logout, refreshToken } from '@/store/slices/authSlice/authThunk';

let isRefreshing = false;
const callbacks: any[] = [];

export const setupAxios = (store: any) => {
  api.interceptors.request.use((config) => {
    const access_token = localStorage.getItem('access_token');

    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => {
      console.log('[RESPONSE]', response.status, response.config.url);
      return response;
    },
    async (error) => {
      console.log('[ERROR]', error.response?.status, error.config?.url);

      if (error.response?.status === 401) {
        const originalRequest = error.config;

        if (isRefreshing) {
          console.log('[QUEUE] Token refreshing... request queued:', originalRequest.url);
          return new Promise((resolve, reject) => {
            callbacks.push(async () => {
              console.log('[QUEUE RESOLVED]', originalRequest.url);
              try {
                const r = await api(originalRequest);
                console.log({ r });

                resolve(r);
              } catch (err) {
                reject(err);
              }
            });
          });
        }

        isRefreshing = true;
        console.log('[REFRESH] Start refresh token...');

        try {
          await store.dispatch(refreshToken()).unwrap();

          const res = await api(originalRequest);
          console.log('[RETRY]', originalRequest.url, '-> success');

          callbacks.forEach((cb) => cb());

          console.log({ res });

          return res;
        } catch (err) {
          await store.dispatch(logout());

          return Promise.reject(err);
        } finally {
          isRefreshing = false;
          callbacks.length = 0;
          console.log('[REFRESH] Done, isRefreshing = false');
        }
      }

      return Promise.reject(error);
    }
  );
};
