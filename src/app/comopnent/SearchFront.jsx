"use client"
import React, { useState, useEffect, useContext, useRef } from 'react';
import { LuChevronRight } from "react-icons/lu";
import { MyContext } from './Context';
import Apicall from '../api/Apicall';
import Loding from '../loading';
import Navbar from './Navbar';

const BardUI = () => {
  const { object, updateObject, historyobj } = useContext(MyContext);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [searcharray, setSearcharray] = useState([]);
  const[next,setNext]=useState(false);
  const handleSearch = async () => {
    setSearcharray((prev) => [...prev, searchQuery]);
    updateObject(searchQuery, 'user');
    const arrayString = JSON.stringify(object);

    if (typeof window !== 'undefined' && window.localStorage) {
      const existingData = localStorage.getItem('putItems');
      const existingArray = existingData ? JSON.parse(existingData) : [];
      existingArray.push(searchQuery);
      localStorage.setItem('putItems', JSON.stringify(existingArray));
    }

    sendMessage(searchQuery);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  const sendMessage = async (message) => {
    setLoading(true);
    setSearchQuery('');
    try {
      const response = await Apicall(message);
      const { out } = response;
      updateObject(out, 'bot');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  function Nextdoor() {
    // Function logic goes here
    setNext(true)
    // You can also include any necessary code to calculate carbon emission for business travel
    
    // For example, you can log a message to the console
    console.log("Calculating carbon emission for business travel...");
  
    // You can also perform any other necessary actions within this function
    
    // Remember to return any relevant values if needed
    
    // Optionally, you can include a return statement at the end
    // return someValue;
  }

  return (
    <div className="flex flex-col sm:flex-row  ">
 
    
     <section className={ ` bg-gray-700 overflow-y-hidden min-h-screen ${next ? 'relative w-[85vw] left-[10vw]' : ''}`}>
     <section > <Navbar /></section> 
     <section className={`min-h-screen  bg-gradient-to-br from-[rgba(2,2,23,0.33)] via-[rgba(114,113,159,0.83)] to-#9897CD  ${next ? 'block absolute w-[60vw] left-[4vw]  shadow-sm rounded-r-sm px-2 pt-3' : 'hidden'}`}>
    
Dolore rem in autem. Fugit reiciendis quidem omnis 
beatae blanditiis, qui quas culpa. Ad 
illo iusto voluptas repellendus, mollitia earum aliquid veniam!
     </section> 
        <div className="min-h-screen w-full z-0  pt-6  ">
        {object.length === 0 && (
          <section className={`mx-auto  text-center  ${next ? 'absolute w-[15vw] sm:top-[0vh] left-[10vw] hidden':'sm:absolute sm:top-[15vh] sm:left-[25vw]  w-[70%]  '}`}>
            <div>
              <div className="mb-100 text-center mb-[5vh]">
                <h1 className="text-white text-3xl font-bold mb-2">One Scope AI</h1>
                <p className="text-cyan-300 text-2xl font-bold">Not sure what to ask, here are some suggestions</p>
              </div>
              <div className="flex justify-center items-center flex-wrap  gap-y-10">
                <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                  <button className="text-xl font-medium text-black" onClick={Nextdoor}>I want to calculate carbon emission for business travel</button>
                </div>
                <div className="p-6 max-w-sm mx-auto bg-white rounded-xI want to calculate carbon emission for business travel
                l shadow-md flex items-center space-x-4">
                  <div className="text-xl font-medium text-black">I want to calculate carbon emission for business travel</div>
                </div>
                <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                  <div className="text-xl font-medium text-black">I want to calculate carbon emission for business travel</div>
                </div>
              </div>
            </div>
          </section>
        )}
        <section className='flex justify-center'>
          <div className={`flex flex-col item-center  ${next?' absolute left-[80%] w-[20%]  h-[85vh] overflow-y-auto scrollbar-hide  ':'absolute left-[35%]  h-[85vh] overflow-y-auto scrollbar-hide '}`}>
            <div className="flex flex-col space-y-4 ">
              {object.map((message, index) => (
                <div
                  key={index}
                  className={` ${message.type === 'user' ? 'px-1 ' : ' px-1'} `}
                >
                  <div
                    className={`flex  ${
                      message.type === 'user' ? ' bg-slate-800' : ' bg-gray-900'
                    } rounded-md  text-white  ${next?' w-[18vw] p-4 ':'w-[40vw] p-4'}`}
                  >
                    <div>{message.message}</div>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start px-4">
                  <div className="bg-gray-800 rounded-lg p-4 text-white max-w-sm">
                    <Loding />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <div className={`  mx-auto   mb-12 justify-center items-center sm:py-2 flex border border-gray-400 bg-slate-100 rounded-3xl px-4 ${next?' fixed bottom-0 sm:left-[80%] w-[95vw] sm:w-[18vw] rounded-lg':'fixed bottom-0 sm:left-[36.5vw] w-[95vw] sm:w-[40vw]  '}`}>
          <input
            type="text"
            className="flex-grow px-4 py-2 bg-transparent text-black focus:outline-none"
            placeholder="Type your message..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            type="submit"
            className={`bg-purple-500   text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300  ${next?'py-1 px-2 rounded-sm ':'px-4 sm:py-2 rounded-sm sm:rounded-lg'}`}
            onClick={handleSearch}
          >
            Send
          </button>
        </div>
      </div>
      </section>
    </div>
 
  );
};


export default BardUI;
