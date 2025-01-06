import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-md shadow-md hover:shadow-lg transition duration-300 p-3 w-60">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-3 rounded-md"
      />
      <h3 className="text-sm font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 text-xs mt-1">{product.description}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-green-700 font-bold text-sm">${product.price}</span>
        <button className="bg-green-700 text-white px-3 py-1 rounded-md text-xs hover:bg-green-600">
          Buy Now
        </button>
      </div>
    </div>
  );
};

const AllProducts = () => {
  const products = [
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

  return (
    <div className="bg-gray-50 min-h-screen p-6  justify-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
