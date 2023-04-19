import * as React from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getColor, colors } from '../colors';

function ColorNav() {

    const { id } = useParams();
    const color = getColor(id);

    const [prevIsHovering, setPrevIsHovering] = useState(false);
    const [nextIsHovering, setNextIsHovering] = useState(false);

    const handlePrevMouseOver = () => {
        setPrevIsHovering(true);
    }

    const handlePrevMouseOut = () => {
        setPrevIsHovering(false);
    }

    const handleNextMouseOver = () => {
        setNextIsHovering(true);
    }

    const handleNextMouseOut = () => {
        setNextIsHovering(false);
    }

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

  console.log(colors[nextIndex].name)

  return (
    <div className='max-w-[1000px] w-full flex flex-row justify-around mx-auto pt-10'>
            <Link onMouseOver={handlePrevMouseOver} onMouseOut={handlePrevMouseOut} to={`../color/${thePreviousColor()}`}>
                {prevIsHovering && (
                    <div className={thePreviousColor() === 0 ? "hidden" : "block bg-white text-[#676766] border-2 px-6 py-3 hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white"}>
              {colors[prevIndex].name}
          </div>      
                )}
                {!prevIsHovering && (
          <div className={thePreviousColor() === 0 ? "hidden" : "block bg-white text-[#676766] border-2 px-6 py-3 hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white"}>
              Previous Color
          </div>
                )}
            </Link>
            <Link to={`../`}>
          <div className='block bg-white text-[#676766] border-2 px-6 py-3 hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white'>
                Back to color wheel
          </div>
                </Link>
            <Link onMouseOver={handleNextMouseOver} onMouseOut={handleNextMouseOut} to={`../color/${theNextColor()}`}>
            {nextIsHovering && (
                    <div className={theNextColor() === 0 ? "hidden" : "block bg-white text-[#676766] border-2 px-6 py-3 hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white"}>
              {colors[nextIndex].name}
          </div>      
                )}
                {!nextIsHovering && (
          <div className={theNextColor() === 0 ? "hidden" : "block bg-white text-[#676766] border-2 px-6 py-3 hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white"}>
              Next Color
          </div>
                )}
            </Link>
        </div>
  )
}

export default ColorNav