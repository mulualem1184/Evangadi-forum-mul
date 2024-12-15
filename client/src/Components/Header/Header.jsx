import React, {useContext} from 'react'


import logo from './../../assets/images/evangadi-logo-black.png'
import {Link, useNavigation, useLocation} from 'react-router-dom'


import classes from './Header.module.css'

 
function Header() {
 
  return (
    <section className={classes.fixed}>
   
       <div className={classes.header_container}>
            {/* first column of the head part */}
            <div className={classes.logo_container}>
              
                <img src={logo} alt="Evangadi logo" />
             
            </div>
              
            {/* second column of the head part */}          
            
       {/* <div className={classes.header_link}>
            
            <button> Signin</button>
          </div> */}
        </div>
       
  
    </section >
  )
}

export default Header
