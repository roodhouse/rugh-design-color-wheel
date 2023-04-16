import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getColor, getColors } from '../colors';

function MonoColor() {

    const { id } = useParams();
    const color = getColor(id);
    const colors = getColors();

  return (
    <>
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
    </>
  )
}

export default MonoColor