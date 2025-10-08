'use client';

import { SpaItem } from '@/entities/SpaItem/SpaItem';
import { Container } from '@/shared/uikit';
import Link from 'next/link';
import { SPA_DATA } from '../model/data';

export const SpaPageSection: React.FC = () => {
  return (
    <section className="pt-[100px] mb-[200px]">
      <Container>
        <div className="flex gap-[20px] items-center mb-[40px]">
          <Link href='/'>
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="36"
              viewBox="0 0 34 36"
              fill="none">
              <path
                d="M32 17.9999L2 17.9999M2 17.9999L18.1485 34.1484M2 17.9999L18.1485 1.85132"
                stroke="#F4F4F4"
                strokeWidth="2.71732"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <h1 className="text-[50px] leading-[120%]">Посещение СПА-пространства</h1>
        </div>

        <div className="flex flex-col gap-[40px]">
          {SPA_DATA.map((item) => (
            <SpaItem key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};
