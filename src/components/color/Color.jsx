import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getColor, getColors } from '../colors';
import { Link as ScrollLink } from 'react-scroll';
import {HiArrowNarrowRight} from 'react-icons/hi';
import CompColor from './CompColor';
import AnaColor from './AnaColor';
import TriadColor from './TriadColor';
import MonoColor from './MonoColor';

function Color() { 
    
    const { id } = useParams();
    const color = getColor(id);
    const colors = getColors();

  return (
    <div className="w-full h-full">
      {/* container */}
      <div className="flex flex-col h-full">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-[calc(100vh+150px)]">
          <div className="flex flex-col sm:flex-row justify-center">
            <div className="flex flex-col items-start">
              <h1 className="text-4xl sm:text-7xl font-bold text-[#E5C1C1] border-b-4 border-[#676766] whitespace-nowrap">
                {color.name}
              </h1>
              <h2 className="text-4xl sm:text-7xl font-bold text-[#676766]">
                {color.number}
              </h2>
              <p className="text-[#676766] py-4 max-w-[700px]">
                Color family: {color.family} | LRV: {color.LRV} | <a className='underline decoration-[#E5C1C1] decoration-8 hover:decoration-[#676766]' href='www.rughdesign.com'>Peel+Stick</a>
              </p>
              <div>
                <ScrollLink to="scheme" smooth={true} duration={500} offset={-250}>
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
      <div name='scheme' style={{ backgroundColor: color.hex }} className="w-full h-full">
        <div className="pt-10 pl-10 pr-10 flex flex-row w-full justify-between">
          <h1 className="text-4xl pt-10">{color.name}</h1>
          <div>
            <h4>Quick Facts</h4>
            <p>{color.family}</p>
            <p>{color.comp.colorOne.name}</p>
          </div>
        </div>
        {/* scheme container */}
        <div>
          <CompColor />
          <AnaColor />
          <TriadColor />
          <MonoColor />  
        </div>
      </div>
    </div>
  );
}

export default Color