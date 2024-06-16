"use client";
import { usePathname } from "next/navigation";

// Ensures this file is treated as a client-side component

function FileContent() {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/collections" && (
        <div className="absolute w-96 left-9 top-40 flex items-center font-lexend font-bold text-white text-opacity-20 text-9xl">
          ASTR
          <br /> IX
          <br />
          <br />
          COLL <br />
          ECTI <br />
          BLE
        </div>
      )}
      {pathname === "/front" && (
        <div className="absolute w-96 text-9xl left-9 top-40 flex items-center font-lexend font-bold text-white text-opacity-20">
          ASTR <br /> IX <br /> <br /> EVE <br /> NTS
        </div>
      )}
    </>
  );
}

export default FileContent;
