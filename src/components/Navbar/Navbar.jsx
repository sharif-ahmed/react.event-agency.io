/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../providers/AuthProvider';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOutUser()
            .then((result) => {
                console.log(result);
                navigate("/login");
            })
            .catch((error) => { console.error(error) })
    }

    return (
        // text-[#3eb896]
        <header className='shadow-md py-5'>
            <div className='container mx-auto flex flex-col lg:flex-row gap-5 lg:gap-0 px-3 lg:px-0 items-center justify-between'>
                <h2 className='font-bold text-3xl uppercase'>
                    <span className='text-[#e2564d]'>Corporate</span> Hub
                </h2>
                <nav>
                    <ul className='flex flex-wrap gap-8'>
                        <li className='text-[16px] text-[#131313] font-medium'>
                            <NavLink to={"/"} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#e2564d]" : "hover:text-[#e2564d]"}>Home</NavLink>
                        </li>
                        <li className='text-[16px] text-[#131313] font-medium '>
                            <NavLink to={"/about-us"} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#e2564d]" : "hover:text-[#e2564d]"}>About Us</NavLink>
                        </li>
                        {
                            user ? <>
                                <li className='text-[16px] text-[#131313] font-medium'>
                                    <NavLink
                                        to={"/services"}
                                        className={
                                            ({ isActive, isPending }) => isPending ? "pending" :
                                                isActive ? "text-[#e2564d]" : "hover:text-[#e2564d]"
                                        }
                                    >Services</NavLink>
                                </li>
                                <li className='text-[16px] text-[#131313] font-medium  '>
                                    <NavLink to={"/works"} className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#e2564d]" : "hover:text-[#e2564d]"}>Works</NavLink>
                                </li>
                                <li className='text-[16px] text-[#131313] font-medium '>
                                    <NavLink to={"/team"} className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#e2564d]" : "hover:text-[#e2564d]"}>Team</NavLink>
                                </li>
                            </> : <>
                                <li className='text-[16px] text-[#131313] font-medium '>
                                    <NavLink to={"/login"} className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#e2564d]" : "hover:text-[#e2564d]"}>Login</NavLink>
                                </li>
                                <li className='text-[16px] text-[#131313] font-medium '>
                                    <NavLink to={"/register"} className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#e2564d]" : "hover:text-[#e2564d]"}>Sign Up</NavLink>
                                </li>
                            </>
                        }


                    </ul>
                </nav>
                {
                    user && (<div className='flex gap-2 items-center justify-center'>
                        <img className='w-[38px] h-[38px] rounded-full' src={user?.photoURL} alt="" />
                        <p>{user?.displayName}</p>
                        <button onClick={handleSignOut} className='btn hover:text-black hover:btn-ghost text-white bg-red-500 border-none rounded-lg py-4 px-6'>Log Out</button>
                    </div>)
                }
            </div>
        </header>
    );
};

export default Navbar;