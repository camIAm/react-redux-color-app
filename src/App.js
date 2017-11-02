import React, { Component } from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import { map } from "ramda";
import Home from "./pages/home";
import About from "./pages/about";
import Page2 from "./pages/page2";
import Show from "./pages/show";
import { connect } from "react-redux";

const createNavLink = ({ url, description }) => {
  return (
    <NavLink
      exact
      className="hover-bg-light-silver ph2 pv1 link dim br3"
      activeClassName="bg-yellow black"
      to={url}
    >
      {description}
    </NavLink>
  );
};
const menuItems = [
  { url: "/", description: "Home" },
  { url: "/about", description: "About" },
  { url: "/page2", description: "Page2" }
];
const Menu = () => {
  return (
    <nav className=" pa3 pa4-ns">
      <div className="flex justify center">{map(createNavLink, menuItems)}</div>
    </nav>
  );
};

const App = props => (
  <BrowserRouter>
    <div className="avenir flex flex-column pa4">
      <header className="tracked br2 tc mb3 bg-light-blue white">
        <h1>{props.title}</h1>
      </header>
      <Menu />
      <Route exact path="/" component={Home} />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/page2" component={Page2} />
        <Route path="/:color" component={Show} />
      </Switch>
    </div>
  </BrowserRouter>
);
const connector = connect(state => ({
  title: state.title
}));
export default connector(App);
