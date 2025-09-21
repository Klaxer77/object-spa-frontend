'use client';

import { Container } from '@/shared/uikit';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export const Programs: React.FC = () => {
  const [isActiveHe, setIsActiveHe] = useState(false);

  const blockWidth = 825; // ширина выезжающего блока

  return (
    <section className="pt-[100px] overflow-hidden relative">
      <Container>
        {/* Заголовок */}
        <div className="flex items-end relative">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[630px] w-full text-[50px] leading-[120%] mb-[20px] z-10"
            id="steam-title">
            Программы отдыха
          </motion.h2>
        </div>

        {/* Линия */}
        <motion.div
          className="absolute h-[1px] bg-white/15"
          style={{
            top: '150px',
            left: 'calc(50% - 180px + 20px)',
            right: 0,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
        />

        {/* Описание */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="max-w-[1060px] font-[500] leading-[150%] text-white/70 mb-[30px]">
          Роскошное спа-пространство, ресторан авторской кухни, стильные номера. Бутик-отель имеет
          категорию четыре звезды, расположен в черте города и предлагает круглосуточное
          обслуживание премиум уровня.
        </motion.p>

        {/* Карточка */}
        <div
          className="relative overflow-hidden cursor-pointer"
          onClick={() => setIsActiveHe(!isActiveHe)}>
          <div className="flex relative">
            <div className="absolute left-0 top-0 pl-[30px] pt-[35px] pb-[20px] z-10">
              <p className="text-[22px] leading-[120%]">3 программы</p>
              <p className="text-[40px] leading-[55px] mb-[25px]">Для него</p>
              <button className="w-[103px] h-[38px] backdrop-blur-[2px] bg-white/15 border border-white/50">
                Смотреть
              </button>
            </div>
            {/* Картинка двигается влево, но не выходит за контейнер */}
            <motion.div
              animate={{ x: isActiveHe ? -blockWidth : 0, height: isActiveHe ? 310 : 200 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="relative flex-1 overflow-hidden pl-[30px] pt-[35px] pb-[20px]">
              <Image src="/img/he.webp" alt="bg" fill className="object-cover" />
            </motion.div>

            {/* Блок справа */}
            <AnimatePresence>
              {isActiveHe && (
               <>
                  <motion.div
                    key="he-block-1"
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute right-0 top-0 p-[20px] bg-[#101010] flex flex-col justify-between h-[310px] w-[415px]">
                    <div>
                      <p className="text-[20px] leading-[30px] font-[500] mb-[5px]">Царь Таежник</p>
                      <p className="max-w-[365px] text-[14px] leading-[20px] text-white/70">
                        Парение, которое вернет силы и власть над временем. Эксклюзивный ритуал для
                        мужчин, сочетающий силу уральской природы и мастерство банщика. Глубокое
                        парение, контрастные ванночки для ног, массаж стоп и индивидуальный подход.
                        Идеально для тех, кто ценит время и качество отдыха.
                      </p>
                    </div>
                    <div className="flex gap-[10px]">
                      <button className="w-[185px] h-[48px] text-center bg-[#262724] font-[500] text-[20px] border border-white/15">
                        Забронировать
                      </button>
                      <button className="text-[20px] border border-white/50 text-center w-[125px] h-[48px]">
                        90 минут
                      </button>
                    </div>
                  </motion.div>

                  <motion.div
                    key="he-block-2"
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute right-[410px] border-r border-white/15 top-0 p-[20px] bg-[#101010] flex flex-col justify-between h-[310px] w-[415px]">
                    <div>
                      <p className="text-[20px] leading-[30px] font-[500] mb-[5px]">Царь Таежник</p>
                      <p className="max-w-[365px] text-[14px] leading-[20px] text-white/70">
                        Парение, которое вернет силы и власть над временем. Эксклюзивный ритуал для
                        мужчин, сочетающий силу уральской природы и мастерство банщика. Глубокое
                        парение, контрастные ванночки для ног, массаж стоп и индивидуальный подход.
                        Идеально для тех, кто ценит время и качество отдыха.
                      </p>
                    </div>
                    <div className="flex gap-[10px]">
                      <button className="w-[185px] h-[48px] text-center bg-[#262724] font-[500] text-[20px] border border-white/15">
                        Забронировать
                      </button>
                      <button className="text-[20px] border border-white/50 text-center w-[125px] h-[48px]">
                        90 минут
                      </button>
                    </div>
                  </motion.div>
                  <motion.div
                    key="he-block-3"
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute right-[410px] border-r border-white/15 top-0 p-[20px] bg-[#101010] flex flex-col justify-between h-[310px] w-[415px]">
                    <div>
                      <p className="text-[20px] leading-[30px] font-[500] mb-[5px]">Царь Таежник</p>
                      <p className="max-w-[365px] text-[14px] leading-[20px] text-white/70">
                        Парение, которое вернет силы и власть над временем. Эксклюзивный ритуал для
                        мужчин, сочетающий силу уральской природы и мастерство банщика. Глубокое
                        парение, контрастные ванночки для ног, массаж стоп и индивидуальный подход.
                        Идеально для тех, кто ценит время и качество отдыха.
                      </p>
                    </div>
                    <div className="flex gap-[10px]">
                      <button className="w-[185px] h-[48px] text-center bg-[#262724] font-[500] text-[20px] border border-white/15">
                        Забронировать
                      </button>
                      <button className="text-[20px] border border-white/50 text-center w-[125px] h-[48px]">
                        90 минут
                      </button>
                    </div>
                  </motion.div>
             </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};
