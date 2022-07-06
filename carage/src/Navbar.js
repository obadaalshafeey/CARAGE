import React from 'react'


function Navbar() {
  return (
    <>
      <>
  <meta charSet="utf-8" />
  <title>AutoWash - Car Wash Website Template</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta content="Free Website Template" name="keywords" />
  <meta content="Free Website Template" name="description" />
  {/* Favicon */}
  <link href="img/favicon.ico" rel="icon" />
  {/* Google Font */}
  <link
    href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  {/* CSS Libraries */}
  <link
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
    rel="stylesheet"
  />
  <link href="lib/flaticon/font/flaticon.css" rel="stylesheet" />
  <link href="lib/animate/animate.min.css" rel="stylesheet" />
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
  {/* Template Stylesheet */}
  <link href="css/style.css" rel="stylesheet" />
  {/* Top Bar Start */}
  <div className="top-bar">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-12">
          <div className="logo">
            <a href="index.html">
              <h1>
                CAR<span>AGE</span>
              </h1>
              {/* <img src="img/logo.jpg" alt="Logo"> */}
            </a>
          </div>
        </div>
        <div className="col-lg-8 col-md-7 d-none d-lg-block">
          <div className="row">
            <div className="col-4">
              <div className="top-bar-item">
                <div className="top-bar-icon">
                  <i className="far fa-clock" />
                </div>
                <div className="top-bar-text">
                  <h3>Opening Hour</h3>
                  <p>Mon - Fri, 8:00 - 9:00</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="top-bar-item">
                <div className="top-bar-icon">
                  <i className="fa fa-phone-alt" />
                </div>
                <div className="top-bar-text">
                  <h3>Call Us</h3>
                  <p>+012 345 6789</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="top-bar-item">
                <div className="top-bar-icon">
                  <i className="far fa-envelope" />
                </div>
                <div className="top-bar-text">
                  <h3>Email Us</h3>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Top Bar End */}
  <>
  {/* Nav Bar Start */}
  <div className="nav-bar">
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <a href="#" className="navbar-brand">
          MENU
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav mr-auto">
            <a href="index.html" className="nav-item nav-link active">
              Home
            </a>
            <a href="about.html" className="nav-item nav-link">
              About
            </a>
            <a href="service.html" className="nav-item nav-link">
              Service
            </a>
            <a href="price.html" className="nav-item nav-link">
              Price
            </a>
            <a href="location.html" className="nav-item nav-link">
              Washing Points
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu">
                <a href="blog.html" className="dropdown-item">
                  Blog Grid
                </a>
                <a href="single.html" className="dropdown-item">
                  Detail Page
                </a>
                <a href="team.html" className="dropdown-item">
                  Team Member
                </a>
                <a href="booking.html" className="dropdown-item">
                  Schedule Booking
                </a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <div className="ml-auto">
            <a className="btn btn-custom" href="#">
              Get Appointment
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
  {/* Nav Bar End */}
</>

</>

    </>
  )
}

export default Navbar
