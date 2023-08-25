import { useEffect } from "react";
import "./portfolio.css";
import { Helmet } from "react-helmet";
const title = "Portfolio - Printresort";

const Portfolio = () => {

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <Helmet>
    <title>{title}</title>
  </Helmet>
      <div className="fluid-container">
        <div className="fluid-container portfoliobanner">
          <div className="container">
            <div className="row portfoliobannerdiv">
              <div className="col-1  portfoliobannerLeft">
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1668589375/printResort/p_c4i0vt.png"
                  width={50}
                  alt=""
                />
              </div>
              <div className="col-9 portfoliobannerCenter">&nbsp;</div>
              <div className="col-1 portfoliobannerRight">
                <p>PrintResort</p>
              </div>
            </div>
            <div className=" portfoliobannerTitle">
              <p
                data-aos="fade-up"
                data-aos-offset="10"
                data-aos-duration="1000"
              >
                PrintResort
              </p>
              <h2
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1500"
              >
                Portfolio
              </h2>
              <h1
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="2000"
              >
                Presentation
              </h1>
            </div>
          </div>
        </div>

        <div className="container portfolioSection">
          <div className="portfolio-report">
            <h2 className="portfolio-report-heading">Report</h2>
            <div className="row mt-5  ">
              <div
                className="col-6"
                data-aos="zoom-in"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842092/fprintresort/cultural-doc-1_i92dhq.webp"
                  className="cultural1 img-fluid"
                  alt=""
                />
              </div>
              <div className="col-6 p-4">
                <div className="row">
                  <div
                    className="col-12 border border-dark"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-duration="1000"
                  >
                    <img
                      src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842092/fprintresort/cultural-doc-2_vl8les.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div
                    className="col-12 border border-dark"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-duration="1000"
                  >
                    <img
                      src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842093/fprintresort/cultural-doc-3_ghyc6h.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* vakrangee */}
            <div className="row p-2 mt-3 vakrangeerow">
              <div className="d-flex justify-content-between role">
                <p>Vakangee</p>
                <span>Role: Design & Print</span>
              </div>
              <div
                className="col-lg-4 px-0"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842096/fprintresort/vakrangee-1_nzapxp.webp"
                  className="vakrangee img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-lg-8 p-0"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842095/fprintresort/vakrangee-2_b07oqu.webp"
                  className=" vakrangee img-fluid"
                  alt=""
                />
              </div>
            </div>

            <h2 className="portfolio-report-heading mt-5">
              Sustainability Report
            </h2>
            <div className="row p-2 mt-3 vakrangeerow">
              <div className="d-flex justify-content-between role">
                <p>SRF</p>
                <span>Role: Print</span>
              </div>
              <div
                className="col-lg-4 px-0"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842095/fprintresort/srf-1_iyqq1z.webp"
                  className="vakrangee img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-lg-8 p-0"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842095/fprintresort/srf-2_xes5sc.webp"
                  className=" vakrangee img-fluid"
                  alt=""
                />
              </div>
            </div>

            <h2 className="portfolio-report-heading mt-5"> Catalogue</h2>
            <div className="row p-2 mt-3 vakrangeerow">
              <div className="d-flex justify-content-between role">
                <p>SRF</p>
                <span>Role: Writing,Designing & Printing</span>
              </div>
              <div
                className="col-lg-4 px-0"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842090/fprintresort/artdinox-1_xzscdx.webp"
                  className="vakrangee img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-lg-8 p-0"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842090/fprintresort/artdinox-2_y2bxx1.webp"
                  className=" vakrangee img-fluid"
                  alt=""
                />
              </div>
            </div>

            <h2 className="portfolio-report-heading mt-5">Coffee-Table Book</h2>
            <div className="row p-2 mt-3 vakrangeerow">
              <div className="d-flex justify-content-between role">
                <p>SRF</p>
                <span>Role: Writing,Designing & Printing</span>
              </div>
              <div
                className="col-lg-6 px-0"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="100"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842094/fprintresort/sparkminda-1_wwhlsy.webp"
                  className=" img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6 p-0">
                <div className="row">
                  <div
                    className="col-12  "
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-duration="1200"
                  >
                    <img
                      src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842094/fprintresort/sparkminda-2_mt4rsc.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div
                    className="col-12 "
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-duration="1000"
                  >
                    <img
                      src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842095/fprintresort/sparkminda-3_n0ykqt.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row p-2 mt-3 vakrangeerow">
              <div className="d-flex justify-content-between role">
                <p>ROMA</p>
                <span>Role: Designing & Printing</span>
              </div>
              <div
                className="col-lg-6 p-0"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842094/fprintresort/roma-1_qzssd3.webp"
                  className=" img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6 p-0">
                <div className="row">
                  <div
                    className="col-12  "
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-duration="1200"
                  >
                    <img
                      src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842094/fprintresort/roma-2_qpmrl2.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div
                    className="col-12 "
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-duration="1000"
                  >
                    <img
                      src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842094/fprintresort/roma-3_nyrz3b.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row p-2 mt-3 vakrangeerow">
              <div className="d-flex justify-content-between role">
                <p>HERITAGE</p>
                <span>Role: Printing</span>
              </div>
              <div
                className="col-lg-6 p-0"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842093/fprintresort/heritage-1_rmtwqn.webp"
                  className=" img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6 p-0">
                <div className="row">
                  <div
                    className="col-12  "
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-duration="1300"
                  >
                    <img
                      src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842093/fprintresort/heritage-2_xikelb.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div
                    className="col-12 "
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-duration="1000"
                  >
                    <img
                      src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842093/fprintresort/heritage-3_boqetc.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <h2 className="portfolio-report-heading mt-5">AnnualReports</h2>
            <div className="row p-2 mt-3 vakrangeerow">
              <div className="d-flex justify-content-between role">
                <p>SPARK MINDA</p>
                <span>Role: Designing & Printing</span>
              </div>
              <div
                className="col-lg-4 "
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842094/fprintresort/reinstalling-1_w7a7mh.webp"
                  className=" img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-lg-8"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842094/fprintresort/reinstalling-2_wmraxr.webp"
                  className=" img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="row p-2 mt-3 vakrangeerow">
              <div className="d-flex justify-content-between role">
                <p>SPARK MINDA</p>
                <span>Role: Designing & Printing</span>
              </div>
              <div
                className="col-lg-4 "
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842095/fprintresort/virasat-1_isxfhm.webp"
                  className=" img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-lg-8"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842095/fprintresort/virasat-2_dpvqvk.webp"
                  className=" img-fluid"
                  alt=""
                />
              </div>
            </div>

            <h2 className="portfolio-report-heading mt-5">Reports</h2>
            <div className="row p-2 mt-3 vakrangeerow">
              <div className="d-flex justify-content-between role">
                <p>ESG Report (SPARK MINDA)</p>
                <span>Role: Designing & Printing</span>
              </div>
              <div
                className="col-lg-4 "
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842095/fprintresort/sustainable-1_fiysfx.webp"
                  className=" img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-lg-8"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842095/fprintresort/sustainable-2_wkapk3.webp"
                  className=" img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div className="row p-2 mt-3 vakrangeerow">
              <div className="d-flex justify-content-between role">
                <p>Heritage Temples Book (INTACH)</p>
                <span>Role: Designing & Printing</span>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842093/fprintresort/heritage-tem-1_vvdxq7.webp"
                  className=" img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div
                    className="col-12"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-duration="1200"
                  >
                    <img
                      src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842093/fprintresort/heritage-tem-2_me0rta.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div
                    className="col-12"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-duration="1000"
                  >
                    <img
                      src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842093/fprintresort/heritage-tem-3_eohhns.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <h2 className="portfolio-report-heading mt-5">AnnualReports</h2>
            <div className="row p-2 mt-3 vakrangeerow">
              <div className="d-flex justify-content-between role">
                <p>SPARK MINDA</p>
                <span>Role: Designing & Printing</span>
              </div>
              <div
                className="col-lg-4 "
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842094/fprintresort/reinstalling-1_w7a7mh.webp"
                  className=" img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-lg-8"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842094/fprintresort/reinstalling-2_wmraxr.webp"
                  className=" img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="row mt-3 vakrangeerow">
              <div className="d-flex justify-content-between role">
                <p>SPARK MINDA</p>
                <span>Role: Designing & Printing</span>
              </div>
              <div
                className="col-lg-4 p-0 px-lg-2"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842095/fprintresort/virasat-1_isxfhm.webp"
                  className=" img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-lg-8 "
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684842095/fprintresort/virasat-2_dpvqvk.webp"
                  className=" img-fluid"
                  alt=""
                />
              </div>
            </div>

            <h2 className="portfolio-report-heading mt-5">
              Brochures and flyers
            </h2>
            <div className="row p-2 mt-3 vakrangeerow">
              {/* <div className="d-flex justify-content-between role">
                <p>Heritage Temples Book (INTACH)</p>
                <span>Role: Designing & Printing</span>
              </div> */}
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685338380/print/Brochures1_xgm8yu.webp"
                  className=" img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div
                    className="col-12"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-duration="1200"
                  >
                    <img
                      src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685338380/print/Brochures1-2_kadyrc.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row p-2 mt-3 vakrangeerow">
              {/* <div className="d-flex justify-content-between role">
                <p>Heritage Temples Book (INTACH)</p>
                <span>Role: Designing & Printing</span>
              </div> */}
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685338380/print/Brochures2-1_f2ihvg.webp"
                  className=" img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div
                    className="col-12"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-duration="1200"
                  >
                    <img
                      src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685338380/print/Brochures2-2_wcurzm.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <h2 className="portfolio-report-heading mt-5">
              Branding for event
            </h2>
            <div className="row p-2 mt-3 vakrangeerow">
              <div
                className="col-lg-4 "
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685338380/print/branding1_xte1om.webp"
                  className=" img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-lg-8"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685338380/print/branding1-2_paaqfc.webp"
                  className=" img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
      </div>
    </>
  );
};

export default Portfolio;
