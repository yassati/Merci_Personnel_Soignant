import React, { Component } from "react";

const styles = {
  card: {
    backgroundColor: "white",
    width: "23vw",
    // border: "1px solid black",
    borderRadius: 3,
    margin: "10px 20px",
    backgroundColor: "#FDFDFD",
    boxShadow: "1px 1px 12px #555",
  },
  pseudo_card: {
    // textAlign: "center",
  },
  borderCard: {},
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { users } = this.props;
    return (
      <div
        style={{
          backgroundColor: "rgb(226, 226, 226, 0.7)",
          margin: "3%",
        }}
      >
        <div style={{ backgroundColor: "yellow", height: "40vh" }}>
          <h1 style={{ textAlign: "center", fontFamily: "Roboto Condensed" }}>
            Merci Personnel Soignant
          </h1>
          <div style={{ textAlign: "center" }}>
            <button type="button" className="btn btn-primary">
              Offrez un message d'encouragement
            </button>
          </div>
        </div>

        <div
          style={{
            margin: "2% 20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {users.map((user) => (
            <div style={styles.card}>
              <div
                style={{
                  borderLeft: `3px #${Math.floor(
                    Math.random() * 16777215
                  ).toString(16)} solid`,
                  marginLeft: 5,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: 5,
                    color: "#D3D5D3",
                    fontSize: 12,
                  }}
                >
                  22/04/2020 à 13h53
                </div>
                <div style={{ padding: 20 }}>
                  <h3 style={styles.pseudo_card}>{user.pseudo}</h3>
                  <div>{user.message}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
