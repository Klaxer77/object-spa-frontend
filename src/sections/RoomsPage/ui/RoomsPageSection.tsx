'use client';

import { Container } from '@/shared/uikit';
import { useRouter } from 'next/navigation';
import { ROOMS_DATA } from '../model/data';
import { RoomItem } from '@/entities/RoomItem/RoomItem';

export const RoomsPageSection: React.FC = () => {
  const router = useRouter();

  return (
    <section className="pt-[40px] mb-[200px]">
      <Container>
        <div className="flex gap-[20px] items-center mb-[40px]">
          <svg
            onClick={() => router.back()}
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
          <h1 className="text-[50px] leading-[120%]">Аренда номера</h1>
        </div>

        <div className="flex flex-col gap-[40px]">
          {ROOMS_DATA.map((item) => (
            <RoomItem key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};
