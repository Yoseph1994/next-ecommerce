import React from "react";

function CustomizeProducts() {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a color</h4>
      <ul className="font-medium flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-1 cursor-pointer ring-gray-300 relative bg-red-400">
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
        <li className="w-8 h-8 rounded-full cursor-pointer ring-1 ring-gray-300 relative bg-blue-400"></li>
        <li className="w-8 h-8 rounded-full ring-1 cursor-not-allowed ring-gray-300 relative bg-green-400 line-through">
          <div className="absolute w-10 h-[2px] bg-red-700 rotate-45 rounded-full  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
      </ul>
      <h4 className="font-medium">Choose a size</h4>
      <ul className="font-medium flex items-center gap-3">
        <li className="ring-1 ring-main text-main rounded-md py-1 px-4 text-sm cursor-pointer">
          Small
        </li>
        <li className="ring-1 ring-main text-white bg-main rounded-md py-1 px-4 text-sm cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
          Large
        </li>
      </ul>
    </div>
  );
}

export default CustomizeProducts;
