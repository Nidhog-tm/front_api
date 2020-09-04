import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./views/Layout";
import Top from "./views/Top";
import Main from "./views/Main";
import App from "./views/app"

const app = document.getElementById('app');

// ReactDOM.render(<Layout />, app);

ReactDOM.render(
    <Router basename="{process.env.PUBLIC_URL}">
        <Layout>
            <Route exact path="/" component={Top}></Route>
            <Route path="/main" component={Main}></Route>
            <Route path="/app" component={App}></Route>
        </Layout>
    </Router>,
app);
