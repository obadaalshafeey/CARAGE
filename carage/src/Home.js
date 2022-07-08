import React from 'react'
import $ from "jquery";
import Testimonials from './Testimonials';
import HeroSection from './Components/HeroSection';
import ServicesGrid from './Components/ServicesGrid';
import SubHeader from './Components/SubHeader';



function Home() {
  return (
    
      <>

  {/* Video */}
  <HeroSection/>
  {/* End Video */}

  {/* Service Start */}
  <div className="service">
    <div className="container">
      <SubHeader subTitle1='What We Do?' subTitle2='Premium Services'/>
      <ServicesGrid/>
    </div>
  </div>
  {/* Service End */}
  {/* Facts Start */}
  <div className="facts" data-parallax="scroll" data-image-src="img/facts.jpg">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="facts-item">
            <i className="fa fa-map-marker-alt" />
            <div className="facts-text">
              <h3 data-toggle="counter-up">25</h3>
              <p>Service Points</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="facts-item">
            <i className="fa fa-user" />
            <div className="facts-text">
              <h3 data-toggle="counter-up">350</h3>
              <p>Engineers &amp; Workers</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="facts-item">
            <i className="fa fa-users" />
            <div className="facts-text">
              <h3 data-toggle="counter-up">1500</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="facts-item">
            <i className="fa fa-check" />
            <div className="facts-text">
              <h3 data-toggle="counter-up">5000</h3>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Facts End */}
  {/* Price Start */}
  <div className="price">
    <div className="container">
      <SubHeader subTitle1='Packages' subTitle2='Choose Your Package'/>
      <div className="row">
        <div className="col-md-4">
          <div className="price-item">
            <div className="price-header">
              <h3>Basic Cleaning</h3>
              <h2>
                <span>JD</span>
                <strong>9</strong>
                <span>.99</span>
              </h2>
            </div>
            <div className="price-body">
              <ul>
                <li>
                  <i className="far fa-check-circle" />
                  Seats Washing
                </li>
                <li>
                  <i className="far fa-check-circle" />
                  Vacuum Cleaning
                </li>
                <li>
                  <i className="far fa-check-circle" />
                  Exterior Cleaning
                </li>
                <li>
                  <i className="far fa-times-circle" />
                  Interior Wet Cleaning
                </li>
                <li>
                  <i className="far fa-times-circle" />
                  Window Wiping
                </li>
              </ul>
            </div>
            <div className="price-footer">
              <a className="btn btn-custom" href="">
                Book Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="price-item featured-item">
            <div className="price-header">
              <h3>Premium Cleaning</h3>
              <h2>
                <span>JD</span>
                <strong>14</strong>
                <span>.99</span>
              </h2>
            </div>
            <div className="price-body">
              <ul>
                <li>
                  <i className="far fa-check-circle" />
                  Seats Washing
                </li>
                <li>
                  <i className="far fa-check-circle" />
                  Vacuum Cleaning
                </li>
                <li>
                  <i className="far fa-check-circle" />
                  Exterior Cleaning
                </li>
                <li>
                  <i className="far fa-check-circle" />
                  Interior Wet Cleaning
                </li>
                <li>
                  <i className="far fa-times-circle" />
                  Window Wiping
                </li>
              </ul>
            </div>
            <div className="price-footer">
              <a className="btn btn-custom" href="">
                Book Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="price-item">
            <div className="price-header">
              <h3>Complex Cleaning</h3>
              <h2>
                <span>JD</span>
                <strong>19</strong>
                <span>.99</span>
              </h2>
            </div>
            <div className="price-body">
              <ul>
                <li>
                  <i className="far fa-check-circle" />
                  Seats Washing
                </li>
                <li>
                  <i className="far fa-check-circle" />
                  Vacuum Cleaning
                </li>
                <li>
                  <i className="far fa-check-circle" />
                  Exterior Cleaning
                </li>
                <li>
                  <i className="far fa-check-circle" />
                  Interior Wet Cleaning
                </li>
                <li>
                  <i className="far fa-check-circle" />
                  Window Wiping
                </li>
              </ul>
            </div>
            <div className="price-footer">
              <a className="btn btn-custom" href="">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Price End */}
  
  
  {/* Testimonial Start */}
  <div class="testimonial">
            <div class="container">
  <SubHeader subTitle1='Testimonial' subTitle2='What our clients say'/>
  <div className='testimonials_flex'>
    <Testimonials />
  </div>
  </div>
  </div>
  {/* Testimonial End */}
  {/* Blog Start */}
  {/* Blog End */}
</>

    
  )
}

export default Home
