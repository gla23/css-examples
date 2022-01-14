function App() {
  return (
    <div className="max-w-xl m-auto">
      <div className="text-5xl my-10">CSS examples</div>
      <div className="text-xl">Example 1:</div>
      <li>z-index does nothing without being positioned</li>
      <li>Position moves you above other stuff</li>
      <div className="example">
        <div className="move-down">Moved down</div>
        <div className="z-5"></div>
      </div>
      <div className="example">
        <div className="z-5"></div>
        <div className="move-up">Moved up</div>
      </div>
      <div className="example">
        <div className="-mt-0 z-5">A</div>
        <div className="-mt-4 relative">B</div>
        <div className="-mt-4 z-4">C</div>
      </div>

      <div className="text-xl">Example 2:</div>
      <li>stacking context does ...</li>
    </div>
  );
}

export default App;
