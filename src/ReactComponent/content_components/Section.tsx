interface Props {
    children?: any;
    fileName?: string;
}
export default function Section({ children }: Props) {
  return (
    <div className="p-4 flex gap-4 border-2 border-slate-200 rounded-md w-[700px] max-w-full flex-col bg-white h-fit">
      {children}
    </div>
  );
}