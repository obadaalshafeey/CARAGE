import React from 'react';
import Header from './Components/Header';
import { Link } from 'react-router-dom';
function About(){
return(

<>
  
  <Header title= 'About Us'/>
  {/* About Start */}
  <div className="about">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-img">
            <img src="./img/about2.jpg" alt="Image" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="section-header text-left">
            <p>About Us</p>
            <h2>car washing and detailing</h2>
          </div>
          <div className="about-content">
            <p>
              
            </p>Customers turn to CARAGE with all kinds of tuning orders, and thanks to having an experience of what we’ve been able to do in the past and what kind of a crew we have now we are positive that making any tuning idea of yours come true will be easy for us! 
            <ul>
              <li>
                <i className="far fa-check-circle" />
                Car wash
              </li>
              <li>
                <i className="far fa-check-circle" />
                Electrical cars charging
              </li>
              <li>
                <i className="far fa-check-circle" />
                Renting cars
              </li>
              <li>
                <i className="far fa-check-circle" />
                Decorating cars for occasions
              </li>
            </ul>
            <Link to='/Services'>
            <a className="btn btn-custom" href="">
              Learn More
            </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  
  {/* Team Start */}
  <div className="team">
    <div className="container">
      <div className="section-header text-center">
        <p>Meet Our Team</p>
        <h2>Our Engineers &amp; Workers</h2>
      </div>
      <div className="row justify-content-center" >
        <div className="col-lg-4 col-md-6">
          <div className="team-item">
            <div className="team-img">
              <img src="./img/Obada.png" alt="Team Image" />
            </div>
            <div className="team-text">
              <h2>Obada AlShafeey</h2>
              <p>Product Owner</p>
              <div className="team-social">
                <a href="https://github.com/obadaalshafeey">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.facebook.com/obadaMalshafeey">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://www.linkedin.com/in/obada-alshafeey-735b3518b/">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="https://www.instagram.com/obada_alshafeey/">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="team-item">
            <div className="team-img">
              <img src="./img/Sara.png" alt="Team Image" />
            </div>
            <div className="team-text">
              <h2>Sara Kteifan</h2>
              <p>Scrum Master</p>
              <div className="team-social">
                <a href="https://github.com/SaraKteifan">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.facebook.com/sara.kteifan">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://www.linkedin.com/in/sara-kteifan-38803222a/">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="https://www.instagram.com/sara_kteifan/">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6" >
          <div className="team-item">
            <div className="team-img">
              <img src="./img/Majd.jpg" alt="Team Image" />
            </div>
            <div className="team-text">
              <h2>Majd AlBalwneh</h2>
              <p>Web Developer</p>
              <div className="team-social">
                <a href="https://github.com/majdalbalawneh">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100028713081196">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://www.linkedin.com/in/majd-al-balawneh-a037411b7/">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="team-item">
            <div className="team-img">
              <img src="./img/Marwa.png" alt="Team Image" />
            </div>
            
            <div className="team-text">
              <h2>Marwa ALNseerat</h2>
              <p>Web Developer</p>
              <div className="team-social">
                <a href="https://github.com/marwanseerat">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.facebook.com/gril.genration">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://www.linkedin.com/in/marwa-nseerat-971057227/">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="https://www.instagram.com/marwa.nseerat98/">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="team-item">
            <div className="team-img">
              <img src="./img/Ibrahim.png" alt="Team Image" />
            </div>
            <div className="team-text">
              <h2>Ibrahim Abedalqader</h2>
              <p>Web Developer</p>
              <div className="team-social">
                <a href="https://github.com/IbrahimTameme">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100004494048400">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://www.linkedin.com/in/ibrahim-tameme/">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="https://www.instagram.com/ibrahimt98/">
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
