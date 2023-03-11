import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('https://watch-server-theta.vercel.app/watches')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])
    return (
        <div>
            <div className='py-20 text-center bg-gray-100'>
                <h2 className='tajawal font-black text-4xl'>Product</h2>
            </div>
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
    );
};

export default Shop;