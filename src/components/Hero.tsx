import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// zdjęcia
import Hero1 from "../assets/hero_1.jpg";
import Hero2 from "../assets/hero_3.jpg";
import Hero3 from "../assets/hero_4.jpg";
import Hero4 from "../assets/hero_5.jpg";

const Wrap = styled.section`
  position: relative;
  padding: 120px 20px 90px 20px;
  overflow: hidden;
  background: radial-gradient(
    1200px 650px at 85% 35%,
    rgba(18, 147, 169, 0.5) 0%,
    rgba(15, 124, 143, 0) 50%,
    transparent 92%
  );
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 28px;
  align-items: center;
  position: relative;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  font-size: clamp(28px, 6vw, 56px);
  line-height: 1.05;
  margin: 0 0 14px;
  text-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
`;

const Lead = styled.p`
  font-size: clamp(16px, 2.2vw, 20px);
  opacity: 0.95;
`;

const Card = styled(motion.div)`
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(
    180deg,
    rgba(192, 192, 192, 0.12),
    rgba(255, 255, 255, 0.04)
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: ${({ theme }) => theme.shadow.soft};
  padding: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 14px;
    gap: 8px;

    & > img:nth-child(n + 2) {
      display: none;
    }
  }
`;

const Photo = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 18px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);
`;
const CTAButton = styled.a`
  display: inline-block;
  margin-top: 24px;
  padding: 10px 18px;
  border: 2px solid ${({ theme }) => theme.colors.teal};
  color: white;
  font-weight: 600;
  border-radius: 20px;
  text-decoration: none;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;
const SharkButton = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 26px;
  padding: 12px 24px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.teal};
  color: #fff;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  overflow: visible;
  transition: transform 0.2s ease;
  z-index: 10;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 900px) {
    left: 0%;
    // transform: translateX(-50%);
    margin-top: 10px;
    margin-bottom: -30px;
  }
`;
const Fin = styled.svg`
  position: absolute;
  bottom: calc(100% - 2px);
  left: 10%; /* start trochę od lewej, nie od samego brzegu */
  width: 28px;
  height: 24px;
  fill: ${({ theme }) => theme.colors.teal};
  pointer-events: none;

  transform-origin: 50% 100%;
  transform: scaleX(1);

  animation: swim 7s linear infinite;

  @keyframes swim {
    0% {
      left: 10%;
      transform: scaleX(1); /* normalna pletwa */
    }
    49.999% {
      left: 80%;
      transform: scaleX(1); /* DOJECHAŁA, jeszcze bez flipa */
    }
    50% {
      left: 80%;
      transform: scaleX(-1); /* natychmiastowy flip 💥 */
    }
    100% {
      left: 10%;
      transform: scaleX(-1); /* wraca odbita */
    }
  }
`;

export default function Hero() {
  return (
    <Wrap id="start">
      <Inner>
        <div>
          <Title>Sharks — szkółka sportowa dla dzieci</Title>
          <Lead>
            U nas każde dziecko jest mile widziane. Mamy koszykówkę, siatkówkę i
            piłkę nożną — w tygodniu trenujemy, a w ferie i wakacje jedziemy na
            obozy. Dołączcie do naszej sportowej rodziny!
          </Lead>
          <SharkButton href="#cennik">
            <Fin viewBox="0 0 26 24" aria-hidden="true">
              {/* lewy bok LEKKO wklęsły, prawy ładnie wygięty */}
              <path d="M2 22 Q12 16 10 2 Q22 8 24 22 Z" />
            </Fin>
            Zobacz naszą ofertę
          </SharkButton>
        </div>

        <Card
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Photo src={Hero1} alt="Trening koszykówki" />
          <Photo src={Hero2} alt="Zawodnicy podczas ćwiczeń" />
          <Photo src={Hero3} alt="Obóz PRO-BASKET" />
          <Photo src={Hero4} alt="Dzieci podczas meczu" />
        </Card>
      </Inner>
    </Wrap>
  );
}
