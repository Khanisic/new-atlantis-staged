import React, { useState } from 'react'
import './TheNav.css';
import Navlogo from './logo.png';
import xmark from './xmark.svg'

function TheNav() {

  const [showNav, setShowNav] = useState(false)

  const ToggleSwitch = () => {

  }

  return (
    <div className='Container11' style={{ zIndex: "3" }}>

      <div className='NavLogoDiv'>
        <a href="#home" class="active"><img src={Navlogo} className="Nav_logo" alt="logo" /></a>
      </div>

      <div className='OtherDiv'>

        <span id='menuID'>
        <div><a href='https://twitter.com/newatlantisdao'><i class="fa fa-twitter" style={{fontSize:"25px", padding:"7px", color:"white"}} aria-hidden="true"></i></a></div>

<div><a href='https://discord.com/invite/newatlantis'><i class="fa fa-discord-alt" style={{fontSize:"25px", padding:"7px", color:"white"}} aria-hidden="true"></i></a></div>
          <div ><a href='#' className='Nav_links'>About Us</a></div>
          <div ><a href='https://gitcoin.co/grants/7126/new-atlantis-unlocking-marine-biodiversity-blue-c' className='Nav_links'>Gitcoin Grant</a></div>
          <div><a className='Nav_links' href='#L_10'>Publications</a></div>

          <div><button className='Btn1'><a href='#Join_9' className='Btn1_in'>Collaborate</a></button></div>
        </span>

        <div>
          {
            !showNav &&
            <i id='Nav_icon' class="fa fa-bars" onClick={() => { setShowNav(true) }} ></i>
          }
        </div>

      </div>

      {
        showNav &&
        <div className='mobileNav'>
          <img src={xmark} onClick={() => { setShowNav(false) }} className='xmark' fill="white"></img>
          <div className='mobileNav_inner'>

            <div onClick={() => { setShowNav(false) }}><a className='Nav_links' href='#L_8'>Projects</a></div>
            <div onClick={() => { setShowNav(false) }} ><a href='#' className='Nav_links'>About Us</a></div>
            <div onClick={() => { setShowNav(false) }}><a className='Nav_links' href='#L_10'>Publications</a></div>
            <div onClick={() => { setShowNav(false) }}><button className='Btn1'><a href='#Join_9' className='Btn1_in'>Collaborate</a></button></div>

          </div>
        </div>
      }

    </div >
  )
}

export default TheNav