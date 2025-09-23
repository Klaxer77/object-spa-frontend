'use client';

import { Checkbox } from '@/shared/uikit';
import Image from 'next/image';
import { SpaItemProps } from './type';
import { useState, useRef, useEffect, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Modal } from '@/shared/uikit';
import { ModalForm } from '@/shared/uikit/modalForm/ModalForm';
import type { Swiper as SwiperType } from 'swiper';

export interface ServiceItem {
  title: string;
  price: number;
}

export const SpaItem: React.FC<SpaItemProps> = ({ title, images, time }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [additionalServices, setAdditionalServices] = useState<ServiceItem[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalForm, setIsOpenModalForm] = useState(false);
  const [canScroll, setCanScroll] = useState(false);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType>(null);

  const parsePrice = (price: string | number): number =>
    typeof price === 'number' ? price : Number(price.toString().replace(/\s/g, '')) || 0;

  const selectedTimePrice =
    selectedId !== null ? parsePrice(time.find((t) => t.id === selectedId)?.price ?? 0) : 0;

  const totalAdditionalPrice = additionalServices.reduce(
    (acc, item) => acc + parsePrice(item.price),
    0,
  );

  const totalPrice = selectedTimePrice + totalAdditionalPrice;

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  const isScrollable = (): boolean => {
    if (!scrollRef.current) return false;
    return scrollRef.current.scrollWidth > scrollRef.current.clientWidth;
  };

  const updateScrollState = useCallback(() => {
    setCanScroll(isScrollable());
  }, []);

  useEffect(() => {
    updateScrollState();
  }, [additionalServices, images, updateScrollState]);

  useEffect(() => {
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, [updateScrollState]);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!scrollRef.current || !canScroll) return;
    isDragging.current = true;
    scrollRef.current.classList.add('cursor-grabbing');
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftPos.current = scrollRef.current.scrollLeft;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  const onMouseUp = () => {
    if (!scrollRef.current) return;
    isDragging.current = false;
    scrollRef.current.classList.remove('cursor-grabbing');
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  const isFirstSlide = currentIndex === 0;

  const isLastSlide = swiperRef.current ? currentIndex === images.length - 1 : false;

  return (
    <div className="min-h-[550px] flex gap-[40px] bg-[#151615] pr-[20px] overflow-hidden relative">
      <svg
        className="absolute right-[20px] top-[20px]"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="24"
        viewBox="0 0 30 24"
        fill="none">
        <path
          d="M29.9499 23.8257H17.0759V20.7959C18.4361 20.7959 19.7662 20.8202 21.0964 20.787C21.9243 20.7659 22.7668 20.7384 23.5737 20.574C25.3461 20.2118 26.8019 18.7059 26.861 16.9043C26.9687 13.6064 26.976 10.3004 26.8675 7.00336C26.8067 5.16365 25.4279 3.74761 23.615 3.30774C22.9831 3.15463 22.3213 3.05337 21.6724 3.05013C17.2299 3.02825 12.7865 3.02501 8.34318 3.04446C6.40302 3.05337 4.66619 3.61152 3.66249 5.4091C3.30038 6.05717 3.11406 6.88103 3.09705 7.63118C3.03305 10.4794 3.09705 13.3301 3.06384 16.18C3.029 19.1628 5.45846 20.6493 7.53715 20.7481C9.12411 20.8235 10.7167 20.7846 12.3069 20.7951C12.5767 20.7967 12.8465 20.7951 13.1519 20.7951V23.8637C12.797 23.8637 12.4528 23.8678 12.1085 23.8637C10.2671 23.8402 8.4169 23.9221 6.5861 23.7681C2.80137 23.4514 0.104585 20.5294 0.0405877 16.7333C-0.0128782 13.5311 -0.0128782 10.3272 0.0405877 7.12487C0.106205 3.09225 3.22667 0.0317376 7.25118 0.0155358C12.426 -0.00552646 17.6009 0.0309275 22.7765 0.000144162C24.7888 -0.0120072 26.5426 0.744615 27.9214 2.04157C29.3269 3.36363 29.9604 5.22278 29.975 7.17753C30.0147 12.6246 29.9968 18.0724 29.9993 23.5194C29.9993 23.594 29.9766 23.6677 29.9507 23.8257H29.9499Z"
          fill="#505050"
        />
      </svg>
      {/* Слайдер */}
      <div className="relative w-[410px] min-h-[550px]">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.activeIndex);
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
              const navigation = swiper.params.navigation as {
                prevEl?: HTMLElement | null;
                nextEl?: HTMLElement | null;
              };
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
            }
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}>
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-[410px] min-h-[563px]">
                <Image fill src={src} alt="picture" className="object-cover" />
              </div>
            </SwiperSlide>
          ))}

          <div className="absolute right-[20px] top-[20px] z-20 flex gap-[10px] h-[40px]">
            <button
              ref={prevRef}
              className={`w-[40px] h-[40px] rounded-full border flex justify-center items-center transition-colors duration-300 ${
                isFirstSlide ? '!border-white' : '!border-white !bg-white cursor-pointer'
              }`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none">
                <path
                  d="M15.1113 9.00064L0.889105 9.00064M0.889105 9.00064L8.54471 16.6563M0.889105 9.00064L8.54471 1.34502"
                  stroke={isFirstSlide ? '#F4F4F4' : '#161314'}
                  strokeWidth="1.28821"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              ref={nextRef}
              className={`w-[40px] h-[40px] rounded-full border flex justify-center items-center transition-colors duration-300 ${
                isLastSlide
                  ? 'border-white bg-transparent cursor-not-allowed'
                  : 'border-white bg-white hover:bg-white/90 cursor-pointer'
              }`}>
              <svg
                className="rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none">
                <path
                  d="M15.1113 9.00064L0.889105 9.00064M0.889105 9.00064L8.54471 16.6563M0.889105 9.00064L8.54471 1.34502"
                  stroke={isLastSlide ? '#f4f4f4' : '#161314'}
                  strokeWidth="1.28821"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </Swiper>
      </div>

      {/* Контент */}
      <div className="py-[30px] flex-1">
        <p className="text-[30px] font-[500] leading-[36px] mb-[30px]">{title}</p>

        <p className="mb-[20px] font-[500] leading-[24px] text-white/70">Выберите время:</p>

        {/* Время */}
        <div className="grid gap-[10px] grid-cols-3 max-w-[810px]">
          {time.map((item) => {
            const isActive = selectedId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`p-[20px] flex gap-[12px] cursor-pointer transition-colors duration-300 ${
                  isActive ? 'bg-white' : 'bg-[#262724]'
                }`}>
                <Checkbox active={isActive} />
                <div>
                  <p
                    className={`${
                      isActive ? 'text-black' : 'text-white'
                    } font-[500] text-[20px] leading-[30px]`}>
                    {item.title}
                  </p>
                  <p
                    className={`${
                      isActive ? 'text-[#1E1F1CB2]' : 'text-white/50'
                    } text-[14px] leading-[20px} font-[500] mb-[30px]`}>
                    {item.count}
                  </p>
                  <div
                    className={`${
                      isActive ? 'bg-[#1D1E1C]' : 'bg-white'
                    } w-[116px] h-[50px] flex items-center justify-center`}>
                    <p
                      className={`${
                        isActive ? 'text-white' : 'text-[#1D1E1C]'
                      } font-[700] text-[20px] traking-[-0.02em] leading-[30px]`}>
                      {item.price.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="my-[20px] font-[500] leading-[24px] text-white/70">
          Стоимость продления на каждый следующий час равна 7 000₽.
        </p>

        <div className="flex gap-[10px] items-center max-w-[810px]">
          <button
            onClick={() => setIsOpenModal(true)}
            className="transition-colors duration-300 text-[14px] text-white leading-[20px] font-[500] flex justify-center items-center border border-white/50 w-[175px] h-[50px] hover:bg-white hover:text-black shrink-0">
            Выбрать доп. услуги
          </button>

          <div className="relative flex-1 max-w-[622px]">
            <div
              ref={scrollRef}
              className={`flex gap-[20px] [scrollbar-width:0] [&::-webkit-scrollbar]:hidden overflow-x-auto select-none py-2 ${
                canScroll ? 'cursor-grab' : 'cursor-default'
              }`}
              onMouseDown={onMouseDown}>
              {additionalServices.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center bg-[#262724] border border-white/50 h-[50px] px-[20px] relative overflow-visible">
                  <button
                    onClick={() =>
                      setAdditionalServices((prev) => prev.filter((s) => s.title !== item.title))
                    }
                    className="absolute -right-2 -top-2 w-[20px] h-[20px] flex justify-center items-center bg-[#141412] rounded-[4px] border border-[#333232] hover:bg-[#222] transition-colors z-10">
                    ×
                  </button>
                  <p className="font-[500] text-[14px] leading-[20px] whitespace-nowrap">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-[32px] max-w-[810px]">
          {totalPrice > 0 && (
            <div>
              <p className="font-[500] leading-[24px]">Итог:</p>
              <p className="font-[500] text-[30px] leading-[36px]">
                {totalPrice.toLocaleString('ru-RU')} ₽
              </p>
            </div>
          )}
          <button
            onClick={() => setIsOpenModalForm(true)}
            className="bg-white hover:bg-transparent border border-transparent hover:border-white/50 w-[216px] h-[60px] flex justify-center items-center text-[14px] font-[700] leading-[20px] transition-colors duration-300 uppercase text-black hover:text-white">
            Забронировать СПА
          </button>
        </div>

        {/* Модалки */}
        <Modal
          isOpen={isOpenModal}
          setIsOpen={setIsOpenModal}
          selectedServices={additionalServices}
          setSelectedServices={setAdditionalServices}
        />

        <ModalForm
          isOpen={isOpenModalForm}
          setIsOpen={setIsOpenModalForm}
          totalPrice={totalPrice}
          additionalServices={additionalServices}
          setAdditionalServices={setAdditionalServices}
        />
      </div>
    </div>
  );
};
