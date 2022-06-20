import React, { useState } from "react";
import logo from "../image/logo.svg"
import { IoCallOutline } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
// import { RiMenuFill } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineArrowUp } from 'react-icons/ai';


import { Link  } from 'react-router-dom';
const Header=()=>{

  const [menuOpen, setMenuOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);


  const menuButton = (e) => {
    // e.stopPropagation();
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('#menuBox');
    const body = document.querySelector('body');
     if(!menuOpen) {
      menuBtn.classList.add('open');
      menu.classList.add('open');
      body.classList.add('bodyOpen');
      setMenuOpen(true);
    } else {
      menuBtn.classList.remove('open');
      menu.classList.remove('open');
      body.classList.remove('bodyOpen');
      setMenuOpen(false);
    }
  };
  const openReservation = (e) => {
    // e.stopPropagation();
    const reservationBox = document.querySelector('.reservationBox');
    const reservationBoxicon = document.querySelector('.reservationBoxicon');
     if(!reservationOpen) {
      reservationBox.classList.add('open');
      reservationBoxicon.classList.add('open');
      setReservationOpen(true);
    } else {
      reservationBox.classList.remove('open');
      reservationBoxicon.classList.remove('open');
      setReservationOpen(false);
    }
  };

  const none = (e) =>{
    e.stopPropagation();
  }

  const none2 = (e) =>{
    e.stopPropagation();
    openReservation();
    menuButton();
  }
  
  function scrollFunction() {
    
    //Get the button:
   const mybutton = document.getElementById("myBtn");
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


    return(<>
        <header>
          <div className="inner">
            <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
               </Link>
              <div className="title"></div>
            </div>
            <ul>
              <Link to="/"><li>HOME</li></Link>
              <Link  to="/menu" ><li>MENU</li></Link > 
              <li>
                RESERVATION
                <div className="hover">
                  <ul>
                  <Link to="/sitting">
                    <li>
                      <div className="text">SITTING</div>
                    </li>
                  </Link>
                  <Link to="/banquet">
                    <li>
                      <div className="text">BANQUET HALL</div>
                    </li>
                  </Link>
                  <Link to="/openterrace">
                    <li>
                    <div className="text">OPEN TERRACE</div>
                    </li>
                  </Link>
                  </ul>
                </div>
                </li>
              <Link to="/gallery"><li>GALLERY</li></Link>
              <Link to="/about"><li>ABOUT US</li></Link>
            </ul>
              <Link to="/contact" className="left" >
                <div className="call">
                    <IoCallOutline/>
                </div>
              </Link>
                <div className="burger" onClick={()=>menuButton()} >
                <div className="menu-btn">
                <div className="menu-btn__burger"></div>
                    {/* <RiMenuFill/> */}
                </div>
                </div>
                <div id="menuBox" >
                  <div className="menu"  onClick={()=>menuButton()} >
                  <div className="text" onClick={none}>
                <ul  >
                <Link  to="/" onClick={menuButton} ><li>HOME</li></Link>
                <Link  to="/menu" onClick={menuButton}  ><li>MENU</li></Link > 
                <li className="reservarion"onClick={openReservation} >RESERVATION <span><IoIosArrowDown className="reservationBoxicon" /></span> </li>
                <div className="reservationBox">
                    <ul>
                    <Link to="/sitting" onClick={none2}>
                      <li>
                        <div className="text">SITTING</div>
                      </li>
                    </Link>
                    <Link to="/banquet"  onClick={none2}>
                      <li>
                        <div className="text">BANQUET HALL</div>
                      </li>
                    </Link>
                    <Link to="/openterrace"  onClick={none2}>
                      <li>
                      <div className="text">OPEN TERRACE</div>
                      </li>
                    </Link>
                    </ul>
                  </div>
                <Link to="/gallery" onClick={menuButton} ><li>GALLERY</li></Link>
                <Link to="/about" onClick={menuButton} ><li>ABOUT US</li></Link>
                <Link to="/contact" onClick={menuButton}><li>Contact US</li></Link>

              </ul>

                </div>
                </div>
                </div>
          </div>
          <div className="bottomNavbar">
          <a href="https://wa.me/+919879037614" rel="noopener noreferrer" target="_blank">
          <div className="whatsapp">
              <BsWhatsapp/> 
          </div>
          </a>
          <div className="upperarrow" id="myBtn" onClick={topFunction} ><AiOutlineArrowUp/></div>
          </div>
      </header>
      </>
    )
}

export default Header;