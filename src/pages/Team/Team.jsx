/* eslint-disable no-unused-vars */
import team1 from "../../assets/img/team1.webp"
import team2 from "../../assets/img/team2.webp"
import team3 from "../../assets/img/team3.webp"
import team4 from "../../assets/img/team4.webp"

import { FaInstagram, FaFacebook, FaTwitter, FaDribbble } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";

const Team = () => {
    return (
        <div className='container mx-auto px-4 lg:px-0'>
            <div className='text-center my-12'>
                <h2 className='font-medium text-base text-[#e2564d] mb-2 uppercase'>Our Team Members</h2>
                <p className='font-bold text-xl lg:text-3xl'>Exceeding Expectations in Corporate Event Management</p>
                <p className='text-[15px] mt-4 lg:w-[65%] leading-8 mx-auto text-[#7A7A7A]'>Our seasoned team of professionals ensures precision and creativity in every detail. Elevate your brand and create unforgettable gatherings with our expertise.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                <div className="relative group overflow-hidden border-[3px] border-[#fff]
                 hover:border-[#e2564d] p-1 transition ease-in-out">
                    <img className="w-full" src={team1} alt="" />
                    <div className="absolute -bottom-[300px] group-hover:bottom-0 left-0 right-0 transition transform
                     bg-[#e2564d] py-5 ">
                        <div className="text-center py-4">
                            <h2 className="text-2xl font-semibold text-[#fff]">John Smith</h2>
                            <p className="text-white">CEO</p>
                        </div>
                        <div className="flex gap-4 items-center justify-center">
                            <FaFacebook className="w-[36px] h-[36px] text-white  
                            border-2  border-[#fff] rounded-full p-1"></FaFacebook>
                            <FaTwitter className="w-[36px] h-[36px] text-white 
                             border-2  border-[#fff] rounded-full p-1"></FaTwitter>
                            <FaInstagram className="w-[36px] h-[36px] text-white 
                             border-2  border-[#fff] rounded-full p-1"></FaInstagram>
                            <FaDribbble className="w-[36px] h-[36px] text-white  
                            border-2 border-[#fff] rounded-full p-1"></FaDribbble>
                        </div>
                    </div>
                </div>
                <div className="relative group overflow-hidden border-[3px] border-[#fff]
                 hover:border-[#e2564d] p-1 transition ease-in-out">
                    <img className="w-full" src={team2} alt="" />
                    <div className="absolute -bottom-[300px] group-hover:bottom-0 left-0 right-0 transition transform
                     bg-[#e2564d] py-5 ">
                        <div className="text-center py-4">
                            <h2 className="text-2xl font-semibold text-[#fff]">David Miller</h2>
                            <p className="text-white">COO</p>
                        </div>
                        <div className="flex gap-4 items-center justify-center">
                            <FaFacebook className="w-[36px] h-[36px] text-white  
                            border-2  border-[#fff] rounded-full p-1"></FaFacebook>
                            <FaTwitter className="w-[36px] h-[36px] text-white 
                             border-2  border-[#fff] rounded-full p-1"></FaTwitter>
                            <FaInstagram className="w-[36px] h-[36px] text-white 
                             border-2  border-[#fff] rounded-full p-1"></FaInstagram>
                            <FaDribbble className="w-[36px] h-[36px] text-white  
                            border-2 border-[#fff] rounded-full p-1"></FaDribbble>
                        </div>
                    </div>
                </div>
                <div className="relative group overflow-hidden border-[3px] border-[#fff]
                 hover:border-[#e2564d] p-1 transition ease-in-out">
                    <img className="w-full" src={team3} alt="" />
                    <div className="absolute -bottom-[300px] group-hover:bottom-0 left-0 right-0 transition transform
                     bg-[#e2564d] py-5 ">
                        <div className="text-center py-4">
                            <h2 className="text-2xl font-semibold text-[#fff]">Jennifer Adams</h2>
                            <p className="text-white">Executive Director</p>
                        </div>
                        <div className="flex gap-4 items-center justify-center">
                            <FaFacebook className="w-[36px] h-[36px] text-white  
                            border-2  border-[#fff] rounded-full p-1"></FaFacebook>
                            <FaTwitter className="w-[36px] h-[36px] text-white 
                             border-2  border-[#fff] rounded-full p-1"></FaTwitter>
                            <FaInstagram className="w-[36px] h-[36px] text-white 
                             border-2  border-[#fff] rounded-full p-1"></FaInstagram>
                            <FaDribbble className="w-[36px] h-[36px] text-white  
                            border-2 border-[#fff] rounded-full p-1"></FaDribbble>
                        </div>
                    </div>
                </div>
                <div className="relative group overflow-hidden border-[3px] border-[#fff]
                 hover:border-[#e2564d] p-1 transition ease-in-out">
                    <img className="w-full" src={team4} alt="" />
                    <div className="absolute -bottom-[300px] group-hover:bottom-0 left-0 right-0 transition transform
                     bg-[#e2564d] py-5 ">
                        <div className="text-center py-4">
                            <h2 className="text-2xl font-semibold text-[#fff]">Sarah Johnson</h2>
                            <p className="text-white">Marketing Director</p>
                        </div>
                        <div className="flex gap-4 items-center justify-center">
                            <FaFacebook className="w-[36px] h-[36px] text-white  
                            border-2  border-[#fff] rounded-full p-1"></FaFacebook>
                            <FaTwitter className="w-[36px] h-[36px] text-white 
                             border-2  border-[#fff] rounded-full p-1"></FaTwitter>
                            <FaInstagram className="w-[36px] h-[36px] text-white 
                             border-2  border-[#fff] rounded-full p-1"></FaInstagram>
                            <FaDribbble className="w-[36px] h-[36px] text-white  
                            border-2 border-[#fff] rounded-full p-1"></FaDribbble>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Team;