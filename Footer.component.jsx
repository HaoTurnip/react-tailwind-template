import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-pink-500 py-14 justify-center absolute bottom-0 w-full h-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <a className="text-lg font-extrabold tracking-wide inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">Footer Content</a>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-m font-extrabold tracking-wide inline-block mr-4 py-2 whitespace-nowrap uppercase text-white hover:text-pink-200 transition-colors duration-300"
                >
                  Link 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-m font-extrabold tracking-wide inline-block mr-4 py-2 whitespace-nowrap uppercase text-white hover:text-pink-200 transition-colors duration-300"
                >
                  Link 2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-m font-extrabold tracking-wide inline-block mr-4 py-2 whitespace-nowrap uppercase text-white hover:text-pink-200 transition-colors duration-300"
                >
                  Link 3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-m font-extrabold tracking-wide inline-block mr-4 py-2 whitespace-nowrap uppercase text-white hover:text-pink-200 transition-colors duration-300"
                >
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
