import React from 'react'

function CartItems() {
  return (
            <div className="container-child2 dark_icon">
                <div className="title" id="dark_color">Cart Items</div>
                <hr/>
                <div className="cart-item-card">
                    <div>
                    <h4 id="dark_color">Ultimate Loaded Nacho ...</h4>
                    <h4  id="dark_color">$20</h4>
                    </div>
                    <h5  id="dark_color">Hot Nacho Chips</h5>
                    <div>
                        <li  id="dark_color"> Serves 1 </li>
                        <div className="cart-item-counter">
                            <div>-</div>
                            <div>1</div>
                            <div>+</div>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="cart-item-card">
                    <div>
                    <h4 id="dark_color">Ultimate Loaded Nacho ...</h4>
                    <h4  id="dark_color">$20</h4>
                    </div>
                    <h5  id="dark_color">Hot Nacho Chips</h5>
                    <div>
                        <li  id="dark_color"> Serves 1 </li>
                        <div className="cart-item-counter">
                            <div>-</div>
                            <div>1</div>
                            <div>+</div>
                        </div>
                    </div>
                    <hr/>
                </div>    
                <div className="cart-item-card">
                    <div>
                    <h4 id="dark_color">Ultimate Loaded Nacho ...</h4>
                    <h4  id="dark_color">$20</h4>
                    </div>
                    <h5  id="dark_color">Hot Nacho Chips</h5>
                    <div>
                        <li  id="dark_color"> Serves 1 </li>
                        <div className="cart-item-counter">
                            <div>-</div>
                            <div>1</div>
                            <div>+</div>
                        </div>
                    </div>
                    <hr/>
                </div>    
                <div className="bill">
                    <div className="title" id="dark_color">Bill Details</div>
                    <div className="subtotal">
                        <h5  id="dark_color">Subtotal</h5>
                        <h5  id="dark_color">$100</h5>
                    </div>
                    <div className="discount"><h5  id="dark_color">Discount(10%)</h5><h5  id="dark_color">$11</h5></div>
                    <hr/>
                    <div className="topay">
                        <h4  id="dark_color">TO Pay</h4>
                        <h4  id="dark_color">$99</h4>
                    </div>
                </div>
                <div className="pay-button">
                    PROCEED TO PAYMENT
                </div>
            </div>
  )
}

export default CartItems