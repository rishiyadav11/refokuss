

import React, { useState } from 'react';
import Button from './Button';

function Product({ val, mover, index, background }) {
 const [isHovered, setIsHovered] = useState(false);

 const handleMouseEnter = () => {
    setIsHovered(true);
 };

 const handleMouseLeave = () => {
    setIsHovered(false);
 };

 return (
    <div
      className='w-full h-[23rem] py-2 text-white'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: isHovered ? `url(${background})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div onMouseEnter={() => mover(index)} className={`max-w-screen-xl h-full mx-auto flex justify-between items-center`}>
        <h1 className='text-5xl capitalize font-semibold'>{val.title}</h1>
        <div className="dets w-1/3">
          <p className='mb-10'>{val.description}</p>
          <div className="btns flex gap-3 text-black">
            {val.live === true && <Button title="Live Website" />}
            {val.case === true && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
 );
}

export default Product;