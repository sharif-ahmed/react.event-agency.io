/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { id, capmpaign_image, capmpaign_title, capmpaign_description, capmpaign_price } = service;
    return (
        <div data-aos="flip-right">
            <div className="mb-12">
                <figure className="mb-2"><img className="w-full object-cover h-[220px]" src={capmpaign_image} alt="Shoes" /></figure>
                <div className="">
                    <h2 className="text-[#1b1b1b] font-semibold
                     mt-3 mb-5 text-xl relative before:absolute before:top-0
                     before:left-0 before:bottom-0 before:bg-[#e2564d] before:w-[2px] 
                     before:mr-[10px] before:inline-block pl-2">{capmpaign_title}</h2>
                    <p className="text-[#7A7A7A] text-[15px] leading-7 mb-10">{
                        capmpaign_description?.length > 150 ? `${capmpaign_description.slice(0, 150)}.....` : capmpaign_description
                    }</p>
                    <div className="flex items-center justify-between">
                        <button className="uppercase tracking-widest
                        text-[14px]  font-bold py-3 px-10 
                        border border-[#ddd] rounded-lg
                        hover:border-[#1b1b1b] text-[#1b1b1b]
                         hover:transition ease-in-out"><Link to={`/service/${id}`}>View Details</Link></button>
                        <p className="mr-8 text-lg font-semibold ">${capmpaign_price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;