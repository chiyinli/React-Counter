import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    counter: 0
  };

  add = () => {
    console.log("adding")
    this.setState({counter: this.setState.counter + 1})
  };

  minus = () => {
    console.log("minus") 
      if ( this.state.counter === 0 ){
        this.setState({ counter: 0})
      } else {

      this.setState({counter: this.setState.counter - 1})
      }
  };

  render() {

    return(
      <div>
      <div>{this.state.counter} Counter</div>
      <button onClick={() => this.state.add}>Increment +</button>
      <button onClick={() => this.state.minus}>Decrement -</button>
      </div>
    )
  }
};

export default App;