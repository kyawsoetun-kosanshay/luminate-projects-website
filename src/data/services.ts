export type Service = {
  id: string;
  title: string;
  activities: readonly string[];
};

export const services: readonly Service[] = [
  {
    id: "creative-project-management",
    title: "Creative Project Management",
    activities: [
      "Project strategy and planning",
      "Scope and timeline development",
      "Task and responsibility management",
      "Progress monitoring",
      "Evaluation and reporting",
    ],
  },
  {
    id: "event-program-operations",
    title: "Event and Program Operations",
    activities: [
      "Event and activity planning",
      "Operational coordination",
      "Venue, resource, and logistics management",
      "Participant and guest coordination",
      "On-site project support",
    ],
  },
  {
    id: "team-stakeholder-coordination",
    title: "Team and Stakeholder Coordination",
    activities: [
      "Internal team coordination",
      "Speaker and facilitator coordination",
      "Vendor and partner management",
      "Volunteer coordination",
      "Communication and reporting",
    ],
  },
  {
    id: "creative-educational-projects",
    title: "Creative and Educational Projects",
    activities: [
      "Workshop development",
      "Exhibition coordination",
      "Educational program support",
      "Community initiatives",
      "Creative consultation",
    ],
  },
];
