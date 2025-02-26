/*
	jsrepo 1.40.1
	Installed from https://reactbits.dev/ts/tailwind/
	2-25-2025
*/

import clsx from "clsx";
import React from "react";

type StarBorderProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    classContainer?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties["animationDuration"];
    variant?: "primary" | "outline";
  };

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  classContainer = "",
  color = "white",
  speed = "3s",
  children,
  variant = "primary",
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";

  const classes = clsx(
    "relative z-1 bg-gradient-to-b text-white text-center py-[12px] px-[40px] rounded-full",
    variant === "primary" && "bg-primary",
    variant === "outline" && "bg-black border border-primary",
    className
  );

  return (
    <Component
      className={`relative inline-block py-[2px] overflow-hidden rounded-full ${classContainer}`}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-100 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className={classes}>{children}</div>
    </Component>
  );
};

export default StarBorder;

// tailwind.config.js;
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         "star-movement-bottom":
//           "star-movement-bottom linear infinite alternate",
//         "star-movement-top": "star-movement-top linear infinite alternate",
//       },
//       keyframes: {
//         "star-movement-bottom": {
//           "0%": { transform: "translate(0%, 0%)", opacity: "1" },
//           "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
//         },
//         "star-movement-top": {
//           "0%": { transform: "translate(0%, 0%)", opacity: "1" },
//           "100%": { transform: "translate(100%, 0%)", opacity: "0" },
//         },
//       },
//     },
//   },
// };
