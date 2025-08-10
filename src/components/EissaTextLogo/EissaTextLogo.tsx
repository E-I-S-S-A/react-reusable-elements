import React, { FC } from "react";
import styles from "./EissaTextLogo.module.css";

export interface EissaTextLogoProps {
  text?: string;
  size?: number;
  colors?: string[];
}

const EissaTextLogo: FC<EissaTextLogoProps> = ({
  text = "Logo",
  size = 140,
  colors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"],
}) => {
  return (
    <div className={styles.logo} style={{ fontSize: `${size}px` }}>
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
