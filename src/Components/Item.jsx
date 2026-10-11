import React, { useState } from "react";

function Item({
  tag,
  image,
  title,
  price,
  description,
  sizes = [],
}) {
  const [selectedItem, setSelectedItem] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [message, setMessage] = useState("");

  // Close product popup
  const closePopup = () => {
    setSelectedItem(false);
    setSelectedSize("");
    setMessage("");
  };

  // Add product to cart
  const addToCart = () => {
    if (!selectedSize) {
      setMessage("Please select a size first.");
      return;
    }

    try {
      const savedCart = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );

      const cart = Array.isArray(savedCart) ? savedCart : [];

      const existingItem = cart.find(
        (item) =>
          item.title === title && item.size === selectedSize
      );

      let updatedCart;

      if (existingItem) {
        updatedCart = cart.map((item) =>
          item.title === title && item.size === selectedSize
            ? {
                ...item,
                quantity: (Number(item.quantity) || 1) + 1,
              }
            : item
        );
      } else {
        updatedCart = [
          ...cart,
          {
            title,
            price,
            image,
            description,
            size: selectedSize,
            quantity: 1,
          },
        ];
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );

      window.dispatchEvent(new Event("cartUpdated"));

      // Close popup after adding to cart
      closePopup();
    } catch {
      setMessage("Could not save the cart. Please try again.");
    }
  };

  // Add product to favorites without duplicates
  const addToFavorites = () => {
    try {
      const savedFavorites = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );

      const favorites = Array.isArray(savedFavorites)
        ? savedFavorites
        : [];

      const alreadyExists = favorites.some((item) => {
        const favoriteTitle =
          typeof item === "object" && item !== null
            ? item.title
            : item;

        return favoriteTitle === title;
      });

      if (alreadyExists) {
        setMessage(
          "❤️ This product is already in your favorites!"
        );
        return;
      }

      favorites.push({
        id: title,
        title,
        price,
        image,
        description,
        sizes,
        tag,
      });

      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
      );

      window.dispatchEvent(new Event("favoritesUpdated"));

      setMessage("❤️ Added to Favorites!");
    } catch {
      setMessage(
        "Could not save favorites. Please try again."
      );
    }
  };

  return (
    <>
      {/* Product Card */}
      <div className="p-4 sm:p-6">
        <div
          onClick={() => {
            setSelectedItem(true);
            setSelectedSize("");
            setMessage("");
          }}
          className="h-80 w-60 rounded border-2 border-black bg-white shadow-2xl transition hover:cursor-pointer hover:border-yellow-500"
        >
          <div className="h-10 p-2">
            {tag && (
              <span className="rounded-md bg-yellow-500 px-2 py-1 text-white">
                {tag}
              </span>
            )}
          </div>

          <img
            className="h-48 w-full object-contain px-5"
            src={image}
            alt={title}
          />

          <h2 className="mb-2 flex justify-center text-center text-2xl font-bold">
            {title}
          </h2>

          <p className="flex justify-center font-bold">
            Rs. {price}
          </p>
        </div>
      </div>

      {/* Product Details Popup */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={closePopup}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute right-4 top-2 text-3xl"
              aria-label="Close popup"
            >
              &times;
            </button>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Product Image */}
              <img
                src={image}
                alt={title}
                className="h-72 w-full object-contain"
              />

              {/* Product Information */}
              <div>
                {tag && (
                  <span className="rounded bg-yellow-500 px-3 py-1 text-sm text-white">
                    {tag}
                  </span>
                )}

                <h2 className="mt-4 text-3xl font-bold">
                  {title}
                </h2>

                <p className="mt-3 text-2xl font-bold text-yellow-600">
                  Rs. {price}
                </p>

                {/* Description */}
                <h3 className="mt-5 font-semibold">
                  Product Description
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  {description || "No description available."}
                </p>

                {/* Available Sizes */}
                <h3 className="mt-5 font-semibold">
                  Available Sizes
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size);
                        setMessage("");
                      }}
                      className={`rounded border px-4 py-2 ${
                        selectedSize === size
                          ? "border-yellow-500 bg-yellow-500 text-white"
                          : "border-gray-300 hover:border-yellow-500"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Feedback Message */}
                {message && (
                  <p
                    role="status"
                    className={`mt-3 text-sm ${
                      message.startsWith("❤️ Added")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {message}
                  </p>
                )}

                {/* Cart and Favorites Buttons */}
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={addToCart}
                    className="flex-1 rounded-lg bg-yellow-500 px-3 py-3 font-bold text-white hover:bg-yellow-600"
                  >
                    Add to Cart
                  </button>

                  <button
                    onClick={addToFavorites}
                    className="flex-1 rounded-lg border-2 border-red-500 px-3 py-3 font-bold text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    ❤️ Add to Favorites
                  </button>
                </div>

                {/* Continue Shopping */}
                <button
                  onClick={closePopup}
                  className="mt-3 w-full rounded-lg border border-gray-300 px-5 py-3 hover:bg-gray-100"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Item;