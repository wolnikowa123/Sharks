import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root { color-scheme: light dark; }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    background: #0B0F14;
    color: ${({ theme }) => theme.colors.white};
  }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }
  ::selection { background: ${({ theme }) => theme.colors.teal}; color: #fff; }
`;
