import { onSnapshot } from 'firebase/firestore';
import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
function Booked() {
    const {day,id}=useParams();
    // console.log(day,id)
    
  return (
    <div>
    
    
    </div>
  )
}

export default Booked