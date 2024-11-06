import React from 'react'

function Footer() {
  return (
    <footer>
    <div className="footer-top">
        <div className="footer-inner-1">
            <span>Don't pass up our fantastic discounts. email offers from all of our best eateries</span>
        </div>
        <div className="footer-inner-2">
            <div className="mail">
                <input type="email" name="" id="" placeholder="Enter Your Email" />
                <button>Subscribe Now</button>
            </div>
        </div>
    </div>
    <div className="footer-1">
        <div className="first">
            <img src="images/logo.png" />
            <p  id="dark_color">Welcome to our online order website! Here, you can browse our wide selection of products and place orders from the comfort of your own home.</p>
            <div className="media-logos">
                <div className="media-logo">
                    <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className="media-logo">
                    <i className="fa-brands fa-x-twitter"></i>
                </div>
                <div className="media-logo">
                    <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div className="media-logo">
                    <i className="fa-brands fa-instagram"></i>
                </div>
                <div className="media-logo">
                    <i className="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>
        <div className="second NRF">
            <div><span>|</span> Company</div>
            <ul>
                <li  id="dark_color">About us</li>
                <li  id="dark_color">Contact us</li>
                <li  id="dark_color">Offer</li>
                <li  id="dark_color">FAQs</li>
            </ul>
        </div>
        <div className="second s-1 RF1 ">
            <div className="toggle"><div className="sec-1"><span>|</span>Company</div><span className="material-symbols-outlined">
                keyboard_arrow_down
                </span></div>
            <ul>

            </ul>
        </div>
        <div className="second NRF">
            <div><span>|</span> Accounts</div>
            <ul>
                <li  id="dark_color">My orders</li>
                <li  id="dark_color">Wishlist</li>
                <li  id="dark_color">Shopping Cart</li>
                <li  id="dark_color">Saved Address</li>
            </ul>
        </div>
        <div className="second s-2 RF1">
            <div className="toggle"><div className="sec-1"><span>|</span>Accounts</div><span className="material-symbols-outlined">
                keyboard_arrow_down
                </span></div>
            <ul>
           
            </ul>
        </div>
        <div className="second NRF">
            <div><span>|</span> Useful links</div>
            <ul>
                <li  id="dark_color">Blogs</li>
                <li  id="dark_color">Login</li>
                <li  id="dark_color">Register</li>
                <li  id="dark_color">Profile</li>
                <li  id="dark_color">Settings</li>
            </ul>
        </div>
            <div className="second s-3 RF1">
                <div className="toggle"><div className="sec-1"><span>|</span>Useful links</div><span className="material-symbols-outlined">
                    keyboard_arrow_down
                    </span></div>                    <ul>

                </ul>
            </div>
        <div className="second NRF ">
            <div><span>|</span> Top Brands</div>
            <ul>
                <li  id="dark_color">PizzaBoy</li>
                <li  id="dark_color">Saladish</li>
                <li  id="dark_color">IcePops</li>
                <li  id="dark_color">Maxican Hoy</li>
                <li  id="dark_color">La Foodie</li>
            </ul>
        </div>            
        <div className="second s-4 RF1">
            <div className="toggle"><div className="sec-1"><span>|</span>Top Brands</div><span className="material-symbols-outlined">
                keyboard_arrow_down
                </span></div>                <ul>

            </ul>
        </div>     
        

    </div>
    <div className="copyright">
        @ Copyright 2024 EATSY. All rights Reserved.
    </div>
</footer>
  )
}

export default Footer
