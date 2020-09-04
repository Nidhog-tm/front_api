import React from "react";

import Footer from "./footer.jsx";
import Header from "./header.jsx";

export default class Main extends React.Component {
  render() {
    return (
        <div>
        <Header/>
            <div className="main">
                <h2>メニュー</h2>
            </div>
        <Footer/>
        </div>
    );
  }
}