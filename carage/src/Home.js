import React from 'react'
import $ from "jquery";
import Testimonials from './Testimonials';
import Fact from './Components/Fact';
import HeroSection from './Components/HeroSection';
import ServicesGrid from './Components/ServicesGrid';




function Home() {
  return (
    
      <>

  {/* Video */}
  <HeroSection/>
  {/* End Video */}

  {/* Service Start */}
  <div className="service">
    <div className="container">
      <div className="section-header text-center">
        <p>What We Do?</p>
        <h2>Premium Washing Services</h2>
      </div>
      <ServicesGrid/>
    </div>
  </div>
  {/* Service End */}
  {/* Facts Start */}
 <Fact/>
  {/* Facts End */}
  {/* Price Start */}
  <div className="price">
    <div className="container">
      <div className="section-header text-center">
        <p>Washing Plan</p>
        <h2>Choose Your Plan</h2>
      </div>
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
                <div class="section-header text-center">
                    <p>Testimonial</p>
                    <h2>What our clients say</h2>
                </div>
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
