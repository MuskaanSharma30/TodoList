import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.onChange}
          style={{
            flex: "20",
            padding: "10px",
            textAlign: "center",
            width: "500px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        />
        <input
          type="submit"
          value="Add"
          className="btn"
          style={{
            padding: "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
            background: "#72cee2",
            borderRadius: "30px",
            marginLeft: "30px",
          }}
        />
      </form>
    );
  }
}
export default AddTodo;
