import Image from 'next/image';
import { SlideItemProps } from './type';
import Link from 'next/link';

export const SlideItem: React.FC<SlideItemProps> = ({ title, image, link }) => {
  return (
    <div className="max-w-[420px] w-full min-h-[190px] flex">
      <div className="relative w-[190px] h-[190px] overflow-hidden">
        <Image fill src={image} alt="item" />
      </div>
      <div className="bg-[#1C1D1B] min-w-[230px] pl-[20px] py-[14px] pr-[14px] flex flex-col justify-between items-start">
        <div>
          <p className="text-white/50 leading-[24px] mb-[8px]">Спецпредложение</p>
          <p className="font-[500] text-[25px] leading-[120%]">{title}</p>
        </div>
        <Link href={link} className='border flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 border-white h-[45px] w-full text-[14px] leading-[20px]'>Перейти</Link >
      </div>
    </div> 
  );
};
