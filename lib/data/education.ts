export type EducationEntry = {
  id: string;
  institution: string;
  degreeIds: string[];
};

export const educationEntries: EducationEntry[] = [
  {
    id: "utch",
    institution: "Universidad Tecnológica de Chihuahua",
    degreeIds: ["isc", "tsu"],
  },
];
