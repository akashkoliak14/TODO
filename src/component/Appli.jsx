
import React,{useState} from 'react'
import Mylist from './Mylist';

const App = () => {
  const[inputlist,setInputList]= useState("");
  const[select,setSelect]= useState("");
  const[Items,setItems]= useState([]);
 
  const itemEvent = (event) =>{ 
    setInputList(event.target.value)
   
   
  }; 

 
  const iEvent = ( e) =>{ 
    
    setSelect(e.target.value)
   
  }; 

  
 const listOfItems = () => {
setItems((oldItems) =>{
  return[...oldItems,[[inputlist]+  "   - "  +[select]]];
});
setInputList("");
setSelect("{color='green'}");
};
const deletItems = (id) => {
  console.log("deleted");
   
  setItems((oldItems) => {
    return oldItems.filter((arrElem,index)=>{ 
      return index !== id;
    });
 
  });
} ;

  return (
    <div >
    
  <div className='main_div'>
        <div className='madhala_card'>
        <h1>
          TODAYS SCHEDULE
        </h1>
        
       
        <div>
        <br></br>
         
        <input type="text" placeholder='Add Schedule Task' onChange={itemEvent} />
        
       <select onChange={iEvent}
       type="select" >
         <option>  Personal</option>
         <option>  Shoping</option>
         <option>  Sports</option>
         <option>  Events</option>
         <option>  Works</option>
         </select>    
         

            <button onClick={listOfItems}>+</button> 
            <div>
        <ol>
       { Items.map( (itemval,index) => {  

 return <Mylist  key={index}
 id = {index}


 text = {itemval} 


 onSelect = {deletItems}
  />;
}

 )}


        </ol>
       
     </div> 
    
        </div> 

        </div>
  </div>
    </div>
  )
}

export default App