import React from "react";
import Item from "../Item";

function Sunglass() {
  return (
    <div className="grid grid-cols-5 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Item
        title="Urban lens"
        price="500"
        image="https://www.jiomart.com/images/product/original/rv0ev88hrd/urban-lens-latest-sunglasses-for-men-100-uv-protection-branded-sunglass-with-luxury-case-box-s_b80-390-product-images-rv0ev88hrd-0-202306151217.jpg"
        tag="New"
        sizes={["One Size"]}
        description="Stylish sunglasses for everyday outfits. Check the product label for UV protection details."
      />
    </div>
  );
}

export default Sunglass;