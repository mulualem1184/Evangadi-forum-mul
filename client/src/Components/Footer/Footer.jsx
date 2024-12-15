import React, {useContext} from 'react'
import { CiFacebook } from "react-icons/ci";
import { RiFacebookCircleFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";


import logo from '../../assets/images/evangadi-logo-footer.png'
import {Link, useNavigation, useLocation} from 'react-router-dom'


import classes from './Footer.module.css'

 
function Footer() {
 
  return (
    <section className={classes.footer_container}>
      <div className={classes.column_container}>

         {/* column one */}
        <div className={classes.icons_container}>
          
              {/* first column of the head part */}
              <div className={classes.logo_container}>
                <Link to='/' >
                  <img src={logo} alt="Evangadi logo" />
                  </Link>
              </div>
              {/* icons class */}
              <div className= {classes.social_media_icon}>
              <span style={{color:'white'}}>hello</span>
              <BsInstagram size="30" style={{ color: '#000', margin: '5px' }} /> 
              < CiYoutube size="35"/>

              </div>

        </div>
              
      {/* second column (useful link) */} 
      <div>
      <span style={{ fontWeight: 400 }}>Useful link<br/></span>
        <span style={{fontWeight: 100, fontSize:'12px', color: '#8a8a8a',  fontFamily: 'Roboto, sans-serif' }}> How it works<br/> terms of service<br/> Privacy Policy
        </span>
      </div>

      {/*thrid column (contant info)  */}
      <div>
        <span  style={{ fontWeight: 400 }}> contanct Info</span><br/>
        <span style={{fontWeight: 100, fontSize:'12px', color: '#8a8a8a',  fontFamily: 'Roboto, sans-serif' }}>
        Support@evangadi.com<br/>
        +1-202-386-2702
        </span>
      </div>
    </div>
       
  
    </section >
  )
}

export default Footer
