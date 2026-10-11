import React from "react";
import Item from "../Item";

function Women() {
  return (
    <div className="grid grid-cols-5 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Item
        title="Thermal Wear"
        price="2000"
        image="https://i0.wp.com/pessosafety.eu/wp-content/uploads/2019/08/Thermo.undewear_001_MERINO80.png?fit=900%2C900&ssl=1"
        tag="New"
        sizes={["S", "M", "L", "XL"]}
        description="Thermal wear for an extra layer of warmth during winter."
      />

      <Item
        title="Dress"
        price="1500"
        image="https://img.freepik.com/premium-vector/female-fashion-dress-isolated-icon-design_25030-13126.jpg"
        tag="New"
        sizes={["S", "M", "L", "XL"]}
        description="Stylish dress for casual occasions and everyday fashion."
      />

      <Item
        title="Jordan 1"
        price="4000"
        image="https://classic.cdn.media.amplience.net/i/hibbett/F5080_1115_right?w=300&h=300&img404=404&v=1"
        sizes={["40", "41", "42", "43", "44"]}
        description="Classic sneaker style for everyday streetwear."
      />

      <Item
        title="Scaff"
        price="400"
        image="https://m.media-amazon.com/images/I/81yIVXQY2vL._AC_UY1100_.jpg"
        tag="New"
        sizes={["S", "M", "L", "XL"]}
        description="A versatile fashion accessory for everyday styling."
      />

      <Item
        title="Down Jacket"
        price="4500"
        image="https://makaluetraders.com/wp-content/uploads/2022/10/drak-gray-side-3-1024x1024.jpg"
        tag="New"
        sizes={["M", "L", "XL", "XXL"]}
        description="Warm winter jacket for comfortable cold-weather layering."
      />
    </div>
  );
}

export default Women;