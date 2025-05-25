import { FireIcon } from "../icons/Other_Icons";
const About = () => {
  return (
    <main className="hero dark:bg-[#111122] flex flex-col items-center justify-center p-8 bg-gray-50">
      <div className="relative dark:border-slate-800 dark:bg-slate-900/95 w-[900px] pt-16 max-w-full bg-white border-2 border-slate-200 min-h-[300px] shadow-md p-4 rounded-lg">
        {/* Icon */}
        <span className="absolute top-2 left-[50%] dark:border-slate-700 border-b-2 pb-2 border-slate-200">
          {<FireIcon dimension={34} color="oklch(0.585 0.233 277.117)" />}
        </span>
        {/* Header */}
        <h1 className="dark:text-slate-300 text-2xl sm:text-4xl font-bold text-slate-600 mb-6 text-center">
          SomCheat - Xasuusin Degdeg Ah
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-500 w-full mb-8 leading-relaxed italic">
          <span className="font-bold text-indigo-400">SomCheat</span> waa
          mashruuc loogu talagalay in lagu xasuusto waxyaabaha aasaasiga ah ee
          tiknoolajiyada, sida luuqadaha programming-ka(habka code-ka lo qoro iyo maclumaadka muhiimka ah ee ka caawinaya inaad programming-ka fahanto). Waxa mashruucan sameeyey{" "}
          <a href="https://github.com/Adam-Elmi" className="dark:text-slate-300 underline font-bold text-slate-500 hover:text-blue-300">Adam Elmi</a> si uu u
          fududeeyo barashada iyo horumarka tiknoolajiyada.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center items-center flex-wrap w-full">
          <a href="/cheatsheets">
            <button className="cursor-pointer shadow-md px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700">
              View Cheat Sheets
            </button>
          </a>
          <a href="https://github.com/Adam-Elmi/SomCheat">
            <button className="cursor-pointer shadow-md px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white">
              Contribute
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default About;
