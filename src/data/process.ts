export type ProcessStep = {
  number: number;
  title: string;
  description: string;
};

export const processSteps: readonly ProcessStep[] = [
  {
    number: 1,
    title: "Discover",
    description: "Goals, audience, challenges, and resources.",
  },
  {
    number: 2,
    title: "Define",
    description: "Scope, priorities, responsibilities, and outcomes.",
  },
  {
    number: 3,
    title: "Plan",
    description: "Timeline, task structure, logistics, and risk plan.",
  },
  {
    number: 4,
    title: "Coordinate",
    description: "Teams, partners, vendors, speakers, and resources.",
  },
  {
    number: 5,
    title: "Deliver",
    description: "Implementation, quality, schedules, and operations.",
  },
  {
    number: 6,
    title: "Evaluate",
    description: "Feedback, outcomes, lessons, and recommendations.",
  },
];
