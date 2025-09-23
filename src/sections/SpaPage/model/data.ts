type TimeItem = {
  id: number;
  title: string;
  price: number;
  count: string;
};

export interface SpaItemProps {
  id: number;
  images: string[];
  title: number;
  time: TimeItem[];
}

export const SPA_DATA = [
  {
    id: 1,
    images: ['/img/slides/SpaSlide1.png', '/img/slides/SpaSlide1.png', '/img/slides/SpaSlide1.png'],
    title: 'Римская парная',
    time: [
      {
        id: 1,
        title: 'СПА (2 часа)',
        price: 15000,
        count: 'Аренда СПА на 1 гостя',
      },
      {
        id: 2,
        title: 'СПА (3 часа)',
        price: 21000,
        count: 'Аренда СПА до 6 гостей',
      },
      {
        id: 3,
        title: 'СПА (4 часа)',
        price: 28000,
        count: 'Аренда СПА до 6 гостей',
      },
    ],
  },
  {
    id: 2,
    images: ['/img/slides/SpaSlide2.webp', '/img/slides/SpaSlide2.webp', '/img/slides/SpaSlide2.webp'],
    title: 'Русская парная',
    time: [
      {
        id: 1,
        title: 'СПА (2 часа)',
        price: 15000,
        count: 'Аренда СПА на 1 гостя',
      },
      {
        id: 2,
        title: 'СПА (3 часа)',
        price: 21000,
        count: 'Аренда СПА до 6 гостей',
      },
      {
        id: 3,
        title: 'СПА (4 часа)',
        price: 28000,
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
