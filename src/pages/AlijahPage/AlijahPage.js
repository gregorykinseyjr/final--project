import React from 'react';
import Alijah from '../../assets/images/Alijah.jfif';

const AlijahPage = () => {
    return (
        <div className='banner_img'>
            <div className='container py-5'>
                <div className='row g-3 justify-content-between  '>
                    <div className='col-md-6 col-lg-5'>
                        <div className='text-white'>
                            <h3 className='pb-3'>About Alijah</h3>
                            <p className='text-white'>The nickname I gave well a few nicknames was A-Beezy or A-booder, which I still call him until this day since he was born. My son's laugh would have you cracking up and animated when he laughs. He is super intelligent and super creative.
                                He has a unique way of doing things. He wants something done. He loves sports also and wants to play more and get better. Alijah is already into Technology and like's to build computers and robots and learn about the internals of a computer.
                                I don't know much about gaming systems as I don't play too much, but he loves Fortnite, knows the ends and out of the game, and can talk to you forever about the game.<br></br>

                                <br></br><b>If you could be anything in the world, what would you be?</b><br></br>
                                I would want to be a basketball player or a basketball coach, maybe.<br></br>

                                <br></br><b>Wheres your favorite place to go?</b><br></br>
                                Gravity because I like. to be active and jump around.<br></br>

                                <br></br><b>Which cartoon character would you love to be your friend in real life?</b><br></br>
                                Gumball because the whole family is super funny, and we would always be on adventures and have many laughs.<br></br>

                                <br></br><b>Which pizza topping is best?</b><br></br>
                                The only topping I like on my pizza is Pepperoni.<br></br>

                                <br></br><b>Whats your least favorite food of all time?</b><br></br>
                                My all-time favorite now is macaroni and cheese. I know before I didn't like it so much, but I love it now.<br></br></p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-5'>
                        <div className='family_image'>
                            <img className='img-fluid rounded' src={Alijah} alt="Alijah" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlijahPage;