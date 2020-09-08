import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import "./sass/style.sass";
import RootStore from "./mobx/store";
import { reaction } from "mobx";
import { Provider } from "mobx-react";

const rootStore = new RootStore();
reaction(
  () => {
    return rootStore.postStore.posts.map((post) => post);
  },
  (posts) => {
    console.log(posts[0].userId);
  }
);
ReactDOM.render(
  <Provider rootStore={rootStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
