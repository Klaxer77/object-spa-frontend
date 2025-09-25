'use client';

import Image from 'next/image';
import { DropDownMenu } from './DropDownMenu';
import { useRef, useState } from 'react';
import Link from 'next/link';

import { Link as ScrollLink } from 'react-scroll';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenMenuDown, setIsOpenMenuDown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 100);
  };

  return (
    <header className={` transition-colors duration-200 min-h-[60px] w-full flex items-center justify-between pl-[30px] border-b border-white/15 relative z-20 ${isOpenMenu ? 'bg-[#101010]' : 'bg-transparent'}`}>
      <Link href="/">
        <Image className={`${isOpenMenu ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`} src="/img/Logo.webp" width={140} height={16} alt="logo" />
      </Link>
      <MobileMenu setIsOpenMenu={() => setIsOpenMenu(!isOpenMenu)} isOpenMenu={isOpenMenu} />
      <nav className="absolute left-1/2 -translate-x-1/2 max-xl:hidden">
        <ul className="flex gap-[30px] items-center">
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex gap-[10px] items-center relative cursor-pointer">
            <p className="text-[14px] leading-[20px]">Каталог услуг</p>
            <svg
              className={`${isOpenMenu ? 'rotate-180' : ''} transition-all duration-200`}
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.73483 3.48496C1.88128 3.33851 2.11872 3.33851 2.26517 3.48496L6.5 7.71979L10.7348 3.48496C10.8813 3.33851 11.1187 3.33851 11.2652 3.48496C11.4116 3.6314 11.4116 3.86884 11.2652 4.01529L6.76516 8.51529C6.61872 8.66173 6.38128 8.66173 6.23484 8.51529L1.73483 4.01529C1.58839 3.86884 1.58839 3.6314 1.73483 3.48496Z"
                fill="#F4F4F4"
              />
            </svg>
            {open && <DropDownMenu />}
          </li>
          <li>
            <ScrollLink
              className="text-[14px] leading-[20px] cursor-pointer"
              smooth={true}
              duration={500}
              to="programs">
              Программы
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="text-[14px] leading-[20px] cursor-pointer"
              to="spa"
              smooth={true}
              duration={500}>
              Наша СПА
            </ScrollLink>
          </li>
          <li>
            <p className="text-[14px] leading-[20px]">Меню ресторана</p>
          </li>
        </ul>
      </nav>
      <div className="flex max-xl:hidden">
        <button className="border-l hover:bg-white/15 transition-all duration-300 border-white/15 font-[500] text-[14px] leading-[20px] h-[60px] w-[130px] flex justify-center items-center">
          Связаться
        </button>
        <button className="bg-white border border-b-0 border-transparent hover:border-white/15 hover:bg-white/15 hover:text-white transition-all duration-300 h-[60px] w-[180px] text-black text-[14px] font-[500] leading-[20px] uppercase flex justify-center items-center">
          Забронировать
        </button>
      </div>
    </header>
  );
};
