import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "./Book.module.css"
import {useParams} from "react-router-dom"
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
function Page() {
  const {hall,id}=useParams();
  console.log(hall)
  const [seat,setSeat]=useState(1);
  const clickHandler=(e)=>{
    setSeat(e.target.value);
   }
  const temp1=`${id}${1}`
  const temp2=`${id}${2}`
  const temp3=`${id}${3}`
  const temp4=`${id}${4}`
  const temp5=`${id}${5}`
  const temp6=`${id}${6}`
  const temp7=`${id}${7}`

   const temp1Ref=doc(db,hall,temp1)
   const temp3Ref=doc(db,hall,temp3)
   const temp2Ref=doc(db,hall,temp2)
   const temp4Ref=doc(db,hall,temp4)
   const temp5Ref=doc(db,hall,temp5)
   const temp6Ref=doc(db,hall,temp6)
   const temp7Ref=doc(db,hall,temp7)
   const[pro1,setPro1]=useState([])
   const[pro2,setPro2]=useState([])
   const[pro3,setPro3]=useState([])
   const[pro4,setPro4]=useState([])
   const[pro5,setPro5]=useState([])
   const[pro6,setPro6]=useState([])
   const[pro7,setPro7]=useState([])
    useEffect(()=>{
      onSnapshot(temp1Ref,(s)=>{   
          setPro1(s.data())    
      })
      onSnapshot(temp2Ref,(s)=>{   
        setPro2(s.data())    
    })
    onSnapshot(temp3Ref,(s)=>{   
      setPro3(s.data())    
  })
  onSnapshot(temp4Ref,(s)=>{   
    setPro4(s.data())    
})
onSnapshot(temp5Ref,(s)=>{   
  setPro5(s.data())    
})
onSnapshot(temp6Ref,(s)=>{   
  setPro6(s.data())    
})
onSnapshot(temp7Ref,(s)=>{   
  setPro7(s.data())    
})
        },[])

  return (
    <div className={styles.main}>
      <div style={{display:'flex',flexDirection: 'column',alignItems: 'center',justifyContent:'center',marginBottom:'15px'}}>
        <div style={{display:'flex',flexDirection: 'row',alignItems: 'center',justifyContent:'center',marginBottom:'15px'}}>
              {
                pro1.booked?<div className={styles.inputdiv} style={{backgroundColor:'green'}} >
                <input value="1" onClick={clickHandler} style={{paddingLeft:'10px',backgroundColor:'green' }} className={styles.input}></input>
            </div>:<div className={styles.inputdiv} style={{backgroundColor:'red'}}>
                <input value="1" onClick={clickHandler} style={{paddingLeft:'10px',backgroundColor:'red' }} className={styles.input}></input>
            </div>
              }
               {
                pro2.booked?<div className={styles.inputdiv} style={{backgroundColor:'green'}} >
                <input value="2" onClick={clickHandler} style={{paddingLeft:'10px',backgroundColor:'green' }} className={styles.input}></input>
            </div>:<div className={styles.inputdiv} style={{backgroundColor:'red'}}>
                <input value="2" onClick={clickHandler} style={{paddingLeft:'10px',backgroundColor:'red' }} className={styles.input}></input>
            </div>
              }
               {
                pro3.booked?<div className={styles.inputdiv} style={{backgroundColor:'green'}} >
                <input value="3" onClick={clickHandler} style={{paddingLeft:'10px',backgroundColor:'green' }} className={styles.input}></input>
            </div>:<div className={styles.inputdiv} style={{backgroundColor:'red'}}>
                <input value="3" onClick={clickHandler} style={{paddingLeft:'10px',backgroundColor:'red' }} className={styles.input}></input>
            </div>
              }
              {
                pro4.booked?<div className={styles.inputdiv} style={{backgroundColor:'green'}} >
                <input value="4" onClick={clickHandler} style={{paddingLeft:'10px',backgroundColor:'green' }} className={styles.input}></input>
            </div>:<div className={styles.inputdiv} style={{backgroundColor:'red'}}>
                <input value="4" onClick={clickHandler} style={{paddingLeft:'10px',backgroundColor:'red' }} className={styles.input}></input>
            </div>
              }
              </div>
              <div style={{display:'flex',flexDirection: 'row',alignItems: 'center',justifyContent:'center',marginBottom:'15px'}}>

               {
                pro5.booked?<div className={styles.inputdiv} style={{backgroundColor:'green'}} >
                <input value="5" onClick={clickHandler} style={{paddingLeft:'10px',backgroundColor:'green' }} className={styles.input}></input>
            </div>:<div className={styles.inputdiv} style={{backgroundColor:'red'}}>
                <input value="5" onClick={clickHandler} style={{paddingLeft:'10px',backgroundColor:'red' }} className={styles.input}></input>
            </div>
              }
               {
                pro6.booked?<div className={styles.inputdiv} style={{backgroundColor:'green'}} >
                <input value="6" onClick={clickHandler} style={{paddingLeft:'10px',backgroundColor:'green' }} className={styles.input}></input>
            </div>:<div className={styles.inputdiv} style={{backgroundColor:'red'}}>
                <input value="6" onClick={clickHandler} style={{paddingLeft:'10px',backgroundColor:'red' }} className={styles.input}></input>
            </div>
              }
               {
                pro7.booked?<div className={styles.inputdiv} style={{backgroundColor:'green'}} >
                <input value="7" onClick={clickHandler} style={{paddingLeft:'10px',backgroundColor:'green' }} className={styles.input}></input>
            </div>:<div className={styles.inputdiv} style={{backgroundColor:'red'}}>
                <input value="7" onClick={clickHandler} style={{paddingLeft:'10px',backgroundColor:'red' }} className={styles.input}></input>
            </div>
              }
              
              </div>
      </div>
              <h3 style={{color:'white'}}>Selected Period : {seat}</h3>
      <Link  to={`/${hall}/${id}${seat}`}>
          <button style={{padding:'14px',backgroundColor:'#3f51b5',
          border:'1px solid white',color:'white',borderRadius:'5px',cursor:'pointer'}}>Book now</button>
        </Link>
    </div>
  )
}

export default Page