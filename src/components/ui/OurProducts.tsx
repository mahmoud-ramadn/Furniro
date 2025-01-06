import ProductsList from './ProductsList';
import ShowMoreBtn from './ShowMoreBtn';

function OurProducts() {
  interface CardData {
    image: string;
    title: string;
    subtitle: string;
    price: string;
    discount: string;
    offer?: string;
    percent?: string;
  }
  const cardData: CardData[] = [
    {
      image:
        'https://inc42.com/cdn-cgi/image/quality=75/https://asset.inc42.com/2023/08/Glossary-Series-D2C-ftr-social-F5.jpg',
      title: 'Syltherine',
      subtitle: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      discount: 'Rp 3.500.000',
    },
    {
      image: '/our Products/Images-1.webp',
      title: 'Syltherine',
      subtitle: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      discount: 'Rp 3.500.000',
      offer: 'New',
    },
    {
      image: '/our Products/Images-2.webp',
      title: 'Syltherine',
      subtitle: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      discount: 'Rp 3.500.000',
      percent: '-50%',
    },
    {
      image: '/our Products/Images-3.webp',
      title: 'Syltherine',
      subtitle: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      discount: 'Rp 3.500.000',
      offer: 'New',
    },
    {
      image: '/our Products/Images-3.webp',
      title: 'Syltherine',
      subtitle: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      discount: 'Rp 3.500.000',
    },
    {
      image: '/our Products/Images-3.webp',
      title: 'Syltherine',
      subtitle: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      discount: 'Rp 3.500.000',
      offer: 'New',
    },
    {
      image: '/our Products/Images-3.webp',
      title: 'Syltherine',
      subtitle: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      discount: 'Rp 3.500.000',
      offer: 'least',
    },
    {
      image: '/our Products/Images-3.webp',
      title: 'Syltherine',
      subtitle: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      discount: 'Rp 3.500.000',
      percent: '-50%',
    },
  ];

  return (
    <section className=" container mx-auto   my-8 ">
      <h1 className="   text-[40px]  text-text-cardTitle    mb-8  text-center  font-bold ">
        Our Products
      </h1>

      <ProductsList CardData={cardData} />

      <ShowMoreBtn />
    </section>
  );
}

export default OurProducts;
