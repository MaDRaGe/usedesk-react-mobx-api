import React from "react";
import { observer } from "mobx-react";
import Header from "./Header.jsx";
import PostList from "./PostList.jsx";
import Footer from "./Footer.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="ui container app">
        <Header />
        <PostList />
        <Footer />
      </div>
    );
  }
}

export default App;
