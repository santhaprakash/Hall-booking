import { collection, doc, onSnapshot, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import {hallA,hallB,hallC,hallD} from "../firebase"
import styles from "./Book.module.css"
function Home() {
  const [date, setDate] = useState(new Date());
const [name,setName]=useState();
const [img,setImg]=useState();
const[hall,setHall]=useState("hallA");
const useruid=localStorage.getItem('currentuser')
 useEffect(()=>{
  setImg(localStorage.getItem('userimage'))
  setName(localStorage.getItem('username'))
 },[])
         const addHandler=async()=>{   
      for(var i=1;i<=28;i++){
        if(i<10)
        {
          var day=`day0${i}`
        }
        else{
          var day=`day${i}`
        }
        for(var j=1;j<=7;j++){
          var hour=`${day}${j}`
          await setDoc(doc(hallD,hour),{
            booked:false,
            name:""
          }) 
        }
      }
    }
    
 const handleSignout=()=>{
  localStorage.removeItem('currentuser');
  localStorage.removeItem('userimage');
  localStorage.removeItem('username');
  window.location.href='/login'
 }
  return (
    <>
    {
      useruid?<>
      <div style={{display:'flex',flexDirection: 'row',alignItems: 'center',justifyContent:'space-around'}}>
      <button onClick={addHandler}>Hey</button>
        <div >
      <h4>Welcome  <h5>{name}</h5> </h4>
      </div>
      <div className={styles.signout}>
          <img src={img} style={{borderRadius:'100px',width:'60px',height:'60px',marginTop:'20px'}}></img><br></br>
          <h4 onClick={handleSignout} className={styles.signoutbut}>Sign out</h4>
      </div>
    </div>
    <div style={{display:'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'center',marginTop:'50px'}} >
   
      <select name="halls" id="hall" onChange={(e)=>setHall(e.target.value)} style={{padding:'5px'}}>
    <option value="hallA" >Hall A</option>
    <option value="hallB">Hall B</option>
    <option value="hallC">Hall C</option>
    <option value="hallD">Hall D</option>
  </select>
  <h2 style={{color:'black'}}>{hall}</h2>
  
    <Calendar onChange={setDate} value={date} 
    maxDate={new Date(2022,7,28)} 
    maxDetail='month'
    minDetail='year'
    minDate={new Date(2022,7,1)}
    />
    
        <h4>Selected Date :  {date.toDateString()}</h4>
        <Link to={`/${hall}/day${date.toDateString().substring(8,10)}/period`}>
          <button style={{padding:'14px',backgroundColor:'#3f51b5',
          border:'1px solid white',color:'white',borderRadius:'5px',cursor:'pointer'}}>Book now</button>
        </Link>
     
  </div>
      </>:window.location.href='/login'
    }
    
  </>
  )
}

export default Home