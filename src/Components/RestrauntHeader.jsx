import { useState } from "react";
import React from "react";

function RestrauntHeader(props) {

  const [dispstate, setdispstate] = useState("none");

  function togggleCartModel() {
    if (dispstate === "none") {
      setdispstate("flex");
    } else {
      setdispstate("none");
    }
  }


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
              style={{cursor:"pointer"}} onClick={togggleCartModel}
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
      <div className="cart-overlay" style={{display: dispstate}}>
        <div className="container-child2 dark_icon">
          <div className="title" id="dark_color">
            Cart Items
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png" height="20px" alt="" onClick={togggleCartModel} style={{cursor:"pointer"}}/>

          </div>
          <hr />
          {props.data.length === 0 ? (
            <h1 style={{ margin: "40px 0px" }}>Your cart is empty.</h1>
          ) : (
            props.data.map((item, index) => (
              <div className="cart-item-card" key={index}>
                <div>
                  <h4>{item.name}</h4>
                  <h4 id="dark_color">${item.price}</h4>
                </div>
                <h5 id="dark_color">Hot Nacho Chips</h5>
                <div>
                  <li id="dark_color"> Serves 1 </li>
                  <div className="cart-item-counter">
                    <button
                      className="cartbuttons"
                      onClick={() => {
                        props.subfun(item);
                      }}
                    >
                      -
                    </button>
                    <div>{item.quantity}</div>
                    <button
                      onClick={() => {
                        props.addfun(item);
                      }}
                      className="cartbuttons"
                    >
                      +
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            ))
          )}

          <div className="bill">
            <div className="title" id="dark_color">
              Bill Details
            </div>
            <div className="subtotal">
              <h5 id="dark_color">Subtotal</h5>
              <h5 id="dark_color">{props.amount}</h5>
            </div>
            <div className="discount">
              <h5 id="dark_color">Discount(10%)</h5>
              <h5 id="dark_color">{0.1 * props.amount}</h5>
            </div>
            <hr />
            <div className="topay">
              <h4 id="dark_color">TO Pay</h4>
              <h4 id="dark_color">{props.amount - props.amount * 0.1}</h4>
            </div>
          </div>
          <div className="pay-button">PROCEED TO PAYMENT</div>
        </div>
      </div>
    </header>
  );
}

export default RestrauntHeader;
