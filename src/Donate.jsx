import React from 'react'
import "./Donate.css"
import unImg from "../src/img/UN3.webp"
import passPort from "../src/img/passp.jpeg"
import Navbar from './Navbar';


const Donate = () => {
  return (
    <div className='donate'>
        <Navbar/>
        <div class="col-md-12 text-center">
            <h2 class="heading">Donate To Save Lives</h2>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus <br /> at aspernatur, ullam, perferendis, vel assumenda laboriosam <br /> blanditiis quasi iusto veritatis fugiat aut! Culpa minima optio <br /> sint eligendi, id ipsam explicabo.</p>
        </div>
                <br /> <br />
        <div>
            <div class="site-section fund-raisers">
                <div class="container">
                <div class="row mb-5">
                <div class="col-md-12 text-center">
                <h2 className='h2d'>Latest Donations</h2>
                </div>
                </div>
                <div class="row">
                <div class="col-md-6 col-lg-3 mb-5">
                <div class="person-donate text-center bg-light pt-4">
                <img src={passPort} alt="Image placeholder" class="img-fluid" />
                <div class="donate-info">
                <h2>Jean Smith</h2>
                <span class="time d-block mb-3">Donated 3 hours ago</span>
                <div class="donate-amount d-flex">
                <div class="label">Donated</div>
                <div class="amount">$1,150</div>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5">
                <div class="person-donate text-center bg-light pt-4">
                <img src={passPort} alt="Image placeholder" class="img-fluid" />
                <div class="donate-info">
                <h2>Christine Charles</h2>
                <span class="time d-block mb-3">Donated 3 hours ago</span>
                <div class="donate-amount d-flex">
                <div class="label">Donated</div>
                <div class="amount">$150</div>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5">
                <div class="person-donate text-center bg-light pt-4">
                <img src={passPort} alt="Image placeholder" class="img-fluid" />
                <div class="donate-info">
                <h2>Albert Sluyter</h2>
                <span class="time d-block mb-3">Donated 3 hours ago</span>
                <div class="donate-amount d-flex">
                <div class="label">Donated</div>
                <div class="amount">$534</div>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5">
                <div class="person-donate text-center bg-light pt-4">
                <img src={passPort} alt="Image placeholder" class="img-fluid" />
                <div class="donate-info">
                <h2>Andrew Holloway</h2>
                <span class="time d-block mb-3">Donated 3 hours ago</span>
                <div class="donate-amount d-flex">
                <div class="label">Donated</div>
                <div class="amount">$2,500</div>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5">
                <div class="person-donate text-center bg-light pt-4">
                <img src={passPort}  alt="Image placeholder" class="img-fluid" />
                <div class="donate-info">
                <h2>Albert Sluyter</h2>
                <span class="time d-block mb-3">Donated 3 hours ago</span>
                <div class="donate-amount d-flex">
                <div class="label">Donated</div>
                <div class="amount">$534</div>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5">
                <div class="person-donate text-center bg-light pt-4">
                <img src={passPort}  alt="Image placeholder" class="img-fluid" />
                <div class="donate-info">
                <h2>Andrew Holloway</h2>
                <span class="time d-block mb-3">Donated 3 hours ago</span>
                <div class="donate-amount d-flex">
                <div class="label">Donated</div>
                <div class="amount">$2,500</div>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5">
                <div class="person-donate text-center bg-light pt-4">
                <img src={passPort} alt="Image placeholder" class="img-fluid" />
                <div class="donate-info">
                <h2>Jean Smith</h2>
                <span class="time d-block mb-3">Donated 3 hours ago</span>
                <div class="donate-amount d-flex">
                <div class="label">Donated</div>
                <div class="amount">$1,150</div>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5">
                <div class="person-donate text-center bg-light pt-4">
                <img src={passPort} alt="Image placeholder" class="img-fluid" />
                <div class="donate-info">
                <h2>Christine Charles</h2>
                <span class="time d-block mb-3">Donated 3 hours ago</span>
                <div class="donate-amount d-flex">
                <div class="label">Donated</div>
                <div class="amount">$150</div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
        </div>

            <br /><br />
            <div class="featured-section overlay-color-2" >

            <div class="container">
            <div class="row">
            <div class="col-md-6">
            <img src={unImg} alt="Image placeholder" class="img-fluid" />
            </div>
            <div class="col-md-6 pl-md-5">
            <span class="featured-text d-block mb-3">Success Stories</span>
            <h2>School in Africa Need Renovations. Thanks To All Donors</h2>
            <p class="mb-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <span class="fund-raised d-block mb-5">We have raised $30,000</span>
            <p><a href="#" class="btn btn-success btn-hover-white py-3 px-5">Read The Full Story</a></p>
            </div>
            </div>
        </div>

                
     </div>

     <br /> <br />

           {/* This is the testimony section */}


           <div class="site-section bg-light">
                    <div class="container">
                    <div class="row mb-5">
                    <div class="col-md-12 text-center">
                    <h2>Testimonial</h2>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-6 mb-5">
                    <div class="block-47 d-flex">
                    <div class="block-47-image">
                    <img src={passPort}  alt="Image placeholder" class="img-fluid" />
                    </div>
                    <blockquote class="block-47-quote">
                    <p>“A small river named Duden flows by their place and supplies it with the necessary regelialia.”</p>
                    <cite class="block-47-quote-author">Carl Adams</cite>
                    </blockquote>
                    </div>
                    </div>
                    <div class="col-md-6 mb-5">
                    <div class="block-47 d-flex">
                    <div class="block-47-image">
                    <img src={passPort}  alt="Image placeholder" class="img-fluid" />
                    </div>
                    <blockquote class="block-47-quote">
                    <p>“A small river named Duden flows by their place and supplies it with the necessary regelialia.”</p>
                    <cite class="block-47-quote-author">— Nicole Watson</cite>
                    </blockquote>
                    </div>
                    </div>
                    <div class="col-md-6 mb-5">
                    <div class="block-47 d-flex">
                    <div class="block-47-image">
                    <img src={passPort} alt="Image placeholder" class="img-fluid" />
                    </div>
                    <blockquote class="block-47-quote">
                    <p>“A small river named Duden flows by their place and supplies it with the necessary regelialia.”</p>
                    <cite class="block-47-quote-author">Vanessa Horton</cite>
                    </blockquote>
                    </div>
                    </div>
                    <div class="col-md-6 mb-5">
                    <div class="block-47 d-flex">
                    <div class="block-47-image">
                    <img src={passPort} alt="Image placeholder" class="img-fluid" />
                    </div>
                    <blockquote class="block-47-quote">
                    <p>“A small river named Duden flows by their place and supplies it with the necessary regelialia.”</p>
                    <cite class="block-47-quote-author">— Adam Spratt</cite>
                    </blockquote>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br /> <br />

                    {/* Copy the footer section to the footer component */}


    <footer class="footer">
                <div class="container">
                    <div class="row">
                    <div class="col-md-6 col-lg-6">
                        <div class="col-md-12">
                        <h3 class="heading-section">About Us</h3>
                        <p class="mb-5">Far far away, behind the word mountains, <br /> far from the countries Vokalia and <br />Consonantia, there live the blind texts. <br /> Separated they live in Bookmarksgrove right <br /> at the coast of the Semantics, a large <br /> language ocean.</p>
                        <p><a href="#" class="btn btn-primary px-4 py-3">Join Volunteer</a></p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <div class="col-md-12">
                        <div class="block-23">
                            <h3 class="heading-section">Contact Info</h3>
                            <ul>
                            <li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain View, San <br />Francisco, California, USA</span></li>
                            <li><a href="#"><span class="icon icon-phone"></span><span class="text">+2 392 3929 210</span></a></li>
                            <li><a href="#"><span class="icon icon-envelope"></span><span class="text">info@yourdomain.com</span></a></li>
                            <li><span class="icon icon-clock-o"></span><span class="text">Monday — Friday 8:00am - 5:00pm</span></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="row pt-5">
                    <div class="col-md-12 text-center">
                        <p>
                        Copyright ©<script>document.write(new Date().getFullYear());</script>2024 All rights reserved
                        </p>
                    </div>
                    </div>
                </div>
</footer>







    </div>
  )
}

export default Donate






