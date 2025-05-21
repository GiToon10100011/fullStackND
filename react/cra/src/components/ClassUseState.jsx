import React, { Component } from "react";

export default class ClassUseState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  decrement = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  render() {
    return (
      <div>
        <h2>class counter</h2>
        <div>값: {this.state.count}</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
