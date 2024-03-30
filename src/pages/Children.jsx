import React from "react";
import logo from "../assets/logo.jpg"; // Initialization for ES Users
import { Dropdown, Ripple, initMDB } from "mdb-ui-kit";
import Navbar from "../components/Navbar";
import EditUser from "../components/EditUser";
import DeleteUser from "../components/DeleteUser";
import { useEffect, useState } from "react";
import axios from "axios";
initMDB({ Dropdown, Ripple });

const Children = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios
      .get("http://18.205.107.88:31479/api/user")
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  });

  return (
    <div>
      <header>
        <Navbar />
        {/* <!-- Sidebar -->

            <!-- Navbar --> */}
        <nav
          id="main-navbar"
          class="navbar navbar-expand-lg navbar-light bg-white fixed-top"
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
            <a class="navbar-brand" href="#">
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
                <a
                  class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-dropdown-init
                  aria-expanded="false"
                >
                  <i class="fas fa-bell"></i>
                  <span class="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Some news
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another news
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else
                    </a>
                  </li>
                </ul>
              </li>

              {/* <!-- Icon --> */}
              <li class="nav-item">
                <a class="nav-link me-3 me-lg-0" href="#">
                  <i class="fas fa-fill-drip"></i>
                </a>
              </li>
              {/* <!-- Icon --> */}
              <li class="nav-item me-3 me-lg-0">
                <a class="nav-link" href="#">
                  <i class="fab fa-github"></i>
                </a>
              </li>

              {/* <!-- Icon dropdown --> */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-dropdown-init
                  aria-expanded="false"
                >
                  <i class="united kingdom flag m-0"></i>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="united kingdom flag"></i>English
                      <i class="fa fa-check text-success ms-2"></i>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="poland flag"></i>Polski
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="china flag"></i>中文
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="japan flag"></i>日本語
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="germany flag"></i>Deutsch
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="france flag"></i>Français
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="spain flag"></i>Español
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="russia flag"></i>Русский
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="portugal flag"></i>Português
                    </a>
                  </li>
                </ul>
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
        {/* <!-- Navbar --> */}
      </header>
      <main style={{ marginTop: "58px" }}>
        <div class="container pt-4">
          <section class="mb-4">
            <div class="card">
              <div class="card-header text-center py-3">
                <h5 class="mb-0 text-center">
                  <strong>Children</strong>
                </h5>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-hover text-nowrap">
                    <thead>
                      <tr>
                        <th scope="col">Child Name</th>
                        <th scope="col">Currently Reading Book</th>
                        <th scope="col">No of Pages Read</th>
                        <th scope="col">Author</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users?.map((user) => (
                        <tr key={user.id}>
                          <td>{user?.name}</td>
                          <td>{user?.readingBook?.name}</td>
                          <td>{user?.noOfPagesRead}</td>
                          <td>{user?.readingBook?.author}</td>
                          <td class="icon-space">
                            {/* <i class="fas fa-trash text-danger mr-2"></i> */}
                            {/* <i class="fas fa-pencil-alt text-info"></i> */}
                            <EditUser id={user.id} />
                            <DeleteUser id={user.id} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Children;
