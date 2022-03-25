import React from 'react'
import{v4 as uuidv4} from "uuid"
const Form = (input,setInput,todos,setTodos) => {
 const onInputChange =(event)=>{
   setInput(event.target.value);
 }
 const onFormSubmit =(event) =>{
   event.preventDefault();
   setTodos([...todos,{id:uuidv4(),title:input ,
     completed:false}]);
     setInput("")
 }
  return (
    <div>
        <div >
     
     <div className='main_div'>
     
           <div className='madhala_card'>
           <h1>
             TODAYS CATEGORY
           </h1>
           <div>
             <form onSubmit={onFormSubmit}>
           <input
            type="text"
             placeholder='Add category'   
           id="new-todo-input"
           name="text"
           autoComplete="off" value={input}
           onChange={onInputChange}/>
     
                <button className="button-add" 
                 type="submit" >+</button> 
                </form>
           </div>
           </div> 
   </div>
     </div>
    </div>
  )
}

export default Form