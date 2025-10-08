import { ReactNode } from 'react';

type TimeItem = {
  id: number;
  title: string | ReactNode | (() => ReactNode);
  price: number;
  count: string;
};

export interface SpaItemProps {
  id: number;
  images: string[];
  title: string;
  time: TimeItem[];
}

export const SPA_DATA: SpaItemProps[] = [
  {
    id: 1,
    images: ['/img/rim.webp', '/img/rim2.webp', '/img/rim3.webp', '/img/rim4.webp'],
    title: 'СПА с Римской парной',
    time: [
      {
        id: 1,
        title: () => (
          <>
            СПА на 1 гостя, <br /> 2 часа
          </>
        ),
        price: 15000,
        count: 'Аренда СПА на 1 гостя',
      },
      {
        id: 2,
        title: () => (
          <>
            СПА <br /> до 6 гостей
          </>
        ),
        price: 7000,
        count: 'Аренда СПА до 6 гостей',
      },
      {
        id: 3,
        title: () => (
          <>
            СПА <br /> до 8 гостей
          </>
        ),
        price: 10000,
        count: 'Аренда СПА до 6 гостей',
      },
      {
        id: 4,
        title: () => (
          <>
            СПА <br /> до 10 гостей
          </>
        ),
        price: 15000,
        count: 'Аренда СПА до 6 гостей',
      },
    ],
  },
  {
    id: 2,
    images: [
      '/img/rus.webp',
      '/img/rus2.webp',
      '/img/rus3.webp',
      '/img/rus4.webp',
    ],
    title: 'СПА с Русской парной',
    time: [
      {
        id: 1,
        title: () => (
          <>
            СПА на 1 гостя, <br /> 2 часа
          </>
        ),
        price: 15000,
        count: 'Аренда СПА на 1 гостя',
      },
      {
        id: 2,
        title: () => (
          <>
            СПА <br /> до 6 гостей
          </>
        ),
        price: 7000,
        count: 'Аренда СПА до 6 гостей',
      },
      {
        id: 3,
        title: () => (
          <>
            СПА <br /> до 8 гостей
          </>
        ),
        price: 10000,
        count: 'Аренда СПА до 6 гостей',
      },
      {
        id: 4,
        title: () => (
          <>
            СПА <br /> до 10 гостей
          </>
        ),
        price: 15000,
        count: 'Аренда СПА до 6 гостей',
      },
    ],
  },
];

export const services = [
  {
    id: 1,
    title: 'Морской бриз',
    time: '20 минут',
    price: 3000,
    text: 'Скрабирование морской солью с маслами',
  },
  {
    id: 2,
    title: 'Восточный',
    time: '20 минут',
    price: 3000,
    text: 'Мыльно-пенный массаж с укрыванием мыльной пеной',
  },
  {
    id: 3,
    title: 'Русский',
    time: '20 минут',
    price: 3000,
    text: 'Скрабирование морской солью с маслами',
  },
  {
    id: 4,
    title: 'Райское наслаждение ',
    time: '40 минут',
    price: 6000,
    text: 'Скрабирование морской солью, кокосовой стружкой с кокосовым маслом',
  },
  {
    id: 5,
    title: 'Клеопатра',
    time: '40 минут',
    price: 7500,
    text: 'Прогрев в хамаме, гоммаж кофейный, гоммаж с березовым пеплом, мыльно-пенный массаж',
  },
  {
    id: 6,
    title: 'Черное и белое',
    time: '40 минут',
    price: 7500,
    text: 'Прогрев в хамаме, кофейный пилин-гоммаж, массаж сливками',
  },
];
