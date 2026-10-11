import React from "react";
import Item from "../Item";

function Shoes() {
  return (
    <div className="grid grid-cols-5 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Item
        title="Jordan"
        price="5000"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvc9DM0mzlA21xloQ4Z6e7SNzwpUqUfYWcKW8liEJSr1Ma2fEBYaqiPfvZHwhNikdQpUk&usqp=CAU"
        tag="New"
        sizes={["40", "41", "42", "43", "44"]}
        description="Sport-inspired footwear for casual outfits and streetwear."
      />

      <Item
        title="Jordan 1"
        price="4000"
        image="https://classic.cdn.media.amplience.net/i/hibbett/F5080_1115_right?w=300&h=300&img404=404&v=1"
        sizes={["40", "41", "42", "43", "44"]}
        description="Classic sneaker style for everyday streetwear."
      />

      <Item
        title="Kids Shoes"
        price="700"
        image="https://www.maayus.com/wp-content/uploads/2023/07/Black-Football-print-Sneaker.jpg"
        tag="New"
        sizes={["28", "29", "30", "31", "32", "33"]}
        description="Casual footwear for kids. Check the fit before purchasing."
      />

      <Item
        title="Sneakers"
        price="2250"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEwG_kyVs4HYobADFwpPABBl4BYN8fyQVgX3P64OyJXb2EyLiXs11y0egsVPgmYemOyR4&usqp=CAU"
        sizes={["39", "40", "41", "42", "43", "44"]}
        description="Everyday sneakers for casual outfits and walking."
      />

      <Item
        title="Adivon"
        price="3500"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4cp5T4eoXRFTWySDWbAgLBr99PU3FG67lNQ&s"
        tag="New"
        sizes={["40", "41", "42", "43", "44"]}
        description="Sport-inspired footwear for casual wear."
      />
    </div>
  );
}

export default Shoes;