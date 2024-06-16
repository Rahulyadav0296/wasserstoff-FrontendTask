import Image from "next/image";
import Astrix from "../app/assets/AstrixLogo.png";
import logo from "../app/assets/logo.png";

function HeaderSecond() {
  return (
    <header className="flex flex-row items-center p-0 absolute w-40 h-16 left-20 top-5">
      <Image src={Astrix} alt="Logo" width={60} height={60} />
      <Image src={logo} alt="Logo" width={163} height={64} />
    </header>
  );
}

export default HeaderSecond;
