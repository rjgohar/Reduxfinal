import React from "react";
import "./App.css";
import Routes from "./routes";
import { store } from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
