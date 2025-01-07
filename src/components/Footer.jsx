import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../images/logo.png'

const Footer = () => {
  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Sell Phone', link: '/sell-phone' },
        { label: 'Sell Television', link: '/sell-television' },
        { label: 'Sell Smart Watch', link: '/sell-smart-watch' },
        { label: 'Sell Smart Speakers', link: '/sell-smart-speakers' },
        { label: 'Sell DSLR Camera', link: '/sell-dslr-camera' },
        { label: 'Sell Earbuds', link: '/sell-earbuds' },
        { label: 'Repair Phone', link: '/repair-phone' },
        { label: 'Buy Phone', link: '/buy-phone' },
        { label: 'Recycle Phone', link: '/recycle-phone' },
        { label: 'Find New Phone', link: '/find-new-phone' },
        { label: 'Partner With Us', link: '/partner-with-us' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', link: '/about-us' },
        { label: 'Careers', link: '/careers' },
        { label: 'Articles', link: '/articles' },
        { label: 'Press Releases', link: '/press-releases' },
        { label: 'Become Cashify Partner', link: '/become-cashify-partner' },
        { label: 'Become Supersale Partner', link: '/become-supersale-partner' },
        { label: 'Corporate Information', link: '/corporate-information' },
      ],
    },
    {
      title: 'Help & Support',
      links: [
        { label: 'FAQ', link: '/faq' },
        { label: 'Contact Us', link: '/contact-us' },
        { label: 'Warranty Policy', link: '/warranty-policy' },
        { label: 'Refund Policy', link: '/refund-policy' },
        { label: 'More Info', link: '/more-info' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms & Conditions', link: '/terms-conditions' },
        { label: 'Privacy Policy', link: '/privacy-policy' },
        { label: 'Terms of Use', link: '/terms-of-use' },
        { label: 'E-Waste Policy', link: '/e-waste-policy' },
        { label: 'Cookie Policy', link: '/cookie-policy' },
        { label: 'GDPR Compliance', link: '/gdpr-compliance' },
      ],
    },
    {
      title: 'More',
      links: [
        { label: 'What is Refurbished', link: '/what-is-refurbished' },
        { label: 'Device Safety', link: '/device-safety' },
      ],
    },
  ];

  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto px-6 flex flex-wrap items-start justify-between gap-8">
  
        <div >
          <img
            src={logo}
            alt="Company Logo"
            className="h-12"
          />
        </div>

        
        <div className="flex flex-col items-center ">
          <h3 className="text-xl font-semibold mb-4">Follow Us On</h3>
          <div className="flex space-x-6">
            <a href="/twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-green-400 transition duration-300" />
            </a>
            <a href="/facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-green-400 transition duration-300" />
            </a>
            <a href="/instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-green-400 transition duration-300" />
            </a>
            <a href="/youtube" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-2xl hover:text-green-400 transition duration-300" />
            </a>
          </div>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 flex-grow">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href={link.link}
                      className="hover:text-green-400 transition duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      
      <div className="text-center mt-8 text-gray-400">
        <p>&copy; {new Date().getFullYear()} Cashify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
