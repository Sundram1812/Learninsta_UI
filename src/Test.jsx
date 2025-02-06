import React, { useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";


function Test() {
  const [isOpenNav, setIsOpenNav]=useState(false)
  return (
    <div className="flex flex-row gap-2 relative transition-all duration-500 py-1 min-h-[63vh] overflow-y-auto no-scrollbar">
      
      <div className={`${isOpenNav ? '' : 'hidden'} md:min-h-[80vh] bg-gray-500 basis-[30vw] h-[90vh] min-w-[20vw] md:min-w-[15vw] fixed md:relative  z-10 md:z-0 left-0 rounded-md overflow-y-auto no-scrollbar`}>
          <div onClick={()=>setIsOpenNav(!isOpenNav)} className="absolute right-2 top-1   bg-red-800 cursor-pointer ">
            <MenuOpenIcon/>
          </div>


          <div className=' border my-10 border-gray-400'></div>
          

      </div>


    <div className={` h-[90vh]  bg-gray-600 basis-full relative z-0  py-4 pt-8 px-6 overflow-y-auto no-scrollbar rounded-md`}>
        <div onClick={()=>setIsOpenNav(!isOpenNav)} className="absolute  left-2 top-1 cursor-pointer">
          { <MenuIcon/>}
        </div>

        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
        <p>Java</p>
    </div>
  </div>
  )
}

export default Test