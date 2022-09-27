import React from 'react';
import Amare from '../../assets/images/Amare.jpeg';

const AmarePage = () => {
    return (
        <div className='banner_img'>
            <div className='container py-5'>
                <div className='row g-3 justify-content-between  '>
                    <div className='col-md-6 col-lg-5'>
                        <div className='text-white'>
                            <h3 className='pb-3'>About Amare</h3>
                            <p className='text-white'>My first born, my little man, done grown up to fats on me. Remember it like yesterday when he was born. You could tell now, but he was born seven weeks early and so tiny I used to put him in my pocket to keep him warm.
                                Being born so early, we all thought he would have problems before, but it surprised the doctors and us and shocked everyone.<br></br>
                                <br></br>He were minutes old, crying and screaming, and rolling minutes old, I tell you.
                                The nurse was shocked to see a newborn turning his body to roll. But he quickly gained weight and size at a fast pace. When he first started walking, he was doing things that old kids his age couldn't do.
                                He was seriously good at everything he wanted to do. At one year old, he was already dripping basketball and shooting the ball with form.<br></br>
                                <br></br>As he got older, he played all sports and was always the start everywhere he went and played.
                                He's done in Soccer, Basketball, Baseball, Track & Field, and Football. And he always shines in everything he puts his mind to. He is now 17 years old and taller than me, and I'm a strong 5'11, lol. He is a junior in high school at
                                the moment.Our family tree is constantly growing, and even with my oldest right now, soon to be starting his Family Tree, I'll be a Grandpa soon, so I'm looking forward to an update in the future with this. </p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-5'>
                        <div className='family_image'>
                            <img className='img-fluid rounded' src={Amare} alt="Amare" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmarePage;