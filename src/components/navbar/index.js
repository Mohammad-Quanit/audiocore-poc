import React from "react";
import { Link } from "gatsby";
import "./navbar.css";

function Navbar() {
  return (
    <header className="bg-grey border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">

      {/* <!-- Logo text or image --> */}
      <div className="flex items-center justify-between mb-4 md:mb-0">
        <h1 className="leading-none text-2xl text-grey-darkest">
          <Link className="no-underline text-grey-darkest hover:text-black" to="/">
            Audio Core
        </Link>
        </h1>

        <Link className="text-black hover:text-orange md:hidden" to="/">
          <i className="fa fa-2x fa-bars"></i>
        </Link>
      </div>
      {/* <!-- END Logo text or image --> */}

      {/* <!-- Search field --> */}
      <form className="mb-4 w-full md:mb-0 md:w-1/4">
        <label className="hidden" for="search-form">Search</label>
        <input className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder="Search" type="text" />
        <button className="hidden">Submit</button>
      </form>
      {/* <!-- END Search field --> */}

      {/* <!-- Global navigation --> */}
      <nav>
        <ul className="list-reset md:flex md:items-center">
          <li className="md:ml-4">
            <Link className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" to="/">
              Home
          </Link>
          </li>
          <li className="md:ml-4">
            <Link className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" to="/about">
              About
          </Link>
          </li>
          <li className="md:ml-4">
            <Link className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" to="/location">
              Location
          </Link>
          </li>
        </ul>
      </nav>
      {/* <!-- END Global navigation --> */}

    </header>
  );
}

Navbar.propTypes = {};

export default Navbar;
