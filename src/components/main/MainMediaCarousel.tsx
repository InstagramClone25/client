import { type Dispatch, type SetStateAction, useEffect, useRef } from 'react';

import type { IMedia } from '@/types/post';

interface IMainMediaCarouselProps {
  medias: IMedia[];
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
}

function MainMediaCarousel({ medias, current, setCurrent }: IMainMediaCarouselProps) {
  const itemsRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setCurrent(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div className="relative max-h-[100vw]">
      <div className="carousel h-[100vw] w-full">
        {medias.map((media, idx) => (
          <div
            key={idx}
            data-index={idx}
            ref={(el) => {
              if (el) itemsRef.current[idx] = el;
            }}
            className="carousel-item w-full"
          >
            <img src={media.url} className="w-full object-cover" alt={`Image ${idx}`} />
          </div>
        ))}
      </div>

      <div className="absolute top-4 right-4 flex h-6.5 w-8.5 items-center justify-center rounded-[13px] bg-[#121212]/90 text-xs text-white">
        {current + 1}/{medias.length}
      </div>
    </div>
  );
}

export default MainMediaCarousel;
