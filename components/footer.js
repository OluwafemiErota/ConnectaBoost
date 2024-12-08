// ./components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F7F7F7] py-12 px-4 sm:px-6 lg:px-8 border-t-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Merchants
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Agencies
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Affiliates
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Resources
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Legal
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Merchant Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Affiliate Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Data Processing Addendum
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            ConnectaBoost.com Inc.
          </h3>
          <p className="text-gray-600 mb-2">
            167 N Green Street <br />
            Office Number 04A-117 <br />
            Chicago, IL 60607
          </p>
          <p className="text-gray-600 mb-2">(312) 321-0487</p>
          <p className="text-gray-600">
            <a
              href="mailto:shareasale@shareasale.com"
              className="hover:text-blue-500"
            >
              ConnectaBoost@ConnectaBoost.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
