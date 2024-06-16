import Image from "next/image";
import QRCode from "../app/assets/QRCode.png";
import menInPose from "../app/assets/image16.png";
import menInCode from "../app/assets/image17.png";
import menInStyle from "../app/assets/image18.png";
import time from "../app/assets/time.png";
import venue from "../app/assets/venue.png";
import Artist from "./artist";
import Button from "./button";

function EventPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        {/* Title: Explore Your First Event */}
        <h1 className="left-[958px] absolute w-72 h-16 top-14 font-lexend font-bold text-white text-2xl">
          Explore Your First Event
        </h1>
        <div className="p-20 max-w-96">
          {/* Event Name */}
          <h1 className="left-[958px] absolute w-80 h-20 top-48 font-lexend font-bold text-white text-5xl">
            Event Name
          </h1>
          {/* Venue and Date */}
          <div className="left-[962px] flex flex-row items-start gap-7 absolute w-96 h-7 left-964 top-72">
            <div className="flex flex-row items-end gap-3 w-28 h-7">
              {/* Location icon */}
              <Image src={venue} alt="location venue" width={27} height={27} />
              {/* Venue */}
              <div className="flex-none order-1 flex-grow-0 w-16 h-7 font-medium text-white text-lg leading-28">
                Venue
              </div>
            </div>
            <div className="flex flex-row items-end p-0 gap-[13px] w-[245px] h-[28px] flex-none order-1 flex-grow-0">
              {/* Clock icon */}
              <Image src={time} alt="clock" width={27} height={27} />
              {/* Date and time */}
              <div className="flex-none order-1 flex-grow-0 w-52 h-7 font-medium text-white text-lg leading-28">
                15/06/2024 @16:00
              </div>
            </div>
          </div>
          {/* Event Description */}
          <div className="left-[958px] absolute w-80 h-28 left-964 top-80 font-medium text-white text-base leading-24 tracking-wide">
            Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et
            sed ipsum. Pellentesque mattis condimentum ut nulla.
          </div>
          {/* Artist Lineup */}
          <div className="top-[470px] left-[964px] absolute w-40 h-8 font-semibold text-white text-xl leading-32">
            Artist Lineup:
          </div>
          {/* Images of artists */}
          <Artist
            className="absolute w-[145px] h-[150px] left-[951px] top-[567px] bg-[#FFFFFF] rounded-[8px]"
            src={menInPose}
            alt="Men in colored background"
            width={145}
            height={150}
          />
          <Artist
            className="absolute w-[145px] h-[150px] left-[1265px] top-[567px] bg-[#FFFFFF] rounded-[8px]"
            src={menInStyle}
            alt="Men in Style"
            width={145}
            height={145}
          />

          <Artist
            className="absolute w-[192px] h-[198px] left-[1084px] top-[543px] bg-[#FFFFFF] rounded-[8px]"
            src={menInCode}
            alt="Men in coding Background"
            width={192}
            height={198}
          />

          {/* QR code */}
          <Image
            style={{ top: "884px", left: "949px" }}
            className="absolute w-28 h-28 left-949 top-884 rounded-md"
            src={QRCode}
            alt="QR Code"
            width={105}
            height={105}
          />

          {/* Button: Join Waitlist */}
          <Button />
        </div>
      </div>
    </>
  );
}

export default EventPage;
