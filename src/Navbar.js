import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`;

const Navbar = () => {
  const [padding] = useState(15);
  return (
    <header
      css={css`
        background: ${colors.secondary};
        padding: ${padding}px;
        color: white;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 30px;
          display: inline-block;
          animation: 2.4s ${spin} linear infinite;
          &:hover {
            animation: 0.4s ${spin} linear infinite reverse;

            text-decoration: underline;
          }
        `}
      >
        hover me
      </span>
    </header>
  );
};

export default Navbar;
