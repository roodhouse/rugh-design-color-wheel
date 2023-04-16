import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getColor, getColors } from '../colors';

function AnaColor() {

    const { id } = useParams();
    const color = getColor(id);
    const colors = getColors();

  return (
    <>
      {/* ana color container */}
      <div className="flex flex-row justify-evenly">
        <div
          className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
          style={{ backgroundColor: color.ana.colorOne.hex }}
        >
          <span className='text-center'>{color.ana.colorOne.name}</span>
        </div>
        <div
          className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
          style={{ backgroundColor: color.ana.colorTwo.hex }}
        >
          <span className='text-center'>{color.ana.colorTwo.name}</span>
        </div>
        <div
          className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
          style={{ backgroundColor: color.ana.colorThree.hex }}
        >
          <span className='text-center'>{color.ana.colorThree.name}</span>
        </div>
        <div
          className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
          style={{ backgroundColor: color.ana.colorThree.hex }}
        >
          <span className='text-center'>{color.ana.colorFour.name}</span>
        </div>
      </div>
    </>
  );
}

export default AnaColor