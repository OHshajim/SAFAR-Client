const AboutUs = () => {
    return (
        <div className="max-w-[1600px] mx-auto my-20 ">
            <div className="my-10">
                <h3 className="text-center">About Us</h3>
                <h1 className="text-center text-2xl lg:text-4xl font-semibold mt-2" data-aos="fade-in">Discover the SAFAR Difference: Our Story</h1>
            </div>

            {/* Achievements */}

            <div className="flex flex-1 flex-col xl:flex-row  px-4 md:px-8 xl:gap-10" data-aos="fade-up">
                <div>
                    <img src="https://i.ibb.co/LnNPMDG/about-banner-three.png" alt="building" className="w-full rounded-xl" />
                </div>
                <div className="flex flex-1 flex-col my-8 space-y-2 md:space-y-8">
                    <div>
                        <h1 className="text-2xl lg:text-4xl font-bold">Our Achievements</h1>
                        <p>Embark on a journey where every detail is meticulously crafted to fulfill your wildest travel dreams<br /> Lets start your journey with SAFAR !!!  </p>
                    </div>
                    <div className="stats stats-vertical lg:stats-horizontal bg-transparent ">

                        <div className="stat">
                            <div className="stat-title">Total Spots</div>
                            <div className="stat-value">1000+</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Satisfaction Rate</div>
                            <div className="stat-value">92.5%</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Happy Tourists</div>
                            <div className="stat-value">15000+</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;