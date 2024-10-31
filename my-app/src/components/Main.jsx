import React, { useRef, useState } from 'react'
import './Main.css'
const Main = () => {
  const [newEvent,setNewEvent]=useState({name:"",isdone:false});
  const [items,setItems]=useState([]);
  const [filter,setFilter]=useState("");
  const inpRef=useRef(null);
  const add=()=>{
    if(newEvent.name.length==0){
      return;
    }
    setItems([...items,newEvent]);
    setNewEvent({name:"",isdone:false});
    inpRef.current.focus();
  }

  const del = (i)=>{
    setItems(items.filter((_,ind)=>ind!=i));
  }

  // const show=(s)=>{

  // }

  const filteredItems=items.filter(item=>item.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className='main'>
      <div className='input'>
        <input type="text" name="" value={newEvent.name} ref={inpRef} id="" placeholder='Add Event' onChange={(e)=> setNewEvent({name:e.target.value,isdone:false})} />
        <button onClick={add}>Add event</button>
      </div>
      <div  className='middle'>
        {(items.length>0)?(
          <input type="text" id='search' placeholder='🔍Search' value={filter} onChange={(e)=>{setFilter(e.target.value)}} />
        ):
        (<p></p>)
        }
        <ul>
          {
              filteredItems.length>0?(
                  filteredItems.map((name,index)=>(
                      <li key={index}>
                        <div className='block'>
                          {name.name}
                          <button id='del' onClick={()=>{del(index)}}>delete</button>
                        </div>
                      </li>
                      
                  ))
              ):
              (
                  <div className='no'><h1>No Events</h1></div>
              )
          }
        </ul>
      </div>
    </div>
  )
}

export default Main
