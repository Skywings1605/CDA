import React from 'react';
import"./Slides.css"
import banner1 from "./Images/homebanner.webp"
import banner2 from "./Images/clubhouse.webp"
import banner3 from "./Images/plot1.webp"
import banner4 from "./Images/path.webp";

import leftarrow from "./Images/leftarrow.webp";
import rightarrow from "./Images/rightarrow.webp";

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
      <img src={banner1} class="d-block w-100" alt="banner"/>
    </div>
    <div class="carousel-item" data-mdb-interval="4000">
      <img src={banner2} class="d-block w-100" alt="Luxury Villa"/>
    </div>
    <div class="carousel-item" data-mdb-interval="4000">
      <img src={banner3} class="d-block w-100" alt="Banner 1"/>
    </div>
    <div class="carousel-item" data-mdb-interval="4000">
      <img src={banner4} class="d-block w-100" alt="Plots"/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="prev">
  <img style={{width: "30px"}} src={leftarrow} alt="" />
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="next">
  <img style={{width: "30px"}} src={rightarrow} alt="" />
  </button>
</div>
  );
}
