import React from 'react';
import Amira from '../../assets/images/Amira.jfif';


const AmiraPage = () => {
    return (
        <div className='banner_img'>
            <div className='container py-5'>
                <div className='row g-3 justify-content-between  '>
                    <div className='col-md-6 col-lg-5'>
                        <div className='text-white'>
                            <h3 className='pb-3'>About Amira</h3>
                            <p className='text-white'>Amira is our newest addition to the Kinsey family. My little crazy baby I say to her my little princess. She is now eight months old and very active. She loves to pull herself up and hold onto everything. She can be crazy at times and have a little attitude already.
                                She loves to play in the water and will let you know she doesn't want to be taken out when you try to remove her. She tiny at the moment, but the voice of a big kid already.<br></br> <br></br>I believe she might be a singer. She already has some vocals on her.
                                She loves to cuddle and be held, she explores more foods, and she's going to be an eater. She loves to go for walks and see the night sky. She likes animals until they get too close to her and is ready to kick them away.
                                She has some solid little legs and loves kicking you with one leg.</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-5'>
                        <div className='family_image'>
                            <img className='img-fluid rounded' src={Amira} alt="Amira" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmiraPage;