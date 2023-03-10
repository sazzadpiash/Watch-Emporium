import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { Link } from "react-router-dom";



const Slider = () => {
    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={false}
                mousewheel={true}
                keyboard={true}
                autoplay={false}
                modules={[
                    Navigation,
                    Pagination,
                    Mousewheel,
                    Keyboard,
                    Autoplay,
                ]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        style={{
                            backgroundImage:
                                "url(https://cdn.shopify.com/s/files/1/2496/9194/files/slider2-bg.jpg)",
                            backgroundPosition: "left top",
                            backgroundSize: "cover",
                        }}
                    >
                        <div className='text-right text-white h-[700px] w-5/6 mx-auto'>
                            <div className='flex items-end justify-center h-full flex-col'>
                                <p className='jura text-[#f3e0ca] text-3xl'>PREMIUM MODEL</p>
                                <p className='tajawal text-6xl mt-3 text-[#9f7a49]'>Stylish external wrist <br /> watch</p>
                                <button className='btn btn-outline rounded-none px-7 mt-5 text-[#9f7a49] border-[#9f7a49] hover:bg-[#9f7a49]'>EXPLORE</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            backgroundImage:
                                "url(https://cdn.shopify.com/s/files/1/2496/9194/files/slider3-bg.jpg)",
                            backgroundPosition: "left top",
                            backgroundSize: "cover",
                        }}
                    >
                        <div className=" lg:px-16 lg:py-28 h-96 lg:h-auto flex items-end lg:block">
                            <div className="w-full lg:w-1/2 p-4 mb-5 mx-10 lg:m-0 lg:p-10 text-center lg:text-left flex flex-col items-center lg:block">
                                <p className="text-xl lg:text-4xl mb-3">
                                    OUR MOST CUSTOMIZABLE BED YET
                                </p>
                                <p className="text-sm lg:text-base">
                                    Choose from 3 headboard faces and upholster
                                    it to your liking.
                                </p>
                                <Link
                                    to="/furniture/room/467"
                                    className="btn btn-primary text-white font-sans mt-3"
                                >
                                    View Bed
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            backgroundImage:
                                "url(https://cdn.shopify.com/s/files/1/2496/9194/files/slider1-bg.jpg)",
                            backgroundPosition: "left top",
                            backgroundSize: "cover",
                        }}
                    >
                        <div className=" lg:px-16 lg:py-28 h-96 lg:h-auto flex items-end lg:block">
                            <div className="w-full lg:w-1/2 bg-white p-4 mb-5 mx-10 lg:m-0 lg:p-10 text-center lg:text-left flex flex-col items-center lg:block">
                                <p className="text-xl lg:text-4xl mb-3">
                                    OUR MOST CUSTOMIZABLE BED YET
                                </p>
                                <p className="text-sm lg:text-base">
                                    Choose from 3 headboard faces and upholster
                                    it to your liking.
                                </p>
                                <Link
                                    to="/furniture/room/467"
                                    className="btn btn-primary text-white font-sans mt-3"
                                >
                                    View Bed
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <img
                        src="https://res.cloudinary.com/dj6f8ywcl/image/upload/v1674762574/slider1_mfwkx9.png"
                        className="w-full relative"
                        alt=""
                    />
                    <div className="w-auto lg:w-full text-center lg:text-left absolute z-10 top-28 left-20">
                        <div className="lg:w-2/5 bg-white py-16 px-10">
                            <p className="text-4xl mb-3">
                                OUR MOST CUSTOMIZABLE BED YET
                            </p>
                            <p>
                                Choose from 3 headboard faces and upholster it
                                to your liking.
                            </p>
                            <Link
                                to="/furniture/room/467"
                                className="btn btn-primary text-white font-sans mt-3"
                            >
                                View Bed
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://res.cloudinary.com/dj6f8ywcl/image/upload/v1674763083/slider_bbl2s9.jpg"
                        className="w-full relative"
                        alt=""
                    />
                    <div className="w-full text-left absolute z-10 top-28 right-20">
                        <div className="w-2/5 ml-auto bg-white py-16 px-10">
                            <p className="text-4xl mb-3">
                                OUR MOST CUSTOMIZABLE BED YET
                            </p>
                            <p>
                                Choose from 3 headboard faces and upholster it
                                to your liking.
                            </p>
                            <Link
                                to="/furniture/room/467"
                                className="btn btn-primary text-white font-sans mt-3"
                            >
                                View Bed
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://res.cloudinary.com/dj6f8ywcl/image/upload/v1674763083/slider_axgjhl.png"
                        className="w-full relative"
                        alt=""
                    />
                    <div className="w-full text-left absolute z-10 top-28 right-20">
                        <div className="w-2/5 ml-auto bg-white py-16 px-10">
                            <p className="text-4xl mb-3">
                                OUR MOST CUSTOMIZABLE BED YET
                            </p>
                            <p>
                                Choose from 3 headboard faces and upholster it
                                to your liking.
                            </p>
                            <Link
                                to="/furniture/room/467"
                                className="btn btn-primary text-white font-sans mt-3"
                            >
                                View Bed
                            </Link>
                        </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default Slider;