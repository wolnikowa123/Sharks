import React from "react";
import styled from "styled-components";
import { sections } from "@/data/schedules";
import basketballIcon from "@/assets/Sharks_Pomorze_basket-removebg-preview.png";
import volleyballIcon from "@/assets/Sharks_Pomorze_valleyball_color-removebg-preview.png";
import footballIcon from "@/assets/Sharks_Pomorze_soccer_v1-removebg-preview.png";
import { Badge } from "./Pricing";

const Wrap = styled.section`
  padding: 60px 20px;
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
`;

const Tabs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

const Tab = styled.button<{ active: boolean }>`
  all: unset;
  cursor: pointer;
  padding: 10px 4px;
  font-weight: 600;
  font-size: 0.95rem;
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  border-bottom: 2px solid
    ${({ active, theme }) => (active ? theme.colors.teal : "transparent")};
  transition: opacity 0.15s ease, border-color 0.2s ease;

  display: inline-flex;
  align-items: center;
  gap: 6px;

  img {
    width: 18px;
    height: 18px;
    display: none;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 18px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;

  h2 {
    margin: 0 0 4px;
  }

  p {
    margin: 0;
    opacity: 0.9;
    font-size: 0.95rem;
  }

  img {
    flex-shrink: 0;
  }
`;

const DayFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 4px;
    margin: 10px -4px 5px -4px;
    padding-inline: 4px;

    & > button {
      flex-shrink: 0;
    }
  }
`;

const DayButton = styled.button<{ active: boolean }>`
  all: unset;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.9rem;
  border: 1px solid ${({ theme }) => theme.colors.silver};
  background: ${({ active, theme }) =>
    active ? theme.colors.teal : "transparent"};
  color: ${({ active }) => (active ? "#fff" : "inherit")};
`;

const AllDaysButton = styled(DayButton)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Board = styled.div`
  margin-top: 8px;
  padding: 18px 16px;
  border-radius: 18px;
  background: rgba(116, 155, 157, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 768px) {
    padding: 14px 12px;
    max-height: 60vh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

const DayBlock = styled.div`
  & + & {
    margin-top: 18px;
    padding-top: 12px;
    border-top: 1px solid ${({ theme }) => theme.colors.teal};
  }
`;

const DayLabel = styled.h3`
  margin: 0 0 8px;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  opacity: 0.85;
  margin-top: 10px;
`;

const Row = styled.div`
  padding: 8px 0;
  display: grid;
  grid-template-columns: 80px minmax(0, 1fr);
  column-gap: 12px;
  row-gap: 4px;

  @media (min-width: 768px) {
    grid-template-columns: 90px 1.2fr 1.2fr;
    align-items: center;
  }

  & + & {
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }
`;

const TableHeader = styled(Row)`
  padding: 6px 0 10px;
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0.75;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  color: white;
  position: sticky;
  top: 0;
  z-index: 2;

  & + & {
    border-top: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Time = styled.div`
  font-weight: 600;
  font-size: 0.95rem;
`;

const GroupName = styled.div`
  font-weight: 500;
`;

const Extra = styled.div`
  font-size: 0.85rem;
  opacity: 0.8;

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    margin-top: 6px;
  }
`;

const LinksSpan = styled.span`
  padding: 0 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const GoCamps = styled.a`
  display: inline-block;
  margin-top: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.teal};

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

const icons: Record<string, string> = {
  basketball: basketballIcon,
  volleyball: volleyballIcon,
  football: footballIcon,
};

type SlotRow = {
  day: string;
  time: string;
  note?: string;
  groupName: string;
  venueName: string;
};

export default function Schedule() {
  const [activeSection, setActiveSection] = React.useState(0);
  const [activeDay, setActiveDay] = React.useState<string>("all");

  const sec = sections[activeSection];

  const rows = React.useMemo<SlotRow[]>(() => {
    const out: SlotRow[] = [];
    sec.venues.forEach((v) =>
      v.groups.forEach((g) =>
        g.slots.forEach((s) => {
          out.push({
            day: s.day,
            time: s.time,
            note: s.note,
            groupName: g.name,
            venueName: v.name,
          });
        })
      )
    );
    return out;
  }, [sec]);

  const weekOrder = [
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
    "Niedziela",
  ];

  const days = React.useMemo(() => {
    const set = new Set<string>();
    rows.forEach((r) => set.add(r.day));
    return Array.from(set).sort(
      (a, b) => weekOrder.indexOf(a) - weekOrder.indexOf(b)
    );
  }, [rows]);

  React.useEffect(() => {
    if (days.length) setActiveDay(days[0]);
  }, [activeSection, days]);

  const daysToShow = activeDay === "all" ? days : [activeDay];

  return (
    <Wrap id="harmonogram">
      <Inner>
        <Badge style={{ marginBottom: "30px" }}>Harmonogram zajęć</Badge>

        <Tabs>
          {sections.map((s, i) => (
            <Tab
              key={s.key}
              active={i === activeSection}
              onClick={() => setActiveSection(i)}
            >
              <img src={icons[s.key]} alt="" />
              {s.title}
            </Tab>
          ))}
        </Tabs>

        <HeaderRow>
          <SectionTitle>
            <img src={icons[sec.key]} width={60} height={60} alt="" />
            <div>
              <h2>{sec.title}</h2>
              <p>{sec.description}</p>
            </div>
          </SectionTitle>

          <DayFilter>
            <AllDaysButton
              active={activeDay === "all"}
              onClick={() => setActiveDay("all")}
            >
              Wszystkie dni
            </AllDaysButton>

            {days.map((d) => (
              <DayButton
                key={d}
                active={activeDay === d}
                onClick={() => setActiveDay(d)}
              >
                {d}
              </DayButton>
            ))}
          </DayFilter>
        </HeaderRow>

        <Board>
          {/* NAGŁÓWEK KOLUMN – RAZ NA CAŁĄ TABLICĘ */}

          {daysToShow.map((day) => {
            const dayRows = rows.filter((r) => r.day === day);
            if (!dayRows.length) return null;

            return (
              <DayBlock key={day}>
                {activeDay === "all" && <DayLabel>{day}</DayLabel>}
                <TableHeader>
                  <div>Godzina</div>
                  <div>Grupa</div>
                  <div>Lokalizacja</div>
                </TableHeader>
                {dayRows.map((r, i) => (
                  <Row key={day + i}>
                    <Time>{r.time}</Time>
                    <GroupName>{r.groupName}</GroupName>
                    <Extra>
                      {r.venueName}
                      {r.note ? ` — ${r.note}` : ""}
                    </Extra>
                  </Row>
                ))}
              </DayBlock>
            );
          })}
        </Board>

        <GoCamps href="https://www.sharkstravel.pl" target="_blank">
          <p>Obozy ➜ przejdź na stronę SharksTravel.pl</p>
        </GoCamps>
        <LinksSpan>{" ● "}</LinksSpan>
        <GoCamps href="https://www.probasket.pl" target="_blank">
          PRO-BASKET ➜ przejdź na stronę probasketcamp.pl
        </GoCamps>
      </Inner>
    </Wrap>
  );
}
