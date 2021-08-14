import React from 'react';
 const Heading= (props)=>
 {
     return(
         <>
         <div id="heads">
          
         <h1 id="heading">{props.heading}</h1>
         <i className='fas fa-redo-alt' 
         onClick = {props.deleteAllFriend}
         style= {{marginLeft:'8px' , fontWeight:'bolder',  color:'#BD1616', cursor:'pointer'}}>
        
         </i>

         </div>
         </>
     )

 }

 export default Heading;