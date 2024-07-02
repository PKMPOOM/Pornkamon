import Experiences from "@/components/Experiences";
import Details from "@/components/Details";
import "./globals.css";

export default function Home() {
  return (
    <div className=" flex  justify-center gap-6">
      <div className=" flex w-full max-w-7xl flex-col justify-center gap-10 bg-green-50 px-6 pt-20 lg:flex-row  ">
        {/* left navbar */}
        <Details />
        {/* detail experiences */}
        <Experiences />
      </div>
    </div>
  );
}
