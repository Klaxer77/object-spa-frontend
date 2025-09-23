'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export const DropDownMenu: React.FC = () => {
  const path = usePathname();

  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="absolute top-[40px] -left-[30px] p-[10px] bg-[#141513] z-10 ">
      <Link
        className={`${
          path === '/spa' ? 'bg-white text-black' : 'hover:bg-white/15 hover:text-white'
        } transition-colors duration-300 w-[150px] h-[45px] border border-white/50 pl-[16px] flex items-center`}
        href="/spa">
        Аренда СПА
      </Link>
      <Link
        className={`${
          path === '' ? 'bg-white text-black' : ''
        } transition-colors duration-300 w-[150px] h-[45px] border border-t-0 border-white/50 pl-[16px] flex items-center hover:bg-white/15 hover:text-white`}
        href="/">
        Аренда номера
      </Link>
      <Link
        className={`${
          path === '' ? 'bg-white text-black' : ''
        } transition-colors duration-300 w-[150px] h-[45px] border border-t-0 border-white/50 pl-[16px] flex items-center hover:bg-white/15 hover:text-white`}
        href="/">
        Ресторан
      </Link>
    </motion.div>
  );
};
