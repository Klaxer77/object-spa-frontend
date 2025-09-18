'use client';

import { SlideItem } from '@/entities/SlideItem/SlideItem';
import Image from 'next/image';
import { SLIDES_DATA } from '../model/slides.data';
import { Container } from '@/shared/uikit';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState, useRef } from 'react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

const SLIDES_BG = [
  '/img/slides/slide-1.webp',
  '/img/slides/slide-1.webp',
  '/img/slides/slide-1.webp',
  '/img/slides/slide-1.webp',
];

export const MainSliderSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

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
          className="absolute inset-0 w-full h-full"
        >
          {SLIDES_BG.map((src, i) => (
            <SwiperSlide key={i}>
              <Image fill src={src} alt={`slide-${i}`} className="object-cover relative z-[1]" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute z-10 inset-0 pointer-events-none shadow-[inset_0_120px_40px_-40px_rgba(0,0,0,0.4)]" />

        <Container className="grid grid-cols-3 gap-[10px] absolute z-10">
          {SLIDES_DATA.map((item) => (
            <div
              key={item.id}
            >
              <SlideItem {...item} />
            </div>
          ))}
        </Container>

        <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 text-white text-center z-10 flex flex-col items-center gap-[20px]">
          <p className="text-[20px] leading-[120%] font-[500]">Объект – это 3 в 1.</p>
          <div className="flex gap-[4px]">
            {SLIDES_BG.map((_, i) => (
              <div
                key={i}
                className={`h-[4px] rounded-[2px] transition-all duration-300 cursor-pointer ${
                  i === activeIndex ? 'bg-white w-[35px]' : 'bg-white opacity-50 w-[12px]'
                }`}
                onClick={() => swiperRef.current?.slideToLoop(i)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
