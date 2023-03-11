import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DialSlider from './Slider/DialSlider';
import ProductSlide from './Slider/ProductSlide';
import Slider from './Slider/Slider';

const Home = () => {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('https://watch-server-theta.vercel.app/watches')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])
    return (
        <div>
            <Slider></Slider>
            {/* second section */}
            <div>
                <div className='flex'>
                    <div className='basis-1/2'>
                        <div
                            className='relative promo-product'
                        >
                            <img className='h-[380px]' src="https://cdn.shopify.com/s/files/1/2496/9194/files/img1_fd29a0af-d3d1-4196-a870-038c137ebdaf_1728x.jpg" alt="" />
                            <div className='text-right text-white h-[380px] w-5/6 mx-auto absolute top-0 left-0'>
                                <div className='flex items-end justify-center h-full flex-col'>
                                    <p className='text-[#9f7a49] text-5xl'>Analog & Digital</p>
                                    <p className='text-white mt-5 jura font-semibold'>WEAR YOUR STYLE WITH VERVE & ATTITUDE</p>
                                    <button className='btn btn-outline rounded-none px-7 mt-5 text-[#9f7a49] border-[#9f7a49] hover:bg-[#9f7a49]'>EXPLORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2'>
                        <div
                            className='relative promo-product'
                        >
                            <img className='h-[380px]' src="https://cdn.shopify.com/s/files/1/2496/9194/files/img2_0b6fbb1b-4374-4875-a7ff-93f41dce689e_1728x.jpg" alt="" />
                            <div className='text-right text-white h-[380px] w-5/6 mx-auto absolute top-0 left-0'>
                                <div className='flex items-end justify-center h-full flex-col'>
                                    <p className='text-[#9f7a49] text-5xl'>Analog & Digital</p>
                                    <p className='text-white mt-5 jura font-semibold'>WEAR YOUR STYLE WITH VERVE & ATTITUDE</p>
                                    <button className='btn btn-outline rounded-none px-7 mt-5 text-[#9f7a49] border-[#9f7a49] hover:bg-[#9f7a49]'>EXPLORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about watch section */}
            <div style={{ background: 'url("https://cdn.shopify.com/s/files/1/2496/9194/files/chrono-img1_4e04e0d0-e7b2-4e6a-8a8f-e87caa09bfcc.jpg")', backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }}>
                <div className='w-1/2 py-20 bg-black ml-auto pr-32'>
                    <p className='text-white mt-5 jura font-bold'>WEAR YOUR STYLE WITH VERVE & ATTITUDE</p>
                    <p className='text-[#9f7a49] mt-5 pr-10 text-2xl'>The Watches We Sell Are Original And Vendor Certified For A Peerless Performance!</p>
                    <p className='text-gray-500 mt-5 jura font-bold'>uis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, uis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget</p>
                    <button className='btn btn-outline rounded-none px-7 mt-5 text-[#9f7a49] border-[#9f7a49] hover:bg-[#9f7a49]'>EXPLORE</button>
                </div>
            </div>
            {/* watches section */}
            <div className='text-center py-20'>
                <p className='mt-5 jura font-bold'>LATEST WATCHES YOU CAN'T RESIST!</p>
                <p className='mt-2 text-4xl font-bold'>Universal Timekeepers of the world</p>
                <div className='max-w-7xl mx-auto grid grid-cols-3 gap-10 mt-10'>
                    {
                        watches.map(watch => {
                            return <Link to={`watch/${watch._id}`} key={watch._id} className='duration-300'>
                                <img className='w-full inline-block' src={watch.image} alt="" />
                                <div className='grid grid-cols-6 mt-3'>
                                    <p className='jura text-left col-span-5 font-bold'>{watch.name}</p>
                                    <p className='jura text-right font-bold uppercase'>${watch.price}</p>
                                </div>

                            </Link>
                        })
                    }


                </div>
            </div>
            {/* product slide */}
            <div className='watch-slider py-20' style={{ background: 'url(https://cdn.shopify.com/s/files/1/2496/9194/files/chrono-img1_4e04e0d0-e7b2-4e6a-8a8f-e87caa09bfcc.jpg) center', backgroundSize: 'cover' }}>
                <p className='text-white font-bold z-10 jura text-center mb-5'>CELEBRATE THE FESTIVITIES</p>
                <p className='text-[#9f7a49] mt-5 text-4xl tajawal font-black text-center mb-10'>Let the celebrations begin brightly by your beautiful gifts</p>
                <div className='w-5/6 mx-auto'>
                    <ProductSlide></ProductSlide>
                </div>
            </div>
            {/* dial slide */}
            <div className='text-center py-20 max-w-5xl mx-auto'>
                <p className='jura uppercase font-bold text-center'>HOW DO YOU FEEL?</p>
                <hr className='w-28 border-1 border-black my-3 text-center mx-auto' />
                <p className='tajawal text-3xl font-black text-center mb-10'>Choose You Dial</p>
                <DialSlider></DialSlider>
            </div>
            <div className='py-20' style={{ background: 'url(https://cdn.shopify.com/s/files/1/2496/9194/files/specification-banner.jpg) center', backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }}>
                <div className='flex max-w-7xl mx-auto'>
                    <div className='basis-1/2'></div>
                    <div className='basis-1/2'>
                        <p className='text-white mt-5 jura font-bold'>DISPLAY YOUR DIALS!</p>
                        <p className='text-[#9f7a49] mt-5 pr-10 text-2xl'>Watches That Add A Signature To Your Looks</p>
                        <p className='text-gray-500 mt-5 jura font-bold'>Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
                        <div className='grid grid-cols-2 gap-5 mt-5'>
                            <div className='flex justify-start items-center gap-4'>
                                <img src="https://cdn.shopify.com/s/files/1/2496/9194/files/1_180x.jpg?v=1613163143" className='rounded-full' alt="" />
                                <p className='jura text-white text-lg'>Stitched leather straps</p>
                            </div>
                            <div className='flex justify-start items-center gap-4'>
                                <img src="https://cdn.shopify.com/s/files/1/2496/9194/files/2_180x.jpg?v=1613163143" className='rounded-full' alt="" />
                                <p className='jura text-white text-lg'>Rally-style straps</p>
                            </div>
                            <div className='flex justify-start items-center gap-4'>
                                <img src="https://cdn.shopify.com/s/files/1/2496/9194/files/3_180x.jpg?v=1613163143" className='rounded-full' alt="" />
                                <p className='jura text-white text-lg'>Leather straps</p>
                            </div>
                            <div className='flex justify-start items-center gap-4'>
                                <img src="https://cdn.shopify.com/s/files/1/2496/9194/files/4_180x.jpg?v=1613163144" className='rounded-full' alt="" />
                                <p className='jura text-white text-lg'>Bund straps</p>
                            </div>
                            <div className='flex justify-start items-center gap-4'>
                                <img src="https://cdn.shopify.com/s/files/1/2496/9194/files/5_180x.jpg?v=1613163144" className='rounded-full' alt="" />
                                <p className='jura text-white text-lg'>Padded watch straps</p>
                            </div>
                            <div className='flex justify-start items-center gap-4'>
                                <img src="https://cdn.shopify.com/s/files/1/2496/9194/files/6_180x.jpg?v=1613163144" className='rounded-full' alt="" />
                                <p className='jura text-white text-lg'>Leather NATO straps</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className='max-w-6xl my-20 mx-auto grid grid-cols-3 gap-10'>
                    <div className='duration-300 text-center'>
                        <img className='w-full inline-block' src="https://cdn.shopify.com/s/files/1/1692/8885/files/Collection-1_600x.jpg" alt="" />
                        <p className='tajawal text-xl font-bold mt-5'>Black Dial</p>
                        <p className='jura uppercase'>Details</p>
                    </div>
                    <div className='duration-300 text-center'>
                        <img className='w-full inline-block' src="https://cdn.shopify.com/s/files/1/1692/8885/files/collection-img_600x.jpg?v=1613506305" alt="" />
                        <p className='tajawal text-xl font-bold mt-5'>Black Dial</p>
                        <p className='jura uppercase'>Details</p>
                    </div>
                    <div className='duration-300 text-center'>
                        <img className='w-full inline-block' src="https://cdn.shopify.com/s/files/1/1692/8885/files/collection-3_14fa998b-de23-467a-a67c-86dc321fa7bd_600x.jpg?v=1613506289" alt="" />
                        <p className='tajawal text-xl font-bold mt-5'>Black Dial</p>
                        <p className='jura uppercase'>Details</p>
                    </div>

                </div>
            </div>
            <div className='relative'>
                <div className='bg-black/50 z-10 h-full w-full absolute top-0 right-0 left-0 bottom-0'></div>
                <video src='https://content.rolex.com/dam/homepage/hss/watches/classic-watches/datejust/datejust-41/m126333-0010/homepage-datejust-41-m126333-0010.mp4' autoPlay muted loop></video>
                <div className='z-20 h-full w-full absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center flex-col'>
                    <p className='tajawal text-white mb-5 font-black uppercase text-5xl text-center'>Chrono Dial ... Time Is Ticking Away!</p>
                    <p className='text-white jura font-black uppercase text-xl text-center'>DECIDE NOW TO UPDATE!</p>
                    <button className='btn btn-outline rounded-none px-7 mt-5 text-white border-white hover:bg-[#9f7a49]'>EXPLORE</button>
                </div>
            </div>
            <div>
                <div className='max-w-7xl my-20 flex mx-auto shadow-lg border'>
                    <div className='w-1/2 p-10'>
                        <p className='tajawal mb-5 font-black uppercase text-3xl'>OUR GOOD WATCHES IS...</p>
                        <p className='jura font-black uppercase text-sm'>With 24/7 live streaming, a versatile magnetic stand, person alerts with Nest Aware and one app for all your Nest products, Nest Cam helps you keep an eye on what matters. From anywhere.</p>
                        <button className='btn btn-outline rounded-none px-7 mt-5 text-[#9f7a49] border-[#9f7a49] hover:bg-[#9f7a49]'>EXPLORE</button>
                    </div>
                    <div className='w-1/2'>
                        <img src="https://cdn.shopify.com/s/files/1/0013/5567/7770/files/img-6_1920X.jpg?v=1613530994" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className='max-w-7xl mx-auto'>
                    <p className='jura uppercase font-bold text-center'>HAPPENINGS AROUND</p>
                    <hr className='w-28 border-1 border-black my-3 text-center mx-auto' />
                    <p className='tajawal uppercase text-6xl font-bold text-center '>OUR BLOG</p>
                    <div className='grid grid-cols-3 gap-10'>
                        <div className='border'>
                            <img className='mb-3' src="https://cdn.shopify.com/s/files/1/1692/8885/articles/blog4.jpg?v=1485167450" alt="" />
                            <div className='p-5 '>
                                <p className='jura uppercase font-bold'>By Ram M | January 31, 2017 | 2 Comments</p>
                                <p className='tajawal uppercase mt-3 mb-2 text-2xl font-bold '>OUR BLOG</p>
                                <p className='jura uppercase text-sm font-bold'>Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Elementum nisi quis.</p>
                                <button className='btn btn-outline rounded-none px-7 mt-5 text-[#9f7a49] border-[#9f7a49] hover:bg-[#9f7a49]'>EXPLORE</button>
                            </div>
                        </div>
                        <div className='border'>
                            <img className='mb-3' src="https://cdn.shopify.com/s/files/1/2496/9194/articles/blog12.jpg?v=1509972401" alt="" />
                            <div className='p-5 '>
                                <p className='jura uppercase font-bold'>By Ram M | January 31, 2017 | 2 Comments</p>
                                <p className='tajawal uppercase mt-3 mb-2 text-2xl font-bold '>OUR BLOG</p>
                                <p className='jura uppercase text-sm font-bold'>Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Elementum nisi quis.</p>
                                <button className='btn btn-outline rounded-none px-7 mt-5 text-[#9f7a49] border-[#9f7a49] hover:bg-[#9f7a49]'>EXPLORE</button>
                            </div>
                        </div>
                        <div className='border'>
                            <img className='mb-3' src="https://cdn.shopify.com/s/files/1/2496/9194/articles/blog8.jpg?v=1509972395" alt="" />
                            <div className='p-5 '>
                                <p className='jura uppercase font-bold'>By Ram M | January 31, 2017 | 2 Comments</p>
                                <p className='tajawal uppercase mt-3 mb-2 text-2xl font-bold '>OUR BLOG</p>
                                <p className='jura uppercase text-sm font-bold'>Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Elementum nisi quis.</p>
                                <button className='btn btn-outline rounded-none px-7 mt-5 text-[#9f7a49] border-[#9f7a49] hover:bg-[#9f7a49]'>EXPLORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;