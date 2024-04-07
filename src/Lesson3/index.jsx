import { Component } from "react";

const style_wrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
};

class Lesson3 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    const increment = () => {
      console.log("incremented");
      if (this.state.count < 10)
        this.setState({
          count: this.state.count + 1,
        });
    };
    const decrement = () => {
      console.log("decremented");
      if (this.state.count > 0)
        this.setState({
          count: this.state.count - 1,
        });
    };
    return (
      <div style={style_wrapper}>
        <button onClick={increment}>+</button>
        {this.state.count}
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}

export default Lesson3;

// state
