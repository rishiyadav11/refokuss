import React from 'react';
import Button from './Button';

function Navbar() {
  return (
    <div className='w-full px-10 py-6 mx-auto flex items-center justify-between border-b-[0.5px] border-y-slate-600 fixed bg-black z-30 '>
      <div className="n-left flex items-center">
      <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
      <div className='links flex gap-14 ml-24'>
        {["Home", "Work", "Careers", "", "News"].map((elem, index) => (
          elem.length === 0 ? (
            <span key={index} className='inline-block h-5 w-[1px] bg-slate-600'></span>
          ) : (
            <a key={index} className='font-regular text-sm text-white flex items-center gap-1' href="#">
              {index === 1 ? (
                <span style={{ boxShadow: "0 0 0.25em #00ff19" }} className='inline-block bg-[#00FF19] w-[6px] h-[6px] rounded-xl'></span>
              ) : null}
              {elem}
            </a>
          )
        ))}
      </div>
      </div>
      <Button/>
    </div>
  );
}

export default Navbar;