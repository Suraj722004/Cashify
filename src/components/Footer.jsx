import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 ">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
          <div>
            <h3 className="font-bold text-lg mb-4">About Cashify</h3>
            <p className="text-gray-400 text-sm">
              Cashify helps you sell your old gadgets for the best price. Our mission is to make gadget resale simple and reliable.
            </p>
          </div>

          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-green-500">
                  Sell Old Phones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Buy Refurbished Devices
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Repair Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Customer Support
                </a>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Email: support@cashify.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Tech Street, City, Country</li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500">
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Cashify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
