import React, { PureComponent } from 'react'
import './TheNav.css';
import Navlogo from './mainLogo.png';



export default class TheNav extends PureComponent {




  render() {


    const ToggleSwitch = () => {
  
      var x = document.getElementById("menuID");
      if (x.style.display === "none") {


        x.style.display = "initial";
        x.style.position = "fixed";
        x.style.right = "50px";
        x.style.top = "60px";
        x.style.backgroundColor = "black";
        x.style.padding = "40px";
        x.style.borderRadius = "30px";


      } else {


        x.style.display = "none";
        x.style.position = "fixed";
        x.style.right = "50px";
        x.style.top = "60px";


      }
    
    
  }  


    return (
      <div className='Container11'  style={{zIndex:"3"}}>          

          <div className='NavLogoDiv'>
              <a href="#home" class="active"><img src={Navlogo} className="Nav_logo" alt="logo" /></a>
          </div>

          <div className='OtherDiv'>

            <span id='menuID'>

               <div><a className='Nav_links' href='#L_8'>Projects</a></div>
               <div ><a href='#' className='Nav_links'>About Us</a></div>
               <div><a  className='Nav_links' href='#L_10'>Publications</a></div>

               <div><button className='Btn1'><a href='#Join_9' className='Btn1_in'>Collaborate</a></button></div>

           </span>

           <div><i id='Nav_icon' class="fa fa-bars" onClick={ToggleSwitch} ></i></div>

          </div>
           
        
      </div>
    )
  }
}
