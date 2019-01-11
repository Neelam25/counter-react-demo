import React, { Component } from "react";
import Navbar from "./component/navbar";
import Counters from "./component/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrement = counter => {
    console.log("In Incrementcount");
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index] = { ...counter };
    console.log(counters[index]);
    counters[index].value++;
    this.setState({ counters });
  };
  handleDelete = counterId => {
    console.log("Event Handle..", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);

    this.setState({ counters });
  };
  handleReset = () => {
    console.log("In Reset");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    return this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totlaCounter={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
