import "./Home.scss";
import LogoSoontobefound from "/logo/primary/soontobefound.svg";

const logos = [
  "./logo/secondary/node.svg",
  "./logo/secondary/bezi.svg",
  "./logo/secondary/sass.svg",
  "./logo/secondary/notion.svg",
  "./logo/secondary/rive.svg",
  "./logo/secondary/github.svg",
  "./logo/secondary/next.svg",
  "./logo/secondary/framer.svg",
  "./logo/secondary/figma.svg",
  "./logo/secondary/vs-code.svg",
  "./logo/secondary/blender.svg",
];

export default function Home() {
  return (
    <>
      <div className="home-main__container">
        <div></div>
        <div></div>
        <div className="home-logo__container">
          <img src={LogoSoontobefound} alt="logo soontobefound" />
          <div>Accepting projects for Q3 2025 ✨</div>
        </div>

        <div className="home-stack__container">
          <div className="home-stack__slider">
            <div className="home-stack__track">
              {[...logos, ...logos].map((src, index) => (
                <div className="home-stack__slide" key={index}>
                  <img
                    src={src}
                    height="32px"
                    width="32px"
                    alt={`logo ${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="home-button__container">
          <a href="https://t.me/soontobefound" target="_blank">
            <div className="button-telegram">Message on Telegram</div>
          </a>
          <a
            href="https://cal.com/soontobefound/product-discovery-meeting"
            target="_blank"
          >
            <div className="button-cal">Book a Discovery Meeting</div>
          </a>
        </div>
      </div>
    </>
  );
}
