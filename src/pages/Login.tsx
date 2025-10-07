import { useState } from 'react';
import { Link } from 'react-router-dom';

import ChevronLeft from '@/assets/icons/chvron-left.svg?react';
import FacebookLogo from '@/assets/logos/facebook.svg?react';
import InstagramLogo from '@/assets/logos/instagram.svg?react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isDisableLoginBtn = !username.trim() || !password.trim();

  const handleLoginWithFacebook = () => {
    const clientId = '781117588060903';
    const redirectUri = encodeURIComponent('http://localhost:5555/api/auth/facebook/callback');
    const fbUrl = `https://www.facebook.com/v3.2/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=email,public_profile`;
    window.location.href = fbUrl;
  };

  return (
    <div className="mx-auto flex h-dvh flex-col">
      <div className="flex h-11 w-full items-center px-4">
        <Link to="/login-quick">
          <ChevronLeft />
        </Link>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-center px-4 pb-[2.5vh]">
        {/* Logo Instagram */}
        <div className="mx-auto mb-[39px]">
          <InstagramLogo />
        </div>

        <form autoComplete="on" className="flex flex-col space-y-3">
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="input input-md autofill:!bg-base-200 bg-base-200 h-11 w-full rounded-[5px] border-[0.5px] text-sm !outline-0"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="input input-md autofill:!bg-base-200 bg-base-200 h-11 w-full rounded-[5px] border-[0.5px] text-sm !outline-0"
            autoComplete="new-password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Link to={'#'} className="text-cblue-100 mt-[7px] mb-[30px] self-end text-xs font-medium">
            Forgot password?
          </Link>

          {/* Login Button */}
          <button
            type="submit"
            className="btn bg-cblue-100 disabled:!bg-cblue-100/50 h-11 w-full rounded-[5px] text-white"
            disabled={isDisableLoginBtn}
          >
            Login
          </button>
        </form>

        {/* Login with Facebook */}
        <button
          className="text-cblue-100 mx-auto mt-[37px] mb-[42px] flex gap-2 text-sm font-semibold"
          onClick={handleLoginWithFacebook}
        >
          <FacebookLogo />
          Login with Facebook
        </button>

        {/* OR divider */}
        <div className="mb-[41.5px] flex w-full items-center gap-6">
          <div className="flex h-[1px] flex-1 bg-black/20 dark:bg-white/15"></div>
          <span className="text-xs font-semibold text-black/40 dark:text-white/60">OR</span>
          <div className="flex h-[1px] flex-1 bg-black/20 dark:bg-white/15"></div>
        </div>

        {/* Sign up link */}
        <span className="block w-full text-center text-sm text-black/40 dark:text-white/60">
          Don’t have an account?{' '}
          <Link to="#" className="text-cblue-100">
            Sign up.
          </Link>
        </span>
      </div>
      {/* Footer */}
      <div className="border-cdark/29 flex h-20 w-full items-center justify-center border-t-[1px] text-xs dark:border-white/15">
        <span className="text-black/40 dark:text-white/60">Instagram from Facebook</span>
      </div>
    </div>
  );
}

export default Login;
