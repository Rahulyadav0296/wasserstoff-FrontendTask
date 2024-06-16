import Header from "@/components/header";
import MainHero from "@/components/mainHero";
import Link from "next/link";

function Home() {
  return (
    <main className="bg-[#FFF4DF] min-h-screen relative">
      <Link href="/front">
        <Header />
        <MainHero />
      </Link>
    </main>
  );
}

export default Home;
