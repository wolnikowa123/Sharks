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
            name: "U10 chłopcy i U11 dziewczynki",
            slots: [{ day: "Poniedziałek", time: "18:00–19:30" }],
          },
          {
            name: "U10 chłopcy i dziewczynki",
            slots: [{ day: "Wtorek", time: "17:00–18:00" }],
          },
          {
            name: "U10 chłopcy i U11 dziewczynki",
            slots: [{ day: "Środa", time: "17:00–18:30" }],
          },
          {
            name: "U11 chłopcy i U13 chłopcy",
            slots: [{ day: "Środa", time: "18:00–19:30" }],
          },
          {
            name: "U10 chłopcy i U10 dziewczynki",
            slots: [{ day: "Sobota", time: "11:00–12:00" }],
          },
          {
            name: "U11 chłopcy i U11 dziewczynki",
            slots: [{ day: "Sobota", time: "12:00–13:30" }],
          },
        ],
      },
      {
        name: "SP20, ul. Starodworcowa",
        groups: [
          {
            name: "U11 i U13",
            slots: [{ day: "Poniedziałek", time: "18:15–19:45" }],
          },
          {
            name: "U10 chłopcy i U10 dziewczynki",
            slots: [{ day: "Piątek", time: "17:00–18:00" }],
          },
        ],
      },
      {
        name: "ZSP3, ul. Nagietkowa",
        groups: [
          {
            name: "U11 chłopcy i U13 chłopcy",
            slots: [{ day: "Sobota", time: "12:30–14:00" }],
          },
        ],
      },
      {
        name: "1 ALO, ul. Narcyzowa",
        groups: [
          {
            name: "U10 i U11 dziewczynki",
            slots: [
              { day: "Poniedziałek", time: "17:00–18:30" },
              { day: "Czwartek", time: "17:00–18:30" },
            ],
          },
          {
            name: "U10 i U11 chłopcy",
            slots: [
              { day: "Poniedziałek", time: "17:00–18:30" },
              { day: "Czwartek", time: "17:00–18:30" },
            ],
          },
        ],
      },
      {
        name: "CZKiU Nr 2, ul. Dąbka",
        groups: [
          {
            name: "U10, U11 chłopcy i dziewczynki oraz U13 chłopcy",
            slots: [{ day: "Środa", time: "16:30–18:00" }],
          },
        ],
      },
      {
        name: "SP16, ul. Chabrowa",
        groups: [
          {
            name: "U10, U11 chłopcy i dziewczynki oraz U13 chłopcy",
            slots: [
              { day: "Poniedziałek", time: "17:30–19:00" },
              { day: "Środa", time: "17:30–19:00" },
            ],
          },
        ],
      },
      {
        name: "Gdańsk, ul. Człuchowska 6, SP12",
        groups: [
          {
            name: "Wiek 13–15 lat i 16+",
            slots: [{ day: "Czwartek", time: "19:05–20:35" }],
          },
          {
            name: "Wiek 4–8 lat i 9–12 lat",
            slots: [{ day: "Sobota", time: "12:00–13:30" }],
          },
        ],
      },
      {
        name: "Rumia — SP10, ul. Górnicza 19",
        groups: [
          {
            name: "5–8 lat",
            slots: [{ day: "Poniedziałek", time: "17:00–18:30" }],
          },
          {
            name: "9–12 lat",
            slots: [{ day: "Poniedziałek", time: "17:00–18:30" }],
          },
          {
            name: "13–15 lat",
            slots: [{ day: "Poniedziałek", time: "18:30–20:00" }],
          },
          {
            name: "16+",
            slots: [{ day: "Poniedziałek", time: "18:30–20:00" }],
          },
        ],
      },
      {
        name: "Salezjańskie LA, ul. Świętojańska",
        groups: [
          {
            name: "5–8 lat, 9–12 lat, 13–15 lat",
            slots: [{ day: "Sobota", time: "11:30–13:00" }],
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
            name: "Trening",
            slots: [
              { day: "Wtorek", time: "17:00–18:30" },
              { day: "Sobota", time: "09:15–10:45" },
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
        name: "ZSP2, ul. Staffa 10",
        groups: [
          {
            name: "7–14 lat",
            slots: [
              { day: "Wtorek", time: "18:00–19:00" },
              { day: "Piątek", time: "17:30–19:00" },
            ],
          },
        ],
      },
      {
        name: "SP20, ul. Starodworcowa",
        groups: [
          {
            name: "15–18+ lat",
            slots: [
              { day: "Wtorek", time: "18:30–20:00" },
              { day: "Czwartek", time: "18:00–19:30" },
              { day: "Sobota", time: "10:45–12:15" },
            ],
          },
        ],
      },
    ],
  },
];
