'use client';

import { Container } from '@/shared/uikit';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Element, Link as ScrollLink } from 'react-scroll';
import { useScreenWidth } from '@/shared/utils/useScreenWidth';
import { BarItem } from '@/entities/BarItem/BarItem';
import { useGetBar } from './api/useGetBar';
import Link from 'next/link';

export const BarPage: React.FC = () => {
  const { data: bar, isLoading } = useGetBar();
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
    const startX = e.pageX - slider.offsetLeft;
    const scrollLeft = slider.scrollLeft;

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
  }, [bar, hasScroll, checkHasScroll, handleMouseDown]);

  return (
    <section className="pt-[40px] pb-[180px]">
      <Container>
        <div className="bg-[#141513] top-[60px] fixed z-[99] left-1/2 -translate-x-1/2 pt-[20px] w-full">
          <div className="max-w-[1360px] mx-auto w-full pl-[40px] max-sm:pl-[15px] pr-0">
            <div className="flex justify-between items-end mb-[20px] max-md:items-center pr-[40px] 2xl:pr-0 max-sm:pr-[15px]">
              <div className="flex gap-[20px] items-center">
                <Link href="/">
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
                <h1 className="text-[50px] leading-[120%] max-md:hidden">Меню Бара</h1>
                <h1 className="text-[30px] leading-[36px] hidden max-md:inline">Бар</h1>
              </div>
              <Link
                href="/menu"
                className="transition-all duration-300 w-[130px] h-[45px] max-md:w-[105px] max-md:h-[40px] flex justify-center items-center border border-white/50 bg-white hover:bg-transparent hover:text-white text-[14px] font-[500] text-black">
                Меню кухни
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
                : bar?.data.map((category) => (
                    <ScrollLink
                      offset={width <= 640 ? -225 : -245}
                      smooth={true}
                      duration={500}
                      to={category.name}
                      key={category.name}
                      className="cursor-pointer transition-all duration-300 px-[16px] min-w-[130px] h-[45px] text-nowrap inline-flex justify-center items-center border border-white/50 bg-transparent hover:bg-white hover:text-black text-[14px] font-[500] text-white flex-shrink-0">
                      {category.name.charAt(0).toUpperCase() + category.name.slice(1).toLowerCase()}
                    </ScrollLink>
                  ))}
            </div>
          </div>
        </div>
      </Container>

      {isLoading ? (
        <div className={`mt-[250px]`}>
          <div className="mb-[30px] bg-white/20 animate-pulse w-full h-[170px] max-sm:h-[80px]"></div>

          <Container>
            <div className="grid gap-[20px] grid-cols-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white/20 animate-pulse w-full h-[40px]"></div>
              ))}
            </div>
          </Container>
        </div>
      ) : (
        <div className="flex flex-col gap-[50px] mt-[250px] max-sm:mt-[220px]">
          {bar?.data.map((category) => (
            <Element key={category.name} name={category.name}>
              <BarItem key={category.name} {...category} />
            </Element>
          ))}
        </div>
      )}
    </section>
  );
};
