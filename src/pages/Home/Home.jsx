/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import Testimonilas from "../../components/Testimonials/Testimonilas";
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../../providers/AuthProvider';
import Footer from './../../components/Footer/Footer';

const Home = () => {

    const { loading } = useContext(AuthContext);


    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Testimonilas></Testimonilas>
            <Footer></Footer>
        </div>
    );
};

export default Home;