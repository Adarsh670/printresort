import React from "react";
import "./home.css";
import Slider from "react-slick";
// import panal from "../../images/panal2.png";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";
import PreLoader from "../../components/Loader/PreLoader";
import { Helmet } from "react-helmet";
const title = "Home - Printresort";
const cardSlider = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dqlx1vyne/image/upload/v1683021218/print/card_vymbrn.webp",
    title: "Business Cards",
    desc: "We’re big fans of the QR code. Add that little black-and-white square on your Business Cards and send customers to your social platforms or website.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dqlx1vyne/image/upload/v1683021218/print/card2_gqo5bk.webp",
    title: "Postcards",
    desc: "Full color and double sided. Postcards deliver, whatever message you want to share.",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dqlx1vyne/image/upload/v1683021218/print/card3_ogpxlm.webp",
    title: "Flyers",
    desc: "Flyers can’t wait to share your news with the world. Choose from five sizes and three premium paper stocks. Then let them do their thing.",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dqlx1vyne/image/upload/v1683021218/print/card4_wa2eqy.webp",
    title: "Stickers and Labels",
    desc: "Name tags, packaging seals, secret messages – our Stickers won’t be limited by labels. (Unless that’s how you want to use them.)",
  },
];
const ourServices = [
  {
    img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1683093802/print/card2_fhf84g_z5hujt.webp",
    name: "Visiting Card",
  },
  {
    img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1683093876/print/businessreport_yzrnbg.webp",
    name: "Documents Printing",
  },
  {
    img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1670411311/printResort/book2_rlfo3a.webp",
    name: "Book Printing",
  },
  {
    img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1683093723/print/letterhead_ur9zp5.webp",
    name: "Letter Head Printing",
  },
  {
    img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1683093723/print/certificate_e0clk5.webp",
    name: "Certificates Printing",
  },
  {
    img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1683093724/print/poster_fntoso.webp",
    name: "Poster Printing",
  },
  {
    img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1683093724/print/poster_fntoso.webp",
    name: "Leaflets Printing",
  },
  {
    img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1683094370/print/broucher_psj8sy.webp",
    name: "Brochure Printing",
  },
];
const Home = () => {
  var reviewSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var companySlider = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <PreLoader />
      <div className="container-fluid p-0">
        <div className="hero-banner">
          <div className="videosection">
            <video autoPlay muted loop className="video">
              <source
                src="https://res.cloudinary.com/dqlx1vyne/video/upload/v1684387165/printResort/backvideo_ci2dou.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div className="container-fluid singlestrip">
        <p>
          For Bulk / Corporate Enquiry contact us +91 9971 547454
          &nbsp;&nbsp;&nbsp;
          <span>
            <FaWhatsapp /> Whatsapp
          </span>
        </p>
      </div>

      <div className="container-fluid home-cards">
        <div className="container">
          <div className="row">
            {cardSlider.map((item, index) => (
              <div
                className="col-lg-3 col-md-6 mt-5"
                key={index}
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <Link to="/">
                  <div className="home-card">
                    <img src={item.image} className="img-fluid" alt="" />
                    <div className="home-card-text">
                      <div className="home-card-title">
                        <p> {item.title}</p>
                      </div>
                      <div className="home-card-desc">
                        <span>{item.desc}</span>
                      </div>
                      <div className="home-card-link">
                        <p>
                          <Link to="/portfolio">
                            {/* More{item.title} <AiOutlineRight size="13px" /> */}
                            More <AiOutlineRight size="13px" />
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-fluid branding">
        <div className="branding-overlay">&nbsp;</div>
        <div className="branding-text">
          <p data-aos="fade-up" data-aos-offset="100" data-aos-duration="1500">
            Business printing
          </p>
          <h1 data-aos="fade-up" data-aos-offset="100" data-aos-duration="1500">
            Even More Good Stuff
          </h1>
          <span
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1500"
          >
            Print business stationary and customised marketing collaterals and
            sparkle to your business.
          </span>
          <button
            className="brand-btn"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1500"
          >
            Any Query <FaPaperPlane />
          </button>
        </div>
      </div>

      <div className="container-fluid home-services">
        <div className="container">
          <div className="row">
            {ourServices.map((item, index) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 mt-4"
                key={index}
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="800"
              >
                <div className="home-services-card">
                  <img src={item.img} alt={item.name} />
                  <div className="home-services-card-body">
                    <h1 className="home-services-card-title">{item.name}</h1>
                    <button className="home-card-btn">
                      <Link to="/portfolio">View More</Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* band module */}
      <div className="container-fluid band-module">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 lg-p-5"
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-duration="1500"
            >
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1683097827/0479WF-March-Campaign-RM-1216x912-MBS0_nnzfdy.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div
              className="col-lg-6 band-module-right mt-4 lg-mt-0 p-3"
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-duration="1500"
            >
              <h2>Support for brands big and small</h2>
              <p>
                Whether you’re a startup or a household name, our business plans
                are designed for you. With all the help you need – like easy
                ordering for your team, special business discounts and pro
                design support.
              </p>
              <Link to="/">
                Contact Us &nbsp;
                <GrFormNextLink />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Review */}
      <div className="container-fluid reviews">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 py-4">
              <div className="review-left">
                <h2>Google Reviews</h2>
                <ul>
                  <li>
                    <BsStarFill style={{ color: "#fff" }} />
                  </li>
                  <li>
                    <BsStarFill style={{ color: "#fff" }} />
                  </li>
                  <li>
                    <BsStarFill style={{ color: "#fff" }} />
                  </li>
                  <li>
                    <BsStarFill style={{ color: "#fff" }} />
                  </li>
                  <li>
                    <BsStarHalf style={{ color: "#fff" }} />
                  </li>
                </ul>
                <p>
                  Based on <span>30 reviews</span>
                </p>
              </div>
            </div>
            <div className="col-lg-9 mt-0 mt-lg-5 px-5 px-lg-0">
              <Slider {...reviewSettings}>
                <div className="slidercard">
                  <ul>
                    <li>
                      <BsStarFill style={{ color: "#fff" }} />
                    </li>
                    <li>
                      <BsStarFill style={{ color: "#fff" }} />
                    </li>
                    <li>
                      <BsStarFill style={{ color: "#fff" }} />
                    </li>
                    <li>
                      <BsStarFill style={{ color: "#fff" }} />
                    </li>
                    <li>
                      <BsStar style={{ color: "#fff" }} />
                    </li>
                  </ul>
                  <p>Siddharth Tewari</p>
                  <span>
                    Staff is quite helpful. All updated machines are present and
                    they give very good rates for printing.
                  </span>
                </div>
                <div className="slidercard">
                  <ul>
                    <li>
                      <BsStarFill style={{ color: "#fff" }} />
                    </li>
                    <li>
                      <BsStarFill style={{ color: "#fff" }} />
                    </li>
                    <li>
                      <BsStarFill style={{ color: "#fff" }} />
                    </li>
                    <li>
                      <BsStarFill style={{ color: "#fff" }} />
                    </li>
                    <li>
                      <BsStarFill style={{ color: "#fff" }} />
                    </li>
                  </ul>
                  <p>Parth Avneesh</p>
                  <span>
                    Excellent job got done from here. They printed my coffee
                    table book, and printing, binding everything were brilliant.
                  </span>
                </div>
                <div className="slidercard">
                  <ul>
                    <li>
                      <BsStarFill style={{ color: "#fff" }} />
                    </li>
                    <li>
                      <BsStarFill style={{ color: "#fff" }} />
                    </li>
                    <li>
                      <BsStarFill style={{ color: "#fff" }} />
                    </li>
                    <li>
                      <BsStarFill style={{ color: "#fff" }} />
                    </li>
                    <li>
                      <BsStarFill style={{ color: "#fff" }} />
                    </li>
                  </ul>
                  <p>Dhananjay Atreaya</p>
                  <span>
                    Satisfactory work and timely delivery. Smart and punctual
                    guys. Very Economical for start-ups.
                  </span>
                </div>
                <div className="slidercard">
                  <ul>
                    <li>
                      <BsStarFill style={{ color: "#fff" }} />
                    </li>
                    <li>
                      <BsStarFill style={{ color: "#fff" }} />
                    </li>
                    <li>
                      <BsStarFill style={{ color: "#fff" }} />
                    </li>
                    <li>
                      <BsStarFill style={{ color: "#fff" }} />
                    </li>
                    <li>
                      <BsStarFill style={{ color: "#fff" }} />
                    </li>
                  </ul>
                  <p>Payal Bansal</p>
                  <span>
                    Hired them for corporate gift printing. Loved their work.
                    Best out of the rest 👍🏻
                  </span>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* Company */}
      <div className="container-fluid">
        <div className="container companySlider">
          <div className="company-heading mb-4">
            <h2>Our Valued Clients</h2>
          </div>
          <Slider {...companySlider}>
            <div>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1668589365/printResort/company3_dgqvqx.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1668589367/printResort/company4_djvcmx.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1673527990/printResort/maruti_t484nr.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1670055832/printResort/realme_mgv3ux.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/aa/Logo_of_Indian_National_Trust_for_Art_and_Cultural_Heritage%2C_INTACH.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1671021390/printResort/Rhi_vcuvky.webp"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1671011779/printResort/tinder_bhj075.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1671021388/printResort/anand_anand_uncdce.webp"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1668589367/printResort/company7_gaukic.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1668589369/printResort/company9_pfsnrm.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1668589367/printResort/company6_jtmhqr.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1668589367/printResort/company10_e6bl0g.png"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Home;
