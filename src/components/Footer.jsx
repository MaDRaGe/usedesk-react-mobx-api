import React, { Component } from "react";

class Footer extends Component {
  state = { year: null };
  componentDidMount() {
    this.setState({
      year: new Date().getFullYear(),
    });
  }
  render() {
    return (
      <footer className="ui segment footer">
        <div className="copyright">
          <span>
            © {this.state.year} Source code and CHANGELOG available on{" "}
          </span>
          <a href=""></a>
        </div>
      </footer>
    );
  }
}

export default Footer;
