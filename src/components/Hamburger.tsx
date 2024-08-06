"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Image
        src="/menu.png"
        alt="Hamburger-Btn"
        width={28}
        height={28}
        className="cursor-pointer "
        onClick={() => setIsOpen((prev) => !prev)}
      />

      {isOpen && (
        <div className="absolute bg-black text-white left-0 top-20 w-full flex flex-col items-center justify-center text-xl z-10 gap-8 h-[calc(100vh-80px)]">
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
}

export default Hamburger;
