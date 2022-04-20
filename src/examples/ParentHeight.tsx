export function ParentHeight() {
  return (
    <>
      <div className="text-4xl my-4">Fill parent height</div>
      <div className="h-48 relative bg-blue-300 mb-10">
        <div className="right-2">The parent with set height</div>
        <div className="h-full w-1/2 bg-blue-400">
          Child with height 100% width 50%
        </div>
      </div>
    </>
  );
}
