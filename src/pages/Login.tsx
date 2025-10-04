import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import FacebookLogo from '@/assets/logos/facebook.svg?react';
import InstagramLogoDark from '@/assets/logos/instagram-dark.svg?react';
import InstagramLogoWhite from '@/assets/logos/instagram-white.svg?react';
import { useTheme } from '@/hooks/useTheme';

function Login() {
  const { resolvedTheme } = useTheme();

  const handleLoginWithFacebook = () => {
    alert('login...');
    const clientId = '781117588060903';
    const redirectUri = encodeURIComponent('http://localhost:5555/api/auth/facebook/callback');
    const fbUrl = `https://www.facebook.com/v3.2/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=email,public_profile`;
    window.location.href = fbUrl;
  };

  return (
    <div className="relative container mx-auto h-screen">
      <div className="px-4">
        <div className="relative h-[44px] w-full">
          <ChevronLeft size={34} className="absolute bottom-0 left-0" />
        </div>

        {/* Logo Instagram */}
        <div className="mx-auto mt-20 mb-[39px] w-fit">
          {resolvedTheme === 'black' ? <InstagramLogoWhite /> : <InstagramLogoDark />}
        </div>

        <form autoComplete="on" className="space-y-3">
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="input input-md h-11 w-full rounded-[5px] border-[0.5px] text-sm"
            autoComplete="username"
            name="username"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="input input-md h-11 w-full rounded-[5px] border-[0.5px] text-sm"
            autoComplete="current-password"
            name="password"
          />

          <Link
            to={'#'}
            className="mt-[7px] mb-[30px] block w-full text-end text-[12px] text-[var(--main-color)]"
          >
            Forgot password?
          </Link>

          {/* Login Button */}
          <button
            type="submit"
            className="btn h-11 w-full rounded-sm bg-[var(--main-color)] text-white disabled:!bg-[var(--main-color)]"
          >
            Login
          </button>
        </form>

        {/* Login with Facebook */}
        <button
          className="mx-auto mt-[37px] mb-[42px] flex justify-center gap-2 text-sm text-[var(--main-color)]"
          onClick={handleLoginWithFacebook}
        >
          <FacebookLogo />
          Login with Facebook
        </button>

        {/* OR divider */}
        <div className="mb-[41.5px] flex w-full items-center gap-6">
          <div className="flex h-[1px] flex-1 bg-gray-800"></div>
          <span className="text-[12px]">OR</span>
          <div className="flex h-[1px] flex-1 bg-gray-800"></div>
        </div>

        {/* Sign up link */}
        <span className="block w-full text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link to="#" className="text-[var(--main-color)]">
            Sign up.
          </Link>
        </span>
      </div>
      {/* Footer */}
      <div className="absolute bottom-0 flex h-20 w-full items-center justify-center border-t-[1px] border-gray-800 text-[12px]">
        <span className="text-gray-600">Instagram from Facebook</span>
      </div>
    </div>
  );
}

export default Login;
