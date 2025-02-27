import {
  WebIcon,
  CodeIcon,
  DatabaseIcon,
  GitIcon,
  OSIcon,
  DevToolsIcon,
  SheetIcon
} from "../icons/Icon";
import SearchBar from "./SearchBar";

interface Props {
  category_name: string;
  number_of_collections: number;
  icon: any;
}

const categoriesData: Array<Props> = [
  {
    category_name: "Web Development",
    number_of_collections: 15,
    icon: <WebIcon dimension={40} color="#fecb66"/>,
  },
  {
    category_name: "Programming Languages",
    number_of_collections: 4,
    icon: <CodeIcon dimension={40}  color="#6364f1"/>,
  },
  {
    category_name: "Databases",
    number_of_collections: 3,
    icon: <DatabaseIcon dimension={40} color="#fba8a8"/>,
  },
  {
    category_name: "Version Control",
    number_of_collections: 1,
    icon: <GitIcon dimension={40} />,
  },
  {
    category_name: "Operating System",
    number_of_collections: 2,
    icon: <OSIcon dimension={45}  color="#1aa5e7"/>,
  },
  {
    category_name: "DevOps & Tools",
    number_of_collections: 20,
    icon: <DevToolsIcon dimension={40} color="#aea"/>,
  },
];

export default function Categories() {
  return (
    <div className="hero min-h-[335px] h-auto">
      <div className="flex gap-5 flex-wrap p-2 justify-center items-center">
        {categoriesData.map((category, id) => (
          <div
            key={id}
            className="flex flex-col gap-3 border-2 border-indigo-400 shadow-md p-4 w-[400px] max-w-full bg-[#111122ea] rounded-md"
          >
            <div className="flex gap-3 items-center">
              {category.icon}
              <h1 className="text-[1.1rem] font-medium text-slate-500 italic">
                {category.category_name}
              </h1>
            </div>
            <span style={{fontFamily: "Nabla"}} className="text-[1rem] flex gap-2">
              <span className="text-slate-400 font-mono flex gap-2"><SheetIcon dimension={20}/> Cheatsheets:</span>{" "}
              {category.number_of_collections}
            </span>
          </div>
        ))}
      </div>
      <SearchBar />
    </div>
  );
}
