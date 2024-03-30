import React from 'react'
import logo from "../assets/logo.jpg"; 
import { Link } from "react-router-dom";

const MainNavBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  function handleLogout() {
    localStorage.removeItem("user");
    window.location.href = "/";
  }
  return (
    <nav
      id="main-navbar"
      class="navbar navbar-expand-lg navbar-light bg-white fixed-top mb-10"
    >
      {/* <!-- Container wrapper --> */}
      <div class="container-fluid">
        {/* <!-- Toggle button --> */}
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-collapse-init
          data-mdb-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        {/* <!-- Brand --> */}
        <a class="navbar-brand" href="/">
          <img src={logo} height="30" alt="" loading="lazy" />
        </a>
        {/* <!-- Search form --> */}
        <form class="d-none d-md-flex input-group w-auto my-auto">
          <input
            autocomplete="off"
            type="search"
            class="form-control rounded"
            placeholder="Search"
            style={{ minWidth: "225px" }}
          />
          <span class="input-group-text border-0">
            <i class="fas fa-search"></i>
          </span>
        </form>

        {/* <!-- Right links --> */}
        <ul class="navbar-nav ms-auto d-flex flex-row">
          {/* <!-- Notification dropdown --> */}
          <li class="nav-item dropdown">
            {user ? (
              <>
                <button
                  type="button"
                  className="btn btn-light me-3"
                  style={{ width: "100px", height: "35px", fontSize: "13px" }}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to={`/login`}>
                  <button
                    type="button"
                    className="btn btn-light me-3"
                    style={{ width: "100px", height: "35px", fontSize: "13px" }}
                  >
                    Login
                  </button>
                </Link>
                <Link to={`/register`}>
                  <button
                    type="button"
                    className="btn btn-light me-3"
                    style={{ width: "100px", height: "35px", fontSize: "13px" }}
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </li>

          {/* <!-- Avatar --> */}
          <li class="nav-item dropdown">
            <a
              a
              class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-dropdown-init
              data-mdb-ripple-init
              aria-expanded="false"
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                class="rounded-circle"
                height="22"
                alt=""
                loading="lazy"
              />
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a class="dropdown-item" href="#">
                  My profile
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {/* <!-- Container wrapper --> */}
    </nav>
  );
}

export default MainNavBar