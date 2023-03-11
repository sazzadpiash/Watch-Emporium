import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";



const ProductSlide = () => {
    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={false}
                mousewheel={true}
                keyboard={true}
                autoplay={false}
                slidesPerView={2}
                slidesPerGroup={2}
                spaceBetween={30}
                // slidesPerGroupSkip={2}
                loop={true}
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
                    <div className='w-[460px] h-[460px] ml-auto' style={{ background: 'url(https://cdn.shopify.com/s/files/1/2496/9194/files/img4_1512x.jpg) center no-repeat', backgroundSize: 'cover' }}>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[460px] h-[460px] mr-auto' style={{ background: 'url(https://cdn.shopify.com/s/files/1/2496/9194/files/img4_793904ac-dcfd-41c0-87d9-67f40c1fa0a6_970x.jpg?v=1613163412) center no-repeat' }}>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[460px] h-[460px] ml-auto' style={{ background: 'url(https://cdn.shopify.com/s/files/1/2496/9194/files/img3_b881118d-f51f-41e3-9d79-52a5fdab18be_1512x.jpg?v=1613163410) center no-repeat' }}>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[460px] h-[460px] mr-auto' style={{ background: 'url(https://cdn.shopify.com/s/files/1/2496/9194/files/img4_1512x.jpg) center no-repeat' }}>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[460px] h-[460px] ml-auto' style={{ background: 'url(https://cdn.shopify.com/s/files/1/2496/9194/files/img4_1512x.jpg) center no-repeat' }}>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[460px] h-[460px] mr-auto' style={{ background: 'url(https://cdn.shopify.com/s/files/1/2496/9194/files/img4_1512x.jpg) center no-repeat' }}>
                       
                    </div>
                </SwiperSlide>
                
            </Swiper>
            
        </div>
    );
};

export default ProductSlide;