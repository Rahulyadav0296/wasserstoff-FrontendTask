import Image from "next/image";
import logo from "../app/assets/AstrixLogoOne.png";

function Header() {
  return (
    <>
      <header className="flex items-center p-0 absolute w-50 left-24 top-2">
        <Image src={logo} alt="Logo" width={100} height={50} />
        <p className="font-bold text-3xl ml-2">Astrixs</p>
      </header>
    </>
  );
}

export default Header;
