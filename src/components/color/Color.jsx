import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getColor, getColors } from '../colors';
import { Link as ScrollLink } from 'react-scroll';
import {HiArrowNarrowRight} from 'react-icons/hi';
import ColorTabs from './ColorTabs';
import { allSchemes, allColor } from './allColors';

function Color() { 
    
    const { id } = useParams();
    const color = getColor(id);
    const colors = getColors();
    const theColor = allColor(id);

    // console.log(theColor)
    console.log(color.compOne.name)
    // console.log(theColor.ana.colorFour.name)

    


    // console.log(agreeableGrayColors[0].comp.colorOne.name)

  return (
    <div className="w-full h-full">
      {/* container */}
      <div className="flex flex-col h-full">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-[calc(100vh+150px)]">
          <div className="flex flex-col sm:flex-row justify-center">
            <div className="flex flex-col items-start min-w-[53.6%]">
              <h1 className="text-4xl sm:text-7xl font-bold text-[#E5C1C1] underline decoration-[#676766] decoration-4">
                {color.name}
              </h1>
              <h2 className="text-4xl sm:text-7xl font-bold text-[#676766]">
                {color.code}
              </h2>
              <p className="text-[#676766] py-4 max-w-[700px]">
                Color family: {color.family} | LRV: {color.lrv} | {color.peel ? <a className='underline decoration-[#E5C1C1] decoration-8 hover:decoration-[#676766]' href={color.peel}>Peel+Stick</a> : console.log('no')}
              </p>
              <div>
                <ScrollLink to="scheme" smooth={true} duration={500} offset={-150}>
                  <button className="text-[#676766] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white">
                    Explore
                    <span className="group-hover:rotate-90 duration-300">
                      <HiArrowNarrowRight className="ml-3" />
                    </span>
                  </button>
                </ScrollLink>
              </div>
            </div>
            <div className="ml-[5%] h-[100%] w-[100%] md:h-[75%] order-first sm:order-last pb-4 sm:pb-0">
              <div
                className="rounded-full md:h-[100%] w-full pt-[100%]"
                style={{backgroundColor: color.hex}}
                alt="Laura Rugh"
              >
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* container */}
      <div name='scheme' style={{ backgroundColor: color.hex }} className="w-full h-screen mx-auto px-8 pb-60">
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
        <div className="py-10">
          <h2 className="text-4xl">{color.name} color schemes</h2>
        </div>
        {/* scheme container */}
        <div>
          <ColorTabs />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Color