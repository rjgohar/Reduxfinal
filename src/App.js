import React from "react";
import "./App.css";

import { store } from "./store";
import { Provider } from "react-redux";
import Routess from "./routes";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routess />
      </Provider>
    </div>
  );
}

export default App;
