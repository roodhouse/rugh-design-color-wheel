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
        <Link to={`../color/${color.anaOne.id}`}>
          <div
            className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
            style={{ backgroundColor: color.anaOne.hex }}
          >
            <span
              className={
                color.anaOne.light
                  ? "text-black text-center"
                  : "text-white text-center"
              }
            >
              {color.anaOne.name} {color.anaOne.code}
            </span>
          </div>
        </Link>
        <Link to={`../color/${color.anaTwo.id}`}>
          <div
            className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
            style={{ backgroundColor: color.anaTwo.hex }}
          >
            <span
              className={
                color.anaTwo.light
                  ? "text-black text-center"
                  : "text-white text-center"
              }
            >
              {color.anaTwo.name} {color.anaTwo.code}
            </span>
          </div>
        </Link>
        <Link to={`../color/${color.anaThree.id}`}>
          <div
            className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
            style={{ backgroundColor: color.anaThree.hex }}
          >
            <span
              className={
                color.anaThree.light
                  ? "text-black text-center"
                  : "text-white text-center"
              }
            >
              {color.anaThree.name} {color.anaThree.code}
            </span>
          </div>
        </Link>
        <Link to={`../color/${color.anaFour.id}`}>
          <div
            className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
            style={{ backgroundColor: color.anaFour.hex }}
          >
            <span
              className={
                color.anaFour.light
                  ? "text-black text-center"
                  : "text-white text-center"
              }
            >
              {color.anaFour.name} {color.anaThree.code}
            </span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default AnaColor