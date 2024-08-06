import Image from "next/image";

function CartModal() {
  const cartItems = false;
  return (
    <div className="w-max absolute p-4 shadow-[0_3px_10px_rgb(0,0,0,0.8)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {cartItems ? (
        <p>No Items</p>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* ITEM 1  */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/26748010/pexels-photo-26748010/free-photo-of-a-white-and-blue-living-room-with-a-large-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={72}
                height={96}
                className="rounded-md object-cover"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP  */}
                <div className="">
                  {/* TITLE  */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$43</div>
                  </div>
                  {/* DESC   */}
                  <div className="text-sm text-gray-500">Available</div>
                </div>
                {/* BOTTOM  */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500 cursor-pointer">remove</span>
                </div>
              </div>
            </div>

            {/* ITEM 2 */}
          </div>
          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$50</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4 line-clamp-1">
              Shipping and taxes calculates at checkout
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                View Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartModal;
