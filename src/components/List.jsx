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
        <div className='colors-container flex flex-row flex-wrap justify-center'>
            {filteredData.map((item) => (
               <Link className='m-2' to={`../color/${item.id}`}>
                    <div key={item.id} className='w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end' style={{backgroundColor: item.hex}}>
                        <span className={item.light ? 'text-black text-center' : 'text-white text-center'}>{item.name} {item.code}</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default List