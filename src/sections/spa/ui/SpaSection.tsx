'use client';

import { Container } from '@/shared/uikit';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

export const SpaSection: React.FC = () => {
  return (
    <Element name="spa">
      <section className="pt-[80px]">
        <Container className="flex items-end max-2xl:flex-col max-2xl:items-start">
          <div className="flex flex-col gap-[90px] max-w-[540px] w-full max-2xl:max-w-full max-2xl:gap-[30px]">
            <div className="flex flex-col gap-[30px] max-sm:order-2">
              <svg
                className="max-sm:hidden"
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
              <p className="max-w-[370px] font-[500] text-white/70 leading-[150%] max-sm:mb-[40px] max-sm:text-[14px] tracking-[-0.02em]">
                Добро пожаловать в наше премиальное <br /> Спа – место, где переплетаются искусство
                расслабления и высочайший уровень сервиса.
              </p>
            </div>
            <div className="p-[40px] relative max-2xl:mb-[30px] max-sm:p-[35px] max-sm:order-1 max-sm:mb-0">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full bg-white/15 h-[0.8px] absolute top-0 left-0"
              />
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-[1px] bg-white/15 h-full absolute top-0 left-0 origin-center"
              />
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-[0.8px] bg-white/15 h-full absolute top-0 right-0 origin-center hidden max-2xl:flex"
              />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full bg-white/15 h-[0.8px] absolute bottom-0 left-0"
              />
              <h3 className="text-[50px] leading-[110%] mb-[30px] max-sm:text-[30px]">
                Роскошное <br /> спа-пространство
              </h3>
              <button className="border hover:bg-white hover:text-black transition-all duration-300 border-white h-[45px] w-full max-w-[196px] text-[14px] leading-[20px]">
                Перейти к бронированию
              </button>
            </div>
          </div>
          <div className="flex items-end max-2xl:w-full">
            <div className="mt-[5px] max-w-[400px] w-full">
              <div className="relative overflow-hidden h-[540px] max-sm:h-[260px] min-w-[400px] max-lg:min-w-[180px] max-sm:min-w-[180px] max-w-[400px] w-full p-[26px] max-sm:p-[17px]">
                <div
                  className="absolute top-0 left-0 w-full h-[450px] max-sm:h-[250px] pointer-events-none 
                  bg-gradient-to-b from-[#000] to-transparent z-9"
                />
                <Image fill className="object-cover" src="/img/swim.webp" alt="picture" />
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-[10px] max-w-[260px]">
                    <p className="text-[30px] font-[500] leading-[36px] max-lg:text-[14px] max-lg:leading-[20px] tracking-[-0.02em]">
                      Площадь<br /> Спа - пространств
                    </p>
                    <p className="text-[110px] leading-[155px] font-[500] max-lg:text-[50px] max-lg:leading-[70px] max-[370px]:!text-[36px]">
                      500м2
                    </p>
                  </div>
                  <p className="font-[500] leading-[120%] max-sm:text-[10px]">
                    Всё для вашего отдыха
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-[340px] w-full">
              <div className="relative w-full h-[60px] max-sm:h-[30px]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="w-full bg-white/15 h-[1px] absolute top-0 right-0"
                />
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="w-[0.8px] bg-white/15 h-full absolute top-0 right-0"
                />
              </div>
              <div className="max-w-[340px] w-full">
                <div className="relative overflow-hidden h-[332px] max-sm:h-[160px] max-w-[340px] w-full p-[26px] pt-[30px] max-sm:p-[15px]">
                  <div
                    className="absolute top-0 left-0 w-full h-[450px] pointer-events-none opacity-40 
                  bg-gradient-to-b from-[#000] to-transparent z-9"
                  />

                  <Image fill className="object-cover" src="/img/swim2.webp" alt="picture" />

                  <div className="relative z-10">
                    <p className="leading-[110px] text-[110px] font-[500] max-lg:text-[50px] max-lg:leading-[50px] max-[370px]:!text-[36px]">
                      33м2
                    </p>
                    <p className="font-[500] text-[30px] leading-[36px] max-lg:text-[14px] max-lg:leading-[20px]">
                      размер бассейна
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Element>
  );
};
