import React, { Component } from "react";

export default class App extends Component {
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };
  // 함수형태로 만드는 이유 : 나중에 동적인 변경을 해야해서
  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    };
  };

  todoData = [
    {
      id: 1,
      title: "공부하기",
      complete: true,
    },
    {
      id: 2,
      title: "청소하기",
      complete: true,
    },
  ];

  handleClick = (id) => {
    let newTodoData = this.todoData.filter((data) => (data.id = !id)); // id가 data.id 와 같지 않은 애들만 새로 배열을 만들겠다
    console.log("살았다", newTodoData);
  };
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {/* TODO: map메소드를 이용해 내용의 중복없이 data배열의 나열을 할수있다*/}
          {this.todoData.map((data) => (
            <div style={this.getStyle()} key={data.id}>
              <input type="checkbox" defaultChecked={data.complete} />
              {data.title}
              <button
                style={this.btnStyle}
                onClick={() => {
                  this.handleClick(data.id); //고유한 값을 인자로 해주는 함수를 연결
                }}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
