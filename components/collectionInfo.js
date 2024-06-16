"use client";
import { peoples } from "@/utils/data";
import Image from "next/image";
import CardSection from "./Card/cartSetion";

function CollectionInfo() {
  return (
    <>
      <div
        className="absolute w-80 h-16 top-14 font-bold text-white text-2xl leading-32"
        style={{ left: "992px" }}
      >
        {" "}
        Explore Your First Collectible
      </div>
      {/* Collection information */}
      <div className="absolute w-96 h-96 top-0" style={{ left: "992px" }}>
        <div className="absolute flex flex-col items-start p-0 gap-8 top-40 w-96 h-376 left-0 top-168">
          <div className=" flex flex-col items-start p-0 gap-12 w-316 h-302 flex-none order-0 flex-grow-0">
            {/* Text: Meta Lives */}
            <div className="absolute w-18 h-9 left-6.16 top-0.56 font-bold text-5xl leading-8 text-white flex-none order-0 flex-grow-0 ">
              Meta
              <br /> <br />
              Lives
            </div>
            {/* Text: Live in Astrix */}
            <div className="absolute w-255 h-32 font-bold text-lg leading-8 top-28 text-white flex-none order-1 flex-grow-0">
              Live in Astrix
            </div>
            {/* Description */}
            <div className="absolute w-64 h-104 font-lexend font-semibold top-40 text-white text-base leading-6 tracking-tighter flex-none order-2 flex-grow-0">
              Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et
              sed ipsum. Pellentesque mattis condimentum ut nulla.
            </div>
          </div>
          <div className=" w-96 h-11 flex-none order-1 flex-grow-0">
            {/* Colored circles */}
            <div className="absolute w-150 h-40 left-0 top-64 flex flex-row items-center">
              {peoples.map((people, index) => {
                return (
                  <Image
                    key={index}
                    src={people.src}
                    alt={people.name}
                    width={40}
                    height={40}
                  />
                );
              })}
            </div>
            {/* Text: 22k people interested */}
            <div className="absolute ml-2 w-212 h-44 left-48 top-80 font-lexend font-medium text-white text-lg leading-44">
              22k people interested
            </div>
            {/* Text: Collectibles */}
            <div className="relative h-20 top-96 font-lexend font-medium text-white text-base leading-18">
              {" "}
              Collectibles
            </div>
          </div>
        </div>
        {/* Card section */}
        <CardSection />
      </div>
    </>
  );
}

export default CollectionInfo;
