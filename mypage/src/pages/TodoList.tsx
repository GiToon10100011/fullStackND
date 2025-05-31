import React from "react";
import SectionTitle from "../components/SectionTitle";

const TodoList = () => {
  return (
    <div className="main todo-list">
      <div className="content-inner">
        <SectionTitle title="todo-list" subTitle="my todo-list" />
        <div>todo-list 본문</div>
      </div>
    </div>
  );
};

export default TodoList;
