export function ZIndex() {
  return (
    <>
      <div className="text-4xl mt-10">z-index</div>
      <div className="text-xl mt-5">Example 1</div>
      <li>
        z-index does nothing without being positioned or a flex/grid child
      </li>
      <li>Position moves you above other stuff</li>
      <li>Flex child moves you above other stuff</li>
      <div className="flex">
        <div className="example">
          <div className="z-10">z-10</div>
          <div className="relative -top-4 left-3">relative -top-4</div>
        </div>
        <div className="example">
          <div className="relative top-4 left-3">relative top-4</div>
          <div className="z-10">z-10</div>
        </div>
      </div>
      <div className="example">
        <div className="-mt-0 z-20">z-20</div>
        <div className="-mt-4 z-10 relative">z-10 relative</div>
        <div className="-mt-4 z-20">z-20</div>
      </div>
      <div className="example">
        <div className="flex box-content">
          flex
          <div className="ml-2 "> child</div>
        </div>
        <div className="z-20 -mt-6">z-20 -mt-6</div>
      </div>
      <div className="text-xl mt-10">Example 2</div>
      Stacking contexts are folders. A couple of example criteria:
      <li>isolation: isolate</li>
      <li>non-1 opacity</li>
      <li>transform, filter, clip-path, perspective, mask</li>
      <div className="flex">
        <div className="example">
          <div className="relative z-10">z-10 relative</div>
          <div className="box-content isolate">
            <div className="relative z-20 -mt-7">z-20 relative</div>
            isolate
          </div>
        </div>
        <div className="example">
          <div className="relative z-10">z-10 relative</div>
          <div className="box-content opacity-80">
            <div className="relative z-20 -mt-7">z-20 relative</div>
            opacity-80
          </div>
        </div>
        <div className="example">
          <div className="relative z-10">z-10 relative</div>
          <div className="box-content opacity-100">
            <div className="relative z-20 -mt-7">z-20 relative</div>
            opacity-100
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="example">
          <div className="relative -z-10">-z-10 relative</div>
          <div className="box-content isolate">
            <div className="relative -z-20 -mt-7">-z-20 relative</div>
            isolate
          </div>
        </div>
        <div className="example">
          <div className="relative -z-10">-z-10 relative</div>
          <div className="box-content opacity-80">
            <div className="relative -z-20 -mt-7">-z-20 relative</div>
            opacity-80
          </div>
        </div>
        <div className="example">
          <div className="relative -z-10">-z-10 relative</div>
          <div className="box-content opacity-100">
            <div className="relative -z-20 -mt-7">-z-20 relative</div>
            opacity-100
          </div>
        </div>
      </div>
    </>
  );
}
