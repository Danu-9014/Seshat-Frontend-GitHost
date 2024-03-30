import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/logo.jpg";
import Navbar from "../components/Navbar";

const Authors = () => {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    axios
      .get("http://18.205.107.88:31481/api/result")
      .then((response) => {
        setAuthors(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <header>
        <Navbar />
        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-collapse-init
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <a className="navbar-brand" href="#">
              <img src={logo} height="30" alt="" loading="lazy" />
            </a>
            <form className="d-none d-md-flex input-group w-auto my-auto">
              <input
                autoComplete="off"
                type="search"
                className="form-control rounded"
                placeholder="Search"
                style={{ minWidth: "225px" }}
              />
              <span className="input-group-text border-0">
                <i className="fas fa-search"></i>
              </span>
            </form>
            <ul className="navbar-nav ms-auto d-flex flex-row">
              {/* Notification dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-dropdown-init
                  aria-expanded="false"
                >
                  <i className="fas fa-bell"></i>
                  <span className="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Some news
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another news
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else
                    </a>
                  </li>
                </ul>
              </li>
              {/* Icon */}
              <li className="nav-item">
                <a className="nav-link me-3 me-lg-0" href="#">
                  <i className="fas fa-fill-drip"></i>
                </a>
              </li>
              {/* Icon */}
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              {/* Icon dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-dropdown-init
                  aria-expanded="false"
                >
                  <i className="united kingdom flag m-0"></i>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="united kingdom flag"></i>English
                      <i className="fa fa-check text-success ms-2"></i>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="poland flag"></i>Polski
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="china flag"></i>中文
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="japan flag"></i>日本語
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="germany flag"></i>Deutsch
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="france flag"></i>Français
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="spain flag"></i>Español
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="russia flag"></i>Русский
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="portugal flag"></i>Português
                    </a>
                  </li>
                </ul>
              </li>
              {/* Avatar */}
              <li className="nav-item dropdown">
                <a
                  a
                  className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-dropdown-init
                  data-mdb-ripple-init
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                    className="rounded-circle"
                    height="22"
                    alt=""
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4">
          <div className="row">
            {authors &&
              authors.map((authorData, index) => (
                <div className="col-xl-3 col-sm-6 col-12 mb-4" key={index}>
                  <div className="card">
                    <div className="card-body">
                      {Object.entries(authorData.averageRating).map(
                        ([author, rating], idx) => (
                          <div key={idx}>
                            <h3 className="text-info">{rating}</h3>
                            <p className="text-info">Average Rating</p>
                            <h5 className="mb-0">{author}</h5>
                            <div
                              className="progress mt-3 mb-1 rounded"
                              style={{ height: "7px" }}
                            >
                              <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                style={{ width: `${parseFloat(rating) * 20}%` }}
                                aria-valuenow={parseFloat(rating) * 20}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Authors;
