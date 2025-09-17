import { Outlet } from 'react-router-dom';

import Header from '@/components/header';

function MainLayout() {
  return (
    <div>
      <Header />
      <div className="bg-gray-500 py-[60px]">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
