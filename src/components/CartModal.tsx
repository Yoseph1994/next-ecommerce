import Image from "next/image";

function CartModal() {
  const cartItems = false;
  return (
    <div className="absolute p-4 shadow-[0_3px_10px_rgb(0,0,0,0.8)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {cartItems ? (
        <p>No Items</p>
      ) : (
        <div className="">
          <Image
            src="https://images.pexels.com/photos/26748010/pexels-photo-26748010/free-photo-of-a-white-and-blue-living-room-with-a-large-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={72}
            height={96}
            className="rounded-md object-cover"
          />
          <div className="">
            {/* TOP  */}
            <div className="">
              {/* TITLE  */}
              <div className="">
                <h3>Product Name</h3>
              </div>
              {/* DESC   */}
            </div>
            {/* BOTTOM  */}
          </div>
        </div>
      )}
    </div>
  );
}

export default CartModal;
