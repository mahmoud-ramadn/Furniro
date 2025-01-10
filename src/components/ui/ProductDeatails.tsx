import { useState } from 'react';
import AppImg from './AppImg';
import Btn from './Btn';
import Counter from './Counter';
import { TProduct } from '../../types/products';


function ProductDetails({ productData }:{productData:TProduct}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = productData?.product?.images || [];
  const displayedImage = selectedImage || images[0];

  

  
  

  return (
 
    <div className="container mt-9 mb-14 flex flex-wrap justify-center items-start gap-20 px-4">
      <div className="flex md:items-start flex-wrap md:flex-row flex-col gap-8">
        <div className="flex md:flex-col flex-row gap-8 justify-between md:h-[416px]">
          {productData.images.map((image: string, index: number) => (
            <div
              key={index}
              className={`md:w-20 w-1/4 md:h-20 h-fit rounded-lg overflow-hidden cursor-pointer ${selectedImage === image ? 'border-2 border-secondary-500' : ''
                }`}
              onClick={() => setSelectedImage(image)}
            >
              <AppImg
                className="w-full h-full rounded-lg"
                src={image}
                alt={`Product Image ${index + 1}`}
              />
            </div>
          ))}

          <div className="md:w-20 w-1/4 md:h-20 h-fit rounded-lg overflow-hidden cursor-pointer">
            <AppImg
              className="w-full h-full rounded-lg"
              src={productData?.product?.images?.[0]}
              alt={`Product Image`}
            />
          </div>
        </div>

        <div className="md:w-[423px] w-full h-[500px] overflow-hidden rounded-md">
          <AppImg
            src={displayedImage}
            className="object-fill rounded-md"
            alt="Selected Product Image"
          />
        </div>
      </div>

      <div className="md:w-[606px] md:h-[730px] rounded-md">
        <h2 className="font-normal text-[42px]">
          {productData?.title?.substring(0, 19)}
        </h2>
        <h3 className="font-medium text-2xl text-text-links">
          Rs ${productData?.price}
        </h3>
        <div className="h-[30px] mt-[10px] mb-3 flex items-center gap-x-5">
          <div className="flex items-center gap-2">
            <img src="/src/assets/icons/star.png" alt="" />
            <img src="/src/assets/icons/star.png" alt="" />
            <img src="/src/assets/icons/star.png" alt="" />
            <img src="/src/assets/icons/star.png" alt="" />
            <img src="/src/assets/icons/haifstar.png" alt="" />
          </div>
          <div className="h-full w-[2px] bg-text-links"></div>
          <p className="text-sm font-normal text-text-links">
            5 Customer Review
          </p>
        </div>
        <p className="md:w-[450px] text-sm font-normal">
          {productData?.description?.substring(0, 140)}
        </p>

        <div className="mt-5 mb-[18px] h-16 flex flex-col justify-between">
          <h4>Size</h4>
          <div className="flex gap-4 items-center">
            <Btn className="w-[30px] h-[30px] rounded text-white bg-secondary-500 text-sm font-normal">
              L
            </Btn>
            <Btn className="w-[30px] h-[30px] rounded bg-primary-500 text-sm font-normal">
              XL
            </Btn>
            <Btn className="w-[30px] h-[30px] rounded bg-primary-500 text-sm font-normal">
              XS
            </Btn>
          </div>
        </div>

        <div className="h-16 flex flex-col justify-between">
          <h4>Color</h4>
          <div className="flex gap-4 items-center">
            <Btn className="w-[30px] h-[30px] rounded-full text-white bg-[#816DFA] text-sm font-normal" />
            <Btn className="w-[30px] h-[30px] rounded-full bg-[#000000] text-sm font-normal" />
            <Btn className="w-[30px] h-[30px] rounded-full bg-secondary-500 text-sm font-normal" />
          </div>
        </div>

        <div className="mt-8 mb-[60px] flex items-center gap-2 md:flex-nowrap flex-wrap">
          <Counter />
          <Btn
            type="button"
            className="md:w-[215px] border-[1px] w-full rounded-2xl h-16 flex items-center justify-center text-xl font-normal"
          >
            Add To Cart
          </Btn>
          <Btn
            type="button"
            className="md:w-[215px] border-[1px] w-full rounded-2xl h-16 flex items-center justify-center text-xl font-normal"
          >
            + compare
          </Btn>
        </div>
        <hr className="w-full h-[1px] text-text-links" />
        <div className="my-12 text-text-links text-base font-normal">
          <div className="w-28 flex items-start justify-between">
            <span className="w-28">SKU</span>
            <p className="flex items-center">
              <span className="px-3">:</span> SS001
            </p>
          </div>
          <div className="w-28 flex items-start justify-between">
            <span className="w-28">Category</span>
            <p className="flex items-center">
              <span className="px-3">:</span> SS001
            </p>
          </div>
          <h3 className="flex items-center">
            <span className="w-[75px]">Share</span>:
            <span className="flex items-center gap-x-6">
              <img
                src="/src/assets/soical/akar-icons_facebook-fill.svg"
                alt=""
              />
              <img
                src="/src/assets/soical/akar-icons_linkedin-box-fill.svg"
                alt=""
              />
              <img
                src="/src/assets/soical/ant-design_twitter-circle-filled.svg"
                alt=""
              />
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
