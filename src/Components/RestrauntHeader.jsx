import React from 'react'

function RestrauntHeader() {
  return (
    <header>
        <div class="head H-N-R">
            <div class="head-1">
                <div class="head-logo">
                    <img src="/images/logo-white.png" alt=""/>
                    <button>Location</button>

                </div>
                <div class="head-nav">
                    <ul>
                        
                        <li  id="dark_color"> <a href="\index.html"> HOME &nbsp;  </a></li>
                       
                        <li  id="dark_color"><a href="">ORDER &nbsp;  </a> </li>
                        <li  id="dark_color"><a href="/blog.html">BLOG &nbsp;  </a></li>
                        <li  id="dark_color"><a href="">PAGES &nbsp;  </a></li>
                        <li  id="dark_color"><a href="/Contact_page/contact.html">CONTACT &nbsp;  </a> </li>
                    </ul>
                </div>
                <div class="head-profile flex">
                    <img src="https://img.icons8.com/?size=100&id=On3brTbr5kbp&format=png&color=000000" alt="" />
                    <div class="line"></div>
                    <a style={{textDecoration: "none"}} href="LOGIN_Register/login.html">
                        <div class="head-me">
                            <div class="img"><img src="images/Mark.png" alt=""/></div>
                            <div class="head-me-content">
                                <p class="grey">Hi, Mark Jecno</p>
                                <h5 style={{color: "white"}}>My Account</h5>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="head-3">
                <div>
                    <div><img src="images/brand1.png" alt=""/>
                    </div>
                    <div>
                    <h2  id="dark_color">Poultry Palace</h2>
                    <h3>New Jsercy.</h3>
                    </div>
                </div>
                <div class="restaurant-review">
                    <div class="icons like">
                    <img src="images/share.png" alt=""/>
                    <img src="images/heart.png" alt=""/>
                    </div>
                    <div>
                        <h4  id="dark_color">3.2km</h4>
                        <div class="icons"><img src="images/star.png" alt=""/></div>
                        <h4  id="dark_color">3.9 (1k+ Reviews)</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="head responsive-head">
            <div class="head-1">
                <img class="more" src="https://cdn-icons-png.flaticon.com/128/6015/6015685.png" alt=""/>
                <div class="head-logo">
                    <img src="images/logo.png" alt=""/>
                    <button><span class="material-symbols-outlined">location_on
                        </span>Location</button>
    
                </div>
    
                <div class="head-profile flex">
                    <img src="https://img.icons8.com/?size=100&id=On3brTbr5kbp&format=png&color=000000" alt=""/>
                    <div class="line"></div>
                    <div class="head-me">
                        <div class="img"><img src="images/Mark.png" alt=""/></div>
                        <div class="head-me-content">
                            <p class="grey">Hi, Mark Jecno</p>
                            <h5  id="dark_color">My Account</h5>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="head-3">
                <div>
                    <div><img src="images/brand1.png" alt=""/>
                    </div>
                    <div>
                    <h2  id="dark_color">Poultry Palace</h2>
                    <h3>New Jsercy.</h3>
                    </div>
                </div>
                <div class="restaurant-review">
                    <div class="icons like">
                    <img src="images/share.png" alt=""/>
                    <img src="images/heart.png" alt=""/>
                    </div>
                    <div>
                        <h4  id="dark_color">3.2km</h4>
                        <div class="icons"><img src="images/star.png" alt=""/></div>
                        <h4  id="dark_color">3.9 (1k+ Reviews)</h4>
                    </div>
                </div>
            </div>
        </div>

        <div id="side-menu">
            <div class="menu-header">
              <span>Menu</span>
              <button id="close-btn">✖</button>
            </div>
            <ul class="menu-list">
              <a href="index.html"><li  id="dark_color">Home</li></a>
              <li  id="dark_color">Order</li>
              <li  id="dark_color">Blog</li>
              <li  id="dark_color">Pages</li>
              <a href="Contact_page/contact.html"><li  id="dark_color">Contact</li></a>
            </ul>
          </div>
    </header>
  )
}

export default RestrauntHeader
