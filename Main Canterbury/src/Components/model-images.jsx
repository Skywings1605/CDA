import React from "react";
import ReactDOM from "react-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./model-image.css";

export default class ModalImage extends React.Component {
  constructor(props) {
    super(props);

    const ratioWHArray = this.props.ratio.split(":");
    this.ratioWH = ratioWHArray[0] / ratioWHArray[1];
  }
  showModal = () => {
    this.modalElm.style.display = "initial";
  };

  hideModal = () => {
    this.modalElm.style.display = "none";
  };
  updateDimensions = () => {
    this.imageElm.style.height = `${this.imageElm.offsetWidth /
      this.ratioWH}px`;
  };

  componentDidMount() {
    this.rootElm = ReactDOM.findDOMNode(this);
    this.imageElm = this.rootElm.querySelector(".image");
    this.modalElm = this.rootElm.querySelector(".modal");

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div className="lp-modal-image">
        <LazyLoadImage
          className="image"
          src={this.props.src}
          alt={this.props.alt}
          onClick={this.showModal}
        />

        <div className="modal">
          <span style={{color: "red", right: "10px", top: "2px"}} className="close red" onClick={this.hideModal}>
            x
          </span>
          <LazyLoadImage
            className="modal-content"
            src={this.props.src}
            alt={this.props.alt + " modal"}
          />
        </div>
      </div>
    );
  }
}
