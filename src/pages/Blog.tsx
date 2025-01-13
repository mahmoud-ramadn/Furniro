import Search from "../assets/icons/Search";
import Banner from "../components/ui/Banner";
import TopageBanner from "../components/ui/TopageBanner";
import { useState } from "react";

function Blog() {
    const BlogDat = [
        {
            image: '/blog/Rectangle 68-1.webp',
            title: 'Going all-in with millennial design',
            desceration: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
        },
        {
            image: '/blog/Rectangle 68-2.webp',
            title: 'Going all-in with millennial design',
            desceration: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
        },
        {
            image: '/blog/Rectangle 68.webp',
            title: 'Going all-in with millennial design',
            desceration: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
        },
        {
            image: '/blog/Rectangle 68-1.webp',
            title: 'Going all-in with millennial design',
            desceration: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
        },
        {
            image: '/blog/Rectangle 68-1.webp',
            title: 'Going all-in with millennial design',
            desceration: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
        },
        {
            image: '/blog/Rectangle 68-1.webp',
            title: 'Going all-in with millennial design',
            desceration: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
        },
        {
            image: '/blog/Rectangle 68-1.webp',
            title: 'Going all-in with millennial design',
            desceration: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
        },
        {
            image: '/blog/Rectangle 68-1.webp',
            title: 'Going all-in with millennial design',
            desceration: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
        },
        {
            image: '/blog/Rectangle 68-1.webp',
            title: 'Going all-in with millennial design',
            desceration: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
        },
        {
            image: '/blog/Rectangle 68-1.webp',
            title: 'Going all-in with millennial design',
            desceration: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
        },
        {
            image: '/blog/Rectangle 68-1.webp',
            title: 'Going all-in with millennial design',
            desceration: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
        },
        {
            image: '/blog/Rectangle 68-1.webp',
            title: 'Going all-in with millennial design',
            desceration: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
        },


    ]
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const totalPages = Math.ceil((BlogDat.length || 0) / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;

    const productsToDisplay = BlogDat?.slice(
        startIndex,
        startIndex + itemsPerPage,
    );
    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    return (
        <section>
            <TopageBanner />


            <div className="container mx-auto mt-[106px] mb-[68px] px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        {productsToDisplay.map((item, index) => (
                            <div key={index} className="mb-14">
                                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt="item-blog"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="flex flex-wrap gap-4 my-4 items-center text-gray-600 text-sm">
                                    <div className="flex items-center">
                                        <img src="/blog/icons/dashicons_admin-users.svg" alt="" />
                                        <span className="ml-2">Admin</span>
                                    </div>
                                    <div className="flex items-center">
                                        <img src="/blog/icons/uis_calender.svg" alt="" />
                                        <span className="ml-2">14 Oct 2022</span>
                                    </div>
                                    <div className="flex items-center">
                                        <img src="/blog/icons/ticket.svg" alt="" />
                                        <span className="ml-2">Wood</span>
                                    </div>
                                </div>
                                <h1 className="font-medium text-xl md:text-3xl">{item.title}</h1>
                                <p className="text-sm md:text-base text-gray-600 mt-3 mb-5">
                                    {item.desceration}
                                </p>
                                <button className="text-base font-normal border-b border-gray-500">
                                    Read more
                                </button>
                            </div>
                        ))}
                        <div className="flex justify-center gap-4 my-20">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageClick(index + 1)}
                                    aria-current={currentPage === index + 1 ? 'page' : undefined}
                                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${currentPage === index + 1
                                        ? ' bg-secondary-500 text-white'
                                        : ' bg-primary-500 text-gray-800'
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button
                                onClick={handleNext}
                                disabled={currentPage === totalPages}
                                className={`w-20 h-12 rounded-lg ${currentPage === totalPages
                                    ? ' bg-primary-500 text-gray-500 cursor-not-allowed'
                                    : ' bg-primary-500 text-white'
                                    }`}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                    <div className=" col-span-1   sm:col-span-1 pt-5   px-10  flex  flex-col   items-center ">
                        <div className=" w-full   ">
                            <div className="relative md:w-[311px] mx-auto w-full ">
                                <input type="search" name="" id="" className=" w-full h-[58px] border-[1px] border-gray-400  outline-none pl-2 rounded-xl " />
                                <Search className=" absolute  top-1/2   -translate-y-1/2 right-3 text-2xl  " />
                            </div>
                            <div className=" md:w-[215px] mx-auto  mt-10">
                                <h3 className=" font-medium text-2xl  ">Categories</h3>
                                <div className="flex justify-between items-center text-text-links font-normal text-base my-10">
                                    <span>Crafts</span>
                                    <span>2</span>
                                </div>
                                <div className="flex justify-between items-center text-text-links font-normal text-base my-10">
                                    <span>Crafts</span>
                                    <span>2</span>
                                </div>
                                <div className="flex justify-between items-center text-text-links font-normal text-base my-10">
                                    <span>Crafts</span>
                                    <span>2</span>
                                </div>
                                <div className="flex justify-between items-center text-text-links font-normal text-base my-10">
                                    <span>Crafts</span>
                                    <span>2</span>
                                </div>
                                <div className="flex justify-between items-center text-text-links font-normal text-base my-10">
                                    <span>Crafts</span>
                                    <span>2</span>
                                </div>



                            </div>
                            <div className=" md:w-[215px] mx-auto  mt-10 ">
                                <h3 className=" font-medium text-2xl  ">Recent Posts</h3>
                                <div className="flex   gap-x-3 items-center  font-normal text-base my-10">
                                    <div className=" w-[80px] h-[80px] rounded-xl overflow-hidden">
                                        <img className=" w-full h-full  object-cover" src="/blog/Rectangle 68-1.webp" alt="" />
                                    </div>
                                    <div className=" w-[149px]">
                                        <h4 className="text-sm font-normal">Going all-in with millennial design</h4>
                                        <p className=" text-sm text-text-links font-normal">03 Aug 2022</p>
                                    </div>
                                </div>
                                <div className="flex   gap-x-3 items-center  font-normal text-base my-10">
                                    <div className=" w-[80px] h-[80px] rounded-xl overflow-hidden">
                                        <img className=" w-full h-full  object-cover" src="/blog/Rectangle 68-1.webp" alt="" />
                                    </div>
                                    <div className=" w-[149px]">
                                        <h4 className="text-sm font-normal">Going all-in with millennial design</h4>
                                        <p className=" text-sm text-text-links font-normal">03 Aug 2022</p>
                                    </div>
                                </div>
                                <div className="flex   gap-x-3 items-center  font-normal text-base my-10">
                                    <div className=" w-[80px] h-[80px] rounded-xl overflow-hidden">
                                        <img className=" w-full h-full  object-cover" src="/blog/Rectangle 68-1.webp" alt="" />
                                    </div>
                                    <div className=" w-[149px]">
                                        <h4 className="text-sm font-normal">Going all-in with millennial design</h4>
                                        <p className=" text-sm text-text-links font-normal">03 Aug 2022</p>
                                    </div>
                                </div>



                            </div>

                        </div>


                    </div>
                </div>
            </div>
            <Banner />
        </section>
    );
}

export default Blog;
