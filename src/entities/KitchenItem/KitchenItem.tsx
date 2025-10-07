'use client';

import { useAdditionalServicesStore } from '@/shared/store/menuStore';
import { Product } from '@/shared/types/menu.type';
import { roundTo } from '@/shared/utils/formated';
import Image from 'next/image';

export const KitchenItem: React.FC<Product> = ({ name, itemSizes }) => {
  const image = itemSizes[0].buttonImageUrl;
  const price = itemSizes[0].prices[0].price;
  const weight = itemSizes[0].portionWeightGrams;

  const addService = useAdditionalServicesStore((s) => s.addService);

  const handleAdd = () => {
    addService({ title: name, price });
  };

  return (
    <div className="flex flex-col bg-[#151615] overflow-hidden">
      <div className="relative w-full aspect-[305/200]">
        <Image src={image} alt="picture" fill className="object-contain" unoptimized />
      </div>

      <div className="p-[20px] flex flex-col justify-between flex-1 max-sm:p-[12px] max-sm:pt-[16px]">
        <p className="font-[500] text-[20px] leading-[30px] mb-[20px] max-sm:text-[14px] max-sm:leading-[18px]">
          {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
        </p>
        <div>
          <div className="bg-white h-[45px] px-[20px] py-[10px] max-sm:py-[6px] max-sm:px-[12px] inline-flex justify-center items-center text-black font-[700] text-[20px] max-sm:text-[14px] mb-[20px]">
            <p className='max-sm:leading-[12px] leading-[30px]'>{price?.toLocaleString('ru-RU')} ₽</p>
          </div>
          <div className="flex items-center justify-between">
            <p className='max-sm:text-[12px] text-white/70'>{roundTo(weight)} г</p>
            <button
              onClick={handleAdd}
              className="flex justify-center items-center w-[36px] h-[36px] bg-[#1E1F1C] border border-white/15">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none">
                <path
                  d="M7.53333 0.740045C7.53333 0.482312 7.74227 0.273378 8 0.273378C8.25773 0.273378 8.46667 0.482312 8.46667 0.740045L8.46667 7.53301L15.2596 7.53301C15.5174 7.53301 15.7263 7.74194 15.7263 7.99967C15.7263 8.25741 15.5174 8.46634 15.2596 8.46634L8.46667 8.46634L8.46667 15.2593C8.46667 15.517 8.25773 15.726 8 15.726C7.74227 15.726 7.53333 15.517 7.53333 15.2593L7.53333 8.46634L0.740372 8.46634C0.482638 8.46634 0.273705 8.25741 0.273705 7.99967C0.273705 7.74194 0.482638 7.53301 0.740371 7.53301L7.53333 7.53301L7.53333 0.740045Z"
                  fill="#F4F4F4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
