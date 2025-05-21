import { Component } from "react";

class ClassComponentState extends Component {
  // constructor안에서 this를 쓰기전에 super()을 반드시 먼저 호출해야함. 
  constructor(props) {
    super(props);
    this.state = { isToggle: true };
  }

  handleToggle() {
    this.setState((state) => ({
      isToggle: !state.isToggle,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleToggle()}>
          {this.state.isToggle ? "on" : "off"}
        </button>
      </div>
    );
  }
}

export default ClassComponentState;
