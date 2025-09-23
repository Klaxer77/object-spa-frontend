'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Checkbox } from '../checkbox/Checkbox';
import { services } from '@/sections/SpaPage/model/data';
import { useState, useEffect } from 'react';
import { ServiceItem } from '@/entities/SpaItem/SpaItem';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectedServices: ServiceItem[];
  setSelectedServices: (services: ServiceItem[]) => void;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  selectedServices,
  setSelectedServices,
}) => {
  const [localSelected, setLocalSelected] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) setLocalSelected(selectedServices.map((s) => s.title));
  }, [isOpen, selectedServices]);

  const toggleLocal = (title: string) => {
    setLocalSelected((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
  };

  const handleConfirm = () => {
    const updated = services
      .filter((s) => localSelected.includes(s.title))
      .map((s) => ({ title: s.title, price: Number(s.price) || 0 }));
    setSelectedServices(updated);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 flex items-center justify-center z-[999]">
      <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="relative bg-[#1E1F1C] max-w-[880px] w-full max-h-[95vh] overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <div className="px-[40px] py-[30px] flex justify-between items-center">
          <p className="font-[500] text-[30px] leading-[36px]">Доступные доп. услуги:</p>
          <button className="absolute right-[17px] top-[17px]" onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.81694 0.183058C10.061 0.427136 10.061 0.822864 9.81694 1.06694L1.06694 9.81694C0.822864 10.061 0.427136 10.061 0.183058 9.81694C-0.0610193 9.57286 -0.0610193 9.17714 0.183058 8.93306L8.93306 0.183058C9.17714 -0.0610194 9.57286 -0.0610194 9.81694 0.183058Z"
                fill="#9898A5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.183059 0.183058C-0.0610195 0.427136 -0.0610195 0.822864 0.183059 1.06694L8.93306 9.81694C9.17714 10.061 9.57286 10.061 9.81694 9.81694C10.061 9.57286 10.061 9.17714 9.81694 8.93306L1.06694 0.183058C0.822864 -0.0610194 0.427136 -0.0610194 0.183059 0.183058Z"
                fill="#9898A5"
              />
            </svg>
          </button>
        </div>

        <div className="relative overflow-hidden w-full h-[100px]">
          <Image fill src="/img/dopImg.webp" alt="picture" className="object-cover" />
        </div>

        <div className="grid gap-[10px] grid-cols-2 px-[40px] py-[30px]">
          {services.map((item) => {
            const isActive = localSelected.includes(item.title);
            return (
              <div
                key={item.id}
                onClick={() => toggleLocal(item.title)}
                className={`border-white/15 border p-[20px] flex gap-[12px] cursor-pointer transition-colors duration-300 min-h-[188px] ${
                  isActive ? 'bg-white' : 'bg-[#262724]'
                }`}>
                <Checkbox active={isActive} />
                <div className="flex flex-col justify-between">
                  <div>
                    <p
                      className={`text-[20px] font-[500] leading-[30px] ${
                        isActive ? 'text-black' : 'text-white'
                      }`}>
                      {item.title}
                    </p>
                    <p
                      className={`font-[500] text-[14px] mb-[10px] ${
                        isActive ? 'text-black/70' : 'text-white/70'
                      }`}>
                      {item.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <div className={`border border-white/15 bg-[#1E1F1C] px-[20px] py-[10px]`}>
                      <p className="font-[700] text-[20px] leading-[30px]">
                        {item.price.toLocaleString('ru-RU')} ₽
                      </p>
                    </div>
                    <div className={`border bg-transparent px-[20px] py-[10px] ${isActive ? 'text-black border-[#1E1F1C80]' : ' text-white border-white/50'}`}>
                      <p className="font-[500] text-[20px] leading-[30px]">{item.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="px-[40px] pb-[40px]">
          <button
            onClick={handleConfirm}
            className="h-[50px] w-full flex justify-center items-center bg-white hover:bg-transparent text-black hover:text-white border border-white/50 transition-all duration-300 font-[500] text-[14px] leading-[20px]">
            Выбрать
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
