import { DivDimensions } from "./DivDimensions";
import { ZIndex } from "./ZIndex";

export function App() {
  return (
    <div className="max-w-xl m-auto">
      <div className="text-5xl my-10">CSS examples</div>

      <DivDimensions />
      <ZIndex />
    </div>
  );
}
