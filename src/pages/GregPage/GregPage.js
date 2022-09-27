import React from 'react';
import GregEsraa from '../../assets/images/Greg-Esraa.jfif';

const GregPage = () => {
    return (
        <div className='banner_img'>
            <div className='container py-5'>
                <div className='row g-3 justify-content-between  '>
                    <div className='col-md-6 col-lg-5'>
                        <div className='text-white'>
                            <h3 className='pb-3'>About Greg</h3>
                            <p className='text-white'>Welcome to my Family Tree blog. I will give you a top view into the start of my family tree. I'm 39 years olf a military Veteran. I joined the military in 2002 in communications.
                                For most of my career,I've worked in places and buildings where no windows and no electronics could even be around the building. I left the Us Army in 2014 after about 12 years of active duty and became a Contractor for the government.
                                I've worked for many three-letter Agencies, and I've worked all over the world. It was all a good experience for me. I learned and dealt with a lot and decided I wanted to do something else with a little less stress and more normal life.
                                So 2022, I leaped to learn Software engineering, and here I am now.I have four kids and am currently married to one of the most beautiful I could have met.I will be giving a little blog about myself and my family and our life journey. </p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-5'>
                        <div className='family_image'>
                            <img className='img-fluid rounded' src={GregEsraa} alt="GregEsraa" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GregPage;