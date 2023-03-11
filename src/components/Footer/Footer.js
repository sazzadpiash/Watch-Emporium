import React from 'react';

const Footer = () => {
    return (
        <div className='py-28 border-t mt-20'>
            <div className='max-w-6xl mx-auto grid grid-cols-5'>
                <div>
                    <h4 className='text-[#9f7a49] text-2xl font-bold tajawal mb-5'>Information</h4>
                    <ul className='jura'>
                        <li>Search</li>
                        <li>Help</li>
                        <li>Shipping Details</li>
                        <li>Privacy Policy</li>
                        <li>Information</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-[#9f7a49] text-2xl font-bold tajawal mb-5'>My Account</h4>
                    <ul className='jura'>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Return Centre</li>
                        <li>Deliveries</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-[#9f7a49] text-2xl font-bold tajawal mb-5'>Help</h4>
                    <ul className='jura'>
                        <li>Search Terms</li>
                        <li>Advanced Search</li>
                        <li>Help & FAQs</li>
                        <li>Store Locations</li>
                        <li>Orders and Returns</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-[#9f7a49] text-2xl font-bold tajawal mb-5'>Watches</h4>
                    <ul className='jura'>
                        <li>Hizone Watch</li>
                        <li>Giordano Watch</li>
                        <li>Romex Watch</li>
                        <li>Smart Watches</li>
                        <li>Philippe Watches</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-[#9f7a49] text-2xl font-bold tajawal mb-5'>Support</h4>
                    <ul className='jura'>
                        <li>Chat Support</li>
                        <li>E-Mail Support</li>
                        <li>24/7 Support</li>
                        <li>Customer Stories</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>
            </div>
            <img src="https://cdn.shopify.com/s/files/1/2496/9194/files/2017-10-31_x49@2x.png" className='text-center block mx-auto mt-10' alt="" />
        </div>
    );
};

export default Footer;