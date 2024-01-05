import React, { Component } from "react";
import { Link } from "react-router-dom";

import Item from "./Item";
import NewOffer1 from "./Offer/NewOffer1";
import NewArrivals from "./NewArrivals";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div className="h-auto pt-32 sm:py-28">
        <div
          className="bg-cover bg-center bg-no-repeat h-screen w-screen sm:h-96"
          style={{
            backgroundImage:
              "url('https://w0.peakpx.com/wallpaper/739/894/HD-wallpaper-fashion-models-models-beautiful-girls-female-and-men-casual-clothes-fashion-beautiful-boys.jpg')",
          }}
        >
          <div className="relative top-48 left-20 md:absolute sm:absolute  sm:top-60 sm:left-10">
            <h1 className="text-black font-semibold text-8xl sm:text-3xl  md:text-6xl w-1/2  sm:w-3/4">
              Welcome to Fashion Store
            </h1>
            <button className="bg-black py-3 px-5 text-white font-semibold" ><Link to="/shop">Shop</Link></button>
          </div>
        </div>
        <br />
        <div className="h-32 sm:h-auto sm:gap-10 flex sm:flex-col justify-evenly border-b border-t">
          <div className="flex gap-5 px-5 items-center">
            <i className="fas fa-truck text-3xl" />
            <div>
              <h1 className="font-bold">Free Shipping</h1>
              <p>Freeshiping on all us order above Rs:5000 </p>
            </div>
          </div>
          <div className="flex border-r border-l gap-5 px-5 items-center ">
            <i className="fas fa-reply-all text-3xl" />
            <div>
              <h1 className="font-bold">30 Day Return</h1>
              <p>Simply retun within 30 days for exchange </p>
            </div>
          </div>
          <div className="flex px-5 gap-5 items-center ">
            {" "}
            <i className="fab fa-cc-mastercard text-3xl" />
            <div>
              <h1 className="font-bold">100% Payment Secure</h1>
              <p>Simply retun within 30 days for exchange </p>
            </div>
          </div>
        </div>
        <br />
        <div className="px-20 sm:px-5">
          {" "}
          <h1 className="flex justify-center font-bold text-4xl">
            Featured Product
          </h1>
          <div className="py-20 grid grid-cols-4 sm:grid-cols-1 gap-4">
            <Item
              title="Hoody"
              price="1200"
              image="https://m.media-amazon.com/images/I/B1FGy+bPeZS._AC_CLa%7C2140%2C2000%7C61p%2BfGuikuL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY1000_.png"
              
            />
            <Item
              title="Sweatshirt"
              price="1000"
              image="https://kingteeshops.com/i-feel-sorry-for-people-with-no-personality-sweatshirt"
              tag="New"
            />
            <Item
              title="Jacket"
              price="2500"
              image="https://cafe24img.poxo.com/notahumanbeing/web/product/big/201810/4c3de1144a57969e2525159cec5010f9.jpg"
              
            />
            <Item
              title="Thermal Wear"
              price="2000"
              image="https://i0.wp.com/pessosafety.eu/wp-content/uploads/2019/08/Thermo.undewear_001_MERINO80.png?fit=900%2C900&ssl=1"
              tag="New"
            />
            <Item
              title="Tracksuits"
              price="2200"
              image="https://static-01.daraz.com.np/p/0277bbc691fb529fe8d4978d608a89cb.jpg_300x0q75.webp"
              tag="New"
            />
            <Item
              title="---"
              price="1500"
              image="https://img.freepik.com/premium-vector/female-fashion-dress-isolated-icon-design_25030-13126.jpg"
              tag="New"
            />
            <Item title='Jordan'
            price='5000'
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvc9DM0mzlA21xloQ4Z6e7SNzwpUqUfYWcKW8liEJSr1Ma2fEBYaqiPfvZHwhNikdQpUk&usqp=CAU"
            tag='New'/>

            <Item title='Jordan 1'
            price='4000'
            image="https://classic.cdn.media.amplience.net/i/hibbett/F5080_1115_right?w=300&h=300&img404=404&v=1"
           />
          </div>
        </div>
        <NewOffer1 />
        <NewArrivals />
        <Footer />
      </div>
    );
  }
}

export default Home;
