import React, { Component } from "react";
import jsonplaceholder from "../api/jsonplaceholder";
import { observer, inject } from "mobx-react";

class PostList extends Component {
  fetchPosts = async () => {
    const response = await jsonplaceholder.get("/posts");
    this.props.postStore.posts = response.data.slice(0, 10);
  };

  sortPosts = (column) => {
    this.props.postStore.posts = this.props.postStore.posts.sort(
      (postLeft, postRight) => {
        if (postLeft[column] < postRight[column]) {
          return -1;
        }
        if (postLeft[column] > postRight[column]) {
          return 1;
        }
        return 0;
      }
    );
  };

  componentDidMount() {
    this.fetchPosts();
  }
  renderTable = () => {
    if (this.props.postStore.posts) {
      let thead = [];
      for (let key in this.props.postStore.posts[0]) {
        thead.push(
          <th key={key} onClick={() => this.sortPosts(key)}>
            {key}
          </th>
        );
      }
      return (
        <table className="ui celled table">
          <thead>
            <tr>{thead}</tr>
          </thead>
          <tbody>
            {this.props.postStore.posts.map((post) => {
              return (
                <tr key={post.title}>
                  <td>{post.userId}</td>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
    return null;
  };

  render() {
    return <div className="post-list">{this.renderTable()}</div>;
  }
}

export default inject((stores) => {
  return {
    postStore: stores.rootStore.postStore,
  };
})(observer(PostList));
