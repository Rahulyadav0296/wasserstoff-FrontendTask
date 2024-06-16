import Image from "next/image";
import start from "../app/assets/Starts.png";

function Advertisement() {
  return (
    <div className="absolute w-[1024px] h-[91px] left-[350px] top-0 rotate-90">
      {/* Rectangle container */}
      <div className="absolute w-[1460px] h-[91px] left-[91px] top-0 bg-[#B9A0FF]">
        {/* Text content */}
        <div className="absolute w-[70.89px] h-[56.28px] top-[30px] left-[370px] flex flex-row text-black gap-[30px] font-bold text-[24px] whitespace-nowrap animate-move-textFour">
          {/* Event details */}
          Event: Oasis Bus tour, JLN Stadium, Delhi
          {/* Star icon */}
          <Image
            src={start}
            alt="Star"
            width={38}
            height={38}
            className=" w-10 h-10"
          />
          {/* Collection Live details */}
          Collection Live: Meta Lives, live on Astrix
        </div>
      </div>
    </div>
  );
}

export default Advertisement;
