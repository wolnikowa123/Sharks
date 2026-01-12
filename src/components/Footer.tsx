import React from "react";
import styled from "styled-components";

const Bar = styled.footer`
  padding: 20px;
  text-align: center;
  opacity: 0.8;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export default function Footer() {
  return (
    <Bar>
      © {new Date().getFullYear()} Sharks Travel. Wszelkie prawa zastrzeżone.
    </Bar>
  );
}
