import React, { PureComponent } from 'react'
import Footerlogo from './mainLogo_white.png';
import './Footer.css';



export default class Footer extends PureComponent {
  render() {
    return (
      <div className='Container1'  style={{zIndex:"3"}}>      

         <div className='Lower2'>
                
                   <div>
                        <div className='Lower2_inner0'>
                            <img src={Footerlogo} className="Footerlogo" alt="logo" />
                        </div>
                        <div className='Lower2_inner'  style={{zIndex:"3"}}>
                               <div>  
                                    <div><a href="#" className='LowerLinks' style={{fontWeight:"700"}}>Foundation</a></div>
                                    <div><a href="#" className='LowerLinks'>About Us</a></div>
                                    <div><a href="#"  className='LowerLinks'>Careers</a></div>
                                    <div><a href="#"  className='LowerLinks'>Collaborate</a></div>
                                    <div><a href="#"  className='LowerLinks'>Donate</a></div>

                               </div>

                               <div>  
                                    <div><a href="#" className='LowerLinks' style={{fontWeight:"700"}}>Projects</a></div>
                                    <div><a href="#" className='LowerLinks'>UGIH</a></div>
                                    <div><a href="#"  className='LowerLinks'>Ocean Program</a></div>
                                    <div><a href="#"  className='LowerLinks'>Open Solar</a></div>
                                    <div><a href="#"  className='LowerLinks'>Open Climate</a></div>

                               </div>

                               <div>  
                                    <div><a href="#" className='LowerLinks' style={{fontWeight:"700"}}>Blog</a></div>
                                    <div><a href="#" className='LowerLinks'>Events</a></div>
                                    <div><a href="#"  className='LowerLinks'>Publications</a></div>
                                    <div><a href="#"  className='LowerLinks'>News</a></div>
                                    <div><a href="#"  className='LowerLinks'>Research</a></div>

                               </div>


                        </div>
                  </div>

                  <div   style={{zIndex:"3"}}>

                         <div style={{fontSize:"27px", width:"55%", fontWeight:"600", marginBottom:"20px"}}>Stay up to date Join our newsletter</div>

                         <div>
                              <input className='Input4' type="text" /> <button className='Btn4 BtnCursor'>Join</button>
                         </div>

                         <div className='Lower3_inner'>
                              <div style={{color:"#4ec0fb"}}>Dont miss a thing! Follow us:</div>
                                 
                              <div><a href='https://twitter.com/newatlantisdao'><i class="fa fa-twitter" style={{fontSize:"25px", padding:"7px", color:"white"}} aria-hidden="true"></i></a></div>

                              <div><a href='#'><i class="fa fa-discord-alt" style={{fontSize:"25px", padding:"7px", color:"white"}} aria-hidden="true"></i></a></div>


                         </div>

                 </div>
          
          </div>    
          
              
          <hr style={{width:"95%"}}/>

             <div className='Lower1'>
                    <small>New Atlantis is focused on working to improve the world by restoring the ocean</small>
             </div>

      </div>
    )
  }
}
