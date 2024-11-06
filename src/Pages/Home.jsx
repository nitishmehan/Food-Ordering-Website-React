import React from 'react'
import Footer from "../Components/Footer";
import HomeHeader from "../Components/HomeHeader";
import HomeMiddle from "../Components/HomeMiddle";
import MobileOrderingBanner from "../Components/MobileOrderingBanner";
import '../Static/index.css';


function Home() {
  return (
    <>
      <HomeHeader />
      <HomeMiddle/>
      <MobileOrderingBanner />
      <Footer/>
    </>
  )
}

export default Home
