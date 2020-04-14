import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import fetch from "isomorphic-unfetch";
import { Modal } from "antd";
import { toast } from "react-toastify";
import Router from "next/router";

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
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    })
      .then(() => {
        Router.push("/");
        toast.success("Message envoyé !");
      })
      .catch((errors) => res.status(400).json({ errors }));
  }

  render() {
    return (
      <div style={{ padding: "10%" }}>
        <style jsx>{`
          .error {
            border-color: red;
          }
        `}</style>
        <h4>Offrez un message d'encouragement au personnel de santé !</h4>
        <div style={{ marginTop: "6vh" }}>
          <Formik
            initialValues={{ pseudo: "", email: "", message: "" }}
            onSubmit={this.onSubmit}
            validationSchema={Yup.object().shape({
              pseudo: Yup.string().required("Nécessaire"),
              email: Yup.string()
                .email("L'email n'est pas valide")
                .required("Nécessaire"),
              message: Yup.string().required("Nécessaire"),
            })}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    id="pseudo"
                    placeholder="Pseudo"
                    style={{ marginBottom: "3vh" }}
                    value={values.pseudo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autocomplete="off"
                    className={
                      errors.pseudo && touched.pseudo
                        ? "ant-input ant-input-lg error"
                        : "ant-input ant-input-lg"
                    }
                  ></input>
                  <input
                    type="text"
                    id="email"
                    placeholder="email"
                    style={{ marginBottom: "3vh" }}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email
                        ? "ant-input ant-input-lg error"
                        : "ant-input ant-input-lg"
                    }
                  ></input>
                  <input
                    type="text"
                    id="message"
                    placeholder="message"
                    style={{ marginBottom: "3vh" }}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.message && touched.message
                        ? "ant-input ant-input-lg error"
                        : "ant-input ant-input-lg"
                    }
                  ></input>
                  <div className={"col text-center"}>
                    <span
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      <div style={styles.buttonSubmit}>submit</div>
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
    backgroundColor: "white",
    marginLeft: "25vw",
    boxShadow: "-1px 3px 6px #00000029",
    borderRadius: "33px",
    opacity: 1,
  },
  myContainerMobile: {
    width: "auto",
    marginRight: "16px",
    marginLeft: "16px",
    background: "white",
    backgroundColor: "white",
    paddingBottom: "40px",
  },
  buttonSubmit: {
    height: "auto",
    width: "200px",
    backgroundColor: "green",
  },
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
    return (
      <div>
        <div style={{ height: "12vh" }} />
        <div style={styles.myContainerDesktop}>
          <NewsletterConponent />
        </div>
      </div>
    );
  }
}
