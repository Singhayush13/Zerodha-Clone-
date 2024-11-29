import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import Rightsection from './RightSection';
import Universe from './Universe';

function ProductPage() {
    return ( 
        <>
        <Hero/>
        <LeftSection
        imageUrl ="media/images/kite.png"  productname ="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnmore=""  googleplay="" appStore=""
        />
        <Rightsection  imageUrl ="media/images/console.png"  productname ="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." tryDemo="" learnmore=""  googleplay="" appStore=""
        />
         <LeftSection
        imageUrl ="media/images/coin.png"  productname ="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnmore=""  googleplay="" appStore=""
        />
         <Rightsection  imageUrl ="media/images/kiteconnect.png"  productname ="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." tryDemo="" learnmore=""  googleplay="" appStore=""
        />
         <LeftSection
        imageUrl ="media/images/varsity.png"  productname ="Varsity mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnmore=""  googleplay="" appStore=""
        />
        <Universe/>
        </>
     );
}

export default ProductPage;