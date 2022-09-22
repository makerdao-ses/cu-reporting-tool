import React from "react";
import { createRoot } from "react-dom/client"
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from "../components/NavigationBar"; 
import { HostApi } from "../HostApi";
import { browserHostApi } from "./browserHostApi";

// Load the Host API, which provides a uniform interface to various host frameworks such as Electron or the Chrome extensions.
const hostApi:HostApi = typeof electronHostApi !== "undefined" ? electronHostApi : browserHostApi();

console.log(`Node: ${hostApi.versions.node()}, Electron: ${hostApi.versions.electron()}, Chrome: ${hostApi.versions.chrome()}`);
console.log('i am running ' + hostApi.hostType());

const App = () => {
    return (
      <Router>
          <NavigationBar />
          <Routes>
              <Route path='/' element={<p>Path /</p>} />
              <Route path='/settings' element={<p>Path /settings</p>} />
              <Route path='/json/:spreadsheetId/:tabId' element={<p>Path /json/:spreadsheetId/:tabId</p>} />
              <Route path='/md/:spreadsheetId/:tabId' element={<p>Path /md/:spreadsheetId/:tabId</p>} />
              <Route path='/api/:spreadsheetId/:tabId' element={<p>Path /api/:spreadsheetId/:tabId</p>} />
          </Routes>
      </Router>
    );
  };

const rootContainer = document.getElementById("root");

if (!rootContainer) {
    throw Error("Cannot find HTML element with id='root'");
} else {
    createRoot(rootContainer).render(<App/>);
}