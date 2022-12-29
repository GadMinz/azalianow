import React from "react";
import s from "./Panel.module.scss";
import Banner from "../Banner";

interface PanelProps {
  title: string;
}

const Panel: React.FC<PanelProps> = ({ title }) => {
  return (
    <div className={s.panel}>
      <div className={s.panel_title}>
        <h2>{title}</h2>
        <button>
          <svg
            width="43"
            height="18"
            viewBox="0 0 43 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3">
              <path
                d="M33 1L41 9L33 17"
                stroke="#2E2E33"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M1 9H41"
                stroke="#2E2E33"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </button>
      </div>
      <div className={s.panel_banners}>
        <Banner
          image="/banners/1.png"
          type="dark"
          discount={-15}
          text="на товары для кабинета"
        />
        <Banner
          image="/banners/2.png"
          type="light"
          discount={10}
          text="на периферию для компьютера"
        />
      </div>
    </div>
  );
};

export default Panel;
