import React, { FC } from "react";
import styles from "./EissaTextLogo.module.css";

export interface EissaTextLogoProps {
  text?: string;
  size?: number;
  colors?: string[];
  BrandLogo?: React.ReactNode
}

const EissaTextLogo: FC<EissaTextLogoProps> = ({
  text = "Logo",
  size = 40,
  colors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"],
  BrandLogo
}) => {
  return (
    <div className={styles.logo} style={{ fontSize: `${size}px` }}>
      <span>
        {
          BrandLogo && BrandLogo
        }
      </span>
      {text.split("").map((letter, i) => (
        <span
          key={i}
          style={{
            color: colors[i % colors.length],
            animationDelay: `${0.1 + i * 0.2}s`,
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default EissaTextLogo;
