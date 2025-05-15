import { Component } from "react";

class ClassProps extends Component<{ day: string; num: number }> {
  render() {
    return (
      <div>
        <h2>클래스 컴포넌트 자식요소에 속성전달</h2>
        <p>
          내일은 {this.props.day}이고, 오늘은 {this.props.num}일째 입니다.
        </p>
      </div>
    );
  }
}

export default ClassProps;
