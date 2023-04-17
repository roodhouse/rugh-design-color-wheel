import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getColor, getColors } from '../colors';

function CompColor() {

    const { id } = useParams();
    const color = getColor(id);
    const colors = getColors();

  return (
    <>
      {/* comp color container */}
      <div className="flex flex-row justify-evenly">
        <Link to={`../color/${color.comp.colorOne.link}`}>
          <div
            className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
            style={{ backgroundColor: color.comp.colorOne.hex }}
          >
            <span className={color.comp.colorOne.isLight ? 'text-blue-500 text-center' : 'text-red-300 text-center'} style={{ color: color.comp.colorOne.isLight ? 'blue' : 'red'}}>{color.comp.colorOne.name}</span>
          </div>
        </Link>
        <div
          className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
          style={{ backgroundColor: color.comp.colorTwo.hex }}
        >
          <span className='text-center'>{color.comp.colorTwo.name}</span>
        </div>
        <div
          className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
          style={{ backgroundColor: color.comp.colorThree.hex }}
        >
          <span className='text-center'>{color.comp.colorThree.name}</span>
        </div>
        <div
          className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
          style={{ backgroundColor: color.comp.colorThree.hex }}
        >
          <span className='text-center'>{color.comp.colorFour.name}</span>
        </div>
      </div>
    </>
  );
}

export default CompColor