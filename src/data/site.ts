export type Founder = {
  name: string;
  role: string;
  biography: string;
};

export const site = {
  name: "Luminate Projects",
  descriptor: "Creative Project Management Studio",
  positioning:
    "A creative project management studio dedicated to designing and delivering meaningful projects, events, workshops, exhibitions, and learning experiences.",
  statement: "From idea to impact.",
  valueProposition:
    "A structured and creative partnership that helps teams deliver well-managed, engaging, and meaningful projects.",
  industries: [
    "Art and cultural organizations",
    "Galleries and curators",
    "Artists and creative communities",
    "Universities and education institutions",
    "SMEs and corporate organizations",
    "NGOs, INGOs, and embassies",
    "Social events and community programs",
  ],
  founder: {
    name: "Lwin",
    role: "Event Planning Manager",
    biography:
      "Lwin is an Event Planning Manager and the founder of Luminate Projects. She brings together structured project management, creative thinking, and hands-on coordination to help teams deliver meaningful events, educational programs, exhibitions, and community experiences. Her approach focuses on clear communication, thoughtful planning, and reliable execution from the first idea through final evaluation.",
  } satisfies Founder,
  pricing: {
    startingAtUsd: 80,
    note: "Custom quotations are provided based on project scope, duration, location, participant count, required resources, coordination level, and delivery requirements.",
  },
} as const;
