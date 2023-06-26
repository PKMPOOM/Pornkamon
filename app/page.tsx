import Experiences from "@/components/Experiences";
import Details from "@/components/Details";

export default function Home() {
  return (
    <div className=" flex gap-6 justify-center ">
      <div className="flex gap-10 justify-center w-full max-w-7xl px-6 pt-20 ">
        {/* left navbar */}
        <Details />
        {/* detail experiences */}
        <Experiences />
      </div>
    </div>
  );
}
