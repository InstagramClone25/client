import { Outlet } from 'react-router-dom';

import TabBar from '@/components/TabBar';

function MainLayout() {
  return (
    <div className="flex h-[100dvh] max-h-screen flex-col">
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
      <TabBar />
    </div>
  );
}

export default MainLayout;
