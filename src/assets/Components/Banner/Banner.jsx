// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Banner.css"
import { Pagination, Scrollbar, Autoplay } from 'swiper/modules';
const Banner = () => {
    return (
        <div className='h-screen'>
            <Swiper
                modules={[Pagination, Scrollbar, Autoplay]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                speed={1600}
                loop={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div className=' h-screen slide1'>
                        <div className='max-w-[1600px] mx-auto  flex flex-col justify-center px-20 h-screen '>
                            <h2 className='text-4xl font-semibold'>Crafting Memorable Getaways: The Artistry of Personalized Tourism Management!</h2>
                            <h1 className='text-5xl font-bold '>SAFAR</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' h-screen slide2 '>
                        <div className='max-w-[1600px] mx-auto  flex flex-col justify-center px-20 h-screen '>
                            <h2 className='text-4xl font-semibold'>Venture Beyond: Explore, Experience, Enjoy!</h2>
                            <h1 className='text-5xl font-bold '>SAFAR</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' h-screen slide3 '>
                        <div className='max-w-[1600px] mx-auto  flex flex-col justify-center px-20 h-screen '>
                            <h2 className='text-4xl font-semibold'>Discover Hidden Gems Together.</h2>
                            <h1 className='text-5xl font-bold '>SAFAR</h1>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;