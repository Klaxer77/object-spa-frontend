type RoomItem = {
  id: number;
  title: string
  price: number;
  count: string
}


export interface RoomItemProps {
  id: number;
  images: string[];
  title: string;
  time: RoomItem[]
};