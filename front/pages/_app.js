import React from "react";
import App from "next/app";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";
export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <title>MERCI Personnel Soignant</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/png"
            href={require("../src/assets/images/favicon.png")}
          />
        </Head>
        <style jsx global>{`
          @media (max-width: 480px) {
            iframe {
              width: 100%;
            }
          }
          body {
            background-color: #3b7210;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpolygon fill='%23000' fill-opacity='.1' points='120 0 120 60 90 30 60 0 0 0 0 0 60 60 0 120 60 120 90 90 120 60 120 0'/%3E%3C/svg%3E");
          }
          button:focus {
            outline: 0;
          }

          .btn:focus {
            outline: none !important;
            outline-offset: none !important;
          }
          img {
            max-width: 100%;
            height: auto;
          }
        `}</style>
        <div id="outer-container">
          <main id="page-wrap">
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    );
  }
}
