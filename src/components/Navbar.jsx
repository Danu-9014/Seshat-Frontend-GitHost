import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav
        id="sidebarMenu"
        class="collapse d-lg-block sidebar collapse bg-white"
      >
        <div class="position-sticky">
          <div class="list-group list-group-flush mx-3 mt-4">
            <a
              href="/dashboard"
              class="list-group-item list-group-item-action py-2 active"
              data-mdb-ripple-init
            >
              <i class="fas fa-tachometer-alt fa-fw me-3"></i>
              <span>Main dashboard</span>
            </a>
            <a
              href="/children"
              class="list-group-item list-group-item-action py-2 "
              data-mdb-ripple-init
              aria-current="true"
            >
              <i class="fas fa-chart-area fa-fw me-3"></i>
              <span>Children</span>
            </a>
            <a
              href="/authors"
              class="list-group-item list-group-item-action py-2"
              data-mdb-ripple-init
            >
              <i class="fas fa-lock fa-fw me-3"></i>
              <span>Authors</span>
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action py-2"
              data-mdb-ripple-init
            >
              <i class="fas fa-chart-line fa-fw me-3"></i>
              <span>Analytics</span>
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action py-2"
              data-mdb-ripple-init
            >
              <i class="fas fa-chart-pie fa-fw me-3"></i>
              <span>Settings</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
