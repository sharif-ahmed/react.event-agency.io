/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useEffect } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import { useContext } from 'react';
import { AuthContext } from './../../providers/AuthProvider';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Services = () => {
    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const pathLocation = useLocation();
    const { pathname } = pathLocation;
    const [location, setLocation] = useState(null)
    useEffect(() => {
        fetch("/events.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setServices(data);
            })
            .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        setLocation(pathLocation);
        console.log(pathLocation);
    }, [pathLocation])

    return (
        <div className='container mx-auto py-10 px-4 lg:px-0'>
            <div data-aos="zoom-in" className='text-center my-12'>
                <h2 className='font-medium text-base text-[#e2564d] mb-2 uppercase'>Our Best Services</h2>
                <p className='font-bold text-xl lg:text-3xl'>Exceeding Expectations in Corporate Event Management</p>
                <p className='text-[15px] mt-4 lg:w-[65%] leading-8 mx-auto text-[#7A7A7A]'>Our seasoned team of professionals ensures precision and creativity in every detail. Elevate your brand and create unforgettable gatherings with our expertise.</p>
                {
                    user && !pathname?.includes("services") ? <button className="uppercase mt-8 mb-8 tracking-widest
                    text-[14px]  font-bold py-3 px-10 
                    border border-[#ddd] rounded-lg
                    hover:border-[#1b1b1b] text-[#1b1b1b]
                     hover:transition ease-in-out"><Link to={"/services"}>View All Services</Link></button> : ''
                }
            </div>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    user && pathname?.includes("services")
                        ?
                        services?.map((service, idx) => <ServiceCard key={idx} service={service}></ServiceCard>)
                        :
                        services?.slice(0, 6).map((service, idx) => <ServiceCard key={idx} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;