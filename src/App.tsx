import { DivDimensions } from "./examples/DivDimensions";
import { ParentHeight } from "./examples/ParentHeight";
import { ZIndex } from "./examples/ZIndex";
import { Filters } from "./examples/Filters";
import { Baseline } from "./examples/Baseline";

export function App() {
  return (
    <div className="max-w-xl m-auto">
      <div className="text-5xl my-10">CSS examples</div>

      <Baseline />
      <Filters />
      <DivDimensions />
      <ParentHeight />
      <ZIndex />
    </div>
  );
}
