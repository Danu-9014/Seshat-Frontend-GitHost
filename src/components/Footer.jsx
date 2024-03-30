import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBRipple,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "white" }}
    >
      <MDBContainer className="p-4">
        <section className="">
          <MDBRow>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  style={{ height: "130px", opacity: "0.7" }}
                  src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781481409209/story-thieves-9781481409209_hr.jpg"
                  className="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  style={{ height: "130px", opacity: "0.7" }}
                  src="https://www.crossword.in/cdn/shop/products/71H80X277mL.jpg?v=1685693241"
                  className="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  style={{ height: "130px", opacity: "0.7" }}
                  src="https://cdn.shopify.com/s/files/1/2081/8163/files/002-GINGER-THE-GIRAFFE.jpg?v=1589846879"
                  className="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  style={{ height: "130px", opacity: "0.7" }}
                  src="https://cdn.kobo.com/book-images/b9031cfc-357d-4a8c-8b74-b5935493768b/353/569/90/False/bedtime-stories-for-girls-3.jpg"
                  className="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  style={{ height: "130px", opacity: "0.7" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9zmaMcbXVZC4Bf92MeDsvLKviHUwqZI6ijW97PM4BNUXbMQXftVxzpTMmLW5o-bO93c8&usqp=CAU"
                  className="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  style={{ height: "130px", opacity: "0.7" }}
                  src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781481409230/the-stolen-chapters-9781481409230_hr.jpg"
                  className="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
          </MDBRow>
        </section>
        <br />
        <br />
        <section class="mb-4">
          {/* <!-- Facebook --> */}
          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <i class="fab fa-facebook-f"></i>
          </a>

          {/* <!-- Twitter --> */}
          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          >
            <i class="fab fa-twitter"></i>
          </a>

          {/* <!-- Google --> */}
          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <i class="fab fa-google"></i>
          </a>

          {/* <!-- Instagram --> */}
          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <i class="fab fa-instagram"></i>
          </a>

          {/* <!-- Linkedin --> */}
          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            role="button"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          {/* <!-- Github --> */}
          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            href="#!"
            role="button"
          >
            <i class="fab fa-github"></i>
          </a>
        </section>
      </MDBContainer>

      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: "#EEE" }}
      >
        © 2020 Copyright:
        <a className="text-dark" href="https://seshat.com/">
          Seshat.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
