import React from 'react'
import {AiFillDelete } from "react-icons/ai";

const Mylist = (props) => {
   


    return(
    <>
<div className='my_style'>

<button>
    
</button>
   
<li>{props.text} <AiFillDelete onClick={() =>{
    props.onSelect(props.id)
    } 
    }/>
    <label></label>
   
  </li>
    

</div>
</>
  
  
    )
}
export default Mylist