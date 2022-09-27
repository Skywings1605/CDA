import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import SimpleImageGallery from "./Gallery";
import DynamicGallery from "./DynamicColumn";
import Lightbox from "react-images";

function App() {
  return (
    <div className="App">
      <h1>React Photo Gallery</h1>
      <h2>Photo gallery Demo!</h2>
      <DynamicGallery />
    </div>
  );
}

