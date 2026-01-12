export type ShowItem = {
  id: string;
  title: string;
  subtitle: string;
  posterSrc: string;
  year: string;
  location: string;
  shortSummary: string;
  fullDescription: string;
  projectUrl: string;
};

export const shows: ShowItem[] = [
  {
    id: "award-01",
    title: "Top 3 / 200+ — VNPT AI Hackathon",
    subtitle: "Nationwide",
    posterSrc: "/static/images/",
    year: "2025",
    location: "Vietnam (Nationwide)",
    shortSummary: "Ranked Top 3 among 200+ teams in the VNPT AI Hackathon 2025.",
    fullDescription:
      "Achieved a Top 3 finish out of more than 200 teams at VNPT AI Hackathon 2025. Focused on practical AI implementation, rapid prototyping, and collaborative delivery under competition constraints.",
    projectUrl: "/#projects"
  },
  {
    id: "award-02",
    title: "Top 2 / 140 — FPT IoT Challenge",
    subtitle: "Nationwide",
    posterSrc: "/static/images/",
    year: "2025",
    location: "Vietnam (Nationwide)",
    shortSummary: "Top 2 in FPT IoT Challenge 2025 among 140 teams.",
    fullDescription:
      "Placed Top 2 out of 140 teams in FPT IoT Challenge 2025. Delivered an end-to-end AIoT solution and led system integration under tight timelines.",
    projectUrl: "/iot_challenge_product"
  },
  {
    id: "award-03",
    title: "Top 3 / 165 — HumanLog 2025",
    subtitle: "Nationwide",
    posterSrc: "/static/images/",
    year: "2025",
    location: "Vietnam (Nationwide)",
    shortSummary: "Top 3 finish in HumanLog 2025 nationwide competition.",
    fullDescription:
      "Achieved Top 3 out of 165 teams in HumanLog 2025. Built an AIoT logistics MVP with hardware-software integration and real-time monitoring.",
    projectUrl: "/klu_hackathon_project"
  },
  {
    id: "award-04",
    title: "Top 10 — Denso Hackathon",
    subtitle: "Nationwide",
    posterSrc: "/static/images/hero/",
    year: "2025",
    location: "Vietnam (Nationwide)",
    shortSummary: "Selected Top 10 at Denso Hackathon 2025.",
    fullDescription:
      "Recognized as a Top 10 team at Denso Hackathon 2025. Focused on solution feasibility, engineering rigor, and deployment readiness.",
    projectUrl: "/#projects"
  },
  {
    id: "award-05",
    title: "Top 10 / 132 — RMIT Hackathon",
    subtitle: "City Level",
    posterSrc: "/static/images/hero/",
    year: "2025",
    location: "Ho Chi Minh City",
    shortSummary: "Top 10 placement in RMIT Hackathon 2025.",
    fullDescription:
      "Placed Top 10 out of 132 teams in the RMIT Hackathon 2025. Delivered a production-minded concept with clear system design and validation.",
    projectUrl: "/rmit_hackathon_project"
  },
  {
    id: "award-06",
    title: "Intel AI Global Challenge Certification",
    subtitle: "Certification",
    posterSrc: "/static/images/",
    year: "2025",
    location: "Global",
    shortSummary: "Certified participant in Intel AI Global Challenge.",
    fullDescription:
      "Completed the Intel AI Global Challenge track and received official certification. Built AI solutions aligned with real-world impact and deployment constraints.",
    projectUrl: "/intel_ai_project"
  }
];
