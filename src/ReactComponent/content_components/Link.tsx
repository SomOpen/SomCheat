import { LinkIcon } from "../icons/Other_Icons";

interface LinkProps {
  title: string;
  url: string;
  description?: string;
}

const Link: React.FC<LinkProps> = ({ title, url, description }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-pointer group p-5 rounded-lg border border-gray-200 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
    >
      {/* Top Bar with Icon and Reference Label */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-[0.9rem] text-white bg-blue-500 px-2 py-1 rounded">
          Reference
        </span>
        <div className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
          <LinkIcon />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-slate-500 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      )}
    </a>
  );
};

interface IntroProps {
  title: string;
  children: React.ReactNode;
}

export const Intro: React.FC<IntroProps> = ({ title, children }) => {
  return (
    <div className="w-full p-5 border-2 border-gray-200 bg-blue-50">
      {/* Top Bar with Label */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-md text-white bg-blue-500 px-2 py-1 rounded">
          Introduction
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-slate-700 border-b-2 border-dashed w-fit mb-2 py-2">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{children}</p>
    </div>
  );
};

export default Link;