import Link from "next/link";
import Hamburger from "./Hamburger";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavbarIcons from "./NavbarIcons";

function Header() {
  return (
    <header className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Mobile screen  */}
      <div className="flex justify-between items-center h-full md:hidden">
        <Link href="/">
          <div className="text-xl uppercase tracking-wide">GULIT</div>
        </Link>
        <Hamburger />
      </div>

      {/* Bigger screens  */}
      <div className="hidden md:flex justify-between items-center gap-8 h-full">
        {/* Left section  */}
        <aside className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="WebSiteLogo" width={24} height={24} />
            <div className="text-2xl tracking-wide uppercase">GULIT</div>
          </Link>

          <div className="hidden xl:flex gap-4 text-lg">
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
          </div>
        </aside>

        {/* right section  */}

        <aside className="w-2/3 xl:w-1/2 flex justify-between items-center gap-8">
          <SearchBar />
          <NavbarIcons />
        </aside>
      </div>
    </header>
  );
}

export default Header;
