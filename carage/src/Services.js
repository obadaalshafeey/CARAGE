

function Service () {
    return(
 
          <>
       
       <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n@import url('https://fonts.googleapis.com/css?family=Poppins|Ubuntu&display=swap');\n\n\n*\n{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\nbody\n{\n    background: #fff;\n    font-family: 'Ubuntu', sans-serif;\n\n}\n\n.services\n{\n    display: block;\n    position: relative;\n    padding: 0;\n\n}\n.container\n{\n    max-width: 1200px;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.services-title\n{\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n    \n}\n.services-box\n{\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n    margin-top: -15px;\n    \n}\n\n.title{\n    margin-left: 15px;\n    position: relative;\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-bottom: 40px;\n    text-align: center;\n    top: 26px;\n}\n/**\n.services-title>span {\n    height: 36px;\n    width: 130px;\n    margin: 0 auto;\n    margin-bottom: 20px;\n    display: inline-block;\n    font-size: 20px;\n    color:rgb(255, 74, 50);\n \n}****/\n.services-title h2 {\n    margin-top: -10px;\n    margin-bottom: 6px;\n    text-transform: capitalize;\n    font-size: 36px;\n    line-height: 48px;\n    font-weight: 700;\n    color: #333;\n    font-family: 'ubuntu',sans-serif;\n\n}\n.services-title h2 span\n{\n    color: #3c44a9;\n}\n\n\n.box\n{\n    position: relative;\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    max-width: 33.333333%;\n\n}\n.ser-box\n{    margin-top: 75px;\n    padding: 0 60px;\n    padding-bottom: 30px;\n    min-height: 198px;\n    text-align: center;\n    border-radius: 10px;\n    background-color: #fff;\n    -webkit-transition: all .4s ease-in-out;\n    -moz-transition: all .4s ease-in-out;\n    -ms-transition: all .4s ease-in-out;\n    -o-transition: all .4s ease-in-out;\n    transition: all .4s ease-in-out;\n    -webkit-box-shadow: 0 0 25px 0 rgba(20,27,201,.17);\n    box-shadow: 0 0 25px 0 rgba(20,27,201,.17);\n}\n\n.ser-box .icon\n{\n    margin-bottom: 0;\n    -webkit-transform: translateY(-50%);\n    -ms-transform: translateY(-50%);\n    transform: translateY(-50%);\n    text-align: center;\n}\n.ser-box h4\n{\n    font-size: 20px;\n    line-height: 1;\n    font-weight: 700;\n    color: #3c44a9;\n    margin-top: -10px;\n    font-family: 'Ubuntu', sans-serif;\n\n}\n.ser-box p {\n    color: #61648e;\n    line-height: 24px;\n    margin-top: 20px;\n    font-family: 'Ubuntu', sans-serif;\n\n}\n\n\n.ser-box:hover {\n background-image:-moz-linear-gradient(-45deg,#fb0054 0%,#f55b2a 100%);\n background-image:-webkit-linear-gradient(-45deg,#fb0054 0%,#f55b2a 100%);\n background-image:-ms-linear-gradient(-45deg,#fb0054 0%,#f55b2a 100%);\n -webkit-box-shadow:0 0 25px 0 rgba(20,27,201,.05);\n box-shadow:0 0 25px 0 rgba(20,27,201,.05);\n cursor:pointer\n}\n\n.ser-box:hover h4,\n.ser-box:hover p {\n color:#fff\n}\n\n\n\n.services-box .box:nth-child(1) .ser-box:hover {\n background-image:-webkit-linear-gradient(-45deg,#34b5bf 0%,#210c59 100%);\n background-image:linear-gradient(-45deg,#34b5bf 0%,#210c59 100%)\n}\n.services-box .box:nth-child(3) .ser-box:hover {\n background-image:-webkit-linear-gradient(-45deg,#3615e7 0%,#44a2f6 100%);\n background-image:linear-gradient(-45deg,#3615e7 0%,#44a2f6 100%)\n}\n.services-box .box:nth-child(4) .ser-box:hover{\n background-image:-webkit-linear-gradient(-45deg,#fc6a0e 0%,#fdb642 100%);\n background-image:linear-gradient(-45deg,#fc6a0e 0%,#fdb642 100%);\n}\n.services-box .box:nth-child(5) .ser-box:hover {\n background-image:linear-gradient(-45deg,#8d40fb 0%,#5a57fb 100%);\n background-image:-webkit-linear-gradient(-45deg,#8d40fb 0%,#5a57fb 100%);\n\n}\n.services-box .box:nth-child(6) .ser-box:hover {\n background-image:-webkit-linear-gradient(-45deg,#27b88d 0%,#22dd73 100%);\n background-image:linear-gradient(-45deg,#27b88d 0%,#22dd73 100%)\n}\n\n\n\n\n\n\n@media (min-width: 768px){\n.box \n{\n    flex: 0 0 50% !important;\n    max-width: 50% !important;\n}\n\n}\n\n\n\n@media (min-width: 600px){\n.box \n{\n    flex: 0 0 50% !important;\n    max-width: 50% !important;\n}\n\n}\n\n\n\n\n\n@media (min-width: 992px)\n{\n.box \n{\n    flex: 0 0 33.333333% !important;\n    max-width: 33.333333% !important;\n}\n}\n\n\n@media (min-width: 414px){\n.box \n{\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n\n}\n\n@media (min-width: 370px){\n.box \n{\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n\n}\n\n@media (min-width: 320px){\n.box \n{\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n\n}\n\n\n\n\n\n\n\n"
    }}
  />
  <section className="services">
    <div className="container">
      <div className="services-title">
        <div className="title">
          {/*-- <span>S</span> ---*/}
          <h2>
            <span> Our </span> Services
          </h2>
        </div>
      </div>
      <div className="services-box">
        <div className="box">
          <div className="ser-box">
            <div className="icon">
              <img src="../img/8.png" alt='setting' width={'30%'}/>
            </div>
            <h4>Car Repair</h4>
            <p>We’re big proponents of proper maintenance and service.</p>
          </div>
        </div>
        <div className="box">
          <div className="ser-box">
            <div className="icon">
              <img src="../img/15.png" alt="speed" width={'30%'}/>
            </div>
            <h4>Car Decoration</h4>
            <p>We’re big proponents of proper maintenance and service..</p>
          </div>
        </div>
        <div className="box">
          <div className="ser-box">
            <div className="icon">
              <img src="../img/13.png" alt="protect" width={'30%'} />
            </div>
            <h4>Car Rentals</h4>
            <p>We’re big proponents of proper maintenance and service..</p>
          </div>
        </div>
        <div className="box">
          <div className="ser-box">
            <div className="icon">
              <img src="../img/14.png" alt="backup" width={'30%'}/>
            </div>
            <h4>Monthly Backup</h4>
            <p>We’re big proponents of proper maintenance and service..</p>
          </div>
        </div>
        <div className="box">
          <div className="ser-box">
            <div className="icon">
              <img src="../img/10.png" alt="img4" width='30%'/>
            </div>
            <h4>Free SSL Certificate</h4>
            <p>We’re big proponents of proper maintenance and service..</p>
          </div>
        </div>
        <div className="box">
          <div className="ser-box">
            <div className="icon">
              <img src="../img/11.png" alt='database' width={'30%'}/>
            </div>
            <h4>car wash</h4>
            <p>We’re big proponents of proper maintenance and service..</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</>


</>
    );
    
}
export default Service;


