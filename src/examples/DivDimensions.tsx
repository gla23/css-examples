export function DivDimensions() {
  return (
    <>
      <div className="text-4xl my-4">Div dimensions</div>
      <div className="w-96 bg-orange-200 relative">
        w-96 relative outer div
        <div className="bg-orange-300">Normal div - expand to fit parent</div>
        <div className="bg-orange-400 w-24">w-24</div>
        <div className="bg-orange-400 relative">relative</div>
        <div className="bg-orange-400 fixed ">fixed </div>
        <div className="bg-orange-400 absolute top-32">absolute top-32</div>
        <div className="m-4 ml-32">
          Note that{" "}
          <code className="text-neutral-700 text-sm">position: fixed;</code> and{" "}
          <code className="text-neutral-700 text-sm">position: absolute;</code>{" "}
          takes elements out of flow. They then act like inline-block elements,
          in that their dimensions are determined by their content if a width is
          not set.
        </div>
      </div>
    </>
  );
}
