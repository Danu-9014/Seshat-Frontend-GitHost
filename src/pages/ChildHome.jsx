import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import MainNavBar from "../components/MainNavBar";
// Initialization for ES Users
import { Carousel, initMDB } from "mdb-ui-kit";

initMDB({ Carousel });

const ChildHome = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);
  return (
    <div>
      <MainNavBar />
      <div
        className="hpimage"
        style={{
          backgroundImage: "",
          backgroundRepeat: "no-repeat",
          WebkitBackgroundSize: "cover",
          backgroundSize: "cover",
        }}
      >
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-mdb-ride="carousel"
          style={{ alignContent: "center" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-mdb-interval="2500">
              <img
                src="https://artsineducation.ie/wp-content/uploads/2022/02/ED-Drai%CC%81ocht-Bringing-Books-to-Life-iStock-Image.jpg"
                className="d-block w-100"
                style={{ height: "500px", opacity: "0.7" }}
                alt="Exotic Fruits"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>Welcome to Seshat !!</h1>
                <br />
                <p className="fst-italic">
                  <h4>Empowering Young Minds, One Lesson At a Time!</h4>
                </p>
              </div>
            </div>

            <div className="carousel-item" data-mdb-interval="2500">
              <img
                src="https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg"
                className="d-block w-100"
                style={{ height: "500px", opacity: "0.7" }}
                alt="Wild Landscape"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>Welcome to Seshat !!</h1>
                <br />
                <p className="fst-italic">
                  <h4>Empowering Young Minds, One Lesson At a Time!</h4>
                </p>
              </div>
            </div>

            <div className="carousel-item" data-mdb-interval="2500">
              <img
                src="https://images.prismic.io/wonderbly/dcbb4ff1-d0a8-4d81-9764-8a0f304ba2ff_CHRISTMAS+EARLYBIRD_NAV_DROPDOWN_BOOKS+BY+THEME.jpg?auto=compress,format"
                className="d-block w-100"
                style={{ height: "500px", opacity: "0.7" }}
                alt="Camera"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>Welcome to Seshat !!</h1>
                <br />
                <p className="fst-italic">
                  <h4>Empowering Young Minds, One Lesson At a Time!</h4>
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            data-mdb-target="#carouselExampleInterval"
            type="button"
            data-mdb-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            data-mdb-target="#carouselExampleInterval"
            type="button"
            data-mdb-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <section id="hero" className="hero d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">
                  DISCOVER EXCITING ADVENTURES IN READING!
                </h1>
                <h2 data-aos="fade-up" data-aos-delay="400">
                  Immerse your child in a world of reading adventures with our
                  kids' learning tool. Instantly access a vast library of books
                  for endless learning fun. Start exploring now!
                </h2>
                <br />
                <div data-aos="fade-up" data-aos-delay="600">
                  <div className="text-center text-lg-start">
                    {user ? (
                      <Link to="/childbook">
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-rounded"
                          data-mdb-ripple-init
                          data-mdb-ripple-color="dark"
                        >
                          Get Started!
                        </button>
                      </Link>
                    ) : (
                      <Link to="/login">
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-rounded"
                          data-mdb-ripple-init
                          data-mdb-ripple-color="dark"
                        >
                          Get Started!
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 hero-img"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <img
                  src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <div className="row">
          <div className="col-md-4">
            <br />
            <br />

            {/* <Link to={/vehiclefleet} className="col-md-3 credit-card">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://global.toyota/pages/news/images/2019/12/20/0001/001.jpg"
                    className="d-block w-100"
                    style={{ height: "250px", opacity: "0.7" }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h3>Vehicle Fleet</h3>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://global.toyota/pages/news/images/2019/09/17/1300/20190917_02_kv_w1920_jp.jpg"
                    className="d-block w-100"
                    style={{ height: "250px", opacity: "0.7" }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h3>Vehicle Fleet</h3>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://s1.cdn.autoevolution.com/images/models/TOYOTA_Aygo-X-2021_main.jpg"
                    className="d-block w-100"
                    style={{ height: "250px", opacity: "0.7" }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h3>Vehicle Fleet</h3>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </Link> */}
          </div>
          <div className="col-md-4">
            <br />
            <br />

            {/* <Link to={/inquiries} className="col-md-3 credit-card">
            <div
              id="carouselExampleControlss"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://static.pakwheels.com/2021/01/shutterstock_97331864-1.jpg"
                    className="d-block w-100"
                    style={{ height: "250px", opacity: "0.7" }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h3>Inquiries</h3>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://gogoacarrentals.com/wp-content/uploads/2019/02/chauffeur.jpg"
                    className="d-block w-100"
                    style={{ height: "250px", opacity: "0.7" }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h3>Inquiries</h3>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://img.freepik.com/premium-photo/summer-car-trip-young-family-vacation_109800-692.jpg?w=2000"
                    className="d-block w-100"
                    style={{ height: "250px", opacity: "0.7" }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h3>Inquiries</h3>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlss"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlss"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </Link> */}
          </div>
          <div className="col-md-4">
            <br />
            <br />

            {/* <Link to={/staff} className="col-md-3 credit-card">
            <div
              id="carouselExampleControlsss"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2021/12/07111451/Chauffeur-Service-in-Dubai-Cover-07-12.jpg"
                    className="d-block w-100"
                    style={{ height: "250px", opacity: "0.7" }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h3>Drivers</h3>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.indianexpress.com/2019/04/uber.jpg"
                    className="d-block w-100"
                    style={{ height: "250px", opacity: "0.7" }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h3>Drivers</h3>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://alphazug.com/wp-content/uploads/2018/08/services-e1534364827282.jpg"
                    className="d-block w-100"
                    style={{ height: "250px", opacity: "0.7" }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h3>Drivers</h3>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsss"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlsss"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </Link> */}
          </div>
        </div>
        <br />
        <br />
        <section id="features" className="features">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Features</h2>
              <p>WHY CHOOSE US? </p>
            </header>

            <div className="row">
              <div className="col-lg-6">
                <img
                  src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/features.png"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                <div className="row align-self-center gy-4">
                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="200"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>INTERACTIVE READING</h3>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="300"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>EDUCATIONAL CONTENT</h3>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="400"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>PARENTAL CONTROLS</h3>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="500"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>PERSONALIZED RECOMMENDATIONS</h3>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="600"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>AUDIO BOOKS</h3>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="700"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>READING CHALLNGES</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default ChildHome;
