import React , {useState,useEffect} from 'react';
import Tables from './table';
import Heading from "./heading";
import axios from "axios";
const Cards = ()=>
{
    const[friendData, setFriendData] = useState({
        friendName:"",
        email:"",
        age:""
    })

    const[friendArray , setFriendArray] =  useState([]);

    //create one more state for text change for button
const[changeText ,setChangeText] = useState("Submit")
const[docId, setDocId]=useState()




    useEffect(() => {
        //this code will always run on component mount
        console.log("called");
        fetchFriend();
      }, []);                                            
   
        
    


    const inputHandler=(e)=>
    {
        e.preventDefault();
        setFriendData({...friendData,[e.target.name]:e.target.value});
        // console.log(e.target.value);
    }
//add button 
//we will call api here
    const Submit= async(e)=>
    {
        e.preventDefault();
        // console.log(friendData);
         try 
         {
            if(changeText==="Submit")
            {
               
                var response = await axios.post
                (
                    "/add/friends",
                    friendData
    
                );

                 }
                 else
                 {
                   var response =  await axios.put
                   (
                            `/update/documents?_id=${docId}`,
                            friendData

                   )
                   setChangeText("Submit")
                 }
         
            fetchFriend();
            console.log("response:", response.data);
        }
         catch (error) {
            console.log("error" , error.response);
        }
    }
//fetching friends
    const fetchFriend = async()=>
    {
        console.log('fetch friend')
        try {
            const friendData = await axios.get
            (
                "/get/documents",
               
            ) ;
            console.log(friendData);
           setFriendArray(friendData.data);
        } 
        catch (error) {
            console.log("error" , error.friendData);
        }
    }
//delete complete data from database

const deleteAllFriend = async()=>
{
    try{
        const completeData = await axios.delete
        (
            "/delete/friend",
        );
        console.log(completeData);
              fetchFriend();
    }
     
    catch(error)
    {
        console.log("error" , error.deleteAllFriend);
    }
}
// delete friend using id
 const deleteFriend  = async(_id)=>
 {
     console.log(_id)
     try
     {
         const data = await axios.delete
         (
             `/delete/documents?_id=${_id}`,

         );
         console.log(data);
         fetchFriend();
    }
     catch(error)
     {
        console.log("error");
     }
 }

    return(
        <>
               <Heading heading="Friend-List" deleteAllFriend={deleteAllFriend} />
        <div id="two-parts">
        <div id="cards">
        <div className="formDetails">
            <form>            
               <label htmlFor ="friendName"> Name</label>
               <input
                    type="text" 
                    name="friendName"
                    placeholder= "john"  
                    value={friendData.friendName}
                    onChange={(e)=>{inputHandler(e)}}
                 />
               <br />

               <label htmlFor="email">E-Mail</label>
               <input 
                    type="email" 
                    name="email" 
                    value={friendData.email}
                    placeholder="john@gmail.com"  
                    onChange={(e)=>{inputHandler(e)}} 
               />
               <br />
               

               <label htmlFor="age">Age</label>
               <input 
                    type="number" 
                    name="age" 
                    placeholder="15"  
                    value={friendData.age}
                    onChange={(e)=>{inputHandler(e)}}
                />
               <br />
               <button id ="addBtn" type="btn" onClick={(e)=>{Submit(e)}}>
               {changeText}
               </button>
            </form>
         </div>   
        </div>
        {/* {friendArray.map((item) => {
          return <Tables item={item} />;
        })} */}
        {<Tables  
        fetched_data={friendArray} 
        deleteFriend={deleteFriend}  
        friendData={friendData}
        setFriendData={setFriendData}
        setChangeText={setChangeText}
        setDocId={setDocId}
        />}
        
        
        </div>
        </>
    )
}
export default Cards;