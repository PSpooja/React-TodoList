import React, { useState } from 'react';
import ToDolist from './ToDolist';


const App = () => {

 const [inputstate, setInputstate] = useState('');
 const [items, setItems] = useState([]);
   
 const EventList = (event) => {
    setInputstate(event.target.value)
 }

 const ShowToDoList = () => {
    setItems( (preVal) => {
        return [...preVal, inputstate]
    });
    setInputstate("")
 }

 const deleteItems = (id) => {
     console.log("deleted");
     
     setItems((preVal) => {
         return preVal.filter((arrItem, index) => {
            return index !== id;
         })
     })
 }

   return(
       <>
           <div className="main_div">
               <div className="center_div">
                  <br />
                  <h1>TO DO LIST</h1>
                  <br />
                   <input type="text" placeholder="Enter a item" 
                   value= {inputstate}
                   onChange={EventList}/>
                   <button onClick={ShowToDoList}> + </button>

                   <ol>
                       {/* <li>{inputstate}</li> */}
                       {/* {<div className="todo_style"> <i class="fas fa-times" aria-hidden="true"></i> <li>{itemVal}</li> </div>} */}

                       {items.map((itemVal, index) => {
                           return <ToDolist key={index} 
                           id={index}
                           text={itemVal}
                           onSelect={deleteItems}></ToDolist>
                       })}

                   </ol>
               </div>
           </div>
       </>
   )
}

export default App;
