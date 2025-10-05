import CameraStrokeIcon from '@/assets/icons/camera-stroke.svg?react';
import IgtvStrokeIcon from '@/assets/icons/igtv-stroke.svg?react';
import MessageStrokeIcon from '@/assets/icons/message-stroke.svg?react';
import InstagramDark from '@/assets/logos/instagram-dark.svg?react';
import InstagramWhite from '@/assets/logos/instagram-white.svg?react';
import Rectangle from '@/components/Rectangle';
import { useTheme } from '@/hooks/useTheme';

interface IMainHeaderProps {
  showHeader: boolean;
}

function MainHeader({ showHeader }: IMainHeaderProps) {
  const { resolvedTheme } = useTheme();

  return (
    <Rectangle
      className={`fixed top-0 right-0 left-0 z-50 flex h-11 items-center border-b-[0.5px] px-3 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      } ${resolvedTheme === 'black' ? 'border-[#FFFFFF26]' : 'border-[#3C3C434A]'}`}
    >
      <div className="flex-1">
        <CameraStrokeIcon />
      </div>
      {resolvedTheme === 'black' ? (
        <InstagramWhite className="w-[105px]" />
      ) : (
        <InstagramDark className="w-[105px]" />
      )}
      <div className="flex flex-1 items-center justify-end gap-[18px]">
        <IgtvStrokeIcon />
        <MessageStrokeIcon />
      </div>
    </Rectangle>
  );
}

export default MainHeader;
