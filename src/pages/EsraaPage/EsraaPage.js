import React from 'react';
import Esraa from '../../assets/images/Esraa.jpeg';


const EsraaPage = () => {
    return (
        <div className='banner_img'>
            <div className='container py-5'>
                <div className='row g-3 justify-content-between  '>
                    <div className='col-md-6 col-lg-5'>
                        <div className='text-white'>
                            <h3 className='pb-3'>About Esraa</h3>
                            <p className='text-white'>Welcome to my Family Tree blog.I will introduce you to the start of my family and give you an introduction about myself to my wife and kids.My wife and I have a baby girl name Amira.<br></br>
                                <br></br>My wife is Arabia, and the country of her background she is from is Palestine. She was born and raised in the land of Jordan, where I met her during my time of employment working in Jordan.<br></br>
                                <br></br>My wife loves to cook and is very good at cooking traditional Arabic meals.She has gone to college and has done cosmetology. Her passion is doing hair and makeup, getting customers ready for either their Wedding or going to a wedding party.My wife loves kids and wants me to give her twins next time, but we will see how things go, lol.I'm getting up in age myself going to be here soon, 39 years old, and my wife is 27 years of age.<br></br>
                                <br></br>أنا وزوجتي لدينا اسم طفلة ، أميرة. زوجتي من الجزيرة العربية ، وبلدها من خلفيتها هي من فلسطين. ولدت وترعرعت في أرض الأردن ، حيث التقيت بها خلال فترة عملي في الأردن. زوجتي تحب الطهي وهي جيدة جدا في طهي الوجبات العربية التقليدية. وقد ذهبت إلى الكلية وفعلت التجميل. شغفها هو القيام الشعر والماكياج ، والحصول على الزبائن على استعداد إما زفافهما أو الذهاب إلى حفل زفاف. زوجتي تحب الأطفال وتريد مني أن أعطي توأمها في المرة القادمة, لكننا سنرى كيف تسير الأمور, هههه</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-5'>
                        <div className='family_image'>
                            <img className='img-fluid rounded' src={Esraa} alt="Esraa" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EsraaPage;