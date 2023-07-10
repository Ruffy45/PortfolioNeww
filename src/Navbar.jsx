import React from 'react';

const Navbar = () => {
  return (
 <div className='bg-black text-white py-5 flex justify-between'>
  <div className='pl-5'>
  Navbar
  </div>
  <div>
    {/* md: media query   */}
  <ul className='flex justify-end gap-2 pr-10 md:flex sm:gap-5 '>
  <li>About</li>
  <li>Projects</li>
  <li>Contact</li>
</ul> 
  </div>

 </div>
  );
};

export default Navbar;
