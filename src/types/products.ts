export interface TProduct {
  id: string;
  title: string;
  price: string;
  images: string[];
  description: string;
  category?: {
    image: string;
  };
}

export interface TProductWithCount extends TProduct {
  count: number;
}
