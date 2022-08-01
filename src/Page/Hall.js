import { onSnapshot, query, Timestamp, updateDoc, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase';
import moment from "moment";
import styles from "./Book.module.css"
function Hall() {
    const{hall,id}=useParams();
    const[name,setName]=useState("")
    const[hallbook,setHallbook]=useState([]);
    const docRef=doc(db,hall,id);
    onSnapshot(docRef,(s)=>{
       setHallbook(s.data())
    });
    const handleSubmit=(e)=>{
      e.preventDefault();
      const updateRef=doc(db,hall,id)
      if(name){
      updateDoc(updateRef,{
        booked:true,
        name:name,
        createdAt:Timestamp.fromDate(new Date())
      })
    }else{
      alert("Enter Ur class name")
    }
  }

  return (
    <div>
      {
          hallbook.booked?<div style={{display:'flex',flexDirection:'column',justifyContent: 'center',alignItems: 'center'}}>
          <h2>Booked ... !</h2>
          <h2>Booked by - {hallbook.name}</h2>
         
          <p>Time -     {moment(hallbook.createdAt).format("LLLL")}</p>
          </div>:<h2>
            <div style={{display:'flex',justifyContent: 'center',alignItems: 'center'}}>
               
                <form onSubmit={handleSubmit}>   
                <h6 style={{textAlign:'center'}}>U can Book now : </h6>                   
                    <label style={{fontWeight:'500'}}>Class :</label><br></br>        
                    <input type="text" value ={name}onChange={(e)=>setName(e.target.value)} 
                    placeholder="Ece-C"
                    className={styles.inputbox}></input><br></br>
                    <button style={{padding:'11px',backgroundColor:'#3f51b5',marginLeft:'60px',marginTop:'10px',
          border:'1px solid white',color:'white',borderRadius:'5px',cursor:'pointer'}}
          onSubmit={handleSubmit}
          >Book now</button>
                </form>
               
             </div>
          </h2>
        }
       
       
    </div>
  )
}

export default Hall