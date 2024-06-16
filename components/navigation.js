"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathname = usePathname();

  return (
    <div className="absolute w-[330.46px] h-[52.71px] left-[39px] top-[919px]">
      <div className="absolute left-[49.93%] right-[5.28%] top-0 bottom-[-0.55%]">
        {/* Link to Events page */}
        <button
          className={`absolute left-[-1.24%] right-[51.75%] top-0 bottom-0 rounded-[100px] ${
            pathname === "/front" ? "bg-[#484E56]" : ""
          }`}
        >
          <Link href="/front">Events</Link>
        </button>
        {/* Link to Collections page */}
        <button
          className={`absolute left-[49.93%] right-[-40px] top-0 bottom-0  rounded-[100px] ${
            pathname === "/collections" ? "bg-[#484E56]" : ""
          }`}
        >
          <Link href="/collections">Collections</Link>
        </button>
      </div>
    </div>
  );
}

export default Navigation;
