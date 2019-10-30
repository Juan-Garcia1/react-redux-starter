import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
// import { showGreeting } from "./actions/sampleActions";

function App(props) {
  const { greeting } = props.sample;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{greeting}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <a
          className="App-link"
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Redux
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    sample: state.sample
  };
};

export default connect(
  mapStateToProps,
  {}
  // dispatcher goes here { showGreeting }
)(App);
