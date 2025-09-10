import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';

function MainLayout() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <nav className="flex items-center justify-between p-4">
        <div>
          <Link to="/">Trang chủ </Link>
          <Link to="/about"> Về chúng tôi</Link>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => changeLanguage('en')}
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage('vi')}
            className="rounded bg-green-500 px-4 py-2 text-white"
          >
            Tiếng Việt
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default MainLayout;
