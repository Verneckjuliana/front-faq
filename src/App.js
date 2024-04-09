import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./componentes/home/home";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export default function App() {
  return(
    root.render(
      <StrictMode>
        <Home />
      </StrictMode>
    )
  )
}
