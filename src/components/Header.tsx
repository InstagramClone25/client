import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Header() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
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
            <Link to="/login"> Đăng nhập</Link>
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
