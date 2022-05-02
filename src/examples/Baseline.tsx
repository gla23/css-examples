export function Baseline() {
  return (
    <>
      <div className="text-4xl my-4">Baseline</div>
      <div className="flex">
        <div
          className="flex bg-gray-300 w-60"
          style={{ alignItems: "baseline" }}
        >
          <div className="h-[30px] leading-[30px] w-8 bg-red-100">hi</div>
          <div className="h-[40px] leading-[40px] w-8 bg-red-200">hi</div>
          <div className="h-[50px] leading-[50px] w-8 bg-red-300">hi</div>
          <div className="h-[60px] leading-[60px] w-8 bg-red-400">hi</div>
          <div className="h-[70px] leading-[70px] w-8 bg-red-500">hi</div>
        </div>
        <div
          className="flex bg-gray-400 w-60"
          style={{ alignItems: "flex-end" }}
        >
          <div className="h-[30px] leading-[30px] w-8 bg-red-100">hi</div>
          <div className="h-[40px] leading-[40px] w-8 bg-red-200">hi</div>
          <div className="h-[50px] leading-[50px] w-8 bg-red-300">hi</div>
          <div className="h-[60px] leading-[60px] w-8 bg-red-400">hi</div>
          <div className="h-[70px] leading-[70px] w-8 bg-red-500">hi</div>
        </div>
      </div>
    </>
  );
}
