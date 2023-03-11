import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";



const DialSlider = () => {
    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                autoplay={false}
                slidesPerView={5}
                // slidesPerGroup={2}
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
                    <img src="https://cdn.shopify.com/s/files/1/2496/9194/files/client-1_500x500_5c3c4415-8f89-4a96-932d-de5352b350df_200x200.png?v=1613162805" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/2496/9194/files/client-2_500x500_b63eba29-0230-4f98-b3d7-8b83864808a8_200x200.png?v=1613162805" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/2496/9194/files/client-3_500x500_a6e4ceec-e789-4bc5-8604-dc8f84b99264_200x200.png?v=1613163141" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/2496/9194/files/client-4_500x500_55a8528b-8ae3-4541-a02f-25abf90e34de_200x200.png?v=1613163141" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/2496/9194/files/client-5_500x500_3da6bb9a-edd5-4f60-899e-0198bd21ef73_200x200.png?v=1613163141" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/2496/9194/files/client-6_500x500_b6aff7ec-5801-40ef-8666-47485579142c_200x200.png?v=1613163141" alt="" />
                </SwiperSlide>
                
            </Swiper>
            
        </div>
    );
};

export default DialSlider;