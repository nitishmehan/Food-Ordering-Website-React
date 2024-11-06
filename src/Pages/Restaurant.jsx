import CartItems from "../Components/CartItems";
import FoodItems from "../Components/FoodItems";
import RestaurantNavbar from "../Components/RestaurantNavbar";
import SearchBar from "../Components/SearchBar";
import React from "react";
import "../Static/R1.css";
import "../Static/blog.css";
import Footer from "../Components/Footer";
import RestrauntHeader from "../Components/RestrauntHeader";

function Restaurant() {
  return (
    <>
      <RestrauntHeader />
      <main>
        <div className="container">
          <div className="container-child1">
            <RestaurantNavbar />
            <div className="content">
              <SearchBar />
              <FoodItems />
            </div>
          </div>
          <CartItems />
          {/* <h1>Mic Testing 1 2 3</h1> */}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Restaurant;
