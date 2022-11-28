import Slides from "./Slides.jsx";
import"./Main.css";
import indus from "./Images/indus.webp";
import { Form } from "./Form.jsx";
import { PopupDiv } from "./PopUp.jsx";


import svg1 from "./Images/1.svg"
import svg2 from "./Images/2.svg"

import svg3 from "./Images/3.svg"
import svg4 from "./Images/4.svg"

import fb from "./Images/fb.webp";
import insta from "./Images/insta.webp";
import twitter from "./Images/twitter.webp";
import youtube from "./Images/youtube.webp";
import mail from "./Images/mail.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Main = () => {

    return (
        <div id="main">
            <div className="top" id="home">
                <Slides/>
            </div>
            <div  className="mobiform" >
                <Form/>
            </div>
            <div className="eyediv reveal">
                <h1 className="eyetext">Why choose Canterbury Divine Arc?</h1>
                <hr id="eyehr"/>
                <br />
                <div className="eyeicons">
                        <div className="grid">
                            <LazyLoadImage src={svg1} alt="" />
                            
                            <p>East and West facing plots makes it easier for you to choose from</p>
                        </div>
                        <div className="grid">
                        <LazyLoadImage src={svg2} alt="" />
                        <p>The premium corner plots are a great option</p>
                        </div>
                        <div className="grid">
                            <LazyLoadImage src={svg3} alt="" />
                            <p>G+1 gives each plot owner the assurance that his view is never blocked</p>
                        </div>
                        <div className="grid">
                        <LazyLoadImage className="lasticon" src={svg4} alt="" />
                        <p id="amenities">No boundary walls around each plot gives you an unobstructed openness</p>
                        </div>
                </div>
            </div>
            <section >               
            <div className="amenities reveal" >
                <h1 className="ameh1">Amenities</h1>
                <hr />
                <p>A well-planned clubhouse will give you different spaces for family, corporates, banquets, sundowners, or a book club catch up -</p>
                <p className="">Welcome to the acres of Canterbury Clubhouse that has all of this and much more in one integrated space.</p>
                <div className="lines cards">
                    <ul className="text-card">
                      <h5 className="greentxt">OPEN LAWNS</h5>
                        <li>Children's Play Area</li>
                        <li>Waterfall</li>
                        <li>BonFire Pits</li>
                        <li>Stage & Events Area</li>
                        <li>Jogging Path</li>
                        <li>Pavilion</li>
                        <li>Skating Rink</li>
                    </ul>
                    <ul className="text-card" >
                    <h5 className="greentxt">CLUB HOUSE</h5>
                        <li>Community Seating</li>
                        <li>Swimming pool</li>
                        <li>Indoor games</li>
                        <li id="about">Restaurant</li>
                        <li >Rooms</li>
                        <li >Party Lawn</li>
                        <li className="aboutus">Multipurpose/ Party Hall</li>
                    </ul>
                </div>        
            </div>
            </section> 
            <section >
            <div className="proj reveal">
                <h1 id=""> About Canterbury Divine Arc</h1>
                        <hr />
                <div className="project">
                    <div className="leftpro">
                      <div className="leftprotxt">

                      <h4 className="soptxt">Sophisticated plots at the foot of Nandi hills</h4>
                      <p>Canterbury Divine Arc is our Premium land bank with closest proximity to the Clubhouse. It is a great investment option for people who like a modern touch engulfed in natural surroundings.</p>
                      </div>

                    </div>
                    <p ></p>
                    </div>

                    <div style={{padding:"56.25% 0 0 0", position:"relative"}}><iframe src="https://player.vimeo.com/video/769300230?h=047fc9fdb9&badge=0&autopause=0&player_id=0&app_id=58479/embed" allowFullScreen frameBorder="0" style={{position:"absolute", top:"0", left:"0", width:"100%", height:"100%"}}></iframe></div>
                    
                <div>
                <PopupDiv/>
                </div>
                
            </div>
            <div className="loc reveal" id="location">
                <h1 className="locadvh1">Location Advantages</h1>
                <hr />
                <div className="locmap">
                <div className="adv">
                  <h1 className="loch1">Location Advantages</h1>
                  <ul>
                      <li>Nandi Hills <span>3 Mins</span></li>
                      <li>Gitanjali International School <span>12 Mins</span> </li>
                      <li>Doddaballapur Police Station <span>15 Mins</span> </li>
                      <li>Prestige Golfshire <span>16 Mins</span> </li>
                      <li>Nandi Train Station <span>15 Mins</span> </li>
                      <li>DMart <span>15 Mins </span> </li>
                      <li>Manipal Hospital Dodabbalapur <span>20 Mins</span> </li>
                      <li>Nandi Upachar <span>24 Mins</span> </li>
                      <li>Stonehill International School <span>25 Mins</span> </li>
                      <li>Indian Paratha Company <span>25 Mins</span> </li>
                      <li>NH7 Refuel <span>25 Mins</span> </li>
                  </ul>
              </div>
                <div className="googlemap">
                <h1 className="loch1">Location</h1>
                  <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1941.0488558152106!2d77.6304337!3d13.3441976!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1e749854a0b2f%3A0x9a22f877bd909bed!2sCanterbury%20Divine%20Arc!5e0!3m2!1sen!2sin!4v1668591080790!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" 
                        style={{border:"0"}}
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
            <p id="contact"></p>
                
            </div>

            </section>
            
                <p ></p>
            <section id="contactus">
            <div className="btm" >
                <div className="icns">
                    <a href="https://www.facebook.com/canterburydivinearc" target={1} className="fb"><LazyLoadImage src={fb} alt="" /></a>
                    <a href="https://twitter.com/c_divinearc" target={1}><LazyLoadImage src={twitter} alt="" /></a>
                    <a href="https://www.instagram.com/canterbury_divinearc/" target={1}><LazyLoadImage src={insta} alt="" /></a>
                    <a href="https://www.youtube.com/channel/UCN9VpFc_HpVDnZeBYtI3rOg" target={1}><LazyLoadImage src={youtube} alt="" /></a>
                    <a href="mailto: canterburydivinearc@gmail.com" target={1}><LazyLoadImage src={mail} alt="" className="mail" /></a>
                </div>
                <div className="address">
                    <div className="addi">
                    <p style={{textAlign:"center"}} className="adad"><strong>Address</strong></p><br/><br/>
                    <p>Near Nandi Hills, <span className="addview"> Melekote Cross,</span></p>
                    <p className="mobiview"> Melekote Cross,</p>
                    <p>Tubugere Hobli, <span className="addview">Doddaballapura Taluk,</span> </p>
                    <p className="mobiview">Doddaballapura Taluk,</p>
                    <p>Bangalore - 561205</p>
                      
                    </div>
                    <div className="addi">
                        
                    <p style={{textAlign:"center"}}><strong>Contact Us</strong></p><br/><br/> 
                    
                    <p><a href="tel:+919606580656" className="whitetxt">+91 9606 580 656</a></p>
                    <p><a href="tel:+919606580585" className="whitetxt">+91 9606 580 585</a></p> 

                    </div>
                </div>
                <small>
                    <p className="rera"><strong>RERA No. PRM/KA/RERA/1250/301/PR/171208/000653</strong></p>

                </small>
                {/* <hr /> */}
                <div className="last">
                    <p>Strategic Partner</p>
                    <LazyLoadImage className="induslogo" src={indus} alt="" />                  
                </div>   
            </div>
            <div className="policy">
                <h3><strong>Privacy Policy Disclaimer</strong></h3>
                <p className="lastp">We request information from you when you register on our site or fill out a form. While filling out a form on our website, you can be asked to submit your name, email address, and phone number for any of the aforementioned reasons. You are welcome to visit our website anonymously, nevertheless. Any information we learn about you is used to personalise your visit, improve our website, and improve customer service. Any information gathered will not be shared with any third parties, according to the privacy disclaimer clause.
                We may collect the following informations like Name, Email address and Contact number.</p>
                
                <p>Copyright 2022 | All Rights Reserved By Canterbury Divine Arc.</p>
                
            </div>
            </section>     
        </div>
    )
}