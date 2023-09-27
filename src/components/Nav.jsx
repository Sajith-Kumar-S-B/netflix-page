import { useEffect } from 'react';
import './Nav.css';

import React, { useState} from 'react'

function Nav() {
  const [show,setShow]= useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>600){
        setShow(true)

      }else{
        setShow(false)
      }
    })
  })
  console.log(show);
  return (
    <div className={`nav ${show && 'nav_black'} `}>
        <img width={"150px"}  src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix logo" />
    </div>
  )
}

export default Nav