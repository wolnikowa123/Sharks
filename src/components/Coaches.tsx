import React from "react";
import styled from "styled-components";
import { Badge } from "./Pricing";

// portrety
import PortraitOlaf from "../assets/portret_OLAF.jpg";
import PortraitIwo from "../assets/portret_IWO.jpg";
import PortraitSandra from "../assets/portret_SANDRA.jpg";
import PortraitTomek from "../assets/portret_TOMEK_1.jpg";
import PortraitZuza from "../assets/portret_ZUZA.jpg";
import PortraitLukasz from "../assets/portret_LUKASZ.jpg";
import PortraitMichal from "../assets/portret_MICHAL.jpg";

type Coach = { name: string; role: string; bio: string; photo: string };

const Wrap = styled.section`
  padding: 60px 20px;
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Na mobile chowamy grid i używamy karuzeli */
  @media (max-width: 700px) {
    display: none;
  }
`;

const Carousel = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: flex;
    gap: 12px;
    margin-top: 16px;
    overflow-x: auto;
    padding-bottom: 10px;
    scroll-snap-type: x mandatory;

    & > * {
      flex: 0 0 80%;
      max-width: 80%;
      scroll-snap-align: center;
    }
  }
`;

/** --- 3D flip card (desktop/tablet) --- */
const CardWrap = styled.div`
  perspective: 1000px;
`;

const CardInner = styled.button<{ flipped: boolean }>`
  all: unset;
  position: relative;
  width: 100%;
  border-radius: 18px;
  aspect-ratio: 4 / 5.2;
  cursor: pointer;
  transform-style: preserve-3d;
  transition:
    transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.3s,
    border-color 0.3s,
    background 0.3s;
  border: 2px solid ${({ theme }) => theme.colors.teal};
  box-shadow: 0 12px 32px rgba(15, 124, 143, 0.45);
  background: radial-gradient(
    170% 170% at 50% 0%,
    rgba(15, 124, 143, 0.4),
    rgba(5, 15, 25, 0.95)
  );
  transform: ${({ flipped }) =>
    flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
  will-change: transform;

  &:hover,
  &:focus-visible {
    box-shadow: 0 18px 42px rgba(15, 124, 143, 0.6);
  }
`;

const Face = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 18px;
  overflow: hidden;
  backface-visibility: hidden;
`;

const Front = styled(Face)`
  display: grid;
  grid-template-rows: 1fr auto;
`;

const Back = styled(Face)`
  transform: rotateY(180deg);
  background: linear-gradient(
    180deg,
    rgba(15, 124, 143, 0.8),
    rgba(5, 24, 32, 0.98)
  );
  border: 1px solid rgba(15, 124, 143, 0.9);
  padding: 14px;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 8px;
  pointer-events: none;
`;

/** --- wspólne img --- */
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.9) contrast(1.05);
`;

const InfoFront = styled.div`
  padding: 12px 14px;
  border-top: 2px solid #0f7c8f;
  background: rgba(0, 0, 0, 0.32);
  color: #fff;
`;

const TitleText = styled.div`
  font-weight: 700;
  color: #fff;
`;

const RoleText = styled.div`
  opacity: 0.9;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.88);
`;

const BackTitle = styled.div`
  font-weight: 800;
  font-size: 1.05rem;
  color: #fff;
`;

const BackText = styled.p`
  margin: 0;
  opacity: 0.95;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.95);
`;

/** --- Mobile simple card --- */
const MobileCard = styled.div`
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.teal};
  box-shadow: none;
  background: radial-gradient(
    160% 160% at 50% 0%,
    rgba(15, 124, 143, 0.45),
    rgba(5, 15, 25, 0.98)
  );
  display: flex;
  flex-direction: column;
`;

const MobileImgWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
`;

const MobileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.9) contrast(1.05);
`;

const MobileBody = styled.div`
  padding: 12px 14px 14px;
`;

const MobileName = styled.div`
  font-weight: 700;
  color: #fff;
`;

const MobileRole = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
  margin-top: 4px;
`;

const MobileBio = styled.p`
  margin: 8px 0 0;
  font-size: 0.9rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
`;

/* dane trenerów w zadanej kolejności */
const data: Coach[] = [
  {
    name: "Olaf - założyciel Sharks",
    role: "Koszykówka",
    photo: PortraitOlaf,
    bio: "Olaf – sekcja koszykówki. Krótki opis w przygotowaniu, lorem ipsum dolor sit amet.",
  },
  {
    name: "Iwo",
    role: "Koszykówka",
    photo: PortraitIwo,
    bio: "Iwo – sekcja koszykówki. Placeholder opisu, który później podmienimy na konkrety.",
  },
  {
    name: "Sandra",
    role: "Siatkówka",
    photo: PortraitSandra,
    bio: "Sandra – sekcja siatkówki. Tutaj pojawi się opis doświadczenia, teraz małe lorem ipsum.",
  },
  {
    name: "Tomek",
    role: "Koszykówka, piłka nożna",
    photo: PortraitTomek,
    bio: "Tomek – sekcja koszykówki i piłki nożnej. Krótki opis roli i stylu pracy, lorem ipsum.",
  },
  {
    name: "Zuza",
    role: "Siatkówka",
    photo: PortraitZuza,
    bio: "Zuza – sekcja siatkówki. Opis trenera będzie uzupełniony, na razie prosty placeholder.",
  },
  {
    name: "Łukasz",
    role: "Koszykówka",
    photo: PortraitLukasz,
    bio: "Łukasz – sekcja koszykówki. Tekst o doświadczeniu i podejściu treningowym do dopisania.",
  },
  {
    name: "Michał",
    role: "Siatkówka",
    photo: PortraitMichal,
    bio: "Michał – sekcja siatkówki. Krótki opis profilu trenerskiego, lorem ipsum dolor sit amet.",
  },
];

/* Desktop / tablet flip card */
function CoachCardDesktop({ coach }: { coach: Coach }) {
  const [flipped, setFlipped] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setFlipped(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setFlipped(false), 100);
  };

  return (
    <CardWrap>
      <CardInner
        flipped={flipped}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={`${coach.name} – więcej informacji`}
      >
        <Front>
          <Img src={coach.photo} alt={coach.name} />
          <InfoFront>
            <TitleText>{coach.name}</TitleText>
            <RoleText>{coach.role}</RoleText>
          </InfoFront>
        </Front>

        <Back>
          <BackTitle>
            {coach.name} — {coach.role}
          </BackTitle>
          <BackText>{coach.bio}</BackText>
        </Back>
      </CardInner>
    </CardWrap>
  );
}

/* Mobile simple card (no flip) */
function CoachCardMobile({ coach }: { coach: Coach }) {
  return (
    <MobileCard>
      <MobileImgWrap>
        <MobileImg src={coach.photo} alt={coach.name} />
      </MobileImgWrap>
      <MobileBody>
        <MobileName>{coach.name}</MobileName>
        <MobileRole>{coach.role}</MobileRole>
        <MobileBio>{coach.bio}</MobileBio>
      </MobileBody>
    </MobileCard>
  );
}

export default function Coaches() {
  return (
    <Wrap id="trenerzy">
      <Inner>
        <Badge>Trenerzy</Badge>
        <h2>Poznaj naszych trenerów</h2>

        {/* Desktop / tablet – flip cards w siatce */}
        <Grid>
          {data.map((c, i) => (
            <CoachCardDesktop coach={c} key={i} />
          ))}
        </Grid>

        {/* Mobile – prosta karuzela bez obracania */}
        <Carousel>
          {data.map((c, i) => (
            <CoachCardMobile coach={c} key={i} />
          ))}
        </Carousel>
      </Inner>
    </Wrap>
  );
}
