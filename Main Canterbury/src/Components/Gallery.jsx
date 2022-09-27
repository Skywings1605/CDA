import React from 'react';
import"./Slides.css"
import mask1 from "./Images/mask1.png"
import mask2 from "./Images/mask2.png"
import mask3 from "./Images/mask3.png"
import mask4 from "./Images/mask4.png"

import {
  MDBCarousel,
  MDBCarouselItem,
  MDBIcon,
} from 'mdb-react-ui-kit';

export default function Gallery() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-mdb-ride="carousel" data-mdb-pause="false">
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
      aria-label="Slide 1"
    ></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-mdb-interval="2000">
      <img src={mask1} class="d-block w-100" alt="Canterbury"/>
    </div>
    <div class="carousel-item" data-mdb-interval="2000">
      <img src={mask4} class="d-block w-100" alt="Luxury Villa"/>
    </div>
    <div class="carousel-item" data-mdb-interval="2000">
      <img src={mask3} class="d-block w-100" alt="Banner 1"/>
    </div>
    <div class="carousel-item" data-mdb-interval="2000">
      <img src={mask4} class="d-block w-100" alt="Plots"/>
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
