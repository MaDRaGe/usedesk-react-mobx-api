import { observable, computed, reaction, decorate, action } from "mobx";

class PostStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  posts = [];
}

decorate(PostStore, {
  posts: observable,
});

class RootStore {
  constructor() {
    this.postStore = new PostStore(this);
  }
}

export default RootStore;
