import { ReactNode } from "react";

type TimeItem = {
  id: number;
  title: string | ReactNode | (() => ReactNode);
  price: number;
  count: string
}


export interface SpaItemProps {
  id: number;
  images: string[];
  title: string;
  time: TimeItem[]
};