import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import imagenStart from '../assets/imagen_Start.png'
import { Icon } from '@iconify/react';
import imagenLogin from '../assets/imagen_Login.png'
import { Link, useNavigate } from 'react-router-dom';
import imagenHome from '../assets/imagen_home.png'

export default function Start() {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-screen h-screen bg-[#1b8b48]">
                <SwiperSlide>
                    <div className='bg-[#4CAD73] w-[100%] h-[430px] rounded-br-[50%] flex items-center flex-col gap-10'>
                        <div className='text-white font-semibold text-[2rem] flex mt-24 ms-7'>
                            <h1>Kangsayur</h1><Icon className='text-[2.5rem]' icon="fa6-solid:carrot" />
                        </div>
                        <div className='mt-14 flex gap-4'>
                            <img src={imagenHome} alt="" />
                        </div>
                        <div className='w-[80%] text-center text-white text-[1.125rem] font-medium mt-6'>
                        Kangsayur is the best grocery app there is, with a great variety of products
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[#4CAD73] w-[100%] h-[430px] rounded-br-[50%] flex items-center flex-col gap-10'>
                        <div className='text-white font-semibold text-[2rem] flex mt-20 ms-7'>
                            <h1>Kangsayur</h1><Icon className='text-[2.5rem]' icon="fa6-solid:carrot" />
                        </div>
                        <div className='mt-10 flex gap-4'>
                            <img src={imagenStart} alt="" />
                        </div>
                        <div className='w-[80%] text-center text-white text-[1.125rem] font-medium'>
                            In Kangsayur you can find everything you need from the ease of your mobile
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[#4CAD73] w-[100%] h-[430px] rounded-br-[50%] flex items-center flex-col gap-10'>
                        <div className='text-white font-semibold text-[2rem] flex mt-16 ms-7'>
                            <h1>Kangsayur</h1><Icon className='text-[2.5rem]' icon="fa6-solid:carrot" />
                        </div>
                        <div className='mt-9 flex gap-4'>
                            <img src={imagenStart} alt="" />
                            <img src={imagenLogin} alt="" />
                        </div>
                        <div className='w-[80%] text-center text-white text-[1.125rem] font-medium'>
                            Kangsayur is a solution for Grocery Shopping every you need
                        </div>
                        <div className='w-[80%]'>
                            <Link to='/products'>
                                <button className='w-full bg-[#FFFFFF] text-center py-3 text-black text-[1.361rem] cursor-pointer rounded-[0.5rem] font-semibold'>
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
