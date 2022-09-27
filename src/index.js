import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./redux/store";

window.store = store;
console.log("Store updated", store.getState());

ReactDOM.render(
  <Suspense fallback={<p> Loading...</p>}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById("root")
);

reportWebVitals();

