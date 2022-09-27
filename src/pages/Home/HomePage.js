import React from 'react';
import banner1 from '../../assets/images/kinseys.jpeg';
import banner2 from '../../assets/images/us.jpg';
import banner3 from '../../assets/images/us1.jpg';
import banner4 from '../../assets/images/Greg-Esraa.jfif';
import post1 from '../../assets/images/Amira.jfif';
import post2 from '../../assets/images/Alijah.jfif';
import post3 from '../../assets/images/Ayleah.jfif';
import post4 from '../../assets/images/Amare.jpeg';





const HomePage = ({ isLoggedIn }) => {
    return (
        <div className='bg-light'>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="" alt='banner1' />
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="" alt='banner2' />
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="" alt='banner3' />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className="container py-5">
                <div className="row">
                    {/* <!-- Blog entries--> */}
                    <div className="col-lg-8">
                        {/* <!-- Featured blog post--> */}
                        <div className="card mb-4">
                            <a href="#!"><img className="card-img-top" src={banner4}
                                alt="banner4" /></a>
                            <div className="card-body">
                                <div className="small text-muted">Sept 18, 2021</div>
                                <h2 className="card-title">Greg & Esraa</h2>
                                <p className="card-text">Married for one year currently living in the country of Jordan</p>
                                <a className="btn btn-primary mt-3" href="#!">Read more →</a>
                            </div>
                        </div>
                        {/* <!-- Nested row for non-featured blog posts--> */}
                        <div className="row blog_post">
                            <div className="col-lg-6">
                                <div className="card mb-4">
                                    <a href="#"><img className="card-img-top"
                                        src={post1} alt="post1" /></a>
                                    <div className="card-body">
                                        <div className="small text-muted">January 21, 2021</div>
                                        <h2 className="card-title h4">Amira</h2>
                                        <p className="card-text">8 Months old</p>
                                        <a className="btn btn-primary mt-3" href="#!">Read more →</a>
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <a href="#"><img className="card-img-top"
                                        src={post2} alt="post2" /></a>
                                    <div className="card-body">
                                        <div className="small text-muted">October 11, 2009</div>
                                        <h2 className="card-title h4">Alijah</h2>
                                        <p className="card-text">13 years old</p>
                                        <a className="btn btn-primary mt-3" href="#!">Read more →</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card mb-4">
                                    <a href="#"><img className="card-img-top"
                                        src={post3} alt="post3" /></a>
                                    <div className="card-body">
                                        <div className="small text-muted">September 26, 2014</div>
                                        <h2 className="card-title h4">Ayleah</h2>
                                        <p className="card-text">8 Years old</p>
                                        <a className="btn btn-primary mt-3" href="#!">Read more →</a>
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <a href="#"><img className="card-img-top"
                                        src={post4} alt="post4" /></a>
                                    <div className="card-body">
                                        <div className="small text-muted">September 18, 2005</div>
                                        <h2 className="card-title h4">Amare</h2>
                                        <p className="card-text">17 Years old</p>
                                        <a className="btn btn-primary mt-3" href="#!">Read more →</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Side widgets--> */}
                    <div className="col-lg-4">
                        {/* <!-- Search widget--> */}
                        <div className="card mb-4">
                            <div className="card-header">Search</div>
                            <div className="card-body">
                                <div className="input-group">
                                    <input className="form-control" type="text" placeholder="Search..."
                                        aria-label="Enter search term..." aria-describedby="button-search" />
                                    <button className="btn btn-primary" id="button-search" type="button">Search</button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Categories widget--> */}
                        <div className="card mb-4">
                            <div className="card-header">Categories</div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <ul className="list-unstyled mb-0">
                                            <li><a href="#!">Family</a></li>
                                            <li><a href="#!">Sports</a></li>
                                            <li><a href="#!">Food</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <ul className="list-unstyled mb-0">
                                            <li><a href="#!">Travel</a></li>
                                            <li><a href="#!">School</a></li>
                                            <li><a href="#!">Post</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Side widget--> */}
                        <div className="card mb-4">
                            {/* <div className="card-header">Recent Post</div>
                            <div className="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla?</div> */}
                        </div>
                    </div>
                </div>
            </div>

            <footer className="py-5 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright &copy; Blog 2022 </p>
                </div>
            </footer>
        </div>
    )
};

export default HomePage;
