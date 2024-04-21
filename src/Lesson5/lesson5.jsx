import { Component } from "react";
import { Button, Modal } from "antd";

const style_wrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  flexDirection: "column",
};
class lesson5 extends Component {
  constructor() {
    super();
    this.state = { isModalShow: false };
  }
  render() {
    return (
      <div style={style_wrapper}>
        <Modal
          onCancel={() => this.setState({ isModalShow: false })}
          title="I'm title"
          open={this.state.isModalShow}
        >
          <h1>Modal</h1>
        </Modal>
        <Button
          onClick={() => this.setState({ isModalShow: true })}
          type="primary"
        >
          Click to Open Modal
        </Button>
      </div>
    );
  }
}
// created Modal
export default lesson5;
