import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getColor, getColors } from '../colors';

function AnaColor() {

    const { id } = useParams();
    const color = getColor(id);
    const colors = getColors();

  return (
    <>
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
    </>
  )
}

export default AnaColor