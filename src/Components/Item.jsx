import React from "react";

function Item({ tag, image, title, price }) {
  return (
    <div className=" p-10"> <div className=" h-80 w-60 bg-whitesmoke shadow-2xl rounded border-2 border-black hover:border-yellow-500 hover:cursor-pointer">
    <div className="p-2 w-max">
      <h1 className="py-1 px-2 rounded-md bg-yellow-500 text-white">{tag}</h1>
    </div>
    <img className="px-5 h-48" src={image} alt=""></img>
    <h1 className="flex justify-center font-bold text-2xl mb-2"> {title}</h1>
    <p className="flex justify-center font-bold ">RS:{price}</p>
  </div></div>
   
  );
}
export default Item;
