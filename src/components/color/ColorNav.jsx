import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getColor, colors } from '../colors';

function ColorNav() {

    const { id } = useParams();
    const color = getColor(id);

  // variables for thePreviousColor and theNextColor functions
  let myIndex = colors.findIndex((colorid) => colorid === color);
  let nextIndex = myIndex + 1;
  let prevIndex = myIndex - 1;

  // function to go to the previous color on the color wheel
  function thePreviousColor() {
    if (myIndex === 0) {
      let prevColor = myIndex;
      return prevColor;
    } else {
      let prevColor = colors[prevIndex].id;
      return prevColor;
    }
  }

  // function to go to the next color on the color wheel
  function theNextColor() {
    if (myIndex === 1730) {
      let nextColor = myIndex;
      return nextColor;
    } else {
      let nextColor = colors[nextIndex].id;
      return nextColor;
    }
  }

  return (
    <div className='max-w-[1000px] w-full flex flex-row justify-around mx-auto pt-10'>
            <Link to={`../color/${thePreviousColor()}`}>
          <div className={thePreviousColor() === 0 ? "hidden" : "block bg-white text-[#676766] border-2 px-6 py-3 hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white"}>
              Previous Color
          </div>
            </Link>
            <Link to={`../`}>
          <div className='block bg-white text-[#676766] border-2 px-6 py-3 hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white'>
                Back to color wheel
          </div>
                </Link>
            <Link to={`../color/${theNextColor()}`}>
          <div className={theNextColor() === 1730 ? "hidden" : "block bg-white text-[#676766] border-2 px-6 py-3 hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white"}>
                Next Color
          </div>
            </Link>
        </div>
  )
}

export default ColorNav