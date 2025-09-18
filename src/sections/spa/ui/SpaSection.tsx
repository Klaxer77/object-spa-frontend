'use client';

import { Container } from '@/shared/uikit';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const SpaSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="pt-[80px]">
      <Container className="flex items-end">
        <div className="flex flex-col gap-[90px] max-w-[540px] w-full">
          <div className="flex flex-col gap-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={51}
              height={40}
              viewBox="0 0 51 40"
              fill="none">
              <path
                d="M50.1951 39.931H28.6189V34.8533C30.8984 34.8533 33.1277 34.894 35.357 34.8383C36.7446 34.803 38.1566 34.7569 39.5088 34.4813C42.4794 33.8744 44.9192 31.3505 45.0183 28.331C45.1989 22.8039 45.2111 17.2632 45.0291 11.7374C44.9273 8.6541 42.6165 6.28088 39.5781 5.54365C38.5191 5.28705 37.4098 5.11734 36.3223 5.11191C28.8768 5.07525 21.4299 5.06982 13.9831 5.10241C10.7314 5.11734 7.82054 6.05278 6.13837 9.06548C5.53149 10.1516 5.21922 11.5324 5.19071 12.7896C5.08346 17.5632 5.19071 22.3409 5.13505 27.1172C5.07667 32.1162 9.14835 34.6075 12.6322 34.7732C15.2919 34.8994 17.9611 34.8343 20.6262 34.8519C21.0783 34.8546 21.5304 34.8519 22.0422 34.8519V39.9948C21.4476 39.9948 20.8706 40.0016 20.2936 39.9948C17.2075 39.9554 14.1066 40.0926 11.0382 39.8346C4.69516 39.3038 0.175439 34.4066 0.0681818 28.0445C-0.0214252 22.6776 -0.0214252 17.308 0.0681818 11.941C0.178154 5.18251 5.40794 0.0531912 12.1529 0.0260376C20.8258 -0.00926216 29.4986 0.0518335 38.1729 0.00024161C41.5453 -0.0201236 44.4847 1.24795 46.7955 3.4216C49.1511 5.63733 50.2128 8.75321 50.2372 12.0293C50.3037 21.1583 50.2739 30.2887 50.2779 39.4178C50.2779 39.5427 50.2399 39.6663 50.1965 39.931H50.1951Z"
                fill="#F4F4F4"
              />
            </svg>
            <p className="max-w-[380px] font-[500] text-white/70 leading-[150%]">
              Роскошное спа-пространство, ресторан авторской кухни, стильные номера. Бутик-отель
              имеет категорию четыре звезды, расположенв черте города и предлагает круглосуточное
              обслуживание премиум уровня.
            </p>
          </div>
          <div className="p-[40px] relative">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full bg-white/50 h-[0.8px] absolute top-0 left-0"
            />
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-[1px] bg-white/50 h-full absolute top-0 left-0 origin-center"
            />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full bg-white/50 h-[0.8px] absolute bottom-0 left-0"
            />
            <p className="text-[50px] leading-[110%] mb-[30px]">
              Роскошное <br /> спа-пространство
            </p>
            <button
              onMouseMove={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`rounded-[58px] max-w-[260px] w-full h-[45px] border ${
                isHovered ? 'bg-transparent border-white/15' : 'bg-white border-transparent'
              } pl-[3px] py-[2px] flex items-center justify-between pr-[15px] transition-colors duration-300`}>
              <div className="bg-black rounded-[29px] h-full flex justify-center items-center w-[210px] transition-colors duration-300">
                <p className="text-[14px] font-[500] text-white leading-[20px]">
                  Перейти к бронированию
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none">
                <path
                  className="transition-all duration-300"
                  d="M1.84318 12.1564L13.1569 0.842702M13.1569 0.842702L0.976883 0.842697M13.1569 0.842702L13.1569 13.0227"
                  stroke={`${isHovered ? '#fff' : '#1D1E1C'}`}
                  stroke-width="1.44923"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-[5px]">
          <div className="relative overflow-hidden h-[540px] w-[400px] p-[26px]">
            <div
              className="absolute top-0 left-0 w-full h-[450px] pointer-events-none 
                  bg-gradient-to-b from-[#000] to-transparent z-9"
            />
            <Image fill className="object-cover" src="/img/swim.webp" alt="picture" />
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex flex-col gap-[10px] max-w-[220px]">
                <p className="text-[30px] font-[500] leading-[36px]">
                  Бассейн почти не содержит хлорки
                </p>
                <p className="text-[110px] leading-[155px] font-[500]">13%</p>
              </div>
              <p className="font-[500] leading-[120%]">Всё для вашего отдыха</p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-full h-[60px]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full bg-white/15 h-[1px] absolute top-0 right-0"
            />
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-[0.8px] bg-white/15 h-full absolute top-0 right-0"
            />
          </div>
          <div>
            <div className="relative overflow-hidden h-[332px] w-[340px] p-[26px] pt-[30px]">
              <div
                className="absolute top-0 left-0 w-full h-[450px] pointer-events-none opacity-40 
                  bg-gradient-to-b from-[#000] to-transparent z-9"
              />

              <Image fill className="object-cover" src="/img/swim2.webp" alt="picture" />

              <div className="relative z-10">
                <p className="leading-[110px] text-[110px] font-[500]">33м2</p>
                <p className="font-[500] text-[30px] leading-[36px]">размер бассейна</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
