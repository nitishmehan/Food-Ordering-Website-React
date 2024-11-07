import React from "react";

function RestrauntHeader(props) {
  return (
    <header>
      <div className="head H-N-R">
        <div className="head-1">
          <div className="head-logo">
            <img src="/images/logo-white.png" alt="" />
            <button>Location</button>
          </div>
          <div className="head-nav">
            <ul>
              <li id="dark_color">
                {" "}
                <a href="/"> HOME &nbsp; </a>
              </li>

              <li id="dark_color">
                <a href="">ORDER &nbsp; </a>{" "}
              </li>
              <li id="dark_color">
                <a href="/blogs">BLOG &nbsp; </a>
              </li>
              <li id="dark_color">
                <a href="">PAGES &nbsp; </a>
              </li>
              <li id="dark_color">
                <a href="/contact">CONTACT &nbsp; </a>{" "}
              </li>
            </ul>
          </div>
          <div className="head-profile flex">
            <img
              src="https://img.icons8.com/?size=100&id=On3brTbr5kbp&format=png&color=000000"
              alt=""
            />
            <div className="item-counter">{props.cartcounter}</div>
            <div className="line"></div>
            <a
              style={{ textDecoration: "none" }}
              href="LOGIN_Register/login.html"
            >
              <div className="head-me">
                <div className="img">
                  <img src="images/Mark.png" alt="" />
                </div>
                <div className="head-me-content">
                  <p className="grey">Hi, Mark Jecno</p>
                  <h5 style={{ color: "white" }}>My Account</h5>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="head-3">
          <div>
            <div>
              <img src="images/brand1.png" alt="" />
            </div>
            <div>
              <h2 id="dark_color">Poultry Palace</h2>
              <h3>New Jsercy.</h3>
            </div>
          </div>
          <div className="restaurant-review">
            <div className="icons like">
              <img src="images/share.png" alt="" />
              <img src="images/heart.png" alt="" />
            </div>
            <div>
              <h4 id="dark_color">3.2km</h4>
              <div className="icons">
                <img src="images/star.png" alt="" />
              </div>
              <h4 id="dark_color">3.9 (1k+ Reviews)</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="head responsive-head">
        <div className="head-1">
          <img
            className="more"
            src="https://cdn-icons-png.flaticon.com/128/6015/6015685.png"
            alt=""
          />
          <div className="head-logo">
            <img src="images/logo.png" alt="" />
            <button>Location</button>
          </div>

          <div className="head-profile flex">
            <img
              src="https://img.icons8.com/?size=100&id=On3brTbr5kbp&format=png&color=000000"
              alt=""
            />
            <div className="line"></div>
            <div className="head-me">
              <div className="img">
                <img src="images/Mark.png" alt="" />
              </div>
              <div className="head-me-content">
                <p className="grey">Hi, Mark Jecno</p>
                <h5 id="dark_color">My Account</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="head-3">
          <div>
            <div>
              <img src="images/brand1.png" alt="" />
            </div>
            <div>
              <h2 id="dark_color">Poultry Palace</h2>
              <h3>New Jsercy.</h3>
            </div>
          </div>
          <div className="restaurant-review">
            <div className="icons like">
              <img src="images/share.png" alt="" />
              <img src="images/heart.png" alt="" />
            </div>
            <div>
              <h4 id="dark_color">3.2km</h4>
              <div className="icons">
                <img src="images/star.png" alt="" />
              </div>
              <h4 id="dark_color">3.9 (1k+ Reviews)</h4>
            </div>
          </div>
        </div>
      </div>

      <div id="side-menu">
        <div className="menu-header">
          <span>Menu</span>
          <button id="close-btn">✖</button>
        </div>
        <ul className="menu-list">
          <a href="index">
            <li id="dark_color">Home</li>
          </a>
          <li id="dark_color">Order</li>
          <li id="dark_color">Blog</li>
          <li id="dark_color">Pages</li>
          <a href="/">
            <li id="dark_color">Contact</li>
          </a>
        </ul>
      </div>
    </header>
  );
}

export default RestrauntHeader;
