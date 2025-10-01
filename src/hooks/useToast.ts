import { store } from '@/store';
import { add, remove, type TToast } from '@/store/slices/toastSlice';

const DEFAULT_TIMEOUT = 3000;

function useToast() {
  const dispatch = store.dispatch;

  const showToast = (toast: { message: string; duration?: number; type?: TToast['type'] }) => {
    const id = Date.now();
    const duration = toast.duration || DEFAULT_TIMEOUT;

    dispatch(add({ id, duration, type: 'info', ...toast }));
  };

  const removeToast = (id: number) => {
    dispatch(remove(id));
  };

  return { showToast, removeToast };
}

export default useToast;
