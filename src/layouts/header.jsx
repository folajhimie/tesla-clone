import React from "react";
import tesla from "../assets/tesla.svg";
import { Menu } from "../components";
import "./header.css";
// import car from '../assets/tesla/M3-Homepage-Desktop-LHD.jpeg'

const header = ({ isMenu, setIsMenu }) => {
  return (
    <div className="w-full">
      <div className="p-3 flex justify-center fixed z-10 bg-white w-full text-slate-600">
        <section className="">
          Until March 2023, new Model 3 and Model Y vehicles qualify for a
          $7,500 federal tax credit for eligible buyers.{" "}
          <a
            href="/support/incentives"
            data-tesla_locale_processed="1"
            
            className="m-l-4 relative font-Arial underline decoration-1 underline-offset-1 decoration-slate-600 cursor-pointer text-center hover:decoration-2 hover:decoration-slate-900"
          >
            Learn&nbsp;More
          </a>
        </section>
      </div>
      {/* <div>
        </div> */}
      <div className=" tds-site-header flex flex-row justify-between h-12 w-full tesla-container">
        <div className="tds-animate--backdrop-backdrop"></div>
        <h1
          className="top-6 tds-site-logo tds-align--start flex flex-row justify-start order-1 mr-32 relative right-12"
          style={{ height: "40px" }}
        >
          <a className="tds-site-logo-link" aria-label="Tesla Logo" href="/">
            <img className="ml-2.5 mb-2 bg-orange-70 md:mt-12 md:ml-5 lg:mt-4" src={tesla} alt="logo" />
            {/* <svg class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" height="800" width="200" viewBox="-117.8008 1098.00420 562.2736 54.5055" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z" fill="currentColor"></path></svg> */}
          </a>
        </h1>

        <ul
          className="tesla-middle-button mb-2 top-1 relative tds-site-nav-items tds-align--center tds--product-name order-2 mr-8 ml-4 flex text-center justify-between font-medium font-rubik text-[#000000]"
          // style={{ width: '42%'}}
        >
          <li className="mt-2 tesla-holder h-8">
            <a
              title="Model S"
              href="/models"
              className="tds-site-nav-item tds-animate--backdrop tds--product-name"
            >
              <span className="tds-site-nav-item-text">Model S</span>
            </a>
          </li>
          <li className="mt-2 tesla-holder h-8">
            <a
              title="Model 3"
              href="/model3"
              className="tds-site-nav-item tds-animate--backdrop tds--product-name"
            >
              <span className="tds-site-nav-item-text">Model 3</span>
            </a>
          </li>
          <li className="mt-2 tesla-holder h-8">
            <a
              title="Model X"
              href="/modelx"
              className="tds-site-nav-item tds-animate--backdrop tds--product-name"
            >
              <span className="tds-site-nav-item-text">Model X</span>
            </a>
          </li>
          <li className="mt-2 tesla-holder h-8">
            <a
              title="Model Y"
              href="/modely"
              className="tds-site-nav-item tds-animate--backdrop tds--product-name"
            >
              <span className="tds-site-nav-item-text">Model Y</span>
            </a>
          </li>
          <li className="mt-2 tesla-holder h-8">
            <a
              title="Solar Roof"
              href="/solarroof"
              className="tds-site-nav-item tds-animate--backdrop tds--product-name"
            >
              <span className="tds-site-nav-item-text">Solar Roof</span>
            </a>
          </li>
          <li className="mt-2 tesla-holder h-8">
            <a
              title="Solar Panels"
              href="/solarpanels"
              className="tds-site-nav-item tds-animate--backdrop tds--product-name"
            >
              <span className="tds-site-nav-item-text">Solar Panels</span>
            </a>
          </li>
        </ul>

        <ul className="top-1 relative tds-site-nav-items tds-align--end tds--product-name order-3 mr-16 ml-32 flex text-center justify-between w-52 font-medium font-rubik text-[#000000]">
          <li className="mt-2 tesla-holder h-8">
            <a
              title="Shop"
              href="https://shop.tesla.com"
              className="tds-site-nav-item-shop tds-animate--backdrop tds--product-name"
            >
              <span className="tds-site-nav-item-text">Shop</span>
            </a>
          </li>
          <li className="mt-2 tesla-holder h-8">
            <a
              title="Account"
              href="/teslaaccount"
              className="tds-site-nav-item-account tds-animate--backdrop tds--product-name"
            >
              <span className="tds-site-nav-item-text">Account</span>
            </a>
          </li>
          <li className="tds-site-nav-item-menu mt-2 tesla-holder h-8 md:mt-12 md:ml-5 sm:mt-12 sm:ml-5">
            <button
              type="button"
              onClick={() => setIsMenu(true)}
              title="Menu"
              action="secondaryNavigationItems"
              className="tds-site-nav-item tds-animate--backdrop tds--product-name md:mt-12 md:ml-5 sm:mt-12 sm:ml-5"
            >
              <span className="tds-site-nav-item-text">Menu</span>
            </button>
          </li>
        </ul>
        {isMenu && <Menu setIsMenu={setIsMenu} />}
      </div>
    </div>
  );
};

export default header;
