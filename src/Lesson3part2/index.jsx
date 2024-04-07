import { Component } from "react";
const style_wrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  flexDirection: "column",
};

class Lesson3part2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surname: "",
    };
  }
  render() {
    return (
      <div style={style_wrapper}>
        <input
          onChange={(event) => {
            console.log(event.target.value);
            this.setState({ name: event.target.value });
          }}
          type="text"
          placeholder="input your name"
        />
        <input
          onChange={(event) => {
            console.log(event.target.value);
            this.setState({ surname: event.target.value });
          }}
          type="text"
          placeholder="input your surname"
        />
        <h1>Name : {this.state.name}</h1>
        <h1>Surname: {this.state.surname}</h1>
      </div>
    );
  }
}
export default Lesson3part2;

// STATE- user tomonidan qilingan harakatlarni real vaqtda ekranda korsatmoqchi bolsak ishlatiladi
