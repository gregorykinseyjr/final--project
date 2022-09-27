import React from 'react';
import kinseys from '../../assets/images/kinseys.jpeg';
import us from '../../assets/images/us.jpg';
import us1 from '../../assets/images/us1.jpg';
import gregesraa from '../../assets/images/Greg-Esraa.jfif';
import amira from '../../assets/images/Amira.jfif';
import alijah from '../../assets/images/Alijah.jfif';
import ayleah from '../../assets/images/Ayleah.jfif';
import amare from '../../assets/images/Amare.jpeg';





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
                        <img src={kinseys} className="" alt='kinseys' />
                    </div>
                    <div className="carousel-item">
                        <img src={us} className="" alt='us' />
                    </div>
                    <div className="carousel-item">
                        <img src={us1} className="" alt='us1' />
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
                            <a href="#!"><img className="card-img-top" src={gregesraa}
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
                                        src={amira} alt="post1" /></a>
                                    <div className="card-body">
                                        <div className="small text-muted">January 21, 2021</div>
                                        <h2 className="card-title h4">Amira</h2>
                                        <p className="card-text">8 Months old</p>
                                        <a className="btn btn-primary mt-3" href="#!">Read more →</a>
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <a href="#"><img className="card-img-top"
                                        src={alijah} alt="post2" /></a>
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
                                        src={ayleah} alt="post3" /></a>
                                    <div className="card-body">
                                        <div className="small text-muted">September 26, 2014</div>
                                        <h2 className="card-title h4">Ayleah</h2>
                                        <p className="card-text">8 Years old</p>
                                        <a className="btn btn-primary mt-3" href="#!">Read more →</a>
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <a href="#"><img className="card-img-top"
                                        src={amare} alt="post4" /></a>
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
