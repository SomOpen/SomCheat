import { useRef, useEffect, useState } from "react";
import { CopyIcon, LinkIcon, TickIcon } from "../icons/Other_Icons";
import { FileCodeIcon } from "../icons/lang_icons";

interface Props {
  children?: any;
  fileName?: string;
}

export default function CodeBlock({ children, fileName = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [codeText, setCodeText] = useState<string>("");
  const [icon, setIcon] = useState<React.ReactElement>(<CopyIcon color="#cad5e2" />);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    if (containerRef.current) {
      const preElement = containerRef.current.querySelector("pre");
      if (preElement) {
        setCodeText(preElement.textContent || "");
      }
    }
  }, [children]);
  /*
       ------------------
       Fallback if navigator.clipboard is not supported
       ------------------
     */
  const fallbackCopyText = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      setIsCopied(true);
    } catch (err) {
      console.error("Fallback copy failed:", err);
      setIsCopied(false);
    } finally {
      document.body.removeChild(textArea);
    }
  };

  const handleCopy = () => {
    if (!codeText) {
      console.warn("No code block found.");
      return;
    }

    /*
       ------------------
       navigator.clipboard
       ------------------
     */
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(codeText)
        .then(() => setIsCopied(true))
        .catch((err) => {
          console.error("Clipboard API failed, using fallback:", err);
          fallbackCopyText(codeText);
        });
    } else {
      fallbackCopyText(codeText);
    }
  };

  useEffect(() => {
    if (isCopied) {
      setIcon(<TickIcon color="#05df72" />);
      const timer = setTimeout(() => {
        setIcon(<CopyIcon color="#cad5e2" />);
        setIsCopied(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-full border-2 border-slate-700 shadow-md"
    >
      {/* Header */}
      <div className="w-full h-[50px] bg-gray-900 border-b border-gray-700 flex items-center p-2">
        <span className="flex items-center italic text-slate-300 gap-2 flex-1">
          <FileCodeIcon color="#62748e" dimension={20} /> {fileName}
        </span>
        <button onClick={handleCopy} className="cursor-pointer">
          {icon}
        </button>
      </div>

      {/* Code Block */}
      <div className="bg-gray-800 overflow-auto">{children}</div>
    </div>
  );
}
