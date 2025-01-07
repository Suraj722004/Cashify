import React from 'react';
import { IoIosCheckboxOutline } from "react-icons/io";


const formatPriceInINR = (priceInUSD) => {
  const conversionRate = 83; 
  const priceInINR = priceInUSD * conversionRate;
  return `₹${priceInINR.toLocaleString('en-IN')}`;
};


const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-md shadow-md hover:shadow-lg transition duration-300 p-4 w-64">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-3 rounded-md"
      />
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 text-sm mt-1">{product.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-green-700 font-bold text-lg">{product.price}</span>
        <button className="bg-green-700 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600">
          Buy Now
        </button>
      </div>
    </div>
  );
};


const AllProducts = () => {
  const phones = [
    {
      id: 1,
      name: 'iPhone 14 Pro',
      description: 'Latest Apple smartphone with A16 Bionic chip.',
      price: 999,
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/312834458/RJ/KH/XS/4630526/apple-iphone-14-pro-max-128gb-deep-purple-mobile-phone-500x500.jpg',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: 'Powerful Android phone with amazing features.',
      price: 799,
      image: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-s711blgbins/gallery/in-galaxy-s23-fe-s711-479553-sm-s711blgbins-thumb-538355945',
    },
    {
      id: 3,
      name: 'OnePlus 11',
      description: 'Flagship performance with OxygenOS.',
      price: 699,
      image: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png',
    },
    {
      id: 4,
      name: 'Xiaomi Redmi Note 12',
      description: 'Affordable smartphone with impressive specs.',
      price: 299,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiDBiJMQsXH7vMWgnwvgeh-uHmoMmI7x_dnA&s',
    },
  ];

  const laptops = [
    {
      id: 5,
      name: 'MacBook Pro 16-inch',
      description: 'High-performance laptop with M2 Pro chip.',
      price: 2499,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHluY3FA2aCrawfm1D_ZFCsPXsXiIYhN7DwA&s',
    },
    {
      id: 6,
      name: 'Dell XPS 13',
      description: 'Compact and powerful ultrabook.',
      price: 1199,
      image: 'https://images-cdn.ubuy.co.in/633ab3a9d9b0dc2d607686fc-dell-xps-13-9310-touchscreen-13-4-inch.jpg',
    },
    {
      id: 7,
      name: 'HP Spectre x360',
      description: 'Versatile 2-in-1 laptop with premium build.',
      price: 1399,
      image: 'https://rukminim2.flixcart.com/image/850/1000/jdoubgw0/computer/x/y/e/hp-na-2-in-1-laptop-original-imaf2jkzhgzfsstu.jpeg?q=90&crop=false',
    },
    {
      id: 8,
      name: 'Lenovo ThinkPad X1 Carbon',
      description: 'Business laptop with excellent durability.',
      price: 1599,
      image: 'https://p1-ofp.static.pub/fes/cms/2022/03/17/pw5jy11vn8u0jbi3rdu3aq1ij4bl15411237.png',
    },
  ];

  // Format prices in INR for all products
  const phonesWithINR = phones.map((phone) => ({
    ...phone,
    price: formatPriceInINR(phone.price),
  }));
  const laptopsWithINR = laptops.map((laptop) => ({
    ...laptop,
    price: formatPriceInINR(laptop.price),
  }));

  return (
    <>
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Buy Refurbished Phones</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {phonesWithINR.map((phone) => (
          <ProductCard key={phone.id} product={phone} />
        ))}
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8 mt-12 text-center">Buy Refurbished Laptops</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {laptopsWithINR.map((laptop) => (
          <ProductCard key={laptop.id} product={laptop} />
        ))}
      </div>
    </div>
    <div>
      <img src="https://s3no.cashify.in/cashify/web/c8c29565d5de476a8858a0c3ed141cd7.jpg?p=default&s=lg" alt="" />
      </div>
      <div className='flex justify-center'>
      <IoIosCheckboxOutline className='mt-1'/>
      <h3>By proceeding, you consent to Cashify tracking your journey on Spinny.</h3>
      <p className='text-green-600'> Know More</p>
    </div>
    </>
  );
};

export default AllProducts;
