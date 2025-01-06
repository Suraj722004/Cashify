import React from 'react';

const MenuBar = () => {
  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Sell Phones', link: '/sell-phones' },
    { label: 'Sell Gadgets', link: '/sell-gadgets' },
    { label: 'Buy Phones', link: '/buy-phones' },
    { label: 'Find New Gadget', link: '/find-gadget' },
    { label: 'Buy Laptops', link: '/buy-laptops' },
    { label: 'Cashify Store', link: '/store' },
    { label: 'More', link: '/more' },
  ];

  return (
    <div className="bg-gray-100 p-4 shadow-md">
      <nav className="flex justify-center space-x-8">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-gray-800 hover:text-green-700 font-medium transition duration-300"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MenuBar;
