import Home from "../src/Home/components/Home";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <div>
    <Head>
      <title>MERCI</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
    </Head>
    <style jsx global>{`
      @media (max-width: 480px) {
        iframe {
          width: 100%;
        }
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
      body {
      }
    `}</style>
    <Home users={props.props.users} />
  </div>
);

Index.getInitialProps = async function() {
  const res = await fetch("http://localhost:4000/api/message");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);
  console.log(res.json());
  return {
    props: {
      users: data
    }
  };
};

export default Index;
