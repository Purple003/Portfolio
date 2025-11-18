export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "ENS Marrakech",
    degree: "Master",
    field: "Technologie Émergente en Éducation (TEE)",
    location: "Marrakech, Maroc",
    start: "2024-09",
    end: "2026-07"
  },
  {
    school: "ENS Marrakech",
    degree: "Licence",
    field: "Informatique",
    location: "Marrakech, Maroc",
    start: "2021-09",
    end: "2024-07"
  }
];

