import "./style.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
   <h1 style="font-weight: 500, font-size: 2.6rem">
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
