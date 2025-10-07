type Prices = {
  organizationId: string;
  price: number;
};

type ItemSizes = {
  buttonImageUrl: string;
  prices: Prices[];
  portionWeightGrams: number;
};

export type Product = {
  id: string;
  sku: string;
  name: string;
  description: string;
  order?: number;
  itemId: string;
  itemSizes: ItemSizes[];
};

export type Category = {
  id: string;
  name: string;
  description?: string;
  order?: number;
  items: Product[];
};

export interface IMenu {
  status: string;
  code: number;
  data: Category[];
}
