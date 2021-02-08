import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          textAlign: "center",
          bottom: "0",
          left: "0",
        }}
      >
        <footer className="footer  py-3 bg-light">
          <div className="container">
            <span className="text-muted">© 2021 Copyright: Khanh Bui</span>
          </div>
        </footer>
      </div>
    );
  }
}
