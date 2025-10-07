import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import CreateStrokeIcon from '@/assets/icons/create-stroke.svg?react';
import HeartSolidIcon from '@/assets/icons/heart-solid.svg?react';
import HeartStrokeIcon from '@/assets/icons/heart-stroke.svg?react';
import HomeSolidIcon from '@/assets/icons/home-solid.svg?react';
import HomeStrokeIcon from '@/assets/icons/home-stroke.svg?react';
import SearchSolidIcon from '@/assets/icons/search-solid.svg?react';
import SearchStrokeIcon from '@/assets/icons/search-stroke.svg?react';
import AvatarStory from '@/components/AvatarStory';
import type { AppDispatch, RootState } from '@/store';
import { getProfile } from '@/store/slices/authSlice/authThunk';

function TabBar() {
  const { pathname } = useLocation();

  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <div className="bg-base-300 flex h-[50px]">
      <div className="flex flex-1 items-center justify-center">
        {pathname === '/' ? <HomeSolidIcon /> : <HomeStrokeIcon />}
      </div>

      <div className="flex flex-1 items-center justify-center">
        {pathname === '/search' ? <SearchSolidIcon /> : <SearchStrokeIcon />}
      </div>

      <div className="flex flex-1 items-center justify-center">
        <CreateStrokeIcon />
      </div>

      <div className="flex flex-1 items-center justify-center">
        {pathname === '/notification' ? <HeartSolidIcon /> : <HeartStrokeIcon />}
      </div>

      <div className="flex flex-1 items-center justify-center">
        <AvatarStory src={user?.avatar || 'default'} size={23} />
      </div>
    </div>
  );
}

export default TabBar;
