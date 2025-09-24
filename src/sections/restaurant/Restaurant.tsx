'use client';

import { Container } from '@/shared/uikit';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SLIDES_BG = [
  '/img/slides/restaurant.webp',
  '/img/slides/restaurant.webp',
  '/img/slides/restaurant.webp',
  '/img/slides/restaurant.webp',
];

export const Restaurant: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#101010] pt-[110px] mt-[100px]">
      <Container>
        <div className="flex justify-between relative">
          <div className="absolute bg-[#1C1D1B] flex h-[190px] max-w-[420px] w-full top-[220px] z-50">
            <div className="relative w-[190px] h-full overflow-hidden shrink-0">
              <Image className="object-cover" fill alt="picture" src="/img/restItem.webp" />
            </div>
            <div className="pl-[20px] pr-[14px] py-[14px] flex flex-col justify-between w-full">
              <div>
                <p className="text-white/50 leading-[23px] mb-[8px]">Спецпредложение</p>
                <p className="font-[500] text-[25px] leading-[120%]">VIP зона</p>
              </div>
              <button className="border hover:bg-white hover:text-black transition-all duration-300 border-white h-[45px] w-full text-[14px] leading-[20px]">
                Забронировать
              </button>
            </div>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/15 h-[1px] w-full top-[45px] absolute left-[235px] max-w-[570px] z-0"
          />
          <div>
            <h2 className="text-[50px] leading-[110%] mb-[20px]">Ресторан</h2>
            <p className="max-w-[542px] font-[500] leading-[150%] text-white/50">
              Роскошное спа-пространство, ресторан авторской кухни, стильные номера. Бутик-отель
              имеет категорию четыре звезды, расположен в черте города и предлагает круглосуточное
              обслуживание премиум уровня.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.7 }}
            viewport={{ once: true }}
            className="border border-b-0 border-white/15 bg-[#1B1B1B] pt-[40px] px-[50px] pb-[45px] max-w-[480px] w-full mt-[-35px] relative z-10">
            <p className="text-[30px] leading-[120%]">
              Наслаждайтесь европейской кухней в эксклюзивном пермском ресторане
            </p>
            <button className="mt-[40px] border border-transparent hover:bg-transparent hover:text-white hover:border-white/15 transition-all duration-300 bg-white text-black w-[142px] h-[40px] text-[14px] font-[500] leading-[20px]">
              Смотреть меню
            </button>
          </motion.div>
        </div>
      </Container>

      <div className="relative w-full h-[390px] overflow-hidden flex justify-center items-center">
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
        <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 text-white text-center z-10 flex flex-col items-center gap-[20px]">
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
