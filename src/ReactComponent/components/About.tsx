const About = () => {
  return (
    <main className="flex flex-col items-center justify-center p-8 bg-gray-50">
      {/* Header */}
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
        SomCheat - Xasuusin Degdeg Ah
      </h1>

      {/* Description */}
      <p className="text-lg sm:text-xl text-gray-700 text-center max-w-2xl mb-8 leading-relaxed">
        <span className="font-bold text-indigo-400">SomCheat</span> waa mashruuc muhiim ah oo loogu talagalay in lagu xasuusto
        waxyaabaha aasaasiga ah ee tiknoolajiyada ee ay developers u baahan
        yihiin. Waxaa abuuray <span className="font-bold text-cyan-500">Adam Elmi</span> si uu u fududeeyo barashada iyo
        horumarka developer-yada Soomaalida.
      </p>

      {/* Buttons */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <button className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700">
          Daawo Cheat Sheets
        </button>
        <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white">
          Ku Biir Mashruuca
        </button>
      </div>
    </main>
  );
};

export default About;
