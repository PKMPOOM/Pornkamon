import Nav from "./Nav";

function Details() {
  return (
    <div className=" top-20 w-full self-start lg:sticky lg:w-2/5">
      <div className="magicpattern fixed lg:absolute " />

      <div className=" text-4xl font-normal tracking-tight text-slate-800 sm:text-5xl ">
        PORNKAMON
      </div>
      <div className=" text-4xl font-semibold tracking-tight text-slate-800 sm:text-5xl">
        KOTEMUL
      </div>
      <div className=" mt-6 text-sm text-slate-600">
        Self taught developer & UXUI designer
      </div>
      <div className=" mt-6 flex flex-col gap-2">
        <span className=" text-lg font-semibold">EDUCATION</span>

        <div className=" text-sm text-slate-600">
          <span className=" font-semibold">CREATIVE-PHOTOGRAPHY</span>
          <br />
          Faculty of Fine Arts Chiang Mai University 2013-2017
        </div>
        <div className=" text-sm text-slate-600">
          <span className=" font-semibold">ART- MATH </span>
          <br />
          Sansai Withayakom school 2006-2012
        </div>
      </div>
      <Nav />
    </div>
  );
}

export default Details;
