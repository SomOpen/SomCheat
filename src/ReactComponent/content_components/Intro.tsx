interface IntroProps {
  title: string;
  children: React.ReactNode;
}

export default function Intro({ title, children }: IntroProps ) {
  return (
    <div className="w-full p-5 border-2  bg-gray-800">
      {/* Top Bar with Label */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-md text-white bg-blue-500 px-2 py-1 rounded">
          Introduction
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-yellow-100 border-b-2 border-dashed w-fit mb-2 py-2">
        {title}
      </h3>

      {/* Description */}
      <span className="text-slate-200 mt-2 text-md leading-relaxed">{children}</span>
    </div>
  );
};