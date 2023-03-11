import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const CheckoutPage = () => {
    const params = useParams();
    const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLISH_KEY}`);

    return (
        <div>
            <div className='max-w-7xl mx-auto flex'>
                <div className='w-3/5 p-10'>
                    <h2 className='text-4xl jura'>Chrono Dial</h2>
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li>Home</li>
                            <li className='font-bold'>Payment</li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <div className="w-full bg-white pr-20">
                                <h1 className="focus:outline-none text-3xl font-bold text-gray-800 mt-5">
                                    Profile info
                                </h1>
                                <p role="contentinfo" className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4">
                                    Fill in the data for profile. It will take a couple of minutes. <br />
                                    You only need a passport
                                </p>
                                <h2 className="text-xl font-semibold leading-7 text-gray-800 mt-10">
                                    Personal data
                                </h2>
                                <p className="text-sm font-light leading-none text-gray-600 mt-0.5">Your details and place of birth</p>
                                <div className="mt-8 md:flex items-center">
                                    <div className="flex w-full flex-col">
                                        <label className="mb-3 text-sm leading-none text-gray-800">First name</label>
                                        <input type="name" tabIndex={0} aria-label="Enter first name" className="w-full bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" required />
                                    </div>
                                    <div className="flex w-full flex-col md:ml-12 md:mt-0 mt-8">
                                        <label className="mb-3 text-sm leading-none text-gray-800">Last name</label>
                                        <input type="name" tabIndex={0} aria-label="Enter last name" className="w-full bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" required />
                                    </div>
                                </div>
                                <div className="mt-12 md:flex items-center">
                                    <div className="flex w-full flex-col">
                                        <label className="mb-3 text-sm leading-none text-gray-800">Email Address</label>
                                        <input type="email" tabIndex={0} aria-label="Enter email Address" className="w-full bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" required />
                                    </div>
                                    <div className="flex w-full flex-col md:ml-12 md:mt-0 mt-8">
                                        <label className="mb-3 text-sm leading-none text-gray-800">Phone number</label>
                                        <input type="number" tabIndex={0} aria-label="Enter phone number" className="w-full bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" required />
                                    </div>
                                </div>
                                <div className="mt-12 md:flex items-center">
                                    <div className="flex w-full flex-col">
                                        <label className="mb-3 text-sm leading-none text-gray-800">City</label>
                                        <input type tabIndex={0} aria-label="Enter date of birth" className="w-full bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" required />
                                    </div>
                                    <div className="flex w-full flex-col md:ml-12 md:mt-0 mt-8">
                                        <label className="mb-3 text-sm leading-none text-gray-800">Address</label>
                                        <input type="name" tabIndex={0} aria-label="Enter place of birth" className="w-full bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" required />
                                    </div>
                                </div>
                                <div className='mt-10'>
                                    <Elements stripe={stripePromise}>
                                    <CheckoutForm></CheckoutForm>
                                </Elements>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='w-2/5 p-10 mt-20'>
                    <div className='bg-gray-100 p-5 font-bold rounded'>
                        <p className='flex justify-between'><span>Totall:</span> <span>${params.price}</span></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CheckoutPage;