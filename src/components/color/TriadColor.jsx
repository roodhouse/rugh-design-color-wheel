import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getColor, getColors } from '../colors';

function TriadColor() {

    const { id } = useParams();
    const color = getColor(id);
    const colors = getColors();

  return (
    <>
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

    </>
  )
}

export default TriadColor