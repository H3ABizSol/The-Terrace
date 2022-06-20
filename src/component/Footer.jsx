import React from "react";
import logo from "../image/logo.svg"
import { FiFacebook,FiTwitter } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { ImPinterest2 } from 'react-icons/im';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const Footer  = () =>{
    return ( <>
              <footer>
                  <div className="top">
                      <Link to={"/"}>
                      <img src={logo} alt="logo" />
                      </Link>
                  </div>
                  <div className="middile">
                      <div className="aboutUs">
                          <div className="title">ABOUT US</div>
                          <ul>
                              <Link to={"/sitting"}>
                              <li>SITTING</li>
                              </Link>
                              <Link to={"/banquet"}>
                              <li>BANQUET HALL</li>
                              </Link>
                              <Link to={"/openterrace"}>
                              <li>OPEN TERRACE</li>
                              </Link>
                          </ul>
                      </div>
                      <div className="services">
                          <div className="title">SERVICES</div>
                          <ul>
                              {/* <li>Menu</li> */}
                              <HashLink to={"/menu/#Breakfast"}>
                              <li>Breakfast</li>
                              </HashLink>
                                <HashLink to={"menu/#Lunch"}>
                              <li>Lunch</li>
                                </HashLink>
                              <HashLink to={"/menu/#Dinner"}>
                              <li>Dinner</li>
                              </HashLink>
                              <HashLink to={"/menu/#Snacks & Beve's"}>
                              <li>Snacks & Beverages</li>
                              </HashLink>
                              <HashLink to={"/menu/#Desserts"}>
                              <li>Dessert</li>
                              </HashLink>
                          </ul>
                      </div>
                      <div className="termsAndConditions">
                          <div className="title">TERMS & <span>CONDITIONS</span></div>
                          <ul>
                              <li>Privacy Policy</li>
                              <li>Feedback</li>
                              <li>Faq's</li>
                          </ul>
                      </div>
                  </div>
                    <div className="socialHandlesBottom">
                        <div className="title">Visit our social handles :</div>
                        <div className="box">
                            <FiFacebook className="icon" />
                            <BsInstagram className="icon" />
                            <FiTwitter className="icon" />
                            <ImPinterest2 className="icon" />
                            <span>
                            <AiOutlineShareAlt/>&nbsp;Share
                            </span>
                        </div>
                    </div>
                  <div className="bottom">
                      Sitemap . Cookie statement . All rights reserved
                  </div>
            </footer>
        </>
    )
}

export default Footer;
