import CameraStrokeIcon from '@/assets/icons/camera-stroke.svg?react';
import IgtvStrokeIcon from '@/assets/icons/igtv-stroke.svg?react';
import MessageStrokeIcon from '@/assets/icons/message-stroke.svg?react';
import InstagramLogo from '@/assets/logos/instagram.svg?react';

function MainHeader() {
  return (
    <div className="app-header">
      <div className="flex-1">
        <CameraStrokeIcon />
      </div>

      <InstagramLogo className="mt-1 w-[105px]" />

      <div className="flex flex-1 items-center justify-end gap-4.5">
        <IgtvStrokeIcon />
        <MessageStrokeIcon />
      </div>
    </div>
  );
}

export default MainHeader;
