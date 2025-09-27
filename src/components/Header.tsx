import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import type { AppDispatch, RootState } from '@/store';
import { logout } from '@/store/slices/authSlice/authThunk';

function Header() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { access_token } = useSelector((state: RootState) => state.auth);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal">
          <li>
            <Link to="/">Trang chủ </Link>
          </li>
          <li>
            <Link to="/about"> Về chúng tôi</Link>
          </li>
          <li>
            {!access_token ? (
              <Link to="/login"> Đăng nhập</Link>
            ) : (
              <button onClick={handleLogout}> Đăng xuất</button>
            )}
          </li>
        </ul>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => changeLanguage('en')}
          className="rounded bg-gray-400 px-2 text-2xl text-white"
        >
          🇺🇲
        </button>
        <button
          onClick={() => changeLanguage('vi')}
          className="rounded bg-gray-400 px-2 text-2xl text-white"
        >
          🇻🇳
        </button>
      </div>
    </div>
  );
}

export default Header;
