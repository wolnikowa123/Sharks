import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Badge } from "./Pricing";
import { Star } from "lucide-react";
import { theme } from "@/theme";

const Wrap = styled.section`
  padding: 60px 20px;
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
  margin-bottom: 6px;
`;

const Card = styled(motion.blockquote)`
  margin: 0;
  background: #fff;
  border: 2px solid #0f7c8f;
  border-radius: 18px;
  padding: 18px 16px;
  color: #000;
  font-size: 14px;

  display: flex;
  flex-direction: column; /* ⭐ pozwala autorowi zejść na dół */

  @media (max-width: 768px) {
    &:nth-child(n + 4) {
      display: none;
    }
  }
`;

const Author = styled.cite`
  display: block;
  margin-top: auto; /* ⭐ zawsze pcha autora na sam dół karty */
  opacity: 0.8;
  font-style: normal;
  font-weight: bold;
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
  margin-top: 12px;
`;

const opinions = [
  {
    text: "Córka zaczęła trenować od zera, a po miesiącu widzimy ogromny progres. Fantastyczne podejście do dzieci!",
    author: "Mama Oli",
  },
  {
    text: "Świetne indywidualne podejście, syn w końcu przestał bać się gry 1 na 1 i zaczął wierzyć w siebie.",
    author: "Tata Kacpra (13)",
  },
  {
    text: "Obóz PRO-BASKET okazał się strzałem w dziesiątkę — super organizacja i atmosfera.",
    author: "Rodzice Zuzi",
  },
  {
    text: "Dużo techniki i konkretna praca — nie ma czasu na stanie. Polecam z czystym sumieniem.",
    author: "Trener szkolny",
  },
  {
    text: "Bardzo profesjonalnie, a jednocześnie z dużym sercem. Syn wraca z treningów z mega energią.",
    author: "Mama Antka",
  },
  {
    text: "Najlepsze zajęcia, na jakich byłem. Dużo gry, analiza wideo, poprawa motoryki.",
    author: "Filip (16)",
  },
  {
    text: "Świetny kontakt z rodzicami i jasne cele treningowe. Widać pasję i doświadczenie.",
    author: "Rodzic uczestnika",
  },
  {
    text: "Po campie syn dostał większą pewność siebie i awansował do wyższej grupy. Dziękujemy!",
    author: "Mama Piotrka",
  },
  {
    text: "Super miejsce do rozwoju — luźna atmosfera, ale konkretny trening i wymagania.",
    author: "Patryk (14)",
  },
];

export default function Testimonials() {
  return (
    <Wrap id="opinie">
      <Inner>
        <Badge>Opinie</Badge>
        <Lead>
          Najlepsza recenzja, to uśmiech i sprawność twojego dziecka! <br />
          Zobacz, co jeszcze cenią sobie rodzice i dzieci trenujące z Sharks:
        </Lead>
        <Grid>
          {opinions.map((o, i) => (
            <Card
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.25 }}
            >
              <Stars>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} fill={"#fabb18"} color={"#fabb18"} />
                ))}
              </Stars>
              “{o.text}” <Author>— {o.author}</Author>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Wrap>
  );
}
