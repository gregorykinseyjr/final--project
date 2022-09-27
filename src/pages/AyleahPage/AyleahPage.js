import React from 'react';
import Ayleah from '../../assets/images/Ayleah.jfif';

const AyleahPage = () => {
    return (
        <div className='banner_img'>
            <div className='container py-5'>
                <div className='row g-3 justify-content-between  '>
                    <div className='col-md-6 col-lg-5'>
                        <div className='text-white'>
                            <h3 className='pb-3'>About Ayleah</h3>
                            <p className='text-white'>My baby girl, she's super intelligent also. She loves to read books and can read books all day long and will read your books until you can not take anymore. She loves going to the beach and loves being outside.
                                She has given me the approval many times that I can do her hair enough to be out in public. Which is a good accomplishment for me. She is super excited to be a big sister because she was the youngest, and now she has someone she
                                can help take care of. She would put a big smile on your face with her goofiness, have you laughing, be super talkative, and think about things like making you realize a particular situation.<br></br>
                                <br></br><b>If you could be anything in the world, what would you be?</b><br></br>
                                I want to be a singer or also I want to be a cat because they have an easy life.<br></br>

                                <br></br><b>Where’s your favorite place to go?</b><br></br>
                                Gravity also because I get to play with other kids, and Alijah and I have so much fun.<br></br>

                                <br></br><b>Which cartoon character would you love to be your friend in real life?</b><br></br>
                                I'm not sure never.<br></br>

                                <br></br><b>Which pizza topping is best?</b><br></br>
                                I only like cheese on my pizza. The more cheese, the more I like it.<br></br>

                                <br></br><b>What’s your least favorite food of all time?</b><br></br>
                                I just really like cabbage.<br></br></p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-5'>
                        <div className='family_image'>
                            <img className='img-fluid rounded' src={Ayleah} alt="Ayleah" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AyleahPage;