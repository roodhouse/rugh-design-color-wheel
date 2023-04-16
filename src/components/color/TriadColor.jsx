import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getColor, getColors } from '../colors';

function TriadColor() {

    const { id } = useParams();
    const color = getColor(id);
    const colors = getColors();

  return (
    <>
      {/* triad color container */}
      <div className="flex flex-row justify-evenly">
        <div
          className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
          style={{ backgroundColor: color.triad.colorOne.hex }}
        >
          <span className='text-center'>{color.triad.colorOne.name}</span>
        </div>
        <div
          className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
          style={{ backgroundColor: color.triad.colorTwo.hex }}
        >
          <span className='text-center'>{color.triad.colorTwo.name}</span>
        </div>
        <div
          className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
          style={{ backgroundColor: color.triad.colorThree.hex }}
        >
          <span className='text-center'>{color.triad.colorThree.name}</span>
        </div>
        <div
          className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
          style={{ backgroundColor: color.triad.colorThree.hex }}
        >
          <span className='text-center'>{color.triad.colorFour.name}</span>
        </div>
      </div>
    </>
  );
}

export default TriadColor