import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getColor, getColors } from './colors';

function Color() {
    
    const { id } = useParams();
    const color = getColor(id);
    const colors = getColors();

  return (
    <div className="w-full h-screen">
      {/* container */}
      <div style={{ backgroundColor: color.hex }} className="w-full h-full">
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