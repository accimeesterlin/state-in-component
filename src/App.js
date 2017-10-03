import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {

  constructor(){
    super();

    this.state = {
      username:'accimeesterlin',
      age:23,
      address:"8890 Terrace Club Drive, Roswell, GA, 30076"
    }

  }

  getValue() {

    console.log("Hello World!!!");
    
  }


  render() {

    return (
      <div className="App">
        <p>Username is : {this.state.username}</p>
        <p>Age: {this.state.age}</p>
        <p>{this.state.age > 20 ? "Accime" : "Username not found!"}</p>
        <button onClick = {this.getValue}>Click</button>
      </div>
    );
  }
}

export default App;
