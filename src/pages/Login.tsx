import { ChevronLeft } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import FacebookLogo from '@/assets/logos/facebook.svg?react';
import InstagramLogoDark from '@/assets/logos/instagram-dark.svg?react';
import InstagramLogoWhite from '@/assets/logos/instagram-white.svg?react';

function Login() {
  const theme = useRef(localStorage.getItem('theme') || 'black').current;

  const handleLoginWithFacebook = () => {
    alert('login...');
    const clientId = '781117588060903';
    const redirectUri = encodeURIComponent('http://localhost:5555/api/auth/facebook/callback');
    const fbUrl = `https://www.facebook.com/v21.0/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=email,public_profile`;
    window.location.href = fbUrl;
  };
  return (
    <div className="relative container mx-auto h-screen">
      <div className="px-4">
        <div className="relative h-[88px] w-full">
          <ChevronLeft size={34} className="absolute bottom-0 left-0" />
        </div>
        <div className="mx-auto mt-20 mb-[39px] w-fit">
          {theme === 'black' ? <InstagramLogoWhite /> : <InstagramLogoDark />}
        </div>
        <div>
          <input type="text" placeholder="Username" className="input input-md mb-3 h-11 w-full" />
          <input
            type="password"
            placeholder="Password"
            className="input input-md mb-[19px] h-11 w-full"
          />
          <Link
            to={'#'}
            className="mb-[30px] block w-full text-end text-[12px] text-[var(--main-color)] underline"
          >
            Forgot password?
          </Link>
          <button className="btn h-11 w-full rounded-sm bg-[var(--main-color)] disabled:!bg-[var(--main-color)]">
            Login
          </button>
          <button
            className="mt-[37px] mb-[42px] flex w-full justify-center gap-2 text-sm text-[var(--main-color)]"
            onClick={handleLoginWithFacebook}
          >
            <FacebookLogo />
            login with facebook
          </button>
          <span className="mb-[42px] block w-full text-center text-[12px] text-gray-600">OR</span>
          <span className="block w-full text-center text-sm text-gray-600">
            Don’t have an account?{' '}
            <Link to="#" className="text-[var(--main-color)] underline">
              Sign up.
            </Link>
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 flex h-20 w-full items-center justify-center">
        <span className="text-gray-600">Instagram from Facebook</span>
      </div>
    </div>
  );
}

export default Login;
