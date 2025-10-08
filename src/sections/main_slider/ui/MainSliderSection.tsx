'use client';

import { SlideItem } from '@/entities/SlideItem/SlideItem';
import Image from 'next/image';
import { SLIDES_DATA } from '../model/slides.data';
import { Container } from '@/shared/uikit';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState, useRef, useEffect } from 'react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

const SLIDES_BG = [
  '/img/slides/slide-1.webp',
  '/img/slides/slide-2.webp',
  '/img/slides/slide-3.webp',
];

export const MainSliderSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Проверяем, можно ли скроллить
  const checkScrollable = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    setIsScrollable(slider.scrollWidth > slider.clientWidth);
  };

  useEffect(() => {
    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider || slider.scrollWidth <= slider.clientWidth) return;

    slider.style.cursor = 'grabbing';
    slider.style.userSelect = 'none';

    const startX = e.pageX;
    const startScrollLeft = slider.scrollLeft;

    const onMouseMove = (eMove: MouseEvent) => {
      eMove.preventDefault();
      const walk = (eMove.pageX - startX) * 1;
      slider.scrollLeft = startScrollLeft - walk;
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      slider.style.cursor = 'grab';
      slider.style.userSelect = 'auto';
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  return (
    <section>
      <div className="relative w-full h-[415px] overflow-hidden flex justify-center items-center">
        <Swiper
          slidesPerView={1}
          loop
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="absolute inset-0 w-full h-full">
          {SLIDES_BG.map((src, i) => (
            <SwiperSlide key={i}>
              <Image fill src={src} alt={`slide-${i}`} className="object-cover relative z-[1]" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute z-10 inset-0 pointer-events-none shadow-[inset_0_120px_40px_-40px_rgba(0,0,0,0.4)]" />

        <Container className="absolute z-10 max-[1360px]:pr-0">
          <div
            ref={sliderRef}
            className={`absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-x-auto flex items-center gap-[10px] [&::-webkit-scrollbar]:hidden w-full max-w-[1360px] pl-[40px] max-sm:pl-[15px] select-none ${
              isScrollable ? 'cursor-grab' : 'cursor-default'
            }`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            onMouseDown={handleMouseDown}>
            {SLIDES_DATA.map((item) => (
              <div key={item.id} className="flex-shrink-0 min-w-[300px] max-[1360px]:min-w-[250px]">
                <SlideItem {...item} />
              </div>
            ))}
          </div>
        </Container>

        <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 text-white text-center z-10 flex flex-col items-center gap-[20px]">
          <p className="text-[20px] leading-[120%] font-[500] text-nowrap">Объект – это 3 в 1.</p>
          <div className="flex gap-[4px]">
            {SLIDES_BG.map((_, i) => (
              <div
                key={i}
                className={`h-[4px] rounded-[2px] transition-all duration-300 cursor-pointer ${
                  i === activeIndex ? 'bg-white w-[35px]' : 'bg-white opacity-50 w-[12px]'
                }`}
                onClick={() => swiperRef.current?.slideToLoop(i)}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
