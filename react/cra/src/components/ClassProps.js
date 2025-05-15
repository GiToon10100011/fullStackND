import { Component } from "react";

class ClassProps extends Component {
  render() {
    console.log(this.props);
    const { day, time } = this.props;
    return (
      <div>
        <h2>클래스 컴포넌트의 props</h2>
        <p>부모로부터 데이터를 전달받음</p>
        <p>
          오늘은 {day}요일~ 점심시간은 {time}분 남음~
        </p>
      </div>
    );
  }
}

export default ClassProps;
