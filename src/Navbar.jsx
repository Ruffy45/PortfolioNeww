import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-500 to-purple-600 text-white py-5 flex justify-between ">
      <div className="pl-5">
        <p className="text-2xl font">Portfolio</p>
      </div>
      <div>
        {/* md: media query   */}
        <ul className="flex justify-end gap-2 pr-10 md:flex sm:gap-5">
          <li>
            <button className="bg-purple-900 hover:bg-purple-700 text-white rounded-full px-4 py-2">
              About
            </button>
          </li>
          <li>
            <button className="bg-purple-900 hover:bg-purple-700 text-white rounded-full py-2 px-4">
              Projects
            </button>
          </li>
          <li>
            <button className="bg-purple-900 hover:bg-purple-700 rounded-full py-2 px-4 text-white">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
