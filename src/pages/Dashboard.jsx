import React from "react";
import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";
import logo from "../assets/logo.jpg"; // Initialization for ES Users
import { Dropdown, Ripple, initMDB } from "mdb-ui-kit";
import Navbar from "../components/Navbar";
import ChildDetail from "../components/ChildDetail";
initMDB({ Dropdown, Ripple });

const Dashboard = () => {
  const [chartData, setChartData] = useState(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [noOfUsers, setNoOfUsers] = useState(0);
  const [noOfBooks, setNoOfBooks] = useState(0);

  useEffect(() => {
    axios
      .get("http://18.205.107.88:31481/api/result")
      .then((response) => {
        setChartData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (chartData) {
      generateChart(chartData);
    }
  }, [chartData]);

  const generateChart = (data) => {
    // Object to store total duration and occurrence count for each day
    const dailyStats = {};

    // Iterate through each result in the data array
    data.forEach((item) => {
      const averageSessionDuration = item.averageSessionDuration;

      // Iterate through the averageSessionDuration object
      Object.keys(averageSessionDuration).forEach((date) => {
        const day = date.split("T")[0]; // Extract the date without time
        const duration = parseFloat(averageSessionDuration[date]);

        // Update dailyStats object
        if (dailyStats[day]) {
          // If day exists in dailyStats, update total duration and occurrence count
          dailyStats[day].totalDuration += duration;
          dailyStats[day].occurrences++;
        } else {
          // If day doesn't exist in dailyStats, initialize it with total duration and occurrence count
          dailyStats[day] = {
            totalDuration: duration,
            occurrences: 1,
          };
        }
      });
    });

    // Calculate average duration for each day
    const dates = Object.keys(dailyStats).sort(); // Sort dates in ascending order
    const durations = dates.map(
      (day) =>
        dailyStats[day].totalDuration /
        dailyStats[day].occurrences /
        (1000 * 60)
    ); // Convert total duration to average duration in minutes

    // Get canvas element
    const ctx = document.getElementById("myChart");

    // Destroy existing chart instance
    if (chartInstance) {
      chartInstance.destroy();
    }

    // Create new chart instance
    const newChartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Average Session Duration (minutes)",
            data: durations,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            ticks: {
              callback: function (value, index, values) {
                return value + " mins";
              },
            },
          },
        },
      },
    });

    // Update state with new chart instance
    setChartInstance(newChartInstance);
  };

  useEffect(() => {
    axios
      .get("http://18.205.107.88:31479/api/user")
      .then((response) => {
        setNoOfUsers(response.data.data.length);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    axios
      .get("http://18.205.107.88:31480/api/book")
      .then((response) => {
        setNoOfBooks(response.data.data.length);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
      });
  }, []);

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
          {/* <!-- Section: Main chart --> */}
          <section class="mb-4">
            <div class="card">
              <div class="card-header py-3">
                <h5 class="mb-0 text-center">
                  <strong>Average Readings</strong>
                </h5>
              </div>
              <div class="card-body">
                <canvas class="my-4 w-100" id="myChart" height="100"></canvas>
              </div>
            </div>
          </section>
          {/* <!-- Section: Main chart -->

            <!--Section: Sales Performance KPIs--> */}
          <ChildDetail />
          {/* <!--Section: Sales Performance KPIs-->

            <!--Section: Minimal statistics cards--> */}
          <section>
            <div class="row">
              <div class="col-xl-3 col-sm-6 col-12 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between px-md-1">
                      <div class="align-self-center">
                        <i class="fas fa-book-open text-info fa-3x"></i>
                      </div>
                      <div class="text-end">
                        <h3>{noOfBooks}</h3>
                        <p class="mb-0">Books</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-12 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between px-md-1">
                      <div>
                        <h3 class="text-warning">{noOfUsers}</h3>
                        <p class="mb-0">Children</p>
                      </div>
                      <div class="align-self-center">
                        <i class="far fa-user text-warning fa-3x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-12 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between px-md-1">
                      <div class="align-self-center">
                        <i class="far fa-comments text-success fa-3x"></i>
                      </div>
                      <div class="text-end">
                        <h3>5</h3>
                        <p class="mb-0">Comments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-12 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between px-md-1">
                      <div class="align-self-center">
                        <i class="fas fa-chart-line text-danger fa-3x"></i>
                      </div>
                      <div class="text-end">
                        <h3>4</h3>
                        <p class="mb-0">Current Readings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="row">
              <div class="col-xl-3 col-sm-6 col-12 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between px-md-1">
                      <div>
                        <h3 class="text-danger">278</h3>
                        <p class="mb-0">New Projects</p>
                      </div>
                      <div class="align-self-center">
                        <i class="fas fa-rocket text-danger fa-3x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-12 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between px-md-1">
                      <div>
                        <h3 class="text-success">156</h3>
                        <p class="mb-0">Children</p>
                      </div>
                      <div class="align-self-center">
                        <i class="far fa-user text-success fa-3x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-12 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between px-md-1">
                      <div>
                        <h3 class="text-warning">64</h3>
                        <p class="mb-0">Books</p>
                      </div>
                      <div class="align-self-center">
                        <i class="fas fa-chart-pie text-warning fa-3x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-12 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between px-md-1">
                      <div>
                        <h3 class="text-info">423</h3>
                        <p class="mb-0">Support Tickets</p>
                      </div>
                      <div class="align-self-center">
                        <i class="far fa-life-ring text-info fa-3x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </section>
          {/* <!--Section: Minimal statistics cards--> */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
