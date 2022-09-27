import Slides from "./Slides.jsx";

// import fb from "./Images/facebook.png"
// import inst from "./Images/facebook.png"
// import twi from "./Images/facebook.png"
// import  mail from "./Images/facebook.png"
// import call from "./Images/facebook.png"
// import ready from "./Images/ready.png"
// import premium from "./Images/premium.png"
// import onwards from "./Images/onwards.png"
// import landlord from "./Images/landlord.png";
// import katha from "./Images/katha.png"
// import green from "./Images/green.png";
// import ModalImage from "./model-images.jsx"





import"./Main.css";
import indus from "./Images/indus.png";
import { useEffect, useState } from "react"
import { Navbar } from "./Navbar.jsx";
import axios from "axios"
import { Form } from "./Form.jsx";
import { PopupDiv } from "./PopUp.jsx";
import { GalleryDiv } from "./Gallery.jsx";
import CustomizedDialogs from "./Dialog.jsx";
import { ReactGallery } from "./ReactGallery.jsx";
import { NewGallery } from "./NewGallery.jsx";
import { ThankYou } from "./ThankYou.jsx";
import Gallery from "./Gallery.jsx";
// import { GalleryNew } from "./DynamicColumn";

import svg1 from "./Images/1.svg"
import svg2 from "./Images/2.svg"

import svg3 from "./Images/3.svg"
import svg4 from "./Images/4.svg"

export const Main = () => {
    const [timer, setTimer] = useState(0);
    const [acre, setAcre] = useState(0);
    const [family, setFamily] = useState(0);
    const [project, setProject] = useState(0);

   
    const [status, setStatus] = useState('');
    // const [timer, setTimer] = useState(10);

    

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
                            <img src={svg1} alt="" />
                            
                            <p>East and West facing plots makes it easier for you to choose from</p>
                        </div>
                        <div className="grid">
                        <img src={svg2} alt="" />
                        <p>The premium corner plots are a great option</p>
                        </div>
                        <div className="grid">
                            <img src={svg3} alt="" />
                            <p>G+1 gives each plot owner the assurance that his view is never blocked</p>
                        </div>
                        <div className="grid">
                        <img className="lasticon" src={svg4} alt="" />
                        <p id="amenities">No boundary walls around each plot gives you an unobstructed openness</p>
                        </div>
                </div>
            </div>
            <section >               
            <div className="amenities reveal" >
                <h1 className="ameh1">Amenities</h1>
                <hr />
                <p>A well-planned clubhouse will give you different spaces for family, corporates, banquets, sundowners, or a book club catch up -</p>
                <p className="greentxt">Welcome to the 7-acre Canterbury Clubhouse that has all of this and much more in one integrated space.</p>
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

                      <h4 className="greentxt">Sophisticated plots at the foot of Nandi hills</h4>
                      <p>Canterbury Divine Arc is our Premium land bank with closest proximity to the Clubhouse. It is a great investment option for people who like a modern touch engulfed in natural surroundings.</p>
                      </div>
                        
                        {/* <div class="wrap">
                        <a href={require("./Images/IFB_Eastwood_Brochure.pdf")} download="IFB_Eastwood_Brochure">

                            <button class="button">
                                Download Brochure
                            </button>
                        </a>
                        </div> */}

                    </div>
                    {/* <div className="rightpro">
                    <ModalImage
                      src={a1}
                      alt={`SMR`}
                      ratio={`3:2`}
                    />
                    <ModalImage
                      src={a2}
                      alt={`SMR`}
                      ratio={`3:2`}
                    />
                    <ModalImage
                      src={a3}
                      alt={`SMR`}
                      ratio={`3:2`}
                    />
                    <ModalImage
                      src={a4}
                      alt={`SMR`}
                      ratio={`3:2`}
                    />
                    <ModalImage
                      src={a5}
                      alt={`SMR`}
                      ratio={`3:2`}
                    />
                    <ModalImage
                      src={a6}
                      alt={`SMR`}
                      ratio={`3:2`}
                    />
                    <ModalImage
                      src={a7}
                      alt={`SMR`}
                      ratio={`3:2`}
                    />
                    <ModalImage
                      src={a9}
                      alt={`SMR`}
                      ratio={`3:2`}
                    />
                    <ModalImage
                      src={a10}
                      alt={`SMR`}
                      ratio={`3:2`}
                    />
                    <ModalImage
                      src={a11}
                      alt={`SMR`}
                      ratio={`3:2`}
                    />
                    <ModalImage
                      src={a12}
                      alt={`SMR`}
                      ratio={`3:2`}
                    />
                    <ModalImage
                      src={a13}
                      alt={`SMR`}
                      ratio={`3:2`}
                    />


                    </div> */}
                    <p ></p>
                    </div>

                    <div className="">
                        <h1>Demo of Your Dream House</h1>
                         <iframe className="videoclass" src="https://www.youtube.com/embed/xVMHXEGxpIg?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>
                    
                <div>
                <PopupDiv/>
                </div>
                
            </div>
            <div className="gallerydiv" id="gallery">
                      <div className="update">
                          <h2>Construction Update</h2>
                          <p className="greentxt">Canterbury Hillview is 100% legally compliant and a completed RERA approved layout. With multiple 1BHK & 3BHK villas being completed, here are some updated images of the layout.</p>
                      </div>
                      <div className="galleryslides">
                        <Gallery/>
                      </div>

                      {/* <h1 className="galleryh1">Our Gallery</h1>
                      <hr id="galleryhr"/>
                      <br /> */}

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
                      <li>NH7 Refuel <span>30 Mins</span> </li>
                  </ul>
              </div>
                <div className="googlemap">
                <h1 className="loch1">Location</h1>
                  <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15528.055233137058!2d77.6272301!3d13.3494171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9b6234581150f00b!2sCanterbury%20Castles!5e0!3m2!1sen!2sin!4v1662954594049!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" 
                        style={{border:"0"}}
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
            <p id="contact"></p>
                
            </div>

            </section>
            
            {/* <div className="formdiv" 
            >
                    <div className="righth3">
                        <h3>BOOK A SITE VISIT NOW</h3>
                    </div>
                    <form action="" >
                    <input type="text" onChange={handleChange} value={values.name} className="name" placeholder="Name" required /><hr />
                    <input type="text" onChange={handleChange} value={values.email} className="email" placeholder="Email" required /><hr />
                    <input type="number" onChange={handleChange} value={values.phone} className="phone" placeholder="Mobile No" required /><hr />
                    <button onClick={handleSubmit} className="btn">Here You Go<img src={""} alt="" className="imgArrow"/></button>
                    </form>
                    
                </div> */}
                <p ></p>
            <section id="contactus">
            <div className="btm" >
            <div className="icns">
                <a href="https://www.facebook.com/canterburydivinearc" target={1} className="fb"><img src={"https://cdn-icons-png.flaticon.com/512/4494/4494479.png"} alt="" /></a>
                <a href="https://twitter.com/c_divinearc" target={1}><img src={"https://cdn-icons-png.flaticon.com/512/4494/4494481.png"} alt="" /></a>
                <a href="https://www.instagram.com/canterbury_divinearc/" target={1}><img src={"https://cdn-icons-png.flaticon.com/512/2111/2111463.png"} alt="" /></a>
                <a href="https://www.youtube.com/channel/UCN9VpFc_HpVDnZeBYtI3rOg" target={1}><img src={"https://cdn-icons-png.flaticon.com/512/4494/4494487.png"} alt="" /></a>
                <a href="mailto: canterburydivinearc@gmail.com" target={1}><img src={"https://cdn-icons-png.flaticon.com/512/552/552486.png"} alt="" className="mail" /></a>
                </div>
                <div className="address">
                    <div className="addiv">
                    <p style={{textAlign:"center"}}><strong>Address</strong></p><br/><br/>
                    <p>Near Nandi Hills, Melekote Cross,</p>
                    <p>Tubugere Hobli,Doddaballapura Taluk,</p>
                    <p>Bangalore - 561205</p>
                      
                    </div>
                    <div className="addiv">
                        
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
                    <img className="induslogo" src={indus} alt="" />                  
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