import React from 'react';
function About(){
return(

<>
  
  {/* Top Bar Start */}
 
  {/* Top Bar End */}
  
  {/* Nav Bar End */}
  {/* Page Header Start */}
  <div className="page-header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>About Us</h2>
        </div>
        <div className="col-12">
          <a href="">Home</a>
          <a href="">About Us</a>
        </div>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* About Start */}
  <div className="about">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-img">
            <img src="img/about.jpg" alt="Image" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="section-header text-left">
            <p>About Us</p>
            <h2>car washing and detailing</h2>
          </div>
          <div className="about-content">
            <p>
              Lorem ipsum dolor sit amet elit. In vitae turpis. Donec in hendre
              dui, vel blandit massa. Ut vestibu suscipi cursus. Cras quis porta
              nulla, ut placerat risus. Aliquam nec magna eget velit luctus
              dictum
            </p>
            <ul>
              <li>
                <i className="far fa-check-circle" />
                Seats washing
              </li>
              <li>
                <i className="far fa-check-circle" />
                Vacuum cleaning
              </li>
              <li>
                <i className="far fa-check-circle" />
                Interior wet cleaning
              </li>
              <li>
                <i className="far fa-check-circle" />
                Window wiping
              </li>
            </ul>
            <a className="btn btn-custom" href="">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
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
  {/* Team Start */}
  <div className="team">
    <div className="container">
      <div className="section-header text-center">
        <p>Meet Our Team</p>
        <h2>Our Engineers &amp; Workers</h2>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="team-item">
            <div className="team-img">
              <img src="img/team-1.jpg" alt="Team Image" />
            </div>
            <div className="team-text">
              <h2>Donald John</h2>
              <p>Engineer</p>
              <div className="team-social">
                <a href="">
                  <i className="fab fa-twitter" />
                </a>
                <a href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="team-item">
            <div className="team-img">
              <img src="img/team-2.jpg" alt="Team Image" />
            </div>
            <div className="team-text">
              <h2>Adam Phillips</h2>
              <p>Engineer</p>
              <div className="team-social">
                <a href="">
                  <i className="fab fa-twitter" />
                </a>
                <a href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="team-item">
            <div className="team-img">
              <img src="img/team-3.jpg" alt="Team Image" />
            </div>
            <div className="team-text">
              <h2>Thomas Olsen</h2>
              <p>Worker</p>
              <div className="team-social">
                <a href="">
                  <i className="fab fa-twitter" />
                </a>
                <a href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="team-item">
            <div className="team-img">
              <img src="img/team-4.jpg" alt="Team Image" />
            </div>
            <div className="team-text">
              <h2>James Alien</h2>
              <p>Worker</p>
              <div className="team-social">
                <a href="">
                  <i className="fab fa-twitter" />
                </a>
                <a href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
 
</>
);
}
export default About;
