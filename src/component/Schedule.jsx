import React from 'react'

const Schedule = (props) => {
  return (
    <div><h1>Schedule</h1>
       
       <input type="text" placeholder='Add category' onChange={props.itemEvent} />
        
        <select onChange={props.iEvent}
        type="select" >
          <option>  Personal</option>
          <option>  Shoping</option>
          <option>  Sports</option>
          <option>  Events</option>
          <option>  Works</option>
          </select>  
          
          <button onClick={props.listOfItems}>+</button>   
    </div>
  )
}

export default Schedule