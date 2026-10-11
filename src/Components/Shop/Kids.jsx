import React from "react";
import Item from "../Item";

function Kids() {
  return (
    <div className="grid grid-cols-5 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Item
        tag="New"
        image="https://www.maayus.com/wp-content/uploads/2023/07/Black-Football-print-Sneaker.jpg"
        title="Kids Shoes"
        price="700"
        description="Casual footwear for kids. Check the fit before purchasing."
        sizes={["28", "29", "30", "31", "32", "33"]}
      />
    </div>
  );
}

export default Kids;