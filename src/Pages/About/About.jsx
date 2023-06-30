import React from "react";
import "./about.css";
// import PreLoader from "../../components/Loader/PreLoader";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const title = "About - Printresort";
const About = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {/* <PreLoader /> */}
      <div className="container-fluid about p-0">
        <div className="container-fluid about-banner p-0">
          <div className="about-banner-text">
            <h1>Hello, we're PrintResort</h1>
            <p>We help business of all sizes look their best</p>
          </div>
        </div>

        <div className="container">
          <div className="row aboutUs">
            <div
              className="col-lg-7 left"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="1500"
            >
              <h2>About Us</h2>
              <p>
                We are one of the leading company in the field of Designing,
                Printing (digital and offset), office stationery, advertisement
                and PR on the other word turnkey solution for branding and
                promotion. We are a “one stop-shop” providing comprehensive
                range of communication services. We stand committed to quality
                and provide professional services that meet the business
                promotional and presentation needs of our clients. Our only
                motto is client’s satisfaction and to maintain quality standard
                to be one of the best available. We deliver services based on
                core value that pillars of professionalism – integrity,
                competence objectivity and prompt delivery.
              </p>
            </div>
            <div
              className="col-lg-5 p-5 right"
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-duration="1500"
            >
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1668589375/printResort/p_c4i0vt.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="container projectCounting mt-5  ">
          <div className="row">
            <div
              className="col-lg-6 left"
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-duration="1500"
            >
              <img src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842090/fprintresort/aboutimg_zpq5yl.webp" className="img-fluid" alt="" />
            </div>
            <div
              className="col-lg-6 right mt-4 mt-lg-0"
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-duration="1500"
            >
              <h2>We believe in the power of great design</h2>
              <span>
                Great design has the ability to communicate a message, evoke
                emotions, and influence behavior. It can enhance the user
                experience, improve functionality, and create a sense of brand
                identity. It has the power to transform the way we interact with
                our surroundings and the products we use. Well-designed products
                and services can also have a significant impact on business
                success. They can increase customer loyalty, attract new
                customers, and differentiate a brand from its competitors.
              </span>
            </div>
          </div>
        </div>
        <div
          className="container aboutquery"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-duration="1500"
        >
          <div className="aboutquerytext">
            <h1>Request a Quotation</h1>
            <p>
              Let us know the specification over mail and get the best price for
              your job.{" "}
            </p>
            <span>
              <Link to="/contact"> Contact Us</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
