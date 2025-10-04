import { type Dispatch, type SetStateAction, useEffect, useRef } from 'react';

import type { IMedia } from '@/types/post';

interface IMainMediaCarouselProps {
  medias: IMedia[];
  setCurrent: Dispatch<SetStateAction<number>>;
}

function MainMediaCarousel({ medias, setCurrent }: IMainMediaCarouselProps) {
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

  console.log({ medias });

  return (
    <div className="relative max-h-[100vw]">
      <div className="carousel rounded-box box-border h-[100vw] w-full">
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

      {/* Pagination dots */}
    </div>
  );
}

export default MainMediaCarousel;
