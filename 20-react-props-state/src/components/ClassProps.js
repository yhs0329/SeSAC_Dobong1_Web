import { Component } from "react";
class ClassProps extends Component {
  render() {
    console.log(this.props);
    const divstyle = {
      color: this.props.color,
    };
    return (
      <div style={divstyle}>
        <h4>hi, ny name is {this.props.name}</h4>
        <ul>
          <li>별명 : {this.props.nickname}</li>
          <li>좋아하는 색 : {this.props.color}</li>
        </ul>
      </div>
    );
  }
}

// 구조분해할당
class ClassProps2 extends Component {
  render() {
    const { name, color, nickname, bgColor } = this.props;
    const divstyle = {
      color: color,
      backgroundColor: bgColor,
    };
    return (
      <div style={divstyle}>
        <h4>hi, ny name is {name}</h4>
        <ul>
          <li>별명 : {nickname}</li>
          <li>좋아하는 색 : {color}</li>
        </ul>
      </div>
    );
  }
}
ClassProps2.defaultProps = {
  bgColor: "skyblue",
};

food.defaultProps = {
  bgColor: "skyblue",
};

export { ClassProps, ClassProps2 };
