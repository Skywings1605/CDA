import "./ThankYou.css"
import logo from "./Images/logo.svg"
import { Link } from "react-router-dom"

export const ThankYou = () => {
    return (
        <div className="thank">
            <img src={logo} alt="" className="logothank"/>
            <h1>Thank You!</h1>
            <p>Our Team Will Get Back To You Soon.</p>

            <div className="icns">
                <a href="https://www.facebook.com/canterburydivinearc" target={1} className="fb"><img src={"https://cdn-icons-png.flaticon.com/512/4494/4494479.png"} alt="" /></a>
                <a href="https://twitter.com/c_divinearc" target={1}><img src={"https://cdn-icons-png.flaticon.com/512/4494/4494481.png"} alt="" /></a>
                <a href="https://www.instagram.com/canterbury_divinearc/" target={1}><img src={"https://cdn-icons-png.flaticon.com/512/2111/2111463.png"} alt="" /></a>
                <a href="https://www.youtube.com/channel/UCN9VpFc_HpVDnZeBYtI3rOg" target={1}><img src={"https://cdn-icons-png.flaticon.com/512/4494/4494487.png"} alt="" /></a>
                <a href="mailto: canterburydivinearc@gmail.com" target={1}><img src={"https://cdn-icons-png.flaticon.com/512/552/552486.png"} alt="" className="mail" /></a>
            </div> 
            <Link to="/">

            <p className="gotohome">Go To Home Page</p>
            </Link>
        </div>
    )
}