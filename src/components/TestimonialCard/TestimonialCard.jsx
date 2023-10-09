/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import client1 from "../../assets/img/woman-client-1.jpg"
import client2 from "../../assets/img/woman-client-2.jpg"
import client3 from "../../assets/img/man-client-1.jpg"
import client4 from "../../assets/img/man-client-2.jpg"

import { FaQuoteLeft,FaFacebook } from "react-icons/fa";
import { useEffect, useState } from "react";

const TestimonialCard = ({ testimonial }) => {
    const { name, position, company, quote, photo_id } = testimonial;
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        switch (photo_id) {
            case 1:
                setPhoto(client1);
                break;
            case 2:
                setPhoto(client2);
                break;
            case 3:
                setPhoto(client3);
                break;
            case 4:
                setPhoto(client4);
                break;
        }
    }, [photo_id])

    return (
        <div data-aos="fade-down" className="flex flex-col lg:flex-row gap-4 mb-5 hover:shadow-xl transition">
            <div className="lg:w-[28%]">
                <img className="w-[100%] object-cover" src={photo} alt="" />
            </div>
            <div className="lg:w-[72%] flex flex-col ">
                <FaQuoteLeft className="text-[#e2564d] flex-none mt-4"></FaQuoteLeft>
                <p className="my-2 text-[15px] leading-[30px] grow">{quote.slice(0, 150)}.....</p>
                <p className="uppercase text-[#1b1b1b] font-bold flex-none pb-4">{name}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;