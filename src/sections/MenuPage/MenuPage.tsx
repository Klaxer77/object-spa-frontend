'use client';

import { KitchenItem } from '@/entities/KitchenItem/KitchenItem';
import { Container } from '@/shared/uikit';
import { useRouter } from 'next/navigation';
import { useGetMenu } from './api/useGetMenu';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Element, Link as ScrollLink } from 'react-scroll';
import { useScreenWidth } from '@/shared/utils/useScreenWidth';
import { useAdditionalServicesStore } from '@/shared/store/menuStore';
import Link from 'next/link';

export const MenuPage: React.FC = () => {
  const { services, removeService, totalPrice } = useAdditionalServicesStore();

  const scrollRef = useRef<HTMLDivElement>(null);
  const { data: menu, isLoading } = useGetMenu();
  const [canScroll, setCanScroll] = useState(false);
  
  

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
  }, [services, updateScrollState]);

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

  const width = useScreenWidth();

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [hasScroll, setHasScroll] = useState(false);

  const checkHasScroll = useCallback(() => {
    if (sliderRef.current) {
      setHasScroll(sliderRef.current.scrollWidth > sliderRef.current.clientWidth);
    }
  }, []);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    const slider = e.currentTarget as HTMLElement;
    let isDown = true;
    let startX: number = e.pageX - slider.offsetLeft;
    let scrollLeft: number = slider.scrollLeft;

    slider.classList.add('cursor-grabbing');

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove('cursor-grabbing');
      slider.removeEventListener('mousemove', handleMouseMove);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove('cursor-grabbing');
      slider.removeEventListener('mousemove', handleMouseMove);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };

    slider.addEventListener('mousemove', handleMouseMove);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mouseleave', handleMouseLeave);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    checkHasScroll();
    window.addEventListener('resize', checkHasScroll);

    if (hasScroll) {
      slider.addEventListener('mousedown', handleMouseDown);
    }

    return () => {
      window.removeEventListener('resize', checkHasScroll);
      if (hasScroll) {
        slider.removeEventListener('mousedown', handleMouseDown);
      }
    };
  }, [menu, hasScroll, checkHasScroll, handleMouseDown]);

  return (
    <section className="pt-[40px] pb-[180px]">
      <Container className="">
        <div className="bg-[#141513] top-[60px] fixed z-[99] left-1/2 -translate-x-1/2 pt-[20px] w-full">
          <div className="max-w-[1360px] mx-auto w-full pl-[40px] max-sm:pl-[15px] pr-0">
            <div className="flex justify-between items-end mb-[20px] max-md:items-center pr-[40px] 2xl:pr-0 max-sm:pr-[15px]">
              <div className="flex gap-[20px] items-center">
                <Link href='/'>
                <svg
                  className="cursor-pointer max-md:w-[23px] max-md:h-[25px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="36"
                  viewBox="0 0 34 36"
                  fill="none">
                  <path
                    d="M32 17.9999L2 17.9999M2 17.9999L18.1485 34.1484M2 17.9999L18.1485 1.85132"
                    stroke="#F4F4F4"
                    strokeWidth="2.71732"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                </Link>
                <h1 className="text-[50px] leading-[120%] max-md:hidden">
                  Меню Кухни
                </h1>
                <h1 className="text-[30px] leading-[36px] hidden max-md:inline">
                  Кухня
                </h1>
              </div>
              <Link href='/bar' className="transition-all duration-300 w-[130px] h-[45px] max-md:w-[105px] max-md:h-[40px] flex justify-center items-center border border-white/50 bg-white hover:bg-transparent hover:text-white text-[14px] font-[500] text-black">
                Меню бара
              </Link>
            </div>

            <div
              ref={sliderRef}
              className={`flex gap-[10px] items-center mb-[20px] border border-white/15 bg-[#1B1B1B] p-[10px] overflow-x-auto [scrollbar-width:0] [&::-webkit-scrollbar]:hidden ${
                hasScroll ? 'cursor-grab' : ''
              }`}
              style={{
                WebkitOverflowScrolling: 'touch',
              }}>
              {isLoading
                ? Array.from({ length: 9 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-[45px] w-[130px] bg-white/20 animate-pulse flex-shrink-0"
                    />
                  ))
                : menu?.data.map((category) => (
                    <ScrollLink
                      offset={(width <= 768 && totalPrice > 0) ? -340 : (width >= 768 && totalPrice > 0) ? -360 : -270}
                      smooth={true}
                      duration={500}
                      to={category.name}
                      key={category.id}
                      className="cursor-pointer transition-all duration-300 px-[16px] min-w-[130px] h-[45px] text-nowrap inline-flex justify-center items-center border border-white/50 bg-transparent hover:bg-white hover:text-black text-[14px] font-[500] text-white flex-shrink-0">
                      {category.name.charAt(0).toUpperCase() + category.name.slice(1).toLowerCase()}
                    </ScrollLink>
                  ))}
            </div>

            {totalPrice > 0 && (
              <div className="flex items-center gap-[50px] overflow-hidden pb-[15px]">
                <div>
                  <p className="font-[500] leading-[24px] text-nowrap">Ваш заказ:</p>
                  <p className="font-[500] text-[30px] leading-[36px] text-nowrap">
                    {totalPrice.toLocaleString('ru-RU')} ₽
                  </p>
                </div>
                <div className="relative w-full">
                  <div
                    ref={scrollRef}
                    className={`flex gap-[20px] [scrollbar-width:0] [&::-webkit-scrollbar]:hidden overflow-x-auto select-none py-2 pr-[160px] ${
                      canScroll ? 'cursor-grab' : 'cursor-default'
                    }`}
                    onMouseDown={onMouseDown}>
                    {services.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-center items-center bg-[#262724] border border-white/50 h-[50px] px-[20px] relative overflow-visible">
                        <button
                          onClick={() => removeService(item.title)}
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
            )}
          </div>
        </div>

        {isLoading ? (
          <div className={`mt-[250px]  ${totalPrice > 0 ? 'mt-[340px] max-sm:mt-[300px]' : 'max-sm:mt-[220px]'}`}>
            <div className="mb-[30px] bg-white/20 animate-pulse max-w-[200px] h-[30px]"></div>

            <div className="grid grid-cols-4 gap-[20px] max-sm:gap-[10px] max-xl:grid-cols-3 max-md:grid-cols-2 max-[370px]:!grid-cols-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="bg-white/20 animate-pulse max-w-[390px] h-[390px]"></div>
              ))}
            </div>
          </div>
        ) : (
          <div className={`flex flex-col gap-[50px] mt-[250px]  ${totalPrice > 0 ? 'mt-[340px] max-sm:mt-[300px]' : 'max-sm:mt-[220px]'}`}>
            {menu?.data.map((category) => (
              <Element key={category.id} name={category.name}>
                <div>
                  <p className="text-[30px] leading-[36px] mb-[30px] max-sm:text-[20px] max-sm:leading-[30px] max-sm:mb-[20px]">
                    {category.name.charAt(0).toUpperCase() + category.name.slice(1).toLowerCase()}
                  </p>

                  <div className="grid grid-cols-4 gap-[20px] max-sm:gap-[10px] max-xl:grid-cols-3 max-md:grid-cols-2 max-[370px]:!grid-cols-1">
                    {category.items.map((product) => {
                      return <KitchenItem key={product.itemId} {...product} />;
                    })}
                  </div>
                </div>
              </Element>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};
