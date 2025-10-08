type RoomItem = {
  id: number;
  title: string;
  price: number;
  count: string;
};

export interface RoomItemProps {
  id: number;
  images: string[];
  title: number;
  time: RoomItem[];
}

export const ROOMS_DATA = [
  {
    id: 1,
    images: ['/img/light1.webp', '/img/light2.webp', '/img/light3.webp', '/img/light4.webp'],
    title: 'Бизнес в светлых тонах',
    time: [
      {
        id: 1,
        title: 'Номер Светлый Бизнес на 1 сутки',
        price: 10000,
        count: 'Проживание 1 гостя',
      }
    ],
  },
  {
    id: 2,
    images: ['/img/bus1.webp', '/img/bus2.webp', '/img/bus3.webp', '/img/bus4.webp'],
    title: 'Бизнес в темных тонах',
    time: [
      {
        id: 1,
        title: 'Номер Бизнес на 1 сутки',
        price: 10000,
        count: 'Проживание 1 гостя',
      },
    ],
  },
  {
    id: 3,
    images: ['/img/lux1.webp', '/img/lux2.webp', '/img/lux3.webp', '/img/lux4.webp'],
    title: 'Люкс',
    time: [
      {
        id: 1,
        title: 'Номер люкс на 1 сутки',
        price: 15000,
        count: 'Проживание на 2 гостя',
      }
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
