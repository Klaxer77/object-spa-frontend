'use client';

import { Container } from '@/shared/uikit';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { HE_DATA, HER_DATA, PEAR_DATA, VIP_DATA } from '../model/data';
import { motion } from 'framer-motion';

interface ProgramCard {
  id: string | number;
  title: string;
  text: string;
  time: string;
}

export const Programs: React.FC = () => {
  const [isActiveHe, setIsActiveHe] = useState(false);
  const [isActiveHer, setIsActiveHer] = useState(false);
  const [isActivePair, setIsActivePair] = useState(false);
  const [isActiveVIP, setIsActiveVIP] = useState(false);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollStartX, setScrollStartX] = useState(0);

  const scrollHeRef = useRef<HTMLDivElement>(null);

  const blockWidthHe = 415;
  const visibleWidthHe = 950;
  const blockWidthHer = 415;
  const visibleWidthHer = 830;
  const blockWidthVIP = 830;
  const collapsedHeight = 200;
  const expandedHeight = 310;

  const handleMouseDown = (
    e: React.MouseEvent,
    scrollRef: React.RefObject<HTMLDivElement | null>,
  ) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setScrollStartX(scrollRef.current.scrollLeft);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (
    e: React.MouseEvent,
    scrollRef: React.RefObject<HTMLDivElement | null>,
  ) => {
    if (!isDragging || !scrollRef.current) return;
    const deltaX = e.clientX - dragStartX;
    scrollRef.current.scrollLeft = scrollStartX - deltaX;
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleButtonClick = (
    e: React.MouseEvent,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    e.stopPropagation();
    setActive((prev) => !prev);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  const renderCard = (item: ProgramCard, i: number, isActive: boolean, blockWidth: number) => (
    <div
      key={item.id}
      className="flex-shrink-0 p-[20px] bg-[#101010] flex flex-col justify-between h-full border-r border-white/15 last:border-r-0 transition-all duration-500"
      style={{
        width: `${blockWidth}px`,
        height: isActive ? expandedHeight : collapsedHeight,
      }}>
      <div>
        <p
          className={`text-[20px] leading-[30px] font-[500] mb-[5px] ${
            item.title === 'Сила стихий: Детокс и возрождение (Римская парная)'
              ? 'max-w-[360px]'
              : item.title === 'ЭГОИСТКА: Искусство быть собой'
              ? 'max-w-[220px]'
              : item.title === 'Сила Сибири (Римская Парная)'
              ? 'max-w-[220px]'
              : ''
          }`}>
          {item.title}
        </p>
        <p className="text-[14px] leading-[20px] text-white/70">{item.text}</p>
      </div>
      <div className="flex gap-[10px]">
        <button className="w-[185px] h-[48px] text-center bg-[#262724] font-[500] text-[20px] border border-white/15">
          Забронировать
        </button>
        <button className="text-[20px] border border-white/50 text-center w-[125px] h-[48px]">
          {item.time}
        </button>
      </div>
    </div>
  );

  return (
    <section className="pt-[100px] overflow-hidden relative">
      <Container>
        {/* Заголовок */}
        <div className="flex items-end relative">
          <h2 className="max-w-[630px] w-full text-[50px] leading-[120%] mb-[20px] z-10">
            Программы отдыха
          </h2>
        </div>

        {/* Первая карточка HE с drag */}
        <div
          className="relative overflow-visible transition-all duration-500 ease-in-out"
          style={{ height: isActiveHe ? expandedHeight : collapsedHeight }}>
          <div
            className="relative flex-shrink-0 cursor-pointer transition-all duration-500 ease-in-out"
            style={{
              width: isActiveHe ? `calc(100% - ${visibleWidthHe}px)` : '100%',
              height: '100%',
            }}
            onClick={() => setIsActiveHe((prev) => !prev)}>
            <Image src="/img/he.webp" alt="bg" fill className="object-cover" />
            <div className="absolute inset-0 z-20 flex flex-col justify-between p-[30px]">
              <div>
                <p className="text-[22px] leading-[120%]">3 программы</p>
                <p className="text-[40px] leading-[55px] mb-[25px]">Для него</p>
              </div>
              {!isActiveHe && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-[103px] h-[38px] backdrop-blur-[2px] bg-white/15 border border-white/50 z-40"
                  onClick={(e) => handleButtonClick(e, setIsActiveHe)}>
                  Скрыть
                </motion.button>
              )}
            </div>
          </div>

          <div
            ref={scrollHeRef}
            className="absolute top-0 right-0 flex-shrink-0 overflow-x-auto overflow-y-hidden scrollbar-hide z-20 cursor-grab transition-all duration-500"
            style={{
              width: isActiveHe ? `${visibleWidthHe}px` : '0px',
              height: isActiveHe ? expandedHeight : collapsedHeight,
            }}
            onMouseDown={(e) => handleMouseDown(e, scrollHeRef)}
            onMouseMove={(e) => handleMouseMove(e, scrollHeRef)}
            onMouseUp={handleMouseUp}>
            <div className="flex h-full" style={{ width: `${blockWidthHe * HE_DATA.length}px` }}>
              {HE_DATA.map((item, i) => renderCard(item, i, isActiveHe, blockWidthHe))}
            </div>
          </div>
        </div>

        {[
          {
            active: isActiveHer,
            setActive: setIsActiveHer,
            title: 'Для неё',
            img: '/img/her.webp',
            data: HER_DATA,
            blockWidth: blockWidthHer,
            visibleWidth: visibleWidthHer,
          },
          {
            active: isActivePair,
            setActive: setIsActivePair,
            title: 'Для пары',
            img: '/img/pear.webp',
            data: PEAR_DATA,
            blockWidth: blockWidthHer,
            visibleWidth: visibleWidthHer,
          },
          {
            active: isActiveVIP,
            setActive: setIsActiveVIP,
            title: 'Для партнеров',
            img: '/img/vip.webp',
            data: VIP_DATA,
            blockWidth: blockWidthVIP,
            visibleWidth: visibleWidthHer,
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="relative overflow-visible transition-all duration-500 ease-in-out"
            style={{ height: card.active ? expandedHeight : collapsedHeight }}>
            <div
              className="relative flex-shrink-0 cursor-pointer transition-all duration-500 ease-in-out"
              style={{
                width: card.active ? `calc(100% - ${card.visibleWidth}px)` : '100%',
                height: '100%',
              }}
              onClick={() => card.setActive((prev) => !prev)}>
              <Image src={card.img} alt="bg" fill className="object-cover" />
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-[30px]">
                <div>
                  <p className="text-[22px] leading-[120%]">{`${
                    card.title === 'Для партнеров'
                      ? 'Эксклюзив для VIP'
                      : card.data.length + ' программы'
                  }`}</p>
                  <p className="text-[40px] leading-[55px] mb-[25px]">{card.title}</p>
                </div>
                {!card.active && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-[103px] h-[38px] backdrop-blur-[2px] bg-white/15 border border-white/50 z-40"
                    onClick={(e) => handleButtonClick(e, card.setActive)}>
                    Смотреть
                  </motion.button>
                )}
              </div>
            </div>

            <div
              className="absolute top-0 right-0 flex-shrink-0 overflow-x-auto overflow-y-hidden scrollbar-hide z-20 cursor-default transition-all duration-500"
              style={{
                width: card.active ? `${card.visibleWidth}px` : '0px',
                height: card.active ? expandedHeight : collapsedHeight,
              }}>
              <div
                className="flex h-full"
                style={{ width: `${card.blockWidth * card.data.length}px` }}>
                {card.data.map((item, i) => renderCard(item, i, card.active, card.blockWidth))}
              </div>
            </div>
          </div>
        ))}
      </Container>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
