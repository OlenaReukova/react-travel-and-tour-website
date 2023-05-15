import React from "react";
import "./Footer.scss";
// npm install react-icons --save
import {FiSend} from "react-icon/fi";
// import {MdOutlineTravelExplore} from 'react-icon/md'
import {AiOutlineTwitter} from 'react-icon/ai'
import {AiFillYoutube} from 'react-icon/ai'
import {AiFillInstagram} from 'react-icon/ai'
import {FaTripafdvisor} from 'react-icon/Fa'
import {FiChevronRight} from 'react-icon/Fi'

const Footer = () => {
  return 
  <section className="footer">
      {/* <div className="videoDiv">
        <video src= {video2} loop autoPlay muted type="video/mp4"></video>
      </div> */}
      <div className="secContent container">
        <div className="contactDiv flex"></div>
          <div className="text">
          <small>KEEP IN TOUCH</small>
          <h2>travel with us</h2>
          </div>
        <div className="inputDiv flex">
          <input type="text" placeholder= "Enter email Adress"/>
          <button className="btn flex" type= "submit">
            SEND <FiSend className ="icon"/>
          </button>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            {/* <div className='logoDiv'>
            <a href="#" className='logo flex'>
            <MdOutlineTravelExplore className="icon"/>Travel
            </a>
            </div> */}
            <div className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, tempora perferendis eveniet dolore consectetur pariatur eaque vitae, cumque excepturi reprehenderit aut dolor itaque sunt iusto est labore error. Nihil, accusamus.
            </div>
            <div className="footerSocials flex">
              <AiOutlineTwitter className ='icon'/>
              <AiFillYoutube className="icon"/>
              <AiFillInstagram className= 'icon'/>
              <FaTripafdvisor className='icon'/>
            </div>
        
            <div className="footerLinks grid" >
              {/* group 1*/}
              <div className="linkGroup">
                <span className="groupTitle">
                  OUR AGENCY
                </span>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Services
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Tourism
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Insurence
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Agency
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Payment
                </li>
              </div>

            {/* group 2 */}
              <div className="linkGroup">
                <span className="groupTitle">
                  partners
                </span>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Bookings
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Tourism
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  RentCars
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  HostelWorld
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Trivago
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  TripAdvisor
                </li>
              </div>

              {/* group 3 */}
              <div className="linkGroup">
                <span className="groupTitle">
                  LAST MINUTE
                </span>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  London
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  California
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Europe
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Ocenia
                </li>
                
              </div>

            </div>
            <div className="footerDiv flex">
              <small>BEST TRAVEL WEBSITE THEME</small>
              <small> copyright </small>
            </div>
          </div>

        </div>
      </div>
  </section>
  };

  export default Footer;
