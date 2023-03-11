import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleProduct = () => {
    const params = useParams();
    const [watch, setWatch] = useState([]);
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('https://watch-server-theta.vercel.app/watches')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])
    useEffect(() => {
        fetch(`https://watch-server-theta.vercel.app/watch/${params.id}`)
            .then(res => res.json())
            .then(data => setWatch(data))
    }, [params])
    return (
        <div>
            <div className='py-20 text-center bg-gray-100'>
                <h2 className='tajawal font-black text-4xl'>Product</h2>
                <h2 className='jura font-bold text-xl'>All Product / {watch.name}</h2>
            </div>
            <div className='max-w-7xl mx-auto flex gap-10 py-10'>
                <div className='w-1/2'>
                    <img src={watch.image} alt="" />
                </div>
                <div className='w-1/2'>
                    <p className='tajawal font-bold text-6xl'>{watch.name}</p>
                    <p className='tajawal font-bold text-4xl my-3'>${watch.price}</p>
                    <p className='pb-3'>
                        {watch.description}
                    </p>
                    <p className='jura'>Color: {watch.color}</p>
                    <p className='jura'>Vendor: {watch.vendor}</p>
                    <Link to={`/checkout/${watch.price}`} className='btn btn-outline rounded-none px-7 mt-5 text-[#9f7a49] border-[#9f7a49] hover:bg-[#9f7a49]'>Buy Now</Link>
                </div>
            </div>
            <div>
                <div className='text-center py-20'>
                    <p className='mt-2 text-3xl font-bold'>Related Products</p>
                    <div className='max-w-7xl mx-auto grid grid-cols-3 gap-10 mt-10'>
                        {
                            watches.map(watch => {
                                return <Link to={`/watch/${watch._id}`} key={watch._id} className='duration-300'>
                                    <img className='w-full inline-block' src={watch.image} alt="" />
                                    <div>
                                        <span></span>
                                    </div>
                                    <div className='grid grid-cols-6 mt-3'>
                                        <p className='jura text-left col-span-5 font-bold'>{watch.name}</p>
                                        <p className='jura text-right font-bold uppercase'>${watch.price}</p>
                                    </div>

                                </Link>
                            })
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;