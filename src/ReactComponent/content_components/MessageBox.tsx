import { AlertIcon, WarningIcon, ErrorIcon } from "../icons/Indicator_Icons";

const MessageBox = ({
  type,
  children,
}: {
  type: "alert" | "warning" | "error";
  children: React.ReactNode;
}) => {
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
export default MessageBox;