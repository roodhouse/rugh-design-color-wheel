import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getColor } from '../colors';

function MonoColor() {

    const { id } = useParams();
    const color = getColor(id);
    

  return (
    <>
      {/* mono color container */}
      <div className="flex flex-row flex-wrap gap-3 sm:gap-0 sm:gap-y-3 justify-evenly">
        <Link to={`../color/${color.monoOne.id}`}>
          <div
            className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
            style={{ backgroundColor: color.monoOne.hex }}
          >
            <span
              className={
                color.monoOne.light
                  ? "text-black text-center"
                  : "text-white text-center"
              }
            >
              {color.monoOne.name} {color.monoOne.code}
            </span>
          </div>
        </Link>
        <Link to={`../color/${color.monoTwo.id}`}>
          <div
            className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
            style={{ backgroundColor: color.monoTwo.hex }}
          >
            <span
              className={
                color.monoTwo.light
                  ? "text-black text-center"
                  : "text-white text-center"
              }
            >
              {color.monoTwo.name} {color.monoTwo.code}
            </span>
          </div>
        </Link>
        <Link to={`../color/${color.monoThree.id}`}>
          <div
            className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
            style={{ backgroundColor: color.monoThree.hex }}
          >
            <span
              className={
                color.monoThree.light
                  ? "text-black text-center"
                  : "text-white text-center"
              }
            >
              {color.monoThree.name} {color.monoThree.code}
            </span>
          </div>
        </Link>
        <Link to={`../color/${color.monoFour.id}`}>
          <div
            className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
            style={{ backgroundColor: color.monoFour.hex }}
          >
            <span
              className={
                color.monoFour.light
                  ? "text-black text-center"
                  : "text-white text-center"
              }
            >
              {color.monoFour.name} {color.monoFour.code}
            </span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MonoColor