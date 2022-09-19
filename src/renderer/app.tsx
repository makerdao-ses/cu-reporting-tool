import React from "react";
import { createRoot } from "react-dom/client"
import Link from "../component-example/Link";
import { HostApi } from "../HostApi";
import { browserHostApi } from "./browserHostApi";

// Load the Host API, which provides a uniform interface to various host frameworks such as Electron or the Chrome extensions.
const hostApi:HostApi = typeof electronHostApi !== "undefined" ? electronHostApi : browserHostApi();

console.log(`Node: ${hostApi.versions.node()}, Electron: ${hostApi.versions.electron()}, Chrome: ${hostApi.versions.chrome()}`);

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