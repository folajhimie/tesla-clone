import React from "react";

export default function Footer() {
  return (
    <div className="">
      <footer
        aria-label="Site footer"
        className="flex justify-center relative z-50 text-sm w-full bottom-6 "
        data-component-status="initialized"
      >
        <nav class="tds-footer-nav">
          {/* <h2 class="visually-hidden tds--is_visually_hidden">Footer menu</h2> */}

          <ul
            data-region="footer"
            className="flex justify-center md:flex md:flex-col lg:items-center sm:flex sm:flex-col"
          >
            <li className="mr-6 md:my-2 md:mr-1">
              <a
                href="/about"
                title="Copyright 2023 Tesla Motors"
                
              >
                Tesla © 2023
              </a>
            </li>
            <li className="mr-6 md:my-2 md:mr-1">
              <a href="/legal" class="tds-link tcl-link">
                Privacy &amp; Legal
              </a>
            </li>
            <li className="mr-6 md:my-2 md:mr-1">
              <a
                href="https://www.tesla.com/vin-recall-search"
                class="tds-link tcl-link"
              >
                Vehicle Recalls
              </a>
            </li>
            <li className="mr-6 md:my-2 md:mr-1">
              <a href="/contact" class="tds-link tcl-link">
                Contact
              </a>
            </li>
            <li className="mr-6 md:my-2 md:mr-1">
              <a href="/careers" class="tds-link tcl-link">
                Careers
              </a>
            </li>
            <li className="mr-6 md:my-2 md:mr-1">
              <a href="/blog" class="tds-link tcl-link">
                News
              </a>
            </li>
            <li className="mr-6 md:my-2 md:mr-1">
              <a href="https://engage.tesla.com/" class="tds-link tcl-link">
                Engage
              </a>
            </li>
            <li className="mr-6 md:my-2 md:mr-1">
              <a href="/findus/list" class="tds-link tcl-link">
                Locations
              </a>
            </li>
          </ul>

          <div class="block block-tesla-banners block-banner-target-block-1"></div>
        </nav>
      </footer>
    </div>
  );
}
