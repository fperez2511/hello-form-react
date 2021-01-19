import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import CustomParagraph from "./components/CustomParagraph";
import CustomSimpleForm from "./components/CustomSimpleForm";
import axios from "axios";

class App extends Component {
  constructor() {
    super()
    // GET
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(x => x.json())
    //   .then(x => console.log(x))
    //
    // POST, PUT, PATCH, DELETE
    // fetch('https://jsonplaceholder.typicode.com/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     name: 'John Doe',
    //     username: 'jdoe',
    //   })
    // })
    //   .then(x => x.json())
    //   .then(x => console.log(x))
    //
    // Via Axios - GET
    // axios.get('https://jsonplaceholder.typicode.com/users')
    //   .then(({ data }) => console.log(data))
    //
    // Via Axios - POST
    axios.post('https://jsonplaceholder.typicode.com/users', {
      name: 'Fred Flinstone',
      username: 'fflint'
    }).then(({ data}) => console.log(data))
  }

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
