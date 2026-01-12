import styled, { keyframes } from "styled-components";

/* layout */
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 16px;
`;

export const Section = styled.section`
  position: relative;
  padding: 56px 0;
  background: ${({ theme }) => theme.colors.black};
  color: #fff;
  @media (min-width: 768px) {
    padding: 72px 0;
  }
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 999px;
  padding: 6px 12px;
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 0.04em;
`;

export const Title = styled.h2<{ dark?: boolean }>`
  margin: 12px 0 0;
  font-size: clamp(26px, 6vw, 44px);
  line-height: 1.1;
  font-weight: 900;
  color: ${({ dark, theme }) => (dark ? "#fff" : theme.colors.black)};
  &.silver {
    background: linear-gradient(90deg, #c2c2c2 0%, #ffffff 50%, #a5a5a5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Intro = styled.p<{ dark?: boolean }>`
  margin-top: 12px;
  max-width: 720px;
  color: ${({ dark }) => (dark ? "rgba(255,255,255,.8)" : "rgba(11,15,20,.7)")};
  &.silver {
    background: linear-gradient(90deg, #c2c2c2 0%, #ffffff 50%, #a5a5a5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Card = styled.div<{ dark?: boolean; silver?: boolean }>`
  background: ${({ dark }) => (dark ? "rgba(255,255,255,.06)" : "#fff")};
  border: 1px solid
    ${({ dark, silver, theme }) =>
      dark
        ? "rgba(255,255,255,.12)"
        : silver
        ? theme.colors.silver
        : "rgba(0,0,0,.06)"};
  border-radius: 20px;
  padding: 20px;
  transition: transform 0.15s ease, box-shadow 0.15s ease,
    border-color 0.15s ease, background 0.15s ease;
  box-shadow: ${({ theme }) => theme.shadow.soft};
  color: ${({ dark, theme }) => (dark ? "#fff" : theme.colors.black)};
`;

export const Button = styled.a<{ kind?: "primary" | "ghost" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 14px;
  font-weight: 800;
  ${({ kind, theme }) =>
    kind === "primary"
      ? `background:#fff;color:${theme.colors.black};`
      : `border:1px solid rgba(255,255,255,.25);color:#fff;background:transparent;`}
  &:hover {
    box-shadow: 0 6px 18px rgba(192, 192, 192, 0.45);
  }
`;

export const SilverStrip = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    rgba(192, 192, 192, 0.15),
    rgba(192, 192, 192, 0.5),
    rgba(192, 192, 192, 0.15)
  );
`;

/* FAB – poprawiony na mobilkach */
export const Fab = styled.a`
  position: fixed;
  right: 12px;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 12px);
  z-index: 80;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.teal};
  color: #fff;
  font-weight: 800;
  font-size: 14px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.22);
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Grid3 = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
`;

export const ping = keyframes`
  0% { transform: scale(1); opacity: .6; }
  80%,100% { transform: scale(2); opacity: 0; }
`;
