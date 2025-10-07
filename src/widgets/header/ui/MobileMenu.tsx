'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from 'react';

type MobileMenuProps = {
  isOpenMenu: boolean;
  setIsOpenMenu: (state: boolean) => void;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpenMenu, setIsOpenMenu }) => {
  const [isOpenDropDown, setIsDropDown] = useState(false);

  useEffect(() => {
    if (isOpenMenu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpenMenu]);

  return (
    <div className="max-xl:flex hidden pr-[14px] max-w-[300px]">
      <div className="flex items-center gap-[12px]">
        <p
          className={`font-[500] leading-[24px] ${
            isOpenMenu ? 'opacity-0' : 'opacity-100'
          } transition-opacity duration-200`}>
          Menu
        </p>
        <div onClick={() => setIsOpenMenu(!isOpenMenu)} className="flex flex-col gap-[8px]">
          <div
            className={`transition-all duration-200 h-[2px] w-[25px] ${
              isOpenMenu ? 'rotate-45 translate-y-[5px] bg-[#494949]' : 'bg-white'
            }`}
          />
          <div
            className={`transition-all duration-200 h-[2px] w-[25px] ${
              isOpenMenu ? '-rotate-45 -translate-y-[5px] bg-[#494949]' : 'bg-white'
            }`}
          />
        </div>
      </div>
      {isOpenMenu && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="fixed left-0 bottom-0 top-[60px] bg-[#101010] w-full pb-[40px] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex flex-col justify-between gap-[60px]">
            <div>
              <div className="flex flex-col min-h-[60px] w-full transition-all duration-200">
                <div
                  className={`flex justify-between items-center w-full h-[60px] pr-[20px] ${
                    isOpenDropDown ? 'border-b' : 'border-b-0'
                  } border-white/15 transition-all duration-200`}
                  onClick={() => setIsDropDown(!isOpenDropDown)}>
                  <p className="pl-[20px] font-[500]">Каталог услуг</p>
                  <svg
                    className={`${
                      isOpenDropDown ? 'rotate-0' : ' rotate-90'
                    } transition-all duration-200`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536Z"
                      fill="#F4F4F4"
                    />
                  </svg>
                </div>

                <AnimatePresence initial={false}>
                  {isOpenDropDown && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      exit={{ height: 0, opacity: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.2 }}
                      className="pl-[30px] overflow-hidden">
                      <Link
                        onClick={() => {
                          setIsDropDown(false);
                          setIsOpenMenu(false);
                        }}
                        className="flex items-center h-[60px] w-full border border-white/15 border-y-0 border-r-0 pl-[20px] bg-[#1B1B1B] font-[500]"
                        href="/spa">
                        СПА зона
                      </Link>
                      <Link
                        onClick={() => {
                          setIsDropDown(false);
                          setIsOpenMenu(false);
                        }}
                        className="flex items-center h-[60px] w-full border border-white/15 border-b-0 border-r-0 pl-[20px] bg-[#1B1B1B] font-[500]"
                        href="/rooms">
                        Отель
                      </Link>
                      <Link
                        onClick={() => {
                          setIsDropDown(false);
                          setIsOpenMenu(false);
                        }}
                        className="flex items-center h-[60px] w-full border border-white/15 border-b-0 border-r-0 pl-[20px] bg-[#1B1B1B] font-[500]"
                        href="/">
                        Ресторан
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <ScrollLink
                onClick={() => {
                  setIsDropDown(false);
                  setIsOpenMenu(false);
                }}
                smooth
                duration={500}
                to="programs"
                className="flex items-center pl-[20px] h-[60px] w-full border border-white/15 border-x-0 font-[500]"
                href="/">
                Программы отдыха
              </ScrollLink>
              <Link
                onClick={() => {
                  setIsDropDown(false);
                  setIsOpenMenu(false);
                }}
                className="flex items-center pl-[20px] h-[60px] w-full border border-t-0 border-x-0 border-white/15 font-[500]"
                href="/spa">
                Аренда СПА
              </Link>
              <Link
                onClick={() => {
                  setIsDropDown(false);
                  setIsOpenMenu(false);
                }}
                className="flex items-center pl-[20px] h-[60px] w-full border border-t-0 border-x-0 border-white/15 font-[500]"
                href="/">
                Меню ресторана
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="flex flex-col px-[20px] items-end">
              <div className="flex flex-col w-full mb-[30px]">
                <button className="bg-white h-[50px] text-black text-[14px] font-[500]">
                  Забронировать
                </button>
                <button className="bg-transparent h-[50px] border border-t-0 border-white/15">
                  Связаться
                </button>
              </div>
              <Image src="/img/Logo.webp" width={140} height={16} alt="logo" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
