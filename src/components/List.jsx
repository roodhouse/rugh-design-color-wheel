import { React } from 'react'
import { colors as data } from "./colors";
import { Link } from 'react-router-dom';


function List(props) {

    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(props.input)
        }
    })

    return (
        <div>
            {filteredData.map((item) => (
               <Link to={`../color/${item.id}`}><div key={item.id} style={{backgroundColor: item.hex, width: '150px', height: '150px'}}>{item.name}</div></Link>
            ))}
        </div>
    )
}

export default List