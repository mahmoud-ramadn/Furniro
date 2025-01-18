 export interface TProduct {
  id: string;
  category: {
    image: string;
  };
  title: string;
  price:string;
  images: string[];
  description: string;
}

export interface TProductWithCount extends TProduct {
  count: number;
}
