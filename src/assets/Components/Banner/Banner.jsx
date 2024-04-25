// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Banner.css"
import { Autoplay, Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <div className='h-screen'>
            <Swiper
                spaceBetween={30}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=' swiper swiper-1 '>
                        <h3></h3>
                        <h1>Name</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' swiper swiper-1 '>
                        <h3></h3>
                        <h1>Name</h1>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;