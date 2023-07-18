'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import BardUI from '../comopnent/SearchFront'
import Navbar from '../comopnent/Navbar'
import { MyContextProvider } from '../comopnent/Context';

export default function Home() {


  return (
    <main className="  ">
      <MyContextProvider>
        <div className='bg-gray-700'>
    
            <BardUI />
          </div>

      </MyContextProvider>
    </main>
  );
}