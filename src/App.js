import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import CustomParagraph from "./components/CustomParagraph";
import CustomSimpleForm from "./components/CustomSimpleForm";

class App extends Component {
  state = {
    greeting: 'Welcome again'
  }

  customClickHandler = () => {
    console.log('My custom click')
  }

  customChangeState = () => {
    this.setState({ greeting: 'Bye bye' })
  }

  render() {
    const { greeting } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {greeting}
          </p>
          <CustomParagraph onClick={this.customChangeState}>Change state example</CustomParagraph>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <CustomSimpleForm />
        <Footer currentDate={'2021'} customClickHandler={this.customClickHandler} />
      </div>
    );
  }
}

export default App;
