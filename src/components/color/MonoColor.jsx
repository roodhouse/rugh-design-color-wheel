import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getColor, getColors } from '../colors';

function MonoColor() {

    const { id } = useParams();
    const color = getColor(id);
    const colors = getColors();

  return (
    <>
      {/* mono color container */}
      <div className="flex flex-row justify-evenly">
        <div
          className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
          style={{ backgroundColor: color.mono.colorOne.hex }}
        >
          <span className='text-center'>{color.mono.colorOne.name}</span>
        </div>
        <div
          className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
          style={{ backgroundColor: color.mono.colorTwo.hex }}
        >
          <span className='text-center'>{color.mono.colorTwo.name}</span>
        </div>
        <div
          className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
          style={{ backgroundColor: color.mono.colorThree.hex }}
        >
          <span className='text-center'>{color.mono.colorThree.name}</span>
        </div>
        <div
          className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
          style={{ backgroundColor: color.mono.colorThree.hex }}
        >
          <span className='text-center'>{color.mono.colorFour.name}</span>
        </div>
      </div>
    </>
  );
}

export default MonoColor