import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getColor, getColors } from '../colors';

function CompColor() {

    const { id } = useParams();
    const color = getColor(id);
    const colors = getColors();

  return (
    <>
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
    </>
  );
}

export default CompColor