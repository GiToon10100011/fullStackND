import { Component } from "react";

class ClassComponent extends Component {
  // 1. 상태변수
  // 2. 메소드
  // 3. 화면에 뿌려질 내용

  render() {
    return (
      <div>
        <h2>클래스</h2>
        <p>클래스 컴포넌트는 render 메소드 안에 넣어야함.</p>
      </div>
    );
  }
}

export default ClassComponent;
