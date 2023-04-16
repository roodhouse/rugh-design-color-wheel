import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getColor, getColors } from './colors';
import { Link as ScrollLink } from 'react-scroll';
import {HiArrowNarrowRight} from 'react-icons/hi';

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
                <ScrollLink to="scheme" smooth={true} duration={500}>
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
          <div>
            <h3>Comp Colors</h3>
          </div>
          {/* comp color container */}
          <div className="flex flex-row">
          <Link to={`../color/${color.comp.colorOne.link}`}>
            <div
              className="w-40 h-40"
              style={{ backgroundColor: color.comp.colorOne.hex }}
            >
                
             {color.comp.colorOne.name}
            </div>
            </Link> 
            <div
              className="w-40 h-40"
              style={{ backgroundColor: color.comp.colorTwo.hex }}
            >
              {color.comp.colorTwo.name}
            </div>
            <div
              className="w-40 h-40"
              style={{ backgroundColor: color.comp.colorThree.hex }}
            >
              {color.comp.colorThree.name}
            </div>
            <div
              className="w-40 h-40"
              style={{ backgroundColor: color.comp.colorThree.hex }}
            >
              {color.comp.colorFour.name}
            </div>
          </div>
          <div>
            <h3>Ana Colors</h3>
          </div>
          {/* ana color container */}
          <div className="flex flex-row">
            <div
              className="w-40 h-40"
              style={{ backgroundColor: color.ana.colorOne.hex }}
            >
              {color.ana.colorOne.name}
            </div>
            <div
              className="w-40 h-40"
              style={{ backgroundColor: color.ana.colorTwo.hex }}
            >
              {color.ana.colorTwo.name}
            </div>
            <div
              className="w-40 h-40"
              style={{ backgroundColor: color.ana.colorThree.hex }}
            >
              {color.ana.colorThree.name}
            </div>
            <div
              className="w-40 h-40"
              style={{ backgroundColor: color.ana.colorThree.hex }}
            >
              {color.ana.colorFour.name}
            </div>
          </div>
          <div>
            <h3>Triad Colors</h3>
          </div>
          {/* triad color container */}
          <div className="flex flex-row">
            <div
              className="w-40 h-40"
              style={{ backgroundColor: color.triad.colorOne.hex }}
            >
              {color.triad.colorOne.name}
            </div>
            <div
              className="w-40 h-40"
              style={{ backgroundColor: color.triad.colorTwo.hex }}
            >
              {color.triad.colorTwo.name}
            </div>
            <div
              className="w-40 h-40"
              style={{ backgroundColor: color.triad.colorThree.hex }}
            >
              {color.triad.colorThree.name}
            </div>
            <div
              className="w-40 h-40"
              style={{ backgroundColor: color.triad.colorThree.hex }}
            >
              {color.triad.colorFour.name}
            </div>
          </div>
          <div>
            <h3>Mono Colors</h3>
          </div>
          {/* mono color container */}
          <div className="flex flex-row">
            <div
              className="w-40 h-40"
              style={{ backgroundColor: color.mono.colorOne.hex }}
            >
              {color.mono.colorOne.name}
            </div>
            <div
              className="w-40 h-40"
              style={{ backgroundColor: color.mono.colorTwo.hex }}
            >
              {color.mono.colorTwo.name}
            </div>
            <div
              className="w-40 h-40"
              style={{ backgroundColor: color.mono.colorThree.hex }}
            >
              {color.mono.colorThree.name}
            </div>
            <div
              className="w-40 h-40"
              style={{ backgroundColor: color.mono.colorThree.hex }}
            >
              {color.mono.colorFour.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Color