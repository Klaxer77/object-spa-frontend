type Prices = {
  price: number
}

type ItemSizes ={
  prices: Prices[]
  portionWeightGrams: number,
}

type BarProduct = {
  name: string;
  itemSizes: ItemSizes[]
}


export type Itembar = {
  name: string;
  buttonImageUrl: string;
  items: BarProduct[]
}

export interface IBar {
  data: Itembar[];
}
