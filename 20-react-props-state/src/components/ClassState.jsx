import { Component } from "react";
class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banana: "바나나",
    };
  }
  render() {
    return (
      <div>
        <div
          style={{
            color: "yellow",
            backgroundColor: "black",
            fontWeight: "700",
          }}
        >
          {this.state.banana}
        </div>
      </div>
    );
  }
}
{
  this.state.banana;
}

export default ClassState;
