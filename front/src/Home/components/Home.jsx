import React, { Component } from "react";
import { ToastContainer } from "react-toastify";

const styles = {
  card: {},
  pseudo_card: {},
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
          margin: 0,
        }}
      >
        <ToastContainer autoClose={3000} hideProgressBar />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: 10,
            fontSize: 20,
          }}
        >
          {users.length} Messages 🙏
        </div>
        <div
          style={{
            background: "red",
            height: "40vh",
            marginTop: 30,
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontFamily: "Roboto Condensed",
              color: "lightgray",
            }}
          >
            Merci Personnel Soignant
          </h1>
          <div style={{ textAlign: "center" }}>
            <button
              type="button"
              style={{
                borderRadius: 10,
                border: "white",
                backgroundColor: "lightblue",
                padding: 10,
                fontWeight: "bold",
                boxShadow: "1px 1px 12px black",
              }}
            >
              Laissez un message d'encouragement
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
            <div
              style={{
                backgroundColor: "white",
                width: "23vw",
                borderRadius: 3,
                margin: "10px 20px",
                backgroundColor: "#FDFDFD",
                boxShadow: "1px 1px 12px #555",
                borderLeft: `5px #${Math.floor(
                  Math.random() * 16777215
                ).toString(16)} solid`,
                marginLeft: 5,
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: 5,
                    color: "#D3D5D3",
                    fontSize: 12,
                  }}
                >
                  {user.date}
                </div>
                <div style={{ padding: 20 }}>
                  <h5 style={styles.pseudo_card}>{user.pseudo}</h5>
                  <p>{user.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            backgroundColor: "#1C74F4",
            padding: 20,
            color: "white",
            textAlign: "center",
          }}
        >
          © Développé par{" "}
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://www.linkedin.com/in/yassine-elati/"
          >
            Yassine
          </a>{" "}
          &{" "}
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://www.linkedin.com/in/yamin-gherbi/"
          >
            Yamin{" "}
          </a>
        </div>
      </div>
    );
  }
}
