interface Props {
  children?: any;
  fileName?: string;
}

export default function Layout({ children }: Props) {
  return (
    <div className="p-4 flex gap-8 flex-wrap justify-center bg-slate-50">
      {children}
    </div>
  );
}
