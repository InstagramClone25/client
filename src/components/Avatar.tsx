import { useEffect, useState } from 'react';

import { useTheme } from '@/hooks/useTheme';

type AvatarProps = {
  src: string;
  alt?: string;
  hasStory?: boolean;
  isLive?: boolean;
  size?: number; // px
};

// Một vài gradient viền ngẫu nhiên
const gradients = [
  'from-pink-500 via-red-500 to-yellow-500',
  'from-purple-500 via-pink-500 to-red-500',
  'from-blue-500 via-purple-500 to-pink-500',
  'from-green-400 via-blue-500 to-purple-500',
];

export default function Avatar({
  src,
  alt = 'avatar',
  hasStory = false,
  isLive = false,
  size = 64,
}: AvatarProps) {
  // random gradient mỗi lần render (có thể fix theo id user để ổn định hơn)
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  const { resolvedTheme } = useTheme();

  const [border, setBorder] = useState('border-white');

  useEffect(() => {
    if (resolvedTheme === 'black') setBorder('border-black');
    else setBorder('border-white');
  }, [resolvedTheme]);

  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative rounded-full p-[2px] ${hasStory ? 'bg-gradient-to-tr ' + randomGradient : 'bg-transparent'} `}
        style={{ width: size + 10, height: size + 10 }}
      >
        <div
          className={`flex h-full w-full items-center justify-center overflow-hidden rounded-full border-3 ${border}`}
        >
          <img
            src={src}
            alt={alt}
            className="rounded-full object-cover"
            style={{ width: size, height: size }}
          />
        </div>

        {/* LIVE badge */}
        {isLive && (
          <div
            className={`h[16px] absolute bottom-0 left-1/2 flex w-[26px] -translate-x-1/2 translate-y-1 items-center justify-center rounded-[3px] border-2 bg-gradient-to-r from-[#C90083] via-[#D22463] to-[#E10038] text-[8px] font-medium tracking-[0.5px] text-white ${border}`}
          >
            LIVE
          </div>
        )}
      </div>
    </div>
  );
}
