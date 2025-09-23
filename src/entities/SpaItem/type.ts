type TimeItem = {
  id: number;
  title: string
  price: number;
  count: string
}


export interface SpaItemProps {
  id: number;
  images: string[];
  title: string;
  time: TimeItem[]
};