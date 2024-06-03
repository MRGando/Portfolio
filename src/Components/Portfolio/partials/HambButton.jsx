import { Context } from "@/Context/Context";
import { useContext } from "react";

export function HambButton() {
  const { showMenu, setShowMenu } = useContext(Context);
  return (
    <div
      className="flex flex-col child:my-[2px] cursor-pointer"
      onClick={() => setShowMenu((prev) => !prev)}>
      {!showMenu ? (
        <>
          <div className="flex justify-center items-center child:bg-black child:w-1 child:h-1 child:rounded-full child:mx-[2px]">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="flex justify-center items-center child:bg-black child:w-1 child:h-1 child:rounded-full child:mx-[2px]">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="flex justify-center items-center child:bg-black child:w-1 child:h-1 child:rounded-full child:mx-[2px]">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center child:bg-black child:w-1 child:h-1 child:rounded-full child:mx-[2px]">
            <span></span>
            <span className="opacity-0"></span>
            <span></span>
          </div>
          <div className="flex justify-center items-center child:bg-black child:w-1 child:h-1 child:rounded-full child:mx-[2px]">
            <span className="opacity-0"></span>
            <span></span>
            <span className="opacity-0"></span>
          </div>
          <div className="flex justify-center items-center child:bg-black child:w-1 child:h-1 child:rounded-full child:mx-[2px]">
            <span></span>
            <span className="opacity-0"></span>
            <span></span>
          </div>
        </>
      )}
    </div>
  );
}
