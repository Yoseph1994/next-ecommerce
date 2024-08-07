"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

function NavbarIcons() {
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isLoggedIn = true;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
    setIsProfileOpen(!isProfileOpen);
    setIsCartOpen(false);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      {/* profile  */}
      <Image
        src="/profile.png"
        width={22}
        height={22}
        className="cursor-pointer"
        alt="ProfileLogo"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute flex flex-col p-4 px-8 py-8 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.8)] bg-white  z-20 top-12">
          <Link href="/profile">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}

      {/* notification  */}
      <Image
        src="/notification.png"
        width={22}
        height={22}
        className="cursor-pointer"
        alt="ProfileLogo"
      />

      {/* cart  */}
      <div className="cursor-pointer relative ">
        <Image
          src="/cart.png"
          width={22}
          height={22}
          alt="ProfileLogo"
          onClick={() => {
            setIsCartOpen((prev) => !prev);
            setIsProfileOpen(false);
          }}
        />
        <p className="absolute -top-4 -right-4 w-6 h-6 bg-main text-white flex items-center justify-center text-sm rounded-full">
          2
        </p>
      </div>

      {isCartOpen && <CartModal />}
    </div>
  );
}

export default NavbarIcons;
