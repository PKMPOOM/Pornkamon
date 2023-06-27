import Experiences from "@/components/Experiences";
import Details from "@/components/Details";
import "./globals.css";

export default function Home() {
  return (
    <div className=" flex  gap-6 justify-center">
      <div className="flex flex-col lg:flex-row gap-10 justify-center w-full max-w-7xl px-6 pt-20  ">
        {/* left navbar */}
        <Details />
        {/* detail experiences */}
        <Experiences />
      </div>
    </div>
  );
}
