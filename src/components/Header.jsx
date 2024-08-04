import React from 'react';
import plexArowIcon from '/icons/plexarow.svg';

const Header = () => {
  const navItems = [
    {
      "href": "#home",
      "navItem": "Home"
    },
    {
      "href": "#why",
      "navItem": "Why us"
    },
    {
      "href": "#how",
      "navItem": "How it works"
    },
    {
      "href": "#contact",
      "navItem": "Contact us"
    },
  ];

  return (
    <section className='bg-[#f8f3f0]'>
      <div className='flex justify-between max-w-6xl mx-auto px-12 font-poppins'>
        <div>
          <img src={plexArowIcon} alt="" width={140} className='py-5'/>
        </div>
        <ul className='flex gap-6 items-center'>
          {navItems.map((item, index) => (
            <li key={index} className='group'>
              <a href={item.href} className='hover:text-[#4d00ff] font-medium'>
                {item.navItem}
              </a>
              {
                item.navItem === "Home" && 
                <div className='border-b-2 mt-1 border-black w-full'></div>
              }
              {
                item.navItem !== "Home" && 
                <div className='border-b-2 mt-1 border-black w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              }
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Header;
