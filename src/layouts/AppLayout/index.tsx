import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';

import TabBar from '@/components/TabBar';

function AppLayout() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current!;
    const appHeader = el.querySelector('.app-header');

    if (!appHeader) return;

    let lastScrollY = el.scrollTop;

    const handleScroll = () => {
      if (el.scrollTop <= 80 || el.scrollTop <= lastScrollY) {
        appHeader.classList.remove('app-header--hidden');
      } else {
        appHeader.classList.add('app-header--hidden');
      }

      lastScrollY = el.scrollTop;
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex h-[100dvh] max-h-screen flex-col">
      <div ref={scrollRef} className="hide-scrollbar flex-1 overflow-y-auto">
        <Outlet />
      </div>
      <TabBar />
    </div>
  );
}

export default AppLayout;
