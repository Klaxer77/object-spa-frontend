'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormValues, ModalProps } from './type';

export const ModalForm: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  totalPrice,
  additionalServices,
  setAdditionalServices,
  currentImage,
}) => {
  const [canScroll, setCanScroll] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const isScrollable = (): boolean => {
    if (!scrollRef.current) return false;
    return scrollRef.current.scrollWidth > scrollRef.current.clientWidth;
  };

  const updateScrollState = useCallback(() => {
    setCanScroll(isScrollable());
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(updateScrollState, 10);
    }
  }, [isOpen, additionalServices, updateScrollState]);

  useEffect(() => {
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, [updateScrollState]);

  if (!isOpen) return null;

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!scrollRef.current || !canScroll) return;
    isDragging.current = true;
    scrollRef.current.classList.add('cursor-grabbing');
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftPos.current = scrollRef.current.scrollLeft;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  const onMouseUp = () => {
    if (!scrollRef.current) return;
    isDragging.current = false;
    scrollRef.current.classList.remove('cursor-grabbing');
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data, { totalPrice, additionalServices });
    reset();
    setIsOpen(false);
  };

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
        className="relative z-10 bg-[#1E1F1C] max-w-[880px] w-full max-h-[95vh] overflow-y-auto [&::-webkit-scrollbar]:hidden">
    
        <div className="px-[40px] py-[30px] flex justify-between items-center relative">
          <p className="font-[500] text-[30px] leading-[36px]">
            Заполните форму и мы сразу
            <br /> с вами свяжемся!
          </p>
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
          <Image fill src={currentImage} alt="picture" className="object-cover" />
        </div>

        {totalPrice > 0 && (
          <div className="flex justify-between gap-[120px] mt-[32px] px-[40px] mb-[30px] w-full">
            <div>
              <p className="font-[500] leading-[24px]">Итог:</p>
              <p className="font-[500] text-[30px] leading-[36px]">
                {totalPrice.toLocaleString('ru-RU')} ₽
              </p>
            </div>

         
            <div className={`relative ${canScroll ? 'max-w-[500px] flex-1' : 'flex-none'}`}>
              <div
                ref={scrollRef}
                onMouseDown={onMouseDown}
                className={`flex gap-[20px] [scrollbar-width:0] [&::-webkit-scrollbar]:hidden overflow-x-auto select-none py-2 ${
                  canScroll ? 'cursor-grab max-w-[500px]' : 'cursor-default flex-wrap justify-end'
                }`}
                style={{
                  overflowX: canScroll ? 'auto' : 'hidden',
                  flexWrap: canScroll ? 'nowrap' : 'wrap',
                }}>
                {additionalServices.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-center items-center bg-[#262724] border border-white/50 h-[50px] px-[20px] relative min-w-[150px] overflow-visible flex-shrink-0">
                    <button
                      onClick={() =>
                        setAdditionalServices((prev) => prev.filter((s) => s.title !== item.title))
                      }
                      className="absolute -right-2 -top-2 w-[20px] h-[20px] flex justify-center items-center bg-[#141412] rounded-[4px] border border-[#333232] hover:bg-[#222] transition-colors z-10">
                      ×
                    </button>
                    <p className="font-[500] text-[14px] leading-[20px] whitespace-nowrap">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[10px] w-full px-[40px] mt-[20px]">
          {/* ФИО */}
          <label className="flex flex-col gap-[8px]">
            <p className="font-[500] text-[14px] leading-[20px]">Ф.И.О</p>
            <input
              {...register('fullName', {
                required: 'Заполните поле',
                minLength: { value: 3, message: 'Минимум 3 символа' },
              })}
              placeholder="Как к вам обращаться"
              className={`placeholder:text-white/50 placeholder:font-[500] text-white/50 font-[500] outline-none h-[50px] pl-[20px] w-full border border-white/10 ${
                errors.fullName ? 'bg-[#411C1D]' : 'bg-[#111111]'
              }`}
            />
            {errors.fullName && (
              <span className="text-[#F52629] text-[14px] font-[500]">
                {errors.fullName.message}
              </span>
            )}
          </label>

          {/* Email */}
          <label className="flex flex-col gap-[8px]">
            <p className="font-[500] text-[14px] leading-[20px]">Введите почту</p>
            <input
              {...register('email', {
                required: 'Введите почту',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Некорректный email',
                },
              })}
              placeholder="example@mail.ru"
              type="email"
              className={`placeholder:text-white/50 placeholder:font-[500] text-white/50 font-[500] outline-none h-[50px] pl-[20px] w-full border border-white/10 ${
                errors.email ? 'bg-[#411C1D]' : 'bg-[#111111]'
              }`}
            />
            {errors.email && (
              <span className="text-[#F52629] text-[14px] font-[500]">{errors.email.message}</span>
            )}
          </label>

          {/* Телефон */}
          <label className="flex flex-col gap-[8px]">
            <p className="font-[500] text-[14px] leading-[20px]">Номер телефона</p>
            <input
              {...register('phone', {
                required: 'Введите телефон',
                pattern: {
                  value: /^\+7\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/,
                  message: 'Некорректный номер',
                },
              })}
              placeholder="+7 (000) 000-00-00"
              className={`placeholder:text-white/50 placeholder:font-[500] text-white/50 font-[500] outline-none h-[50px] pl-[20px] w-full border border-white/10 ${
                errors.phone ? 'bg-[#411C1D]' : 'bg-[#111111]'
              }`}
            />
            {errors.phone && (
              <span className="text-[#F52629] text-[14px] font-[500]">{errors.phone.message}</span>
            )}
          </label>

          {/* Пожелания */}
          <label className="flex flex-col gap-[8px]">
            <p className="font-[500] text-[14px] leading-[20px]">Ваши пожелания</p>
            <input
              {...register('wishes')}
              placeholder="Текст"
              className={`placeholder:text-white/50 placeholder:font-[500] text-white/50 font-[500] outline-none h-[50px] pl-[20px] w-full border border-white/10 ${
                errors.wishes ? 'bg-[#411C1D]' : 'bg-[#111111]'
              }`}
            />
            {errors.wishes && (
              <span className="text-[#F52629] text-[14px] font-[500]">{errors.wishes.message}</span>
            )}
          </label>

          <button
            type="submit"
            className="h-[50px] mt-[16px] w-full flex justify-center items-center bg-white hover:bg-transparent text-black hover:text-white border border-white/50 transition-all duration-300 font-[500] text-[14px] leading-[20px]">
            Отправить
          </button>
        </form>

        <p className="text-center text-[14px] font-[500] leading-[20px] text-white/50 pt-[20px] pb-[30px]">
          Нажимая кнопку &quot;Отправить&quot;, вы даете согласие на обработку{' '}
          <span className="text-white underline">персональных данных.</span>
        </p>
      </motion.div>
    </motion.div>
  );
};
