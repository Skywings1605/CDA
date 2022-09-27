import React from 'react';
import"./Slides.css"
import banner1 from "./Images/homebanner.png"
import banner2 from "./Images/clubhouse.png"
import banner3 from "./Images/plot1.png"
import banner4 from "./Images/path.png"

import {
  MDBCarousel,
  MDBCarouselItem,
  MDBIcon,
} from 'mdb-react-ui-kit';

export default function Slides() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-mdb-ride="carousel" data-mdb-pause="true">
  <div class="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselExampleIndicators"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselExampleIndicators"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselExampleIndicators"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselExampleIndicators"
      data-mdb-slide-to="3"
      aria-label="Slide 0"
    ></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-mdb-interval="4000">
      <img src={banner1} class="d-block w-100" alt="Eastwood banner"/>
    </div>
    <div class="carousel-item" data-mdb-interval="4000">
      <img src={banner2} class="d-block w-100" alt="Luxury Villa"/>
      <div class="carousel-caption d-none d-md-block slideh1 firsth1" >
        <h1>Come Dive In!!</h1>
    </div>
    </div>
    <div class="carousel-item" data-mdb-interval="4000">
      <img src={banner3} class="d-block w-100" alt="Banner 1"/>
      <div class="carousel-caption d-none d-md-block slideh1 sech1" >
        <h1>Canterbury Divine Arc Plots</h1>
    </div>
    </div>
    <div class="carousel-item" data-mdb-interval="4000">
      <img src={banner4} class="d-block w-100" alt="Plots"/>
      <div class="carousel-caption d-none d-md-block slideh1 thirdh1">
        <h1>Complete Canterbury Divine Arc Plots View</h1>
    </div>
      
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="prev">
  <img style={{width: "30px"}} src={"https://cdn-icons-png.flaticon.com/512/2985/2985162.png"} alt="" />
    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="next">
  <img style={{width: "30px"}} src={"https://cdn-icons-png.flaticon.com/512/1549/1549454.png"} alt="" />
  </button>
</div>
  );
}
