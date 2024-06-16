import Image from "next/image";
import connection from "../app/assets/image10.png";
import weOrgenize from "../app/assets/image11.png";
import between from "../app/assets/image12.png";
import music from "../app/assets/image13.png";
import culture from "../app/assets/image14.png";
import crowd from "../app/assets/image15.png";
import purpleFlower from "../app/assets/image8.png";
import pinkFlower from "../app/assets/image9.png";

function MainHero() {
  return (
    <>
      {/* Main Content */}
      <div className="absolute w-2/3 h-1/2 left-0 top-40">
        <div className="absolute w-28 h-11 left-56 top-0 font-bold text-6xl font-lexend leading-1 text-black">
          WE
        </div>
        {/* Image: first */}
        <div className="absolute w-96 h-16 bg-cover bg-center left-80 top-0 ml-4">
          <Image
            src={weOrgenize}
            alt="we organize the"
            width={523}
            height={349}
          />
        </div>
        <div className="w-[511px] left-[705px] animate-text-movement bg-[#FFF4DF] absolute h-16 top-0 font-bold text-black flex items-center pl-3 font-Lexend text-6xl">
          ORGANIZE THE
        </div>

        {/* CONNECTION */}
        <div className="absolute h-16 left-56 top-24 font-lexend text-6xl text-black font-bold w-[453px]">
          CONNECTION
        </div>
        <div className="absolute w-[539px] h-[74px] left-[650px] top-[100px]">
          <Image
            src={connection}
            width={590}
            height={819}
            alt="Connections Image"
          />
        </div>
        <div className="animate-move-textOne absolute w-[211px] h-[80px] left-[1205px] top-[98px] font-lexend pl-[10px] pt-[5px] font-medium text-[64px] leading-[44px] bg-[#FFF4DF] whitespace-nowrap "></div>

        <div className="absolute w-[341px] h-[74px] left-[220px] top-[200px]">
          <Image src={between} alt="Between" width={482} height={601} />
        </div>

        {/* Between Text */}
        <div className="animate-move-text">
          <div className="left-[550px] top-[200px] bg-[#FFF4DF] absolute pl-3 w-80 h-20 font-lexend font-bold text-6xl text-black">
            BETWEEN
          </div>
          <div className="absolute w-[167px] h-[74px] left-[880px] top-[200px]">
            <Image src={music} alt="music" width={286} height={431} />
          </div>
          <div className="absolute pl-3 w-56 h-20 font-lexend font-bold text-6xl text-black left-[1050px] top-[200px]">
            MUSIC
          </div>
        </div>
        <div className="absolute w-60 h-11 left-56 font-Lexend font-bold text-6xl text-black top-[320px] ">
          ARTIST
        </div>
        <div className="absolute w-[299px] h-[60px] left-[464px] top-[324px]">
          <Image src={crowd} alt="The Crowd" width={331} height={363} />
        </div>
        <div className="animate-move-textTwo">
          <div className="left-[650px] top-[320px] bg-[#FFF4DF] absolute pl-3 w-72 h-20 font-Lexend font-bold text-6xl text-black ">
            CULTURE
          </div>
          <div className="absolute w-[307px] h-[74px] left-[946px] top-[324px]">
            <Image src={culture} alt="the Culture" width={564} height={372} />
          </div>
        </div>
        <div className="font-lexend absolute w-[100px] h-[80px] left-[1255px] pl-[10px] pt-[5px] top-[320px] font-lexend font-medium text-[64px] whitespace-nowrap leading-[44px] bg-[#FFF4DF]"></div>
        <div className="absolute w-[227px] h-[74px] left-[220px] top-[438px]">
          <Image
            src={pinkFlower}
            alt="the pink flower"
            width={414}
            height={654}
          />
        </div>

        <div className="animate-move-textThree">
          <div className="bg-[#FFF4DF] absolute w-32 h-20 pl-3 left-[457px] top-[438px] font-Lexend font-bold text-6xl text-black">
            ART
          </div>
          <div className="pl-[10px] absolute w-[151px] h-[74px] left-[592px] top-[433px]">
            <Image
              src={purpleFlower}
              alt="The Purple Flower"
              width={288}
              height={288}
            />
          </div>
          <div className="w-[535px] left-[769px] top-[427px] absolute h-20 font-Lexend font-bold text-6xl text-black">
            & COLLECTIONS
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHero;
