'use client'
import React, { useState, useContext, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { BiArrowFromLeft } from 'react-icons/bi';
import { IoRefresh } from 'react-icons/io5';
import { MyContext } from './Context';
import { FaComment } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { object, ClearObject, historySearch } = useContext(MyContext);
  const [history, setHistory] = useState([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Check if localStorage is available
    if (typeof window !== 'undefined' && window.localStorage) {
      // Access and use localStorage
      const storedData = localStorage.getItem('putItems');
      const existingData = storedData ? JSON.parse(storedData) : [];

      setHistory(existingData);
    }
  }, []);

  const menuStyle = {
    transform: isOpen ? 'translateX(-100%)' : 'translateX(0)',
    transition: 'transform 500ms ease-in-out',

  };

  return (
    <nav className={`z-10 border-3 fixed  left-0  `}>
      
    <div>
      <div className=" sm:flex items-center z-0">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-gray-200 hover:text-white focus:outline-none focus:text-white"
          >
            {isOpen &&<FiMenu  className='text-[50px]'/> }
          </button>
        </div>
    </div>
       

        <div
          className={`sm:flex sm:left-[0%] sm:bg-inherit min-h-screen sm:bg-slate-900 fixed top-[0%] left-[0%]  rounded-b-md h-[300px] z-10`}
          style={menuStyle}
        >
          <div className="grid grid-rows-4 text-2xl space-x-4 ">
            <ul className="flex flex-col space-y-3 mt-4">
              <li> <div className="flex flex-shrink-0 w-[15vw] sm:w-[10vw] py-3 text-center">
          <span className="text-white text-2xl font-bold">One Scope</span>
        </div>
        </li>
              <li className="flex">
                <button
                  onClick={() => {
                    ClearObject();
                  }}
                  className="text-gray-300 hover:bg-gray-700 sm:text-gray-600 hover:text-white px-5 py-2 rounded-md md:text-xl font-medium"
                >
                  <div className="border-2 border-gray-300 rounded-md px-4">+ New chat</div>
                </button>
                <button
                  className="text-gray-300 hover:bg-gray-700  hover:text-white px-5 py-2 rounded-md md:text-xl font-medium "
                  onClick={toggleMenu}>
                  <div className="border-2 border-gray-300 rounded-md px-4"  > <p>[]</p></div>
                </button>
              </li>
              <li>
                <div className="text-gray-300 sm:text-gray-600 px-3 py-2 text-xl mb-2">previous 7 days</div>
                <div className="max-h-[51vh] ml-12 text-white overflow-y-auto scrollbar-hide">
                  <ul>
                    {Array.isArray(history) &&
                      history.map((item, index) => (
                        <li key={index} className="mb-2 hover:bg-gray-500 rounded-sm text-sm">
                          <button
                            className="flex items-center justify-center px-4 py-2 text-white"
                            onClick={() => historySearch(item)}
                          >
                            <FaComment className="mr-5" /> <p>{item.split(' ').slice(0, 3).join(' ')}</p>
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
              </li>
              <li className="border-t-2 flex item-center justify-center fixed top-[73vh] w-[96%] left-[0px]">
                <div className="w-10 h-10 bg-gray-500 rounded-full mt-5"></div>
              </li>
            </ul>
          </div>
        </div>
    
    </nav>
  );
};

export default Navbar;
