import { DivDimensions } from "./examples/DivDimensions";
import { ParentHeight } from "./examples/ParentHeight";
import { ZIndex } from "./examples/ZIndex";
import { Filters } from "./examples/Filters";

export function App() {
  return (
    <div className="max-w-xl m-auto">
      <div className="text-5xl my-10">CSS examples</div>
      <Filters />
      <DivDimensions />
      <ParentHeight />
      <ZIndex />
    </div>
  );
}
