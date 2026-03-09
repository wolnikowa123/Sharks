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
    text: "Widać postępy u dziecka, organizacja w klubie jest dobra. Wszystko jest na wysokim poziomie.",
    author: "Zadowolony rodzic 👨‍👩‍👧‍👦",
  },

  {
    text: "Treningi są wymagające, ale ja to doceniam, bo wiele się na nich uczę.",
    author: "mały Sharks 🦈",
  },
  {
    text: "W drużynie jest dobra atmosfera, szczególnie w gierki w środy. Treningi są intensywne przez co widzi się progres.",
    author: "starszy Sharks 🦈",
  },

  {
    text: "Polecam treningi z Gdynia Sharks, świetne miejsce dla osób z zajawką na koszykówkę, niezależnie od wieku.",
    author: "starszy Sharks 🦈",
  },
  {
    text: "TRENINGI SĄ SUPER!!",
    author: "mały Sharks 🦈",
  },
  {
    text: "Syn z każdego treningu wraca do domu zadowolony!",
    author: "Zadowolony rodzic 👨‍👩‍👧‍👦",
  },
  {
    text: "Treningi bardzo fajnie, nie ciężkie a idealne. Trenerzy też są fajni oraz śmieszni. Jednym słowem trenerzy są super.",
    author: "mały Sharks 🦈",
  },
  {
    text: "Trenerzy mają świetne podejście do dzieciaków, motywują, a także uczą ich dyscypliny.",
    author: "Zadowolony rodzic 👨‍👩‍👧‍👦",
  },
  {
    text: "Jakbym miała więcej czasu to bym chodziła na każdy trening. Bardzo jest fajnie.",
    author: "mały Sharks 🦈",
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
