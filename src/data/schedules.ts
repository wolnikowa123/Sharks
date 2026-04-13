export type Slot = { day: string; time: string; note?: string };
export type Group = { name: string; slots: Slot[] };
export type Venue = { name: string; address?: string; groups: Group[] };
export type Section = {
  key: "basketball" | "volleyball" | "football";
  title: string;
  description: string;
  venues: Venue[];
};

export const sections: Section[] = [
  {
    key: "basketball",
    title: "Koszykówka",
    description:
      "Sprawność, zwinność, koncentracja. Zajęcia koszykówki z Sharks, to trening, który łączy dobrą zabawę oraz zdrowy rozwój - od podstaw po grupy zaawansowane:",
    venues: [
      {
        name: "ZSP2, ul. Staffa 10",
        groups: [
          {
            name: "Grupa 5–7 lat",
            slots: [
              { day: "Wtorek", time: "17:00–18:00" },
              { day: "Sobota", time: "11:00–12:00" },
            ],
          },
          {
            name: "Grupa 8–12 lat",
            slots: [
              { day: "Poniedziałek", time: "18:00–19:30" },
              { day: "Środa", time: "17:00–18:30" },
              { day: "Sobota", time: "12:00–13:30" },
            ],
          },
          {
            name: "Grupa 13–15 lat",
            slots: [
              { day: "Środa", time: "18:30–19:50" },
              { day: "Sobota", time: "12:00–13:30" },
              {
                day: "Poniedziałek",
                time: "18:00–19:30",
                note: "Trening dodatkowy",
              },
            ],
          },
        ],
      },
      {
        name: "Pustki Cisowskie — SP16, ul. Chabrowa",
        groups: [
          {
            name: "Grupa 5–8 lat",
            slots: [
              { day: "Poniedziałek", time: "17:30–19:00" },
              { day: "Środa", time: "17:30–19:00" },
            ],
          },
          {
            name: "Grupa 8–14 lat",
            slots: [
              { day: "Poniedziałek", time: "17:30–19:00" },
              { day: "Środa", time: "17:30–19:00" },
            ],
          },
        ],
      },
      {
        name: "Witomino/Wiczlino — 1 ALO, ul. Narcyzowa 6",
        groups: [
          {
            name: "Grupa 5–8 lat",
            slots: [
              { day: "Poniedziałek", time: "16:00–17:30" },
              { day: "Czwartek", time: "17:00–18:30" },
            ],
          },
          {
            name: "Grupa 8–14 lat",
            slots: [
              { day: "Poniedziałek", time: "16:00–17:30" },
              { day: "Czwartek", time: "17:00–18:30" },
            ],
          },
          {
            name: "Grupa 5-13 lat",
            slots: [{ day: "Czwartek", time: "16:00–17:30" }],
          },
        ],
      },
      {
        name: "Rumia — SP10 ul. Górnicza 19 (Poniedziałek)",
        groups: [
          {
            name: "Grupa 5–8",
            slots: [{ day: "Poniedziałek", time: "17:00–18:30" }],
          },
          {
            name: "Grupa 9–13",
            slots: [{ day: "Poniedziałek", time: "17:00–18:30" }],
          },
          {
            name: "Grupa 13–15",
            slots: [{ day: "Poniedziałek", time: "18:30–20:00" }],
          },
          {
            name: "Grupa 16–30+",
            slots: [{ day: "Poniedziałek", time: "18:30–20:00" }],
          },
        ],
      },
      {
        name: "Gdynia SP20, ul. Starodworcowa 36",
        groups: [
          {
            name: "Grupa 5–8 lat",
            slots: [{ day: "Piątek", time: "17:30–18:30" }],
          },
        ],
      },
      {
        name: "Rumia — SP8 ul. Radziewiczówny (Wtorek)",
        groups: [
          {
            name: "Grupa 5–8",
            slots: [{ day: "Wtorek", time: "18:00–19:30" }],
          },
          {
            name: "Grupa 9–13",
            slots: [{ day: "Wtorek", time: "18:00–19:30" }],
          },
          {
            name: "Grupa 13–15",
            slots: [{ day: "Wtorek", time: "19:30–21:00" }],
          },
          {
            name: "Grupa 16–30+",
            slots: [{ day: "Wtorek", time: "19:30–21:00" }],
          },
        ],
      },
    ],
  },
  {
    key: "football",
    title: "Piłka nożna",
    description:
      "Siła, koordynacja, praca zespołowa. Na zajęciach z Sharks twoje dziecko za dobrze się bawi, żeby siedzieć na ławce. Wybierz grupę wiekową i pasującą Ci lokalizację:",
    venues: [
      {
        name: "SP20, ul. Starodworcowa",
        groups: [
          {
            name: "Treningi",
            slots: [
              { day: "Wtorek", time: "17:00–18:30" },
              { day: "Sobota", time: "09:00–10:30" },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "volleyball",
    title: "Siatkówka",
    description:
      "Zwinność, sprawność, pewność siebie. Na zajęciach z Sharks liczy się rozwój i dobra zabawa, a nie rankingi i tabelki. Wybierz pasującą grupę i poziom zaawansowania:",
    venues: [
      {
        name: "SP20, ul. Starodworcowa",
        groups: [
          {
            name: "Grupy zaawansowane 16–30+",
            slots: [{ day: "Wtorek", time: "18:30–20:00" }],
          },
          {
            name: "14–16 lat i 17–20+",
            slots: [{ day: "Czwartek", time: "17:00–18:30" }],
          },
          {
            name: "7–13 i 14–16 lat",
            slots: [{ day: "Piątek", time: "17:30–18:30" }],
          },
          {
            name: "Wspólny trening",
            slots: [{ day: "Sobota", time: "11:00–12:30" }],
          },
        ],
      },
      {
        name: "ZSP2, ul. Staffa 10",
        groups: [
          {
            name: "7–13 i 14–16 lat",
            slots: [{ day: "Wtorek", time: "18:00–19:30" }],
          },
        ],
      },
    ],
  },
];
