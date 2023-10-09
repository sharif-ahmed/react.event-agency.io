
const Banner = () => {
    return (
        <div className='bg-bannerBG_With_Overlay bg-cover h-screen w-full'>
            <div className="container py-4 px-4 lg:px-0">
                <div className="flex items-center justify-end h-screen ">
                    <div data-aos="zoom-in" className="lg:w-[50%]">
                        <h2 className="text-white text-[31px] lg:text-[50px] font-semibold lg:leading-[65px]">The BD’s Best Event <br /> Management Agency <br /> for Corporate</h2>
                        <p className="text-[#ededed] text-[14px] lg:text-[15px] lg:leading-7 mt-4">Crafting exceptional corporate events tailored to your vision. Our seasoned team of professionals ensures precision and creativity in every detail. Elevate your brand and create unforgettable gatherings with our expertise.</p>
                        <button className="uppercase mt-8 text-[#fff] 
                        text-sm tracking-wider font-medium 
                        py-3 px-10 border border-[#fff]
                        hover:bg-white hover:text-[#1b1b1b]
                         hover:transition ease-in-out">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;