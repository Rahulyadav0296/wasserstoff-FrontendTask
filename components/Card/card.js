import Image from "next/image";
import RobotGirl from "../../app/assets/image3.png";

function Card({ className }) {
  return (
    <div className={className}>
      {/* Card */}
      <div className="w-[164.08px] h-[224.56px] bg-[#B9A0FF] rounded-[8.96px] flex-none order-0 flex-grow-0">
        {/* Text: 2024 */}
        <div className="absolute w-[29.68px] h-[9.52px] left-[10.08px] top-[10.64px] bg-black rounded-[8.96px]">
          <div className="absolute w-[18px] h-[8px] left-[6.16px] top-[0.56px] font-bold text-[6.72px] leading-[8px] text-white">
            2024
          </div>
        </div>
        {/* Text: By Pablo */}
        <div className="absolute w-[40px] h-[9px] left-[120.96px] top-[10.64px] font-inter font-medium text-[7.84px] leading-[9px] text-black">
          By Pablo
        </div>
        {/* Text: Collectible Name */}
        <div className="absolute w-[94px] h-[14px] left-[35.27px] top-[29.68px] font-lexend font-medium text-[11.2px] leading-[14px] text-black">
          Collectible Name
        </div>
        {/* Image */}
        <div className="absolute w-[143.92px] h-[164.08px] left-[10.08px] top-[50.4px] bg-black border-[0.56px] border-black rounded-[8.96px]">
          <Image src={RobotGirl} alt="A Robot Girl" width={143} height={179} />
        </div>
      </div>
    </div>
  );
}

export default Card;
