import React, {useRef,useState} from 'react'
import axios from '../../axiosConfig'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'


import {useNavigate} from 'react-router-dom'
import  './user.css';

function login() {
  const navigate=useNavigate()
  const [error,setError]=useState([])
  const emailDom=useRef()
  const passwordDom=useRef()
  async function hadleform(e){
    e.preventDefault();
   
   try {
      await axios.post('/users/login', {
      
       email: emailDom.current.value,
       password: passwordDom.current.value
      });
      alert("successful")
     navigate("/")
   } catch (err) {
    console.log(err.response.data.msg)
    setError(err.response.data.msg)
    
   }
   
  }
 
return (
  <div className="container_forum">
   {/* header */}
   <Header />
    <div className="background-pattern">
    <section>
  
          <svg className="top-left-wave" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,100 C20,50 80,90 100,0 L100,0 L0,0 Z" fill="#c9d6ff" />
          </svg>
          <div className="main_body">
          
          <form className="form" onSubmit={hadleform} action="/submit" method="POST">
            <center>

            <span style={{color:'red',fontSize:'14px'}}>{error}</span>
            </center>
            <center>
            <p>LogIn into your account <br/> </p>
            <span> Don't have an account? <a href="" className=""> Create account </a> </span>
            </center>  
                       
            <input type="text" id="username" name="email" placeholder=" email"  ref={emailDom} required />
            
            
            <input type="password" id="password" name="password" placeholder="your password" ref= {passwordDom} required />
            
            
            <button className="form_button" type="submit">Login</button>
            <center>
            <span> I agree to the <a href="" >privacy policy</a> and <a href="">terms of services </a><br /> <a href=""> already have an account </a> </span>
            </center><br/>
       </form>
          <div className="text_sec">
             <span style={{color:'#febd69'}}>About </span>  <br/> 
             <span className="title_text">Evangadi Networks</span> <br/>

             <span>No matter what stage of life you are in, whether you’re just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footsteps.

              Wheather you are willing to share your knowledge or you are just looking to meet mentors of your own, please start by joining the network here. </span> <br/>
              <button className="how_button" onClick=""> HOW IT WORK</button>
          </div>
          </div>
          <svg className="bottom-right-wave" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M100,0 C80,60 20,10 0,100 L0,100 L100,100 Z" fill="#ffd1d1" />
          </svg>
      
   
    </section>
    <Footer />
    </div>
  </div>
)
 }


export default login
