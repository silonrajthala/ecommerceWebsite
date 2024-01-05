import React, { Component } from "react";
import Item from "./Item";

class NewArrivals extends Component {
  render() {
    return (
      <div className="py-20">
        <h1 className="flex justify-center font-bold text-4xl">New Arrivals</h1>
        <div className="py-10 px-20 flex flex-row overflow-y-auto ">
          <Item
            tag="New"
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81yIVXQY2vL._AC_UY1100_.jpg"
            title="Scaff"
            price="400"
          />
           <Item
            tag="New"
            image="https://static-01.daraz.com.np/p/cd826b467f98bfafcf37f42e404d1938.jpg_750x750.jpg_.webp"
            title="Jeens"
            price="1400"
          />
           <Item
            tag="New"
            image="https://mazzakoshopping.com.np/uploads/product/images/w/w/n/medium-LTB%20OT51YcH1.jpg"
            title="Jeens"
            price="1200"
          />
           <Item
            tag="New"
            image="https://www.jiomart.com/images/product/original/rv0ev88hrd/urban-lens-latest-sunglasses-for-men-100-uv-protection-branded-sunglass-with-luxury-case-box-s_b80-390-product-images-rv0ev88hrd-0-202306151217.jpg"
            title="Urban lens"
            price="500"
          />
           <Item
            tag="New"
            image="https://www.maayus.com/wp-content/uploads/2023/07/Black-Football-print-Sneaker.jpg"
            title="Kids Shoes"
            price="700"
          />
           <Item
            tag="New"
            image="https://www.jonssonworkwear.com/images/thumbs/0002665_mens-long-sleeve-shirt_1024.jpeg"
            title="Shirt"
            price="900"
          />
        </div>
      </div>
    );
  }
}

export default NewArrivals;
