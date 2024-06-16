"use client";

import { collections, events, settings } from "@/utils/data";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import blankPage from "../app/assets/blankPage.png";

function SliderPage() {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/front" && (
        <div className="absolute left-14 top-56 h-[600px] w-[750px]">
          <Slider {...settings}>
            {events.map((image, index) => {
              // console.log(image);
              return (
                <div key={index} className="p-3">
                  <Image
                    src={image.src}
                    alt={image.name}
                    width="auto"
                    height="auto"
                    className="object-cover"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      )}
      {pathname === "/collections" && (
        <div className="absolute left-14 top-40 h-[600px] w-[750px]">
          <Slider {...settings}>
            {collections.map((image, index) => {
              return (
                <div key={index}>
                  {image.src === blankPage ? (
                    console.log("printing")
                  ) : (
                    <div className="relative w-[244px] h-[63px] left-[10px] top-[8px] font-lexend font-bold text-[22px] leading-[30px] flex items-center text-white">
                      Lunar Palace: (ft. Kanye west)
                    </div>
                  )}
                  <Image
                    src={image.src}
                    alt={image.name}
                    width={564}
                    height={705}
                    className="p-3"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      )}
    </>
  );
}

export default SliderPage;
