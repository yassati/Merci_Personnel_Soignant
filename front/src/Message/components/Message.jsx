import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import fetch from "isomorphic-unfetch";
import { toast } from "react-toastify";
import Router, { withRouter } from "next/router";
import Banniere_message from "../../assets/images/banniere_message.png";

class NewsletterConponent extends React.Component {
  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  async onSubmit(values) {
    let response = await fetch("http://localhost:4000/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(values)
    })
      .then(() => {
        Router.push("/");
        toast.success("Message envoyé !");
      })
      .catch(errors => res.status(400).json({ errors }));
  }

  render() {
    return (
      <div style={{ padding: "5%" }}>
        <style jsx>{`
          .error {
            border-color: red;
          }
        `}</style>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 15
          }}
        >
          <img src={Banniere_message} width="30%" alt="banniere_message" />
        </div>
        <h4 style={{ textAlign: "center", margin: "0 10%" }}>
          Offrez un message d'encouragement au personnel de santé !
        </h4>
        <div style={{ marginTop: "6vh" }}>
          <Formik
            initialValues={{ pseudo: "", email: "", message: "" }}
            onSubmit={this.onSubmit}
            validationSchema={Yup.object().shape({
              pseudo: Yup.string().required("Nécessaire"),
              email: Yup.string()
                .email("L'email n'est pas valide")
                .required("Nécessaire"),
              message: Yup.string().required("Nécessaire")
            })}
          >
            {props => {
              const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap"
                    }}
                  >
                    <input
                      type="text"
                      id="pseudo"
                      placeholder="Pseudo"
                      style={styles.input}
                      value={values.pseudo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      className={
                        errors.pseudo && touched.pseudo
                          ? "ant-input ant-input-lg error"
                          : "ant-input ant-input-lg"
                      }
                    ></input>
                    <input
                      type="text"
                      id="email"
                      placeholder="Email"
                      style={styles.input}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.email && touched.email
                          ? "ant-input ant-input-lg error"
                          : "ant-input ant-input-lg"
                      }
                    ></input>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: 30,
                      height: "20vh"
                    }}
                  >
                    <textarea
                      type="text"
                      id="message"
                      style={styles.textarea}
                      placeholder="Message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.message && touched.message
                          ? "ant-input ant-input-lg error"
                          : "ant-input ant-input-lg"
                      }
                    ></textarea>
                  </div>
                  <div className={"col text-center"}>
                    <span
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      <div style={{}} className="btn btn-success">
                        Envoyer
                      </div>
                    </span>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    );
  }
}

const styles = {
  myContainerDesktop: {
    backgroundColor: "white",
    marginBottom: "12vh",
    width: "auto",
    marginRight: "25vw",
    marginLeft: "25vw",
    boxShadow: "-1px 3px 6px #00000029",
    borderRadius: "33px",
    opacity: 1
  },
  myContainerMobile: {
    backgroundColor: "white",
    width: "auto",
    marginRight: "16px",
    marginLeft: "16px",
    paddingBottom: "40px",
    paddingTop: "40px"
  },
  buttonSubmit: {
    height: 30,
    borderRadius: 10,
    // width: "200px",
    backgroundColor: "#3B7210"
  },
  input: {
    border: "none",
    borderBottom: "3px solid #3B7210",
    height: 40,
    width: "40%",
    margin: 10
  },
  textarea: {
    border: "none",
    borderBottom: "3px solid #3B7210",
    width: "85%",
    resize: "none"
  }
};

export default class Newsletter extends React.Component {
  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styleContainer = this.props.isMobile
      ? styles.myContainerMobile
      : styles.myContainerDesktop;
    return (
      <div>
        <div style={{ height: "12vh" }} />
        <div style={styleContainer}>
          <NewsletterConponent />
        </div>
      </div>
    );
  }
}
