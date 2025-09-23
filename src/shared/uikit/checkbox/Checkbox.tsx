import { motion } from 'framer-motion';
import type { FC } from 'react';
import { CheckboxProps } from './type';

export const Checkbox: FC<CheckboxProps> = ({
  active = false,
  onChange,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <label
      className={`flex items-center cursor-pointer h-[30px] select-none ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}>
      <motion.div
        className={`w-[30px] h-[30px] rounded-md border-[1.5px] border-[#333232] flex items-center justify-center transition-colors bg-[#141412]`}
        onClick={() => !disabled && onChange?.(!active)}
        {...props}>
        {active && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none">
            <path
              d="M15 4.5L6.75 12.75L3 9"
              stroke="white"
              strokeWidth="2.4999"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </motion.div>
    </label>
  );
};
