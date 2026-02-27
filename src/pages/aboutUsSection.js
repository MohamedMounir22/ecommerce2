

// about us section
import React from 'react';
import './aboutUs.css';
    import smartphonePlus from '../imgs/phone-02.jpg';
import smartwatchUltra from '../imgs/watch-02.jpg';
import jacket from '../imgs/jacket.jpg';
import singleSofa from '../imgs/single-sofa-02.jpg';
function AboutUsSection() {
    return (
        <div className='aboutUsContainer ' style={{ padding: '2rem' }}>
            <h1>About Us</h1>
            <hr />
            <p className='aboutUsP'>Welcome to our e-commerce store! We are passionate about providing you with a seamless shopping experience, offering a wide range of high-quality products at competitive prices. Our mission is to make online shopping easy, enjoyable, and accessible for everyone.Welcome to our e-commerce store! We are passionate about providing you with a seamless shopping experience, accessible for everyone.</p>
            
            <h1 className='py3'>Our Products</h1>
            {/* cards of products types */}
                <div className='productsCardsContainer d-flex flex-wrap justify-content-center gap-4'>
                    <div className='productCard '>
                        <img src={smartphonePlus} alt='Product 1' />
                        <h5>Electronics</h5>
                    </div>
                    <div className='productCard'>
                        <img src={jacket} alt='Product 2' />
                        <h5>Fashion</h5>
                    </div>
                    <div className='productCard'>
                        <img src={singleSofa} alt='Product 3' />
                        <h5>Home & Garden</h5>
                    </div>

                    <div className='productCard'>
                        <img src={smartwatchUltra} alt='Product 4' />
                        <h5>accessories</h5>
                    </div>
                </div>

        </div>

        // our products cards

    );
}

export default AboutUsSection;