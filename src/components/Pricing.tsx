import { CheckCircle2 } from "lucide-react";
import React from "react";
import styled from "styled-components";

const Wrap = styled.section`
  padding: 80px 20px;
`;
const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 8px 14px;
  border-radius: 999px;
  font-weight: 800;
  background: #0f7c8f;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25) inset;
`;

const Title = styled.h2`
  font-size: clamp(28px, 5.2vw, 64px);
  line-height: 1.05;
  margin: 14px 0 8px;
`;
const Lead = styled.p`
  margin: 0 0 26px;
  opacity: 0.9;
  font-size: clamp(16px, 2.2vw, 20px);
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border-radius: 24px;
  padding: 26px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.03)
  );
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  margin: 0 0 8px;
  font-size: clamp(18px, 2.4vw, 28px);
`;
const CardText = styled.p`
  margin: 0 0 18px;
  opacity: 0.92;
`;

const PriceBadge = styled.div`
  display: inline-block;
  margin: 6px 0 18px;
  padding: 16px 20px;
  border-radius: 18px;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.14);
  font-weight: 800;
  font-size: clamp(20px, 3.6vw, 34px);
`;

const Button = styled.a<{ variant?: "primary" | "ghost" }>`
  display: inline-block;
  padding: 12px 18px;
  border-radius: 14px;
  font-weight: 800;
  cursor: pointer;
  user-select: none;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    background 0.15s ease;
  text-align: center;
  border: 2px solid transparent;
  margin-top: auto;

  ${({ theme, variant }) =>
    variant === "ghost"
      ? `
        background: #transparent;
        color: #fff;
        border-color: ${theme.colors.teal};
      `
      : `
        background: ${theme.colors.teal};
        color: #fff;
      `}
  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`;

const List = styled.ul`
  margin: 0 0 18px 0;
  padding-left: 0;
  list-style: none;
  li {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    opacity: 0.95;
  }
  li::before {
    content: "✔";
    display: inline-block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.25);
    text-align: center;
    line-height: 20px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
    background: rgba(255, 255, 255, 0.06);
  }
`;

export default function Pricing() {
  const scrollToWithOffset = (id: string) => {
    const el = document.querySelector(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.pageYOffset - 35;

    window.scrollTo({ top: y, behavior: "smooth" });

    close(); // zamyka menu mobilne
  };
  return (
    <Wrap id="cennik">
      <Inner>
        <Badge>Oferta</Badge>
        <Title>Treningi i obozy Sharks</Title>
        <Lead>
          Budzimy w dzieciach pasje do zdrowego ruchu i sportu. Z nami chętniej
          wracają na boisko, niż przed ekran
        </Lead>

        <Cards>
          {/* KARTA 1 */}
          <Card>
            <CardTitle>Treningi</CardTitle>
            <CardText>
              Cena za miesiąc treningów twojego dziecka po szkole. Koszykówka,
              siatkówka, piłka nożna - skontaktuj się z nami, aby wybrać zajęcia
              dla swojego dziecka.
            </CardText>
            <PriceBadge style={{ marginBottom: "0", fontWeight: "lighter" }}>
              <div style={{ opacity: 0.8, fontSize: "14px", fontWeight: 600 }}>
                Zajęcia 1 w tygodniu
              </div>
              250 zł / mies.
            </PriceBadge>
            <PriceBadge style={{ fontWeight: "lighter" }}>
              <div style={{ opacity: 0.8, fontSize: "14px", fontWeight: 600 }}>
                Zajęcia 2/3 razy w tygodniu
              </div>
              390 zł / mies.
            </PriceBadge>
            <Button
              href="#zapis"
              onClick={(e) => {
                e.preventDefault();
                scrollToWithOffset("#zapis");
              }}
              className="btn"
              variant="ghost"
            >
              Zarezerwuj termin
            </Button>
          </Card>

          {/* KARTA 2 */}
          <Card>
            <CardTitle>Obozy letnie i zimowe</CardTitle>
            <CardText>
              Wakacje od sportu? Wolimy wakacje na sportowo! Półkolonie Sharks
              to treningi, integracja, planszówki, basen, oraz rozrywki
              dopasowane do wieku grupy.
            </CardText>
            <List>
              <li>Obozy sportowe w lecie ☀️</li>
              <li>Obozy sportowe w zimę ❄️</li>
            </List>
            <Button
              href="#zapis"
              onClick={(e) => {
                e.preventDefault();
                scrollToWithOffset("#zapis");
              }}
              variant="ghost"
            >
              Zapisz się na listę
            </Button>
          </Card>

          {/* KARTA 3 */}
          <Card>
            <CardTitle>Pierwszy trening</CardTitle>
            <CardText>
              Zapisz dziecko na pierwszy, darmowy trening. Jeśli mu się spodoba
              - witamy w rodzinie!
            </CardText>
            <PriceBadge>
              <div style={{ opacity: 0.8, fontSize: "14px", fontWeight: 600 }}>
                Cena
              </div>
              Free
            </PriceBadge>
            <span
              style={{
                display: "flex",
                color: "#8d8d8d",
                marginTop: "-10px",
                marginBottom: "5px",
                alignItems: "center",
                gap: 8,
              }}
            >
              <CheckCircle2 size={16} /> Już 220 dzieci trenuje z Sharks!
            </span>
            <Button href="#kontakt" variant="primary">
              Zapytaj o dostępność
            </Button>
          </Card>
        </Cards>
      </Inner>
    </Wrap>
  );
}
