import { useGoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import useToast from '@/hooks/useToast';
import type { AppDispatch, RootState } from '@/store';
import { login, loginWithGoogle } from '@/store/slices/authSlice/authThunk';

function Login() {
  const { access_token, message } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { showToast } = useToast();

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      showToast({ message: 'Vui lòng nhập đầy đủ thông tin', type: 'error' });
      return;
    }

    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        showToast({ message: 'Đăng nhập thành công!', type: 'success' });
      })
      .catch((err) => {
        showToast({
          message: err?.message || 'Đăng nhập thất bại',
          type: 'error',
          duration: 30000,
        });
      });
  };

  const handleLoginWithGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => {
      dispatch(loginWithGoogle(codeResponse.access_token))
        .unwrap()
        .then(() => {
          showToast({ message: 'Đăng nhập Google thành công!', type: 'success' });
        })
        .catch(() => {
          showToast({ message: 'Đăng nhập Google thất bại!', type: 'error' });
        });
    },
    onError: (error) => {
      console.error('Login Failed:', error);
      showToast({ message: 'Đăng nhập Google thất bại!', type: 'error' });
    },
  });

  useEffect(() => {
    if (access_token) {
      navigate('/', { replace: true });
    }
  }, [access_token]);

  useEffect(() => {
    const isRequired = searchParams.get('required');
    if (isRequired) {
      showToast({
        message: 'Vui lòng đăng nhập để tiếp tục truy cập!',
        duration: 3000,
        type: 'warning',
      });
    }

    searchParams.delete('required');
    setSearchParams(searchParams);
  }, [searchParams]);

  useEffect(() => {
    if (message) showToast({ message, duration: 5000, type: 'success' });
  }, []);
  return (
    <div className="flex w-full items-center justify-center pt-8">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="input"
          placeholder="Email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-neutral mt-4" onClick={handleLogin}>
          Login
        </button>

        <Link to="/register" className="mt-2 text-sm text-blue-500">
          Create new account
        </Link>

        <button
          className="btn border-[#e5e5e5] bg-white text-black"
          onClick={() => handleLoginWithGoogle()}
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>

          <span>Login with Google</span>
        </button>
      </fieldset>
    </div>
  );
}

export default Login;
