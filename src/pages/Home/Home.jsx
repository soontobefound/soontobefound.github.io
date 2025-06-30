import "./Home.scss";
import LogoSoontobefound from "@/asset/logo/primary/soontobefound.svg?react";

// Import all SVGs as React components
import NodeIcon from "@/asset/logo/secondary/node.svg?react";
import BeziIcon from "@/asset/logo/secondary/bezi.svg?react";
import SassIcon from "@/asset/logo/secondary/sass.svg?react";
import NotionIcon from "@/asset/logo/secondary/notion.svg?react";
import RiveIcon from "@/asset/logo/secondary/rive.svg?react";
import GithubIcon from "@/asset/logo/secondary/github.svg?react";
import NextIcon from "@/asset/logo/secondary/next.svg?react";
import FramerIcon from "@/asset/logo/secondary/framer.svg?react";
import FigmaIcon from "@/asset/logo/secondary/figma.svg?react";
import VscodeIcon from "@/asset/logo/secondary/vs-code.svg?react";
import BlenderIcon from "@/asset/logo/secondary/blender.svg?react";

const logoComponents = [
  NodeIcon,
  BeziIcon,
  SassIcon,
  NotionIcon,
  RiveIcon,
  GithubIcon,
  NextIcon,
  FramerIcon,
  FigmaIcon,
  VscodeIcon,
  BlenderIcon,
];

export default function Home() {
  return (
    <div className="home-main__container">
      <div></div>
      <div></div>

      <div className="home-logo__container">
        <LogoSoontobefound height="40px" width="213px" />
        <div>Accepting projects for Q3 2025 ✨</div>
      </div>

      <div className="home-stack__container">
        <div className="home-stack__slider">
          <div className="home-stack__track">
            {[...logoComponents, ...logoComponents].map((Icon, index) => (
              <div className="home-stack__slide" key={index}>
                <Icon height="32px" width="32px" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="home-button__container">
        <a href="https://t.me/soontobefound" target="_blank" rel="noopener noreferrer">
          <div className="button-telegram">Message on Telegram</div>
        </a>
        <a
          href="https://cal.com/soontobefound/product-discovery-meeting"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="button-cal">Book a Discovery Meeting</div>
        </a>
      </div>
    </div>
  );
}
