import React, { Component } from "react";

const styles = {
  card: {
    backgroundColor: "white",
    width: "30vw",
    border: "1px solid black",
    marginRight: "auto",
    marginLeft: "auto"
  }
};
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { users } = this.props;
    console.log(`user: ${users}`);
    return (
      <div
        style={{
          backgroundColor: "rgb(226, 226, 226, 0.7)",
          margin: "3%"
        }}
      >
        <div style={{ backgroundColor: "yellow", height: "40vh" }}>
          <h1 style={{ textAlign: "center", fontFamily: "Roboto Condensed" }}>
            Merci Personnel Soignant
          </h1>
          <div style={{ textAlign: "center" }}>
            <button type="button" class="btn btn-primary">
              Offrez un message d'encouragement
            </button>
          </div>
        </div>

        <div style={{ marginTop: "2%", display: "flex", flexWrap: "wrap" }}>
          {users.map(user => (
            <div style={styles.card}>
              <h1 style={{ textAlign: "center" }}>{user.email}</h1>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
