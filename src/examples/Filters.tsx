import mace from "../assets/mace.gif";
import chan from "../assets/chan.gif";
import { CSSProperties } from "react";

export function Filters() {
  return (
    <>
      <div className="text-4xl my-4">Filter</div>
      <Mace style={{}} />
      <Mace style={{ filter: "drop-shadow(10px 10px 10px purple)" }} />
      <Mace style={{ filter: "brightness(0.5)" }} />
      <Mace style={{ filter: "brightness(2)" }} />
      <Mace style={{ filter: "invert(1)" }} />
      <Mace style={{ filter: "blur(10px)" }} />
      <div className="text-2xl my-4">Backdrop-filter</div>
      <div className="relative">
        <img src={chan} />
        <div className="absolute top-0 backdrop-invert w-40 h-12 text-xs flex justify-center items-center">
          backdrop-invert
        </div>
        <div className="absolute top-12 backdrop-blur w-40 h-12 text-xs flex justify-center items-center text-white">
          backdrop-blur
        </div>
        <div className="absolute top-24 backdrop-brightness-150 w-40 h-12 text-xs flex justify-center items-center text-white">
          backdrop-brightness-150
        </div>
      </div>
    </>
  );
}
function Mace(props: { style: CSSProperties }) {
  return (
    <div className="inline-block">
      <img src={mace} style={{ width: 260, ...props.style }} alt="Mace Windu" />
      <div className="text-sm">{JSON.stringify(props.style)}</div>
    </div>
  );
}
