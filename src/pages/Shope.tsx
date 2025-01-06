import { useState } from 'react';
import ProductsList from '../components/ui/ProductsList';
import Banner from '../components/ui/Banner';

function Shope() {
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
            percent: '-7%',
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
            image: '/our Products/Images-1.webp',
            title: 'Syltherine',
            subtitle: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            discount: 'Rp 3.500.000',
            offer: 'New',
        },
        {
            image: '/our Products/Images-1.webp',
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
        },
        {
            image: '/our Products/Images-1.webp',
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
            image: '/our Products/Images-1.webp',
            title: 'Syltherine',
            subtitle: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            discount: 'Rp 3.500.000',
            offer: 'New',
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
            image: '/our Products/Images-1.webp',
            title: 'Syltherine',
            subtitle: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            discount: 'Rp 3.500.000',
            offer: 'New',
        },
        {
            image: '/our Products/Images-1.webp',
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
            image: '/our Products/Images-1.webp',
            title: 'Syltherine',
            subtitle: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            discount: 'Rp 3.500.000',
            offer: 'New',
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
            image: '/our Products/Images-1.webp',
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
            image: '/our Products/Images-1.webp',
            title: 'Syltherine',
            subtitle: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            discount: 'Rp 3.500.000',
            offer: 'New',
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
            image: '/our Products/Images-1.webp',
            title: 'Syltherine',
            subtitle: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            discount: 'Rp 3.500.000',
            offer: 'New',
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
            image: '/our Products/Images-1.webp',
            title: 'Syltherine',
            subtitle: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            discount: 'Rp 3.500.000',
            offer: 'New',
        },
        {
            image: '/our Products/Images-1.webp',
            title: 'Syltherine',
            subtitle: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            discount: 'Rp 3.500.000',
            offer: 'New',
            percent: '-50%',
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
            image: '/our Products/Images-1.webp',
            title: 'Syltherine',
            subtitle: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            discount: 'Rp 3.500.000',
            offer: 'New',
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
            image: '/our Products/Images-1.webp',
            title: 'Syltherine',
            subtitle: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            discount: 'Rp 3.500.000',
            offer: 'New',
        },
        {
            image: '/our Products/Images-1.webp',
            title: 'Syltherine',
            subtitle: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            discount: 'Rp 3.500.000',
            percent: '-7%',
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
            image: '/our Products/Images-1.webp',
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
            image: '/our Products/Images-1.webp',
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
            image: '/our Products/Images-1.webp',
            title: 'Syltherine',
            subtitle: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            discount: 'Rp 3.500.000',
            offer: 'New',
        },
        {
            image: '/our Products/Images-1.webp',
            title: 'Syltherine',
            subtitle: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            discount: 'Rp 3.500.000',
            percent: '-30%',
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
            image: '/our Products/Images-1.webp',
            title: 'Syltherine',
            subtitle: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            discount: 'Rp 3.500.000',
            offer: 'New',
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
            image: '/our Products/Images-1.webp',
            title: 'Syltherine',
            subtitle: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            discount: 'Rp 3.500.000',
            offer: 'New',
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
            image: '/our Products/Images-1.webp',
            title: 'Syltherine',
            subtitle: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            discount: 'Rp 3.500.000',
            offer: 'New',
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
            image: '/our Products/Images-1.webp',
            title: 'Syltherine',
            subtitle: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            discount: 'Rp 3.500.000',
            offer: 'New',
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
            image: '/our Products/Images-1.webp',
            title: 'Syltherine',
            subtitle: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            discount: 'Rp 3.500.000',
            offer: 'New',
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
            image: '/our Products/Images-1.webp',
            title: 'Syltherine',
            subtitle: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            discount: 'Rp 3.500.000',
            offer: 'New',
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
            image: '/our Products/Images-1.webp',
            title: 'Syltherine',
            subtitle: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            discount: 'Rp 3.500.000',
            offer: 'New',
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
            image: '/our Products/Images-1.webp',
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
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;

    const totalPages = Math.ceil(cardData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = cardData.slice(startIndex, startIndex + itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <section className="container mx-auto my-8">
                <ProductsList CardData={currentItems} />

                <div className="flex justify-center gap-4  my-20 items-center">
                    {/* Pagination numbers */}
                    {Array.from({ length: totalPages }, (_, index) => (
                        <span
                            key={index}
                            onClick={() => handlePageClick(index + 1)}
                            className={`w-16 h-16 flex items-center justify-center rounded-lg cursor-pointer font-normal text-xl ${currentPage === index + 1
                                    ? 'bg-secondary-500 text-white'
                                    : 'bg-primary-500 text-black'
                                }`}
                        >
                            {index + 1}
                        </span>
                    ))}

                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`w-24 h-16 rounded-lg ${currentPage === totalPages
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-primary-500 text-black'
                            }`}
                    >
                        Next
                    </button>
                </div>
            </section>
            {/* banner */}
            <Banner />
        </div>
    );
}

export default Shope;
