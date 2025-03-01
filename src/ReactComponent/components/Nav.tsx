import { useState, useRef, useEffect } from "react";
import {
  HomeIcon,
  UpdateIcon,
  DictionaryIcon,
  CliIcon,
  AboutIcon,
  MenuIcon,
} from "../icons/Icon";

interface Props {
  sectionName: string;
  path: string;
  icon: React.ReactElement;
}

const navData: Array<Props> = [
  {
    sectionName: "Home",
    path: "/",
    icon: <HomeIcon dimension={21} color="#6364f1" />,
  },
  {
    sectionName: "Dictionary",
    path: "/dictionary",
    icon: <DictionaryIcon dimension={25} color="#fba8a8" />,
  },
  {
    sectionName: "CLI",
    path: "/cli",
    icon: <CliIcon dimension={20} color="#afe262" />,
  },
  {
    sectionName: "Updates",
    path: "/updates",
    icon: <UpdateIcon color="#1aa5e7" />,
  },
  {
    sectionName: "About",
    path: "/about",
    icon: <AboutIcon dimension={22} color="#ffcb66" />,
  },
];

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);

  function changeState() {
    setIsVisible(prev => !prev);
  }
  console.log(isVisible)
  return (
    <nav className="w-full border-b-[1.5px] border-slate-200 min-h-[50px] flex flex-col">
      <button onClick={changeState} className="min-h-[50px] hidden max-sm:flex cursor-pointer w-full border-b-2 border-slate-100 p-2">
        <MenuIcon dimension={35} />
      </button>
      <ul
      // ref={listRef}
        id="lists"
        className={`flex ${isVisible ? "" : "max-sm:hidden"} max-sm:flex-col max-sm:items-start max-sm:gap-8 max-sm:p-l[1.4rem] gap-12 w-full justify-center items-center h-full flex-wrap p-2`}
        >
        {navData &&
          navData.map((section, id) => (
            <li key={id} className="active-section flex gap-2 justify-center items-center h-full">
              {section.icon}
              <a
                href={section.path}
                className="font-medium text-slate-600 hover:text-blue-400 italic w-fit"
              >
                {section.sectionName}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
}
