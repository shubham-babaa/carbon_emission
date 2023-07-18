'use client'
import React from 'react';
import Link from 'next/link';
import { AiFillVideoCamera } from 'react-icons/ai';
import { AiFillMessage } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiFillHome, AiOutlineUsergroupAdd,AiOutlinePieChart } from 'react-icons/ai';
import { AiFillAppstore } from "react-icons/ai";
import { FiSettings, HiOutlineBellAlert } from 'react-icons/fi';
import { FaQuestion } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiGridAlt} from 'react-icons/bi';
import { BsClockHistory} from 'react-icons/bs';
import { FiZap} from 'react-icons/fi';




const Dashboard = () => {
  return (
    <div className=' bg-gray-800'>
   
      {/* Your CSS styles here */}
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto flex items-center justify-between p-4  space-x-20 ">
          <div className='mr-10'>
            <span className="text-2xl font-bold">One Scope</span>

          </div>
          <div className="flex items-center space-x-10  ">
            <button className=" text-2xl font-bold text-white py-2 px-4 ml-4 rounded">
              Template
            </button>
            <input
              type="text"
              className="border border-gray-500 px-4 py-2 rounded-3xl w-[30vw]"
              placeholder="Search"
            />
          </div>
          <div className="flex items-center space-x-2 ">
            <button className="bg-gray-600 text-white py-2 px-4 ml-4 rounded border border-sky-800">
              < FaQuestion className='text-lg' />

            </button>
            <button className="bg-gray-600 text-white py-2 px-4 ml-4 rounded border border-sky-800">

              <FiSettings className='text-lg' />
            </button>
            <button className="bg-gray-600 text-white py-2 px-4 ml-4 rounded border border-sky-800">
              <IoMdNotificationsOutline className='text-lg' />
            </button>
            {/* <button className="bg-gray-700 text-white py-2 px-4 rounded-3xl ">
              Logout
            </button> */}

          </div>
          <Link href="/auth/signin" className="bg-gray-100 text-gray-900 font-semibold py-2 px-4 rounded-3xl">Logout
</Link>
        </div>
      </nav>
      <div className=' flex'>
        <div class="inline-block h-screen fixed top-0">
          <div className="w-full bg-gray-400 min-h-screen">
            <ul className="flex flex-col">
              <li className="mb-5 p-4 hover:bg-gray-300">
                <a href="#" className="text-gray-800 py-2 hover:bg-gray-300">
                  <AiFillHome className="ml-1 text-3xl text-gray-800 " />
                  <p> Home</p>

                </a>
              </li>
              <li className="mb-5 p-4 hover:bg-gray-300">
                <a href="#" className="text-gray-800 py-2 hover:bg-gray-300">
                  <AiFillMessage className="ml-1 text-3xl text-gray-800 " />
                  <p>Chat</p>
                </a>
              </li>
              <li className="mb-5 p-4 hover:bg-gray-300">
                <a href="#" className="text-gray-800 py-2 hover:bg-gray-300">

                  <AiOutlineUser className="ml-1 text-3xl text-gray-800 " />

                  <p>Spaces</p>
                </a>
              </li>
              <li className="mb-5 p-4 hover:bg-gray-300">
                <a href="#" className="text-gray-800 py-2  hover:text-gray-700">
                  <AiFillVideoCamera className="ml-1 text-3xl text-gray-800 " />

                  <p>Meet</p>
                </a>
              </li>
            </ul>
          </div>

        </div>
        {/* Left Side - User Profile and Navigation Buttons */}
        <div className="w-1/4 bg-gray-800 p-4 flex flex-col   shadow-sm shadow-gray-600 min-h-screen  ml-10">
          
          <div className="grid items-center text-center mb-4 ">
            <div className="flex items-center justify-center">
              <div className="w-20 h-20 bg-gray-500 rounded-full mb-2"></div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold mb-2">John Doe</h3>
              <button className="bg-gray-900 hover:bg-gray-300 hover:text-gray-900 font-semibold text-white px-3 py-2 rounded mb-2">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col items-center">
            <button className="bg-gray-900 hover:bg-gray-300 hover:text-gray-900 font-semibold text-white px-2 py-4 w-[70%] rounded-sm mb-4 flex justify-center">
         <BiGridAlt  className='text-3xl mr-3 absolute left-[10%]'/> 
         <p>Template</p>
            </button>
            <button className="bg-gray-900 hover:bg-gray-300 hover:text-gray-900 font-semibold text-white px-2 py-4 w-[70%] rounded-sm mb-4 flex justify-center">
          <BsClockHistory  className='text-2xl mr-3 absolute left-[10%]'/>   <p>  Usage History</p>
            </button>
            <button className="bg-gray-900 hover:bg-gray-300 hover:text-gray-900 font-semibold text-white px-2 py-4 w-[70%] rounded-sm mb-4 flex justify-center">
           <AiOutlinePieChart className='text-3xl mr-5 absolute left-[10%]'/>   
           <p>Analytics</p>
            </button>
            <button className="bg-gray-900 hover:bg-gray-300 hover:text-gray-900 font-semibold text-white px-2 py-4 w-[70%] rounded-sm mb-4 flex justify-center text-center">
            <FiZap className='text-3xl mr-3 absolute left-[10%]'/>
            <p>  Carbon GPT</p> 
            </button>
          </div>
        </div>

        {/* Right Side - Content Sections */}
        <div className="flex-1 p-4 ml-10">
          <div className="flex flex-wrap -mx-4 mb-4 gap-5">

            {/* First Div - Create New Template */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-gray-200 text-black rounded-lg  p-4 mb-4 min-h-[400px] shadow-lg hover:shadow-gray-500">
              <a href="/chat_ui">
                <h1 className="font-bold mb-2 text-center text-lg">Create New Template</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="8" cy="8" r="4" />
                  <line x1="8" y1="5" x2="8" y2="11" />
                  <line x1="5" y1="8" x2="11" y2="8" />

                </svg>
                <p className='text-xl  text-center'>
                  create of your own custom template report of your buissness carbon emmission
                </p>
              </a>
            </div>

            {/* Second Div - Business Travel */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4  p-4 mb-4 min-h-[400px] text-white bg-blue-500 rounded-lg shadow-lg hover:shadow-blue-500">
              <a href="/chat_ui">
                <h1 className="font-bold mb-2 text-center text-lg">Business Travel</h1>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="#fff" d="M18.5 5h-13C4.7 5 4 5.7 4 6.5V19h16V6.5c0-.8-.7-1.5-1.5-1.5zm-6 14h-4v-2h4v2zm4-4h-8v-2h8v2zm0-4h-8V9h8v2zm3.8-2H2.2l-.2-.8C2 5.4 2.6 5 3.2 5h17.5c.7 0 1.2.4 1.2 1v.8zM5 6.5C5 6.2 5.2 6 5.5 6h13c.3 0 .5.2.5.5V7H5V6.5z" />
                  </svg>
                </div>
                <div className='text-xl  text-center'>
                  calculate air travel emmission your company emit
                </div>

              </a>
              {/* Content */}
            </div>

            {/* Third Div - Electricity */}

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 text-black  bg-yellow-500 p-4 mb-4 min-h-[500px] rounded-lg shadow-lg hover:shadow-yellow-500">
              <a href="/chat_ui">
                <h1 className="font-bold mb-2 text-center text-lg">Electricity</h1>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                    <path fill="#007bff" d="M12 2C6.48 2 2 6.48 2 12c0 2.7 1.05 5.13 2.75 6.95.23.28.48.54.76.78.27.25.55.47.86.66.37.23.76.42 1.17.55.52.16 1.05.24 1.62.24h1.04c.57 0 1.1-.08 1.62-.24.41-.13.8-.32 1.17-.55.31-.19.59-.41.86-.66.28-.24.53-.5.76-.78C20.95 17.13 22 14.7 22 12c0-5.52-4.48-10-10-10zm2 17h-4v-2h4v2zm0-4h-4v-6h4v6zm-2-8h-2v-4h2v4z" />
                  </svg>
                </div>
                <div className=' text-xl  text-center'>
                  Calculate Electricity emmission your company emit
                </div>
              </a>
              {/* Content */}
            </div>


            {/* Fourth Div - Waste Management */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-sky-500 text-black  p-4 mb-4 min-h-[500px] rounded-lg shadow-lg hover:shadow-sky-500">
              <a href="/chat_ui">

                <h1 className="font-bold mb-2 text-center text-lg">Waste Management</h1>
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                  <path fill="none" stroke="#007bff" stroke-width="2" d="M4 21v-2c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v2" />
                  <path fill="#007bff" d="M16.04 3.96c-.72-.72-1.68-1.17-2.73-1.17s-2.01.45-2.73 1.17L12 5.2l-.58-.58c-.73-.73-1.7-1.17-2.76-1.17s-2.03.44-2.76 1.17L4 5.2V10h16V5.2l-1.04-1.24zM7 10h10v10H7V10zm2 2v6h2v-6h2v6h2v-6h2v6h2V12H7z" />
                </svg>
                </div>
                <div className='text-xl  text-center'>
                  Calculate waste emmission your company emit
                </div>

                {/* Content */}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
