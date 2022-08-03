import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "./Book.module.css"
import {useParams} from "react-router-dom"
function Page() {
  const {hall,id}=useParams();
  console.log(id,hall)
  const [seat,setSeat]=useState(1);
  const clickHandler=(e)=>{
    setSeat(e.target.value);
   }
  return (
    <div className={styles.main}>
      <div style={{display:'flex',gridTemplateColumns:'row',alignItems: 'center',justifyContent:'center',marginBottom:'15px'}}>
              <div className={styles.inputdiv} >
                  <input value="1" onClick={clickHandler} style={{paddingLeft:'10px' }} className={styles.input}></input>
              </div>
              <div className={styles.inputdiv} >
                 <input value="2" onClick={clickHandler} style={{paddingLeft:'10px' }} className={styles.input}></input>
              </div>
              <div className={styles.inputdiv}  >
                 <input value="3" onClick={clickHandler} style={{paddingLeft:'10px' }} className={styles.input}></input>
              </div>
              <div className={styles.inputdiv}  >
                 <input value="4" onClick={clickHandler} style={{paddingLeft:'10px' }} className={styles.input}></input>
              </div>
      </div>
      <div style={{display:'flex',gridTemplateColumns:'row',alignItems: 'center',justifyContent:'center'}}>
              <div className={styles.inputdiv}>
                  <input value="5" onClick={clickHandler} style={{paddingLeft:'10px' }} className={styles.input}></input>
              </div>
              <div className={styles.inputdiv} >
                 <input value="6" onClick={clickHandler} style={{paddingLeft:'10px' }} className={styles.input}></input>
              </div>
              <div className={styles.inputdiv} >
                  <input value="7" onClick={clickHandler} style={{paddingLeft:'10px' }} className={styles.input}></input>
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