import React from 'react';
const Tables = (props)=>
{
    return(
        <>
        <div id="table">
        <table className="table  table-hover table-dark background">
  <thead>
        {(props.fetched_data.length > 0)?  <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Friend-Name</th>
      <th scope="col">E-Mail</th>
      <th scope="col">Age</th>
      <th scope="col">Action</th>
    </tr> : " "}
  </thead>
  <tbody>

        
        {props.fetched_data.map((element,index)=>{
          return(
            <tr key = {element._id}>
          <th scope="row">{index+1}</th>
          <td>{element.friendName}</td>
          <td>{element.email}</td>
          <td>{element.age}</td>
          <td>
          <i className='fas fa-trash' onClick={()=>props.deleteFriend(element._id)}    ></i>
          
          <i className='far fa-edit'
          onClick={()=>{
          props.setChangeText("Edit")
          props.setDocId(element._id)
          props.setFriendData(
            {
              ...props.friendData,
              friendName:element.friendName,
              email:element.email,
              age:element.age
          })
          }}
           ></i>
          </td>
        </tr>
          )
        })}

    
   
   
  </tbody>
</table>
       
            
        </div>

        </>
    )
}
export default Tables;