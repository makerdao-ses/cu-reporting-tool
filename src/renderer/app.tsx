import React from "react";
import { createRoot } from "react-dom/client"
import Link from "../component-example/Link";

const App = () => {
    return (
      <div>
        <h1>Hello World!</h1>
        <Link page="test">
          Hover link example.
        </Link>
      </div>
    );
  };
  
const rootContainer = document.getElementById("root");

if (!rootContainer) {
    throw Error("Cannot find HTML element with id='root'");
} else {
    createRoot(rootContainer).render(<App/>);
}