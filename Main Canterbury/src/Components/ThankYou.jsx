import "./ThankYou.css"
import logo from "./Images/blacklogo.webp"
import { Link } from "react-router-dom";

import fb from "./Images/fb.webp";
import insta from "./Images/insta.webp";
import twitter from "./Images/twitter.webp";
import youtube from "./Images/youtube.webp";
import mail from "./Images/mail.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const ThankYou = () => {
    return (
        <div className="thank">
            <img src={logo} alt="" className="logothank"/>
            <h1>Thank You!</h1>
            <p>Our Team Will Get Back To You Soon.</p>

            <div className="icns">
                <a href="https://www.facebook.com/canterburydivinearc" target={1} className="fb"><LazyLoadImage src={fb} alt="" /></a>
                <a href="https://twitter.com/c_divinearc" target={1}><LazyLoadImage src={twitter} alt="" /></a>
                <a href="https://www.instagram.com/canterbury_divinearc/" target={1}><LazyLoadImage src={insta} alt="" /></a>
                <a href="https://www.youtube.com/channel/UCN9VpFc_HpVDnZeBYtI3rOg" target={1}><LazyLoadImage src={youtube} alt="" /></a>
                <a href="mailto: canterburydivinearc@gmail.com" target={1}><LazyLoadImage src={mail} alt="" className="mail" /></a>
            </div> 
            <Link to="/">

            <p className="gotohome">Go To Home Page</p>
            </Link>
        </div>
    )
}