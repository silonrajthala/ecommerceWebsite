import React, { useEffect, useState } from "react";

function getCart() {
  try {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default function Cart() {
  const [cart, setCart] = useState(getCart);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  useEffect(() => {
    const refresh = () => setCart(getCart());

    window.addEventListener("cartUpdated", refresh);
    window.addEventListener("storage", refresh);

    return () => {
      window.removeEventListener("cartUpdated", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  function saveCart(updated) {
    localStorage.setItem("cart", JSON.stringify(updated));
    setCart(updated);
    window.dispatchEvent(new Event("cartUpdated"));
  }

  function changeQuantity(index, amount) {
    const updated = cart
      .map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: (Number(item.quantity) || 1) + amount,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    saveCart(updated);
  }

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * Number(item.quantity || 1),
    0
  );

  function applyCoupon() {
    if (coupon.trim().toUpperCase() === "COUPON") {
      if (total < 200) {
        setDiscount(0);
        setCouponMessage("Your cart total must be at least Rs. 200.");
        return;
      }

      setDiscount(200);
      setCouponMessage("Coupon applied! You saved Rs. 200.");
    } else {
      setDiscount(0);
      setCouponMessage("Invalid coupon code.");
    }
  }

  const finalTotal = Math.max(0, total - discount);

  return (
    <main className="mx-auto max-w-5xl px-5 pb-12 pt-40">
      <h1 className="mb-8 text-3xl font-bold">
        My Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="rounded-xl border p-10 text-center">
          <p className="mb-4 text-gray-500">
            Your cart is empty.
          </p>

          <a
            href="/shop"
            className="inline-block rounded-lg bg-yellow-500 px-6 py-3 font-bold text-white"
          >
            Continue Shopping
          </a>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={`${item.id || item.title}-${item.size}-${index}`}
                className="flex flex-wrap items-center gap-4 rounded-xl border p-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-24 w-24 object-contain"
                />

                <div className="min-w-0 flex-1">
                  <h2 className="font-bold">{item.title}</h2>

                  <p>Size: {item.size}</p>

                  <p>Rs. {item.price}</p>

                  <p className="text-sm text-gray-500">
                    Subtotal: Rs.{" "}
                    {Number(item.price) *
                      Number(item.quantity || 1)}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    className="rounded border px-3 py-1"
                    onClick={() => changeQuantity(index, -1)}
                  >
                    −
                  </button>

                  <span>{item.quantity || 1}</span>

                  <button
                    className="rounded border px-3 py-1"
                    onClick={() => changeQuantity(index, 1)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="text-red-600"
                  onClick={() =>
                    saveCart(cart.filter((_, i) => i !== index))
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Coupon Section */}
          <div className="mt-8 rounded-xl border p-5">
            <h2 className="mb-3 text-lg font-bold">
              Apply Coupon
            </h2>

            <div className="flex flex-wrap gap-3">
              <input
                type="text"
                value={coupon}
                onChange={(e) => {
                  setCoupon(e.target.value);
                  setCouponMessage("");
                  setDiscount(0);
                }}
                placeholder="Enter 'COUPN' code for testing"
                className="min-w-0 flex-1 rounded-lg border px-4 py-3 outline-none focus:border-yellow-500"
              />

              <button
                onClick={applyCoupon}
                className="rounded-lg bg-gray-900 px-6 py-3 font-bold text-white hover:bg-gray-700"
              >
                Apply Coupon
              </button>
            </div>

            {couponMessage && (
              <p
                role="status"
                className={`mt-3 text-sm ${
                  discount > 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {couponMessage}
              </p>
            )}
          </div>

          {/* Order Total */}
          <div className="mt-8 text-right">
            <p className="text-lg text-gray-600">
              Subtotal: Rs. {total.toLocaleString()}
            </p>

            {discount > 0 && (
              <p className="mt-2 text-lg font-semibold text-green-600">
                Coupon Discount: - Rs. {discount.toLocaleString()}
              </p>
            )}

            <div className="mt-3 border-t pt-4">
              <h2 className="text-2xl font-bold">
                Total: Rs. {finalTotal.toLocaleString()}
              </h2>
            </div>

            <button
              onClick={() =>
                alert("Connect your checkout and payment system here.")
              }
              className="mt-4 rounded-lg bg-yellow-500 px-8 py-3 font-bold text-white hover:bg-yellow-600"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </main>
  );
}