import Navbar from "@/components/Navbar";

export default function Experiment() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="title">Experiment</div>
        <div className="content">
          Some content related to bullshit, bla bla bla... Lorem Ipsum shit. If you find this, forget what you saw.
        </div>
      </div>
      <style jsx>
        {`
          .container {
            padding: 1rem 2rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .content {
            font-weight: 300;
          }

          .title {
            font-size: 3.5rem;
            font-weight: 400;
          }
        `}
      </style>
    </>
  );
}
