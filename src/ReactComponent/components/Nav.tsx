import {
  HomeIcon,
  UpdateIcon,
  DictionaryIcon,
  CliIcon,
  AboutIcon,
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
  return (
    <nav className="w-full border-b-[1.5px] border-slate-200 h-[50px]">
      <ul className="flex gap-16 w-full justify-center items-center h-full flex-wrap">
        {navData &&
          navData.map((section) => (
            <li className="active-section flex gap-2 justify-center items-center h-full">
              {section.icon}
              <a
                href={section.path}
                className="font-medium text-slate-600 italic w-fit"
              >
                {section.sectionName}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
}
