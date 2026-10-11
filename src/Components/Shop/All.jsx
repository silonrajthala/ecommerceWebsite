import React from "react";
import Item from "../Item";

const products = [
  {
    title: "Hoody",
    price: 1200,
    image:
      "https://m.media-amazon.com/images/I/B1FGy+bPeZS._AC_CLa%7C2140%2C2000%7C61p%2BfGuikuL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY1000_.png",
    tag: "New",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Soft and comfortable hoodie for everyday wear and cool weather.",
  },
  {
    title: "Sweatshirt",
    price: 1000,
    image:
      "https://assets.wordans.co.uk/files/model_specifications/2016/6/17/282835/282835_big.jpg?1733492520",
    tag: "New",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Stylish sweatshirt for casual outings and daily comfort.",
  },
  {
    title: "Jacket",
    price: 2500,
    image:
      "https://cafe24img.poxo.com/notahumanbeing/web/product/big/201810/4c3de1144a57969e2525159cec5010f9.jpg",
    sizes: ["M", "L", "XL", "XXL"],
    description: "Fashionable jacket for cool weather and outdoor wear.",
  },
  {
    title: "Thermal Wear",
    price: 2000,
    image:
      "https://i0.wp.com/pessosafety.eu/wp-content/uploads/2019/08/Thermo.undewear_001_MERINO80.png?fit=900%2C900&ssl=1",
    tag: "New",
    sizes: ["S", "M", "L", "XL"],
    description: "Thermal wear for an extra layer of warmth during winter.",
  },
  {
    title: "Tracksuits",
    price: 2200,
    image:
      "https://static-01.daraz.com.np/p/0277bbc691fb529fe8d4978d608a89cb.jpg_300x0q75.webp",
    tag: "New",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Comfortable tracksuit for sports, exercise, and casual wear.",
  },
  {
    title: "Dress",
    price: 1500,
    image:
      "https://img.freepik.com/premium-vector/female-fashion-dress-isolated-icon-design_25030-13126.jpg",
    tag: "New",
    sizes: ["S", "M", "L", "XL"],
    description: "Stylish dress for casual occasions and everyday fashion.",
  },
  {
    title: "Jordan",
    price: 5000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvc9DM0mzlA21xloQ4Z6e7SNzwpUqUfYWcKW8liEJSr1Ma2fEBYaqiPfvZHwhNikdQpUk&usqp=CAU",
    tag: "New",
    sizes: ["40", "41", "42", "43", "44"],
    description: "Sport-inspired footwear for casual outfits and streetwear.",
  },
  {
    title: "Jordan 1",
    price: 4000,
    image:
      "https://classic.cdn.media.amplience.net/i/hibbett/F5080_1115_right?w=300&h=300&img404=404&v=1",
    sizes: ["40", "41", "42", "43", "44"],
    description: "Classic sneaker style for everyday streetwear.",
  },
  {
    title: "Scaff",
    price: 400,
    image: "https://m.media-amazon.com/images/I/81yIVXQY2vL._AC_UY1100_.jpg",
    tag: "New",
    sizes: ["S", "M", "L", "XL"],
    description: "A versatile fashion item for everyday styling.",
  },
  {
    title: "Jeens",
    price: 1400,
    image:
      "https://static-01.daraz.com.np/p/cd826b467f98bfafcf37f42e404d1938.jpg_750x750.jpg_.webp",
    tag: "New",
    sizes: ["28", "30", "32", "34", "36"],
    description: "Casual denim jeans for daily wear and versatile styling.",
  },
  {
    title: "Jeens",
    price: 1200,
    image:
      "https://mazzakoshopping.com.np/uploads/product/images/w/w/n/medium-LTB%20OT51YcH1.jpg",
    tag: "New",
    sizes: ["28", "30", "32", "34", "36"],
    description: "Everyday jeans that pair well with shirts and T-shirts.",
  },
  {
    title: "Urban lens",
    price: 500,
    image:
      "https://www.jiomart.com/images/product/original/rv0ev88hrd/urban-lens-latest-sunglasses-for-men-100-uv-protection-branded-sunglass-with-luxury-case-box-s_b80-390-product-images-rv0ev88hrd-0-202306151217.jpg",
    tag: "New",
    sizes: ["One Size"],
    description:
      "Stylish sunglasses. Check the product label for UV protection details.",
  },
  {
    title: "Kids Shoes",
    price: 700,
    image:
      "https://www.maayus.com/wp-content/uploads/2023/07/Black-Football-print-Sneaker.jpg",
    tag: "New",
    sizes: ["28", "29", "30", "31", "32", "33"],
    description: "Casual footwear for kids. Check the fit before purchasing.",
  },
  {
    title: "Shirt",
    price: 900,
    image:
      "https://images-cdn.ubuy.co.in/63400407ad052c2c656c7cd6-lelebear-stretch-anti-wrinkle-shirt-men.jpg",
    tag: "New",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Versatile shirt for everyday wear and casual outfits.",
  },
  {
    title: "Sneakers",
    price: 2250,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEwG_kyVs4HYobADFwpPABBl4BYN8fyQVgX3P64OyJXb2EyLiXs11y0egsVPgmYemOyR4&usqp=CAU",
    sizes: ["39", "40", "41", "42", "43", "44"],
    description: "Everyday sneakers for casual outfits and walking.",
  },
  {
    title: "Adivon",
    price: 3500,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4cp5T4eoXRFTWySDWbAgLBr99PU3FG67lNQ&s",
    tag: "New",
    sizes: ["40", "41", "42", "43", "44"],
    description: "Sport-inspired footwear for casual wear.",
  },
  {
    title: "Down Jacket",
    price: 4500,
    image:
      "https://makaluetraders.com/wp-content/uploads/2022/10/drak-gray-side-3-1024x1024.jpg",
    tag: "New",
    sizes: ["M", "L", "XL", "XXL"],
    description: "Warm winter jacket for comfortable cold-weather layering.",
  },
];

function All() {
  return (
    <div className="grid grid-cols-5 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product, index) => (
        <Item
          key={index}
          {...product}
        />
      ))}
    </div>
  );
}

export default All;
