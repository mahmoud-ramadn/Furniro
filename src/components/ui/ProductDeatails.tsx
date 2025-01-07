import { useState } from "react";
import AppImg from "./AppImg";
import useFetchSinglProduct from "../../hooks/GetSingleProduct";

function ProductDetails({productData}) {

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
const {data}=useFetchSinglProduct();
    
    const images = productData?.product.images || [];
    

    const displayedImage = selectedImage || images[0];

    return (
        <div className="container mt-9 mb-14 flex flex-wrap justify-center items-start gap-20 px-4">
            <div className="flex md:items-start flex-wrap md:flex-row flex-col gap-8">
                <div className="flex md:flex-col flex-row gap-8 justify-between md:h-[416px]">
                    {images.map((image:string , index:number) => (
                        <div
                            key={index}
                            className={`md:w-20 w-1/4 h-20 rounded-lg overflow-hidden cursor-pointer bg-primary-300 ${selectedImage === image ? "border-2 border-secondary-500" : ""
                                }`}
                            onClick={() => setSelectedImage(image)} 
                        >
                            <AppImg className="w-full h-full" src={image} alt={`Product Image ${index + 1}`} />
                        </div>
                    ))}

                    <div className="md:w-20 w-1/4 h-20 rounded-lg overflow-hidden cursor-pointer bg-primary-300">
                    <AppImg className="w-full h-full" src={productData?.product.images[0]} alt={`Product Image`} />
                    </div>

                </div>

                <div className="md:w-[423px] w-full h-[500px] overflow-hidden  rounded-md">
                    <AppImg src={displayedImage} className="object-fill rounded-md " alt="Selected Product Image" />
                </div>
            </div>

            <div className="w-[606px] h-[730px]  rounded-md">
                <h2 className=" font-normal   text-[42px]  ">{data?.product.title.substring(0,19)}</h2>
                <h3 className=" font-medium  text-2xl  text-text-links">Rs ${data?.product.price}</h3>
                <div className=" h-[30px]  flex items-center gap-x-5 ">
                    <div className=" flex items-center gap-2">
                    <img src="/src/assets/icons/star.png" alt="" />
                    <img src="/src/assets/icons/star.png" alt="" />
                    <img src="/src/assets/icons/star.png" alt="" />
                    <img src="/src/assets/icons/star.png" alt="" />
                    <img src="/src/assets/icons/haifstar.png" alt="" />
                    </div>
                    <div className=" h-full w-[2px] bg-text-links">

                    </div>
                    <p className=" text-sm font-normal text-text-links">5 Customer Review</p>
                </div>
                <p className=" w-[450px]  text-sm font-normal">{data?.product.description.substring(0,140)}</p>
                <hr className=" w-full h-[1px] text-text-links " />

            </div>
        </div>
    );
}

export default ProductDetails;
