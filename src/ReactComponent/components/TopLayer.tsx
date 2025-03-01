
import { GithubIcon, CliIcon, FireIcon, DiscordIcon } from "../icons/Icon";

export default function TopLayer() {
    return (
        <div
  className="top-layer bg-[#112] p-[4px_10px] min-h-[30px] border-b-4 border-indigo-400 text-white flex items-center justify-between flex-wrap gap-[10px]"
>
  <button
    style={{fontFamily: "Grand Hotel"}}
    className="text-[1.5rem] text-indigo-400 font-medium flex justify-center items-center gap-[5px]"
  >
    <FireIcon />
    SomCheat
  </button>
  <div className="c-wrapper flex justify-center items-center gap-[10px]">
    <DiscordIcon/>
    <GithubIcon dimension={26} />
    <button
      className="p-[4px_8px] bg-[#ffcb66] rounded-[10px] flex justify-center items-center gap-[10px] cursor-pointer"
    >
      <CliIcon dimension={20}  color="#333"/>
      <span className="text-[#333] italic font-medium text-[1rem]"> Version 1.1.5 </span>
    </button>
  </div>
</div>
    )
}