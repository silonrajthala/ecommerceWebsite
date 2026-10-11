import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function getFavorites() {
  try {
    const data = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default function Favorites() {
  const [favorites, setFavorites] = useState(getFavorites);

  useEffect(() => {
    const refresh = () => setFavorites(getFavorites());

    window.addEventListener("favoritesUpdated", refresh);
    window.addEventListener("storage", refresh);

    return () => {
      window.removeEventListener("favoritesUpdated", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  function removeFavorite(id) {
    const updated = favorites.filter(
      (item) => item.id !== id
    );

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );

    setFavorites(updated);
    window.dispatchEvent(new Event("favoritesUpdated"));
  }

  return (
    <main className="mx-auto max-w-6xl px-5 pb-12 pt-40">
      <h1 className="mb-8 text-3xl font-bold">
        My Favorites ❤️
      </h1>

      {favorites.length === 0 ? (
        <div className="rounded-xl border p-8 text-center">
          <p className="mb-4 text-gray-500">
            You haven't added any favorites yet.
          </p>

          <Link
            to="/shop"
            className="inline-block rounded-lg bg-yellow-500 px-6 py-3 font-bold text-white hover:bg-yellow-600"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {favorites.map((product) => (
            <div
              key={product.id}
              className="rounded-xl border p-4 shadow-md"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-full object-contain"
              />

              <h2 className="mt-3 text-lg font-bold">
                {product.title}
              </h2>

              <p className="mt-2 font-semibold text-yellow-600">
                Rs. {product.price}
              </p>

              {product.description && (
                <p className="mt-2 text-sm text-gray-600">
                  {product.description}
                </p>
              )}

              <button
                onClick={() => removeFavorite(product.id)}
                className="mt-4 w-full rounded-lg border border-red-500 px-4 py-2 text-red-600 hover:bg-red-50"
              >
                ❤️ Remove Favorite
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}