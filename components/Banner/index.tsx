import React from "react";
import s from "./Banner.module.scss";
import Image from "next/image";

interface BannerProps {
  type: "dark" | "light";
  image: string;
  discount: number;
  text: string;
}

const Banner1: React.FC<BannerProps> = ({ type, image, discount, text }) => {
  return (
    <div
      className={`${s.banner} ${type === "dark" && s.banner_dark} ${
        type === "light" && s.banner_light
      }`}
    >
      <Image
        width={type === "light" ? 185 : 165}
        height={140}
        src={image}
        alt="bannerImage"
        style={{ objectFit: "cover", objectPosition: "left" }}
      />
      <div className={s.banner_content}>
        {type === "light" && "Скидка  "}
        <div className={s.banner_discount}>
          <span>{discount}%</span>
        </div>
        <p
          className={s.banner_text}
          style={type === "dark" ? { paddingRight: 40 } : {}}
        >
          {text}
        </p>
        <div className={s.banner_select}>Выбрать</div>
      </div>
    </div>
  );
};

export default Banner1;
