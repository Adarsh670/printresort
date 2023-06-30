import React, { useEffect } from "react";
import "./contact.css";
import { Helmet } from "react-helmet";
const title = "ContactUs - Printresort";
const ContactUs = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="container-fluid contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 line">
              <div className="left">
                <p  data-aos="fade-up" data-aos-offset="100" data-aos-duration="1500">say hi to the team</p>
                <h1  data-aos="fade-up" data-aos-offset="100" data-aos-duration="1500">Contact Us</h1>
                <div className="inner-contact">
                  <p className="feelfree" data-aos="fade-up" data-aos-offset="100" data-aos-duration="1500">
                    feel free to contact us and we will get back to you as soon
                    as we can.
                  </p>
                  <form action="">
                  <input type="text" placeholder="name"  data-aos="fade-up" data-aos-offset="100" data-aos-duration="1500"/>
                  <input type="email" placeholder="email" data-aos="fade-up" data-aos-offset="100" data-aos-duration="1500" />
                  <input type="text" placeholder="phone"  data-aos="fade-up" data-aos-offset="100" data-aos-duration="1500"/>
                  <textarea
                    name=""
                    placeholder="message"
                    id=""
                    cols="30"
                    rows="3"
                    data-aos="fade-up" data-aos-offset="100" data-aos-duration="1500"
                  ></textarea>
                </form>
                <button  data-aos="fade-up" data-aos-offset="100" data-aos-duration="1500">send</button>
                </div>
              </div>
            </div>
           <div className="col-lg-6 right">
              <div className="opening"  data-aos="fade-up" data-aos-offset="100" data-aos-duration="1500">
                <span>opening hours</span>
                <p>Monday - Saturday</p>
                <p>9pm - 9pm</p>
                <p>Weekend</p>
                <p>Closed</p>
              </div>
              <div className="address mt-5"  data-aos="fade-up" data-aos-offset="100" data-aos-duration="1500">
                <span>address</span>
                <p> B-159, FF, DDA Shed, Okhla I, New Delhi,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Delhi 110020</p>
              </div>
              <div className="support mt-5"  data-aos="fade-up" data-aos-offset="100" data-aos-duration="1500">
                <span>support</span>
                <p>info@printresort.com</p>
                <p>printresort@gmail.com</p>
                <p>+91 - 9971547454</p>
                <p>+91 - 9891985335</p>
              </div>
              <div className="social">
              <ul>
                <li>instagram</li>
                <li>facebook</li>
                <li>linkedin</li>
                <li>twitter</li>
              </ul>
              </div>
            </div> 
          </div>
        </div>
        
      </div>
    </>
  );
};

export default ContactUs;
