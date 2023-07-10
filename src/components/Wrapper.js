import Head from 'next/head'

export default function Wrapper({ children }) {
  return (
    <>
      <Head>
        <title>soontobefound</title>
        <meta name="description" content="Coming soon, Stay tuned!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?" />
        <meta property="og:image" content="/meta_img.svg" />
      </Head>
      <div className="wrapper_container">{children}</div>
      <style jsx>
        {`
          .wrapper_container {
            max-width: 800px;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
        `}
      </style>
    </>
  );
}
