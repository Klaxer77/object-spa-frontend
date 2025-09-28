'use client';

import { Container } from '@/shared/uikit';
import Image from 'next/image';
import { useState } from 'react';
import { Element } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';
import { HE_DATA, HER_DATA, PEAR_DATA, ProgramCard, VIP_DATA } from '../model/data';

type CardType = 'he' | 'her' | 'pair' | 'vip';

export const ProgramsMobile: React.FC = () => {
  const [activeCard, setActiveCard] = useState<CardType | null>(null);

  const handleCardClick = (type: CardType) => {
    setActiveCard((prev) => (prev === type ? null : type));
  };

  const renderDropdown = (type: CardType) => {
    let data: ProgramCard[] = [];
    switch (type) {
      case 'he':
        data = HE_DATA;
        break;
      case 'her':
        data = HER_DATA;
        break;
      case 'pair':
        data = PEAR_DATA;
        break;
      case 'vip':
        data = VIP_DATA;
        break;
      default:
        data = [];
    }

    return (
      <AnimatePresence initial={false}>
        {activeCard === type && (
          <motion.div
            key="dropdown-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden">
            {data.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden flex-shrink-0 p-[20px] bg-[#101010] flex flex-col justify-between border-b border-white/15 min-h-[250px]">
                <div>
                  <p className="text-[20px] leading-[30px] font-[500] mb-[5px]">{item.title}</p>
                  <p className="text-[14px] leading-[20px] text-white/70 mb-[20px]">{item.text}</p>
                </div>
                <div className="flex gap-[10px]">
                  <button className="w-[185px] h-[48px] text-center bg-[#262724] font-[500] text-[20px] max-sm:text-[16px] border border-white/15">
                    Забронировать
                  </button>
                  <button className="text-[20px] max-sm:text-[16px] border border-white/50 text-center w-[125px] h-[48px]">
                    {item.time}
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <Element className="max-2xl:block hidden" name="programs">
      <section className="pt-[100px] relative overflow-hidden">
        <Container>
          <div className="mb-[30px]">
            <h2 className="max-w-[630px] w-full text-[50px] leading-[120%] mb-[20px] z-10 max-sm:text-[30px] max-sm:leading-[36px]">
              Программы отдыха
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/70 font-[500] leading-[150%] max-w-[1060px] max-sm:text-[14px]">
              Роскошное спа-пространство, ресторан авторской кухни, стильные номера. Бутик-отель
              имеет категорию четыре звезды, расположен в черте города и предлагает круглосуточное
              обслуживание премиум уровня.
            </motion.p>
          </div>

          <motion.div
            className="absolute left-[530px] h-[1px] bg-white/15 max-sm:hidden"
            style={{
              top: '147px',
              right: 0,
            }}
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
          />

          {/* Карточки */}
          {[
            { type: 'he', title: 'Для него', count: 3, image: '/img/he.webp' },
            { type: 'her', title: 'Для нее', count: 2, image: '/img/her.webp' },
            { type: 'pair', title: 'Для пары', count: 2, image: '/img/pear.webp' },
            { type: 'vip', title: 'Для партнеров', count: 1, image: '/img/vip.webp' },
          ].map(({ type, title, count, image }) => (
            <div
              key={type}
              className="relative overflow-visible transition-all duration-500 ease-in-out min-h-[200px]">
              <div
                onClick={() => handleCardClick(type as CardType)}
                className="relative flex-shrink-0 cursor-pointer transition-all duration-500 ease-in-out min-h-[200px]">
                <Image src={image} alt={title} fill className="object-cover" />
                <div className="relative z-10 flex flex-col justify-between p-[30px] min-h-[200px]">
                  <div>
                    <p className="text-[22px] leading-[120%] max-sm:text-[20px] max-sm:mb-[12px]">
                      {type === 'vip' ? 'Эксклюзив для VIP' : `${count} программы`}
                    </p>
                    <p className="text-[40px] leading-[55px] mb-[25px] max-sm:text-[30px] max-sm:leading-[36px]">
                      {title}
                    </p>
                  </div>
                  {activeCard !== type && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="w-[103px] h-[38px] backdrop-blur-[2px] bg-white/15 border border-white/50 z-40 absolute bottom-[30px] left-[30px]">
                      Смотреть
                    </motion.button>
                  )}
                </div>
              </div>
              {renderDropdown(type as CardType)}
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
    </Element>
  );
};
