import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="flex flex-col">
        <div className="flex sm:flex-col justify-between bg-slate-600 gap-10 p-10 px-28 sm:px-5 text-white">
          <div className="flex flex-col">
            <h1 className=" font-bold mb-5">CONTACT DETAILS</h1>
            <h2><i className="fas fa-map-marker-alt"/> Bhaktapur Nepal</h2>
            <h2><i className="fas fa-phone-alt"/> +977 9876543210</h2>
            <h2><i className="fas fa-envelope"/> getinfo@fancystore.com</h2>
          </div>
          <div className="flex flex-col">
            <h1 className=" font-bold mb-5">PRODUCT</h1>
            <h2>Price Drop</h2>
            <h2>New</h2>
            <h2>Products</h2>
            <h2>Best Sales</h2>
            <h2>Contact us</h2>
          </div>
          <div className="flex flex-col">
            <h1 className=" font-bold mb-5">OUR COMPANY</h1>
            <h2>delivery</h2>
            <h2>about us</h2>
            <h2>Contact us</h2>
            <h2>sitemap</h2>
            <h2>store</h2>
          </div>
          <div className="flex flex-col">
            <h1 className=" font-bold mb-5">JOIN OUR NEWSLETTER NOW</h1>
            <div className="flex gap-5 mb-5">
              <input
                type="email"
                id="email"
                className="text-black w-full border rounded-md py-2 px-3 focus:outline-none focus:border-gray-600"
                placeholder="Enter your email"
              />
              <button className="bg-black w-12  rounded font-bold">GO</button>
            </div>
            <h2>Get E-mail updates about our latest offers</h2>
            <div className="flex mt-2 gap-5 text-3xl hover:cursor-pointer">
              <i className="fab fa-facebook-f" />
              <i className="fab fa-twitter" />
              <i className="fab fa-instagram" />
              <i className="fab fa-whatsapp" />
              <i className="fab fa-viber" />
            </div>
          </div>
        </div>
        <footer className="h-20 bg-black text-white font-bold flex items-center justify-center">
          All Right Reserved
        </footer>
      </div>
    );
  }
}

export default Footer;
