import { addDoc,  arrayUnion,  onSnapshot,  updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {data} from "../firebase"
import { doc, setDoc } from "firebase/firestore";
import styles from "./Book.module.css"
import { Link,useParams } from 'react-router-dom';
function Book() {
  const {id} =useParams();
  const [seat,setSeat]=useState(1);
  const[active,setActive]=useState(false);
    // const addHandler=async()=>{   
    //   for(var i=1;i<28;i++){
    //     if(i<10)
    //     {
    //       var day=`day0${i}`
    //     }
    //     else{
    //       var day=`day${i}`
    //     }
    //     await setDoc(doc(data,day),{
    //    })   
    //     await setDoc(doc(data,day),{          
    //     seat1:({"booked":false,"name":""}),
    //     seat2:({"booked":false,"name":""}),
    //     seat3:({"booked":false,"name":""}),
    //     seat4:({"booked":false,"name":""}),
    //     seat5:({"booked":false,"name":""}),
    //     seat6:({"booked":false,"name":""}),
    //     seat7:({"booked":false,"name":""}),
    //     seat8:({"booked":false,"name":""}),
    //     seat9:({"booked":false,"name":""}),
    //     seat10:({"booked":false,"name":""}),
    //     seat11:({"booked":false,"name":""}),
    //     seat12:({"booked":false,"name":""}),
    //     seat13:({"booked":false,"name":""}),
    //     seat14:({"booked":false,"name":""}),
    //     seat15:({"booked":false,"name":""}),
    //     seat16:({"booked":false,"name":""}),
    //     seat17:({"booked":false,"name":""}),
    //     seat18:({"booked":false,"name":""}),
    //     seat19:({"booked":false,"name":""}),
    //     seat20:({"booked":false,"name":""}),
    //    })
       
    //   }
    // }
   const clickHandler=(e)=>{
    setSeat(e.target.value);
   }
  const na=doc(data,"id");
   const[mypost,setMypost]=useState([])
  useEffect(()=>{
  onSnapshot(data,(e)=>{
   const posts=[]
   e.docs.map((s)=>{
     posts.push({...s.data(),id:s.id})
   })
setMypost(posts)
  })
  },[])
  return (
    <div>
        {/* <button onClick={addHandler}>Hey</button> */}
        <div className={styles.main}>
          <h2 style={{color:'white',marginLeft:'-90px'}}>Book Seat</h2>
          
                <form>
              <div style={{display:'grid',gridTemplateColumns:'repeat(4,100px)',marginBottom:"18px"}}>
              
              <div className={styles.inputdiv}>
              <input value="1" onClick={clickHandler} style={{paddingLeft:'10px' }} className={styles.input}></input>
              </div> 
              <div className={styles.inputdiv}>
              <input value="2" onClick={clickHandler} style={{paddingLeft:'10px' }} className={styles.input}></input>
              </div>
              <div className={styles.inputdiv}>
              <input value="3" onClick={clickHandler} style={{paddingLeft:'10px' }} className={styles.input}></input>
              </div>
              <div className={styles.inputdiv}>
              <input value="4" onClick={clickHandler} style={{paddingLeft:'10px' }} className={styles.input}></input>
              </div>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(6,1fr)',marginLeft:'-80px',marginBottom:"18px"}}>
              <div className={styles.inputdiv} style={{marginLeft:'-20px'}}>
              <input value="5" onClick={clickHandler} style={{paddingLeft:'10px' }} className={styles.input}></input>
              </div>
              <div className={styles.inputdiv} style={{marginLeft:'-5px'}}>
              <input value="6" onClick={clickHandler} style={{paddingLeft:'10px' }} className={styles.input}></input>
              </div>
              <div className={styles.inputdiv}  style={{marginLeft:'10px'}}>
              <input value="7" onClick={clickHandler} style={{paddingLeft:'10px' }} className={styles.input}></input>
              </div>
              <div className={styles.inputdiv}  style={{marginLeft:'25px'}}>
              <input value="8" onClick={clickHandler} style={{paddingLeft:'10px' }} className={styles.input}></input>
              </div>
              <div className={styles.inputdiv}  style={{marginLeft:'40px'}}>
              <input value="9" onClick={clickHandler} style={{paddingLeft:'10px' }} className={styles.input}></input>
              </div>
              <div className={styles.inputdiv}  style={{marginLeft:'45px'}}>
              <input value="10" onClick={clickHandler} style={{paddingLeft:'5px' }} className={styles.input}></input>
              </div>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(6,1fr)',marginLeft:'-80px',marginBottom:"18px"}}>
              <div className={styles.inputdiv} style={{marginLeft:'-20px'}}>
              <input value="11" onClick={clickHandler} style={{paddingLeft:'5px' }} className={styles.input}></input>
              </div>
              <div className={styles.inputdiv} style={{marginLeft:'-5px'}}>
              <input value="12" onClick={clickHandler} style={{paddingLeft:'5px' }} className={styles.input}></input>
              </div>
              <div className={styles.inputdiv}  style={{marginLeft:'10px'}}>
              <input value="13" onClick={clickHandler} style={{paddingLeft:'5px' }} className={styles.input}></input>
              </div>
              <div className={styles.inputdiv}  style={{marginLeft:'25px'}}>
              <input value="14" onClick={clickHandler}  style={{paddingLeft:'5px' }}className={styles.input}></input>
              </div>
              <div className={styles.inputdiv}  style={{marginLeft:'40px'}}>
              <input value="15" onClick={clickHandler} style={{paddingLeft:'5px' }} className={styles.input}></input>
              </div>
              <div className={styles.inputdiv}  style={{marginLeft:'45px'}}>
              <input value="16" onClick={clickHandler} style={{paddingLeft:'5px' }} className={styles.input}></input>
              </div>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(4,100px)',marginBottom:"18px"}}>
              <div className={styles.inputdiv}>
              <input value="17" onClick={clickHandler} style={{paddingLeft:'5px' }} className={styles.input}></input>
              </div>
              <div className={styles.inputdiv}>
              <input value="18" onClick={clickHandler} style={{paddingLeft:'5px' }} className={styles.input}></input>
              </div>
              <div className={styles.inputdiv}>
              <input value="19" onClick={clickHandler} style={{paddingLeft:'6px' }} className={styles.input}></input>
              </div>
              <div className={styles.inputdiv}>
              <input value="20" onClick={clickHandler} style={{paddingLeft:'6px' }}className={styles.input}></input>
              </div>
              </div>
            </form>
          
           
      <h3 style={{color:'white',marginLeft:'-90px'}}>Selected Seat : {seat}</h3>
      <Link to={`/day${id}/${seat}`}>
          <button style={{padding:'14px',backgroundColor:'#3f51b5',
          border:'1px solid white',color:'white',borderRadius:'5px',cursor:'pointer',marginLeft:'-90px'}}>Book now</button>
        </Link>
        </div>
    </div>
  )
}

export default Book