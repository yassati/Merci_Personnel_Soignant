import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import Pagination from "./pagination";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";
import Background from "../../assets/images/team-doctor.jpg";
import Router from "next/router";
const styles = {
  card: {},
  pseudo_card: {},
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      postsPerPage: 9,
    };
  }

  render() {
    const { users } = this.props;
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });

    const shareUrl = "http://www.merci.fr";
    const title = "Merci";

    return (
      <div
        style={{
          backgroundColor: "rgb(226, 226, 226, 0.3)",
          margin: 0,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            padding: 30,
            display: "grid",
            gridTemplateColumns: "100%",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          {" "}
          <ToastContainer autoClose={3000} hideProgressBar />
          <div className="bloc_header_title">
            <h1
              style={{
                textAlign: "center",
              }}
            >
              Merci Personnel Soignant
            </h1>
            <p style={{ textAlign: "center" }}>
              Une initiative pour valoriser l'effort du cadre médical et établir
              <br></br> une connexion solidaire entre nous en ces temps
              difficiles.
            </p>
          </div>
          <div>
            <div
              style={{ fontFamily: "Roboto Condensed" }}
              className="btn btn-light"
              onClick={() => Router.push("/message")}
            >
              Laissez un message d'encouragement
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 10,
            fontSize: 20,
            fontFamily: "Roboto Condensed",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        >
          {users.length} Messages 🙏
        </div>
        <div className="container_message_card">
          {currentPosts.map((user) => (
            <div
              className="card_message"
              style={{
                borderLeft: `5px #${(0x1000000 + Math.random() * 0xffffff)
                  .toString(16)
                  .substr(1, 6)} solid`,
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
                    fontSize: 12,
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
                    marginBottom: 10,
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            postsPerPage={this.state.postsPerPage}
            totalPosts={users.length}
            paginate={paginate}
          />
        </div>
        <div
          style={{
            backgroundColor: "#1C74F4",
            padding: 20,
            color: "white",
            textAlign: "center",
            fontFamily: "Roboto Condensed",
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
