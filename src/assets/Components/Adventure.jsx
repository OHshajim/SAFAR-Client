import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Adventure = () => {
    return (
        <div className="max-w-[1600px] mx-auto my-20 px-5">
            <h3 className="text-center">Upcoming Blogs</h3>
            <h1 className="text-5xl text-center mb-10 mt-2">Go Adventure Places</h1>
            <div className="">
                <Swiper
                    modules={[Pagination, Scrollbar]}

                    breakpoints={{
                        450: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    speed={1600}
                    spaceBetween={50}
                    loop={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >

                    <SwiperSlide>
                        <div className="  shadow-xl image-full group">
                            <img src="https://i.ibb.co/r6DjPN1/image-2.jpg" alt="Shoes" className="w-full" />
                            <div className=" absolute bottom-0 right-0 ">
                                <div className=" justify-center  delay-300 duration-500  text-white group-hover:bg-[#000000] group-hover:border p-5 ">
                                    <h2 className="text-base md:text-xl font-semibold">Vietnam</h2>
                                    <h3 className="group-hover:visible invisible text-sm sm:text-base md:text-xl lg:text-2xl   md:font-bold">Mekong Delta</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="   shadow-xl image-full group">
                            <figure><img src="https://i.ibb.co/7vJdhfY/image-3.jpg" alt="Shoes" className="w-full"/></figure>
                            <div className=" absolute bottom-0 right-0 ">
                                <div className=" justify-center delay-300 duration-500 text-white group-hover:bg-[#000000] group-hover:border p-5 ">
                                    <h2 className="text-base md:text-xl font-semibold">Bangladesh</h2>
                                    <h3 className="group-hover:visible invisible text-sm sm:text-base md:text-xl lg:text-2xl   md:font-bold">Rangamati</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="   shadow-xl image-full group ">
                            <figure><img src="https://i.ibb.co/02q8zt5/image-1.jpg" alt="Shoes"className="w-full" /></figure>
                            <div className=" absolute bottom-0 right-0 ">
                                <div className=" justify-center delay-300 duration-500 text-white group-hover:bg-[#000000] group-hover:border p-5 ">
                                    <h2 className="text-base md:text-xl font-semibold">Cambodia</h2>
                                    <h3 className="group-hover:visible invisible text-sm sm:text-base md:text-xl lg:text-2xl   md:font-bold">Phnom Penh</h3>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="  shadow-xl image-full group">
                            <figure><img src="https://i.ibb.co/Smsps5V/image-4.jpg" alt="Shoes" className="w-full"/></figure>
                            <div className=" absolute bottom-0 right-0 ">
                                <div className=" justify-center delay-300 duration-500 text-white group-hover:bg-[#000000] group-hover:border p-2 md:p-5 ">
                                    <h2 className="text-base md:text-xl font-semibold">Indonesia</h2>
                                    <h3 className="group-hover:visible invisible text-sm sm:text-base md:text-xl lg:text-2xl   md:font-bold">Bali</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>



            </div>

        </div>
    );
};
export default Adventure;