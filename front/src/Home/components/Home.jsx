import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon
} from "react-share";
import Background from "../../assets/images/background.png";

const styles = {
  card: {},
  pseudo_card: {}
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { users } = this.props;
    const shareUrl = "http://www.merci.fr";
    const title = "Merci";

    return (
      <div
        style={{
          backgroundColor: "rgb(226, 226, 226, 0.7)",
          margin: 0
        }}
      >
        <ToastContainer autoClose={3000} hideProgressBar />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: 10,
            fontSize: 20
          }}
        >
          {users.length} Messages 🙏
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            padding: 10,
            fontSize: 20
          }}
        >
          {users.length} Messages 🙏
        </div>
        <div
          style={{
            backgroundImage: `url(${Background})`,
            height: "40vh",
            marginTop: 30
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontFamily: "Roboto Condensed",
              color: "lightgray"
            }}
          >
            Merci Personnel Soignant
          </h1>
          <div style={{ textAlign: "center" }}>
            <a className="btn btn-primary" href="/message" role="button">
              Laissez un message d'encouragement
            </a>
          </div>
        </div>
        <div
          style={{
            margin: "2% 20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {users.map(user => (
            <div
              style={{
                backgroundColor: "white",
                width: "23vw",
                borderRadius: 3,
                margin: "10px 20px",
                backgroundColor: "#FDFDFD",
                boxShadow: "1px 1px 12px #555",
                borderLeft: `5px #${(0x1000000 + Math.random() * 0xffffff)
                  .toString(16)
                  .substr(1, 6)} solid`,
                marginLeft: 5
              }}
              key={user.pseudo}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: 5,
                    color: "#D3D5D3",
                    fontSize: 12
                  }}
                >
                  {user.date}
                </div>
                <div style={{ padding: 20 }}>
                  <h5 style={styles.pseudo_card}>{user.pseudo}</h5>
                  <p>{user.message}</p>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "13% 13% 13% 13%",
                    justifyContent: "end",
                    marginRight: 10,
                    marginBottom: 10
                  }}
                >
                  <div className="Demo__some-network">
                    <FacebookShareButton
                      url={shareUrl}
                      quote={title}
                      className="Demo__some-network__share-button"
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                  </div>
                  <div className="Demo__some-network">
                    <TwitterShareButton
                      url={shareUrl}
                      quote={title}
                      className="Demo__some-network__share-button"
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                  </div>
                  <div className="Demo__some-network">
                    <LinkedinShareButton
                      url={shareUrl}
                      quote={title}
                      className="Demo__some-network__share-button"
                    >
                      <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                  </div>
                  <div className="Demo__some-network">
                    <WhatsappShareButton
                      url={shareUrl}
                      quote={title}
                      className="Demo__some-network__share-button"
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                  </div>
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
            textAlign: "center"
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
