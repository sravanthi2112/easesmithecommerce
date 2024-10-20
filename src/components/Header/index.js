import { Component } from "react";
import { LuUser2 } from "react-icons/lu";
import { BsCart2 } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import './index.css'

class Header extends Component{
    render(){
        return(
            <div className="header_component">
                <div className="top-header">
                    <div className="box-1">Free Shipping on orders above 999/-</div>
                    <div className="box-2">Call us on: +91 98976543210</div>
                </div>
                <div className="mid-header">
                    <div className="logo-sec">
                        <img src = "https://s3-alpha-sig.figma.com/img/7220/1328/eefc66cd70960daab6449206c3540858?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZj9rZ8pk0DIPcS2gKzcDeslH6xchJ--XbU~C~owkS5n12psMSHEc5JLnmtBqZj7Vn~PDRKvvfd3LMAAqOLeS8rUSTIaBpqfw1IH~RarF6TEPIpWDQcLG4mPhvhaGl52L0aF7TV5uyRtFDsS3r0eqIy6sM8vBwxGiPHU0NUoV9ryEbIuJz4StnWANiDRBUP5-niwgRODOkPjFHOLb-2mnal4LB9Gz104NjhXPLD4qI-l79aNCrAfVhZAMCsyksp6liOQ5gM1cl-KIp2J0o6gs6SOhmmHmrjz25yGvb9mNGsWoUxa25a6sLeVS4mYChjxGFOL0rsZ-GZ663dYfGLLNg__" 
                        alt = "logo"
                        className="logo"
                        />
                        <h3 className="logo-title">Chaperone</h3>
                    </div>
                    <div> 
                        <ul className="mid-header">
                            <li>Home</li>
                            <li className="selected-item">Plants & Pots</li>
                            <li>
                                <select defaultValue="tools" className="tools">
                                    <option value="tools" >
                                        Tools
                                    </option>
                                    <option>Gardening Tools</option>
                                    <option>Pest Control</option>
                                    <option>Fertilizers</option>
                                    <option>Watering</option>
                                    <option>Garden Accessories</option>
                                </select>
                            </li>
                            <li>
                                <select defaultValue='services' className="services">
                                    <option value="services" >
                                        Our Services
                                    </option>
                                    <option>Plant Day Care</option>
                                    <option>Rent Plants</option>
                                </select>
                            </li>
                            <li>Blog</li>
                            <li>Our Story</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className="logo-sec">
                        <div className="icons-sec">
                            <LuUser2 className="icons" />
                            <h6>My Profile</h6>
                        </div>
                        <div  className="icons-sec">
                            <BsCart2 className="icons" />
                            <h6>Cart</h6>
                        </div>

                    </div>
                </div>
                <div className="search-container">
                    <div className="search-main-container">
                        <GoSearch className="icons"/>
                        <input type="search"
                        placeholder="Search Plant"
                        className="search" />
                        <img 
                        alt="search-logo"
                        className="icons"
                        src = "https://s3-alpha-sig.figma.com/img/3a30/d80e/594c268f203b8704f61985100fae62d6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECIAJtsSLBVXgl2YF31TxKtq5s0LuX-WtEAzq6FqsAwtmZqiS-DsBkPIwI7mmd0ENoIRLeFKfIjRs5lPiIOarypWJhPEpdI2MHEdJkN1xO7rPxfi6Fivh6LStPxif7cKgwH6k8~PerjWx0Mh5He89Sd3dhBBzSoVHJbRu3RrNjEiGdnLBB7zqjdkw-G736mL7wI656dFi0pWcNGgWTzpC8Gx8DZC4Xf34jdHqhDOfR4kbBMTDGR6JUiDdCwChwHow27J6anCaHgCGyxB2hSvt1vhj2sGVI2cstk7qHKKBVKVoJwELI3jKy9S17QquNjtZWTSwgOnlOFdC1vmzV3X6w__" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Header