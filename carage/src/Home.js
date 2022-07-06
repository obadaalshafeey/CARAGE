import React from 'react'
import $ from "jquery";
import Testimonials from './Testimonials';
import HeroSection from './HeroSection';



function Home() {
  return (
    <>
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
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="service-item">
            <i className="flaticon-car-wash-1" />
            <h3>Exterior Washing</h3>
            <p>
              Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare
              velit non metus tortor
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-item">
            <i className="flaticon-car-wash" />
            <h3>Interior Washing</h3>
            <p>
              Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare
              velit non metus tortor
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-item">
            <i className="flaticon-vacuum-cleaner" />
            <h3>Vacuum Cleaning</h3>
            <p>
              Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare
              velit non metus tortor
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-item">
            <i className="flaticon-seat" />
            <h3>Seats Washing</h3>
            <p>
              Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare
              velit non metus tortor
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-item">
            <i className="flaticon-car-service" />
            <h3>Window Wiping</h3>
            <p>
              Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare
              velit non metus tortor
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-item">
            <i className="flaticon-car-service-2" />
            <h3>Wet Cleaning</h3>
            <p>
              Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare
              velit non metus tortor
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-item">
            <i className="flaticon-car-wash" />
            <h3>Oil Changing</h3>
            <p>
              Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare
              velit non metus tortor
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-item">
            <i className="flaticon-brush-1" />
            <h3>Brake Reparing</h3>
            <p>
              Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare
              velit non metus tortor
            </p>
          </div>
        </div>
      </div>
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
  <div className="blog">
    <div className="container">
      <div className="section-header text-center">
        <p>Our Blog</p>
        <h2>Latest news &amp; articles</h2>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="blog-item">
            <div className="blog-img">
              <img src="img/blog-1.jpg" alt="Image" />
              <div className="meta-date">
                <span>01</span>
                <strong>Jan</strong>
                <span>2045</span>
              </div>
            </div>
            <div className="blog-text">
              <h3>
                <a href="#">Lorem ipsum dolor sit amet</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem,
                quis convall diam eleife. Nam in arcu sit amet massa ferment
                quis enim. Nunc augue velit metus congue eget semper
              </p>
            </div>
            <div className="blog-meta">
              <p>
                <i className="fa fa-user" />
                <a href="">Admin</a>
              </p>
              <p>
                <i className="fa fa-folder" />
                <a href="">Web Design</a>
              </p>
              <p>
                <i className="fa fa-comments" />
                <a href="">15 Comments</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog-item">
            <div className="blog-img">
              <img src="img/blog-2.jpg" alt="Image" />
              <div className="meta-date">
                <span>01</span>
                <strong>Jan</strong>
                <span>2045</span>
              </div>
            </div>
            <div className="blog-text">
              <h3>
                <a href="#">Lorem ipsum dolor sit amet</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem,
                quis convall diam eleife. Nam in arcu sit amet massa ferment
                quis enim. Nunc augue velit metus congue eget semper
              </p>
            </div>
            <div className="blog-meta">
              <p>
                <i className="fa fa-user" />
                <a href="">Admin</a>
              </p>
              <p>
                <i className="fa fa-folder" />
                <a href="">Web Design</a>
              </p>
              <p>
                <i className="fa fa-comments" />
                <a href="">15 Comments</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog-item">
            <div className="blog-img">
              <img src="img/blog-3.jpg" alt="Image" />
              <div className="meta-date">
                <span>01</span>
                <strong>Jan</strong>
                <span>2045</span>
              </div>
            </div>
            <div className="blog-text">
              <h3>
                <a href="#">Lorem ipsum dolor sit amet</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem,
                quis convall diam eleife. Nam in arcu sit amet massa ferment
                quis enim. Nunc augue velit metus congue eget semper
              </p>
            </div>
            <div className="blog-meta">
              <p>
                <i className="fa fa-user" />
                <a href="">Admin</a>
              </p>
              <p>
                <i className="fa fa-folder" />
                <a href="">Web Design</a>
              </p>
              <p>
                <i className="fa fa-comments" />
                <a href="">15 Comments</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Blog End */}
</>

    </>
  )
}

export default Home
