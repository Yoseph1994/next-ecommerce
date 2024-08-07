"use client";

import { useState } from "react";

function Add() {
  const [quantity, setQuantity] = useState(1);

  type Quantity = "inc" | "dec";
  const STOCK = 5;
  const QTY_UP_LIMITS = quantity === STOCK;
  const QTY_DOWN_LIMITS = quantity === 1;

  const handleQuantity = (operationType: Quantity) => {
    if (operationType === "dec" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (operationType === "inc" && quantity < STOCK) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              disabled={QTY_DOWN_LIMITS}
              className={`${
                QTY_DOWN_LIMITS ? "cursor-not-allowed" : "cursor-pointer"
              } text-xl`}
              onClick={() => handleQuantity("dec")}
            >
              -
            </button>
            {quantity}
            <button
              disabled={QTY_UP_LIMITS}
              className={`${
                QTY_UP_LIMITS ? "cursor-not-allowed" : "cursor-pointer"
              } text-xl`}
              onClick={() => handleQuantity("inc")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-red-600">4 items</span> left! <br />{" "}
            {"don't"} miss it
          </div>
        </div>
        <button className="w-36 text-sm rounded-3xl ring-1 ring-main text-main py-2 px-4 hover:bg-main hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Add;
