import { useState, useEffect } from "react";
import { SmileIcon, SmileBeamIcon, WinkFaceIcon } from "../icons/Icon";

export default function Welcome() {
  const [state, setState] = useState<any>({});

  const welcome_messages: Array<object> = [
    {
      icon: <SmileIcon />,
      message: "Hello Adam",
    },
    {
      icon: <SmileBeamIcon />,
      message: "Welcome Adam",
    },
    {
      icon: <WinkFaceIcon />,
      message: "Enjoy coding",
    },
  ];
  let counter = 0;
  useEffect(() => {
    let interval = setInterval(() => {
      counter++;
      if (counter === 3) counter = 0;
      setState(welcome_messages[counter]);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const { message } = state;
  return <h1>{state ? state.icon : null}</h1>;
}
