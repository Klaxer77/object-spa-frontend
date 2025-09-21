'use client';

import { Container } from '@/shared/uikit';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SLIDES_BG_RIM = ['/img/room1.webp', '/img/room1.webp', '/img/room1.webp', '/img/room1.webp'];
const SLIDES_BG_RUS = ['/img/room2.webp', '/img/room2.webp', '/img/room2.webp', '/img/room2.webp'];

export const Rooms: React.FC = () => {
  const [activeIndexRim, setActiveIndexRim] = useState(0);
  const [activeIndexRus, setActiveIndexRus] = useState(0);
  const swiperRefRim = useRef<SwiperType | null>(null);
  const swiperRefRus = useRef<SwiperType | null>(null);

  return (
    <section className="pt-[80px] overflow-hidden relative mb-[140px]">
      <Container>
        <div className="flex items-end relative">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[630px] w-full text-[50px] leading-[120%] mb-[55px] z-10"
            id="steam-title">
            Номера премиум-класса
          </motion.h2>
        </div>

        {/* Линия */}
        <motion.div
          className="absolute h-[1px] bg-white/15"
          style={{
            top: '126px',
            left: 'calc(50% - 50px + 20px)',
            right: 0,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
        />

        <div className="flex items-center">
          <div className="max-w-[590px]">
            <div>
              <div className="relative w-full h-[480px] overflow-hidden flex flex-col justify-between">
                <div className="absolute bottom-[26px] z-10 p-[26px]">
                  <p className='text-[30px] leading-[120%] mb-[10px]'>2 номера</p>
                  <p className="text-white text-[50px] leading-[50px]">Люкс</p>
                </div>
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  slidesPerView={1}
                  loop
                  onSlideChange={(swiper) => setActiveIndexRim(swiper.realIndex)}
                  onSwiper={(swiper) => (swiperRefRim.current = swiper)}
                  className="w-full h-full">
                  {SLIDES_BG_RIM.map((src, i) => (
                    <SwiperSlide key={i}>
                      <div className="relative h-[480px] w-[590px]">
                        <Image fill src={src} alt={`slide-${i}`} className="object-cover" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="absolute z-9 inset-0 pointer-events-none shadow-[inset_0px_-60px_60px_0px_rgba(0,0,0.9)]" />

                <div className="w-full flex justify-center items-center absolute bottom-[12px] gap-[4px]">
                  {SLIDES_BG_RIM.map((_, i) => (
                    <div
                      key={i}
                      className={`h-[4px] rounded-[2px] transition-all duration-300 cursor-pointer relative z-10 ${
                        i === activeIndexRim ? 'bg-white w-[35px]' : 'bg-white opacity-50 w-[12px]'
                      }`}
                      onClick={() => swiperRefRim.current?.slideToLoop(i)}></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-black p-[26px]">
              <p className="mb-[58px] font-[500] leading-[24px] text-white/70">
                Единственная в Пермском крае парная выполненная из декоративной штукатурки,
                купольный потолок и округлые стены позволят пару максимально равномерно
                распределяться по помещению и эффективно мягко прогревать тело.
              </p>
              <div className="flex justify-between items-end">
                <button className="border border-transparent hover:bg-transparent hover:text-white hover:border-white/15 transition-all duration-300 bg-white text-black w-[190px] h-[40px] text-[14px] font-[700] leading-[20px]">
                  Забронировать номер
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={139}
                  height={16}
                  viewBox="0 0 139 16"
                  fill="none">
                  <mask
                    id="mask0_258_5325"
                    style={{
                      maskType: 'alpha',
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={139}
                    height={16}>
                    <rect width={138.119} height={16} fill="url(#pattern0_258_5325)" />
                  </mask>
                  <g mask="url(#mask0_258_5325)">
                    <rect width={138.4} height={16} fill="#F4F4F4" fillOpacity={0.2} />
                  </g>
                  <defs>
                    <pattern
                      id="pattern0_258_5325"
                      patternContentUnits="objectBoundingBox"
                      width={1}
                      height={1}>
                      <use xlinkHref="#image0_258_5325" transform="scale(0.000383583 0.00331126)" />
                    </pattern>
                    <image
                      id="image0_258_5325"
                      width={2607}
                      height={302}
                      preserveAspectRatio="none"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full border-y border-white/15 bg-transparent h-[120px]" />

          <div className="max-w-[590px]">
            <div>
              <div className="relative w-full h-[480px] overflow-hidden flex flex-col justify-between">
                <div className="absolute bottom-[26px] z-10 p-[26px]">
                  <p className='text-[30px] leading-[120%] mb-[10px]'>2 номера</p>
                  <p className="text-white text-[50px] leading-[50px]">Бизнес</p>
                </div>
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  slidesPerView={1}
                  loop
                  onSlideChange={(swiper) => setActiveIndexRus(swiper.realIndex)}
                  onSwiper={(swiper) => (swiperRefRus.current = swiper)}
                  className="w-full h-full">
                  {SLIDES_BG_RUS.map((src, i) => (
                    <SwiperSlide key={i}>
                      <div className="relative h-[480px] w-[590px]">
                        <Image fill src={src} alt={`slide-${i}`} className="object-cover" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="absolute z-9 inset-0 pointer-events-none shadow-[inset_0px_-60px_60px_0px_rgba(0,0,0.9)]" />

                <div className="w-full flex justify-center items-center absolute bottom-[12px] gap-[4px]">
                  {SLIDES_BG_RUS.map((_, i) => (
                    <div
                      key={i}
                      className={`h-[4px] rounded-[2px] transition-all duration-300 cursor-pointer relative z-10 ${
                        i === activeIndexRus ? 'bg-white w-[35px]' : 'bg-white opacity-50 w-[12px]'
                      }`}
                      onClick={() => swiperRefRus.current?.slideToLoop(i)}></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-black p-[26px]">
              <p className="mb-[58px] font-[500] leading-[24px] text-white/70">
                Единственная в Пермском крае парная выполненная из декоративной штукатурки,
                купольный потолок и округлые стены позволят пару максимально равномерно
                распределяться по помещению и эффективно мягко прогревать тело.
              </p>
              <div className="flex justify-between items-end">
                <button className="border border-transparent hover:bg-transparent hover:text-white hover:border-white/15 transition-all duration-300 bg-white text-black w-[190px] h-[40px] text-[14px] font-[700] leading-[20px]">
                  Забронировать номер
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={139}
                  height={16}
                  viewBox="0 0 139 16"
                  fill="none">
                  <mask
                    id="mask0_258_5325"
                    style={{
                      maskType: 'alpha',
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={139}
                    height={16}>
                    <rect width={138.119} height={16} fill="url(#pattern0_258_5325)" />
                  </mask>
                  <g mask="url(#mask0_258_5325)">
                    <rect width={138.4} height={16} fill="#F4F4F4" fillOpacity={0.2} />
                  </g>
                  <defs>
                    <pattern
                      id="pattern0_258_5325"
                      patternContentUnits="objectBoundingBox"
                      width={1}
                      height={1}>
                      <use xlinkHref="#image0_258_5325" transform="scale(0.000383583 0.00331126)" />
                    </pattern>
                    <image
                      id="image0_258_5325"
                      width={2607}
                      height={302}
                      preserveAspectRatio="none"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
