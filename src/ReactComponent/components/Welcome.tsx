import { useState, useEffect } from "react";
import '../../styles/global.css';
import {
  SmileIcon,
  SmileBeamIcon,
  WinkFaceIcon,
  GithubIcon,
  DocsIcon,
} from "../icons/Icon";

const welcome_messages: Array<object> = [
  {
    icon: <SmileIcon color="#6364f1" />,
    message: 
    <>
      Ku soo dhowow  <span className="text-indigo-400">SomCheat</span>! Xasuusin degdeg ah oo koodhkaaga fududeynaya. 🚀
    </>
  },
  {
    icon: <SmileBeamIcon color="#6364f1" />,
    message: (
      <>
        Ma u baahan tahay xasuusin degdeg ah? <span className="text-indigo-400">SomCheat</span> waa diyaar! 💡
      </>
    ),
  },
  {
    icon: <WinkFaceIcon color="#6364f1" />,
    message: "Koodhkaaga fududee oo xasuuso waxa muhiimka ah! ⚡",
  },
];

export default function Welcome() {
  const [state, setState] = useState<any>(welcome_messages[0]);

  let counter = 0;
  useEffect(() => {
    let interval = setInterval(() => {
      counter++;
      if (counter === 3) counter = 0;
      setState(welcome_messages[counter]);
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [counter]);
  const { icon, message } = state;
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-3">
      {state ? (
        <div className="flex gap-2 items-center justify-center flex-wrap">
          <span>{icon}</span>
          <p
            className="roboto italic font-bold text-center text-slate-700 text-[1.2rem]"
          >
            {message}
          </p>
        </div>
      ) : null}
      <div className="flex gap-3">
        <button className="cursor-pointer flex gap-2 items-center border-2 border-slate-500 p-2 rounded-md bg-[#111122e5]">
          <span className="font-semibold text-slate-200 hover:text-blue-300">Contribute</span>
          <GithubIcon color="#e2e8f0"/>
        </button>
        <button className="flex gap-2 items-center cursor-pointer border-2 border-slate-300 p-2 rounded-md bg-slate-100">
          <span className="font-semibold text-indigo-400 hover:text-blue-300">Read Docs</span>
          <DocsIcon color="oklch(0.673 0.182 276.935)"/>
        </button>
      </div>
    </div>
  );
}
