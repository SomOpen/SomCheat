/*
  ------------------
  Imports
  ------------------
*/
import { useState, useEffect, useRef } from "react";
import { FileCodeIcon, CopyIcon, TickIcon, AlertIcon, WarningIcon, ErrorIcon, LinkIcon } from "../icons/Icon";

/*
  ------------------
  Interfaces
  ------------------
*/
interface Props {
    children?: any;
    fileName?: string;
}

/*
  ------------------
  Layout Component
  ------------------
*/
export function Layout({children} : Props) {
    return (
        <div className="p-4 flex gap-8 flex-wrap justify-center items-center">
            {children}
        </div>
    )
}

/*
  ------------------
  Section Component
  ------------------
*/
export function Section({children} : Props) {
    return (
        <div className="p-4 flex gap-4 border-2 border-slate-200 rounded-md w-[700px] max-w-full flex-col">
            {children}
        </div>
    )
}

/*
  ------------------
  CodeBlock Component
  ------------------
*/
export function CodeBlock({ children, fileName = '' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [codeText, setCodeText] = useState<string>('');

  useEffect(() => {
    if (containerRef.current) {
      const preElement = containerRef.current.querySelector('pre');
      if (preElement) {
        setCodeText(preElement.textContent || '');
      }
    }
  }, [children]);
{/*
  ------------------
  Fallback if navigator.clipboard is not supported
  ------------------
*/}
  const fallbackCopyText = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      alert('Code copied (fallback)!');
    } catch (err) {
      console.error('Fallback copy failed:', err);
    } finally {
      document.body.removeChild(textArea);
    }
  };

  const handleCopy = () => {
    if (!codeText) {
      console.warn('No code block found.');
      return;
    }
{/*
  ------------------
  navigator.clipboard
  ------------------
*/}
    if (navigator.clipboard) {
      navigator.clipboard.writeText(codeText)
        .then(() => alert('Code copied!'))
        .catch((err) => {
          console.error('Clipboard API failed, using fallback:', err);
          fallbackCopyText(codeText);
        });
    } else {
      fallbackCopyText(codeText);
    }
  };

  return (
    <div ref={containerRef} className="w-full max-w-full border-2 border-slate-700 shadow-md">
      {/* Header */}
      <div className="w-full h-[50px] bg-gray-900 border-b border-gray-700 flex items-center p-2">
        <span className="flex items-center italic text-slate-300 gap-2 flex-1">
          <FileCodeIcon color="#62748e" dimension={20} /> {fileName}
        </span>
        <button onClick={handleCopy} className="cursor-pointer">
          <CopyIcon color="#cad5e2" />
        </button>
      </div>

      {/* Code Block */}
      <div className="bg-gray-800 overflow-auto">{children}</div>
    </div>
  );
}

/*
  ------------------
  MessageBox Component
  ------------------
*/
export const MessageBox = ({ type, children }: { type: "alert" | "warning" | "error"; children: React.ReactNode }) => {
  /*
    ------------------
    MessageBox Styles
    ------------------
  */
  const styles = {
    alert: "bg-blue-100 text-blue-800 border-l-4 border-blue-500",
    warning: "bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500",
    error: "bg-red-100 text-red-800 border-l-4 border-red-500",
  };

  /*
    ------------------
    MessageBox Icons
    ------------------
  */
  const icons = {
    alert: <AlertIcon />,
    warning: <WarningIcon />,
    error: <ErrorIcon />,
  };

  return (
    <div className={`p-4 rounded-md shadow-md ${styles[type]}`}>
      <span className="mr-2">{icons[type]}</span>
      {children}
    </div>
  );
};

interface LinkProps {
  title: string;
  url: string;
  description?: string;
}
/*
  ------------------
  Link Component
  ------------------
*/
export const Link: React.FC<LinkProps> = ({ title, url, description }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-pointer group p-5 rounded-lg border border-gray-200 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
    >
      {/* Top Bar with Icon and Reference Label */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs text-white bg-blue-500 px-2 py-1 rounded">
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
