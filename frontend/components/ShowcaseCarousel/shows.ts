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
    posterSrc: "/static/images/certifications/vnpt-cert.png",
    year: "2025",
    location: "Vietnam (Nationwide)",
    shortSummary: "Ranked Top 3 among 200+ teams in the VNPT AI Hackathon 2025.",
    fullDescription:
      "Achieved a Top 3 finish out of more than 200 teams at VNPT AI Hackathon 2025. Focused on practical AI implementation, rapid prototyping, and collaborative delivery under competition constraints.",
    projectUrl: "/vnpt_ai_project"
  },
  {
    id: "award-02",
    title: "Top 2 / 140 — FPT IoT Challenge",
    subtitle: "Nationwide",
    posterSrc: "/static/images/certifications/fsoft-certi.jpg",
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
    posterSrc: "/static/images/certifications/klu-certi.jpg",
    year: "2025",
    location: "Vietnam (Nationwide)",
    shortSummary: "Top 3 finish in HumanLog 2025 nationwide competition.",
    fullDescription:
      "Achieved Top 3 out of 165 teams in HumanLog 2025. Built an AIoT logistics MVP with hardware-software integration and real-time monitoring.",
    projectUrl: "/klu_hackathon_project"
  },
  {
    id: "award-04",
    title: "Top 10/130+ — Denso Hackathon",
    subtitle: "Nationwide",
    posterSrc: "/static/images/certifications/denso-certi.png",
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
    posterSrc: "/static/images/certifications/rmit-certi.jpg",
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
    posterSrc: "/static/images/certifications/intel-certi.pdf",
    year: "2025",
    location: "Global",
    shortSummary: "Certified participant in Intel AI Global Challenge.",
    fullDescription:
      "Completed the Intel AI Global Challenge track and received official certification. Built AI solutions aligned with real-world impact and deployment constraints.",
    projectUrl: "/intel_ai_project"
  }
];

export const galleryItems: ShowItem[] = [
  {
    id: "gallery-01",
    title: "MeetMate",
    subtitle: "Banner",
    posterSrc: "/static/images/vnpt-ai/vnpt-ai-banner.png",
    year: "MeetMate",
    location: "VNPT AI Hackathon 2025",
    shortSummary: "Product banner snapshot.",
    fullDescription: "The MeetMate SAAR banner used across the hackathon showcase.",
    projectUrl: "/static/images/vnpt-ai/vnpt-ai-banner.png"
  },
  {
    id: "gallery-02",
    title: "System Map",
    subtitle: "Overview",
    posterSrc: "/static/images/vnpt-ai/meetmate_architect_1.png",
    year: "Architecture",
    location: "Full-stack view",
    shortSummary: "End-to-end system overview.",
    fullDescription: "Full-stack system architecture overview for MeetMate SAAR.",
    projectUrl: "/static/images/vnpt-ai/meetmate_architect_1.png"
  },
  {
    id: "gallery-03",
    title: "Deployment",
    subtitle: "Security",
    posterSrc: "/static/images/vnpt-ai/meetmate_architect_2.png",
    year: "Architecture",
    location: "Deployment layer",
    shortSummary: "Deployment & security layout.",
    fullDescription: "Deployment layers and security architecture for enterprise rollout.",
    projectUrl: "/static/images/vnpt-ai/meetmate_architect_2.png"
  },
  {
    id: "gallery-04",
    title: "Integration",
    subtitle: "Ecosystem",
    posterSrc: "/static/images/vnpt-ai/meetmate_architect_3.png",
    year: "Architecture",
    location: "System integration",
    shortSummary: "Integration layers and services.",
    fullDescription: "Integration map across services, storage, and tool workflows.",
    projectUrl: "/static/images/vnpt-ai/meetmate_architect_3.png"
  },
  {
    id: "gallery-05",
    title: "SAAR Flow",
    subtitle: "AI Core",
    posterSrc: "/static/images/vnpt-ai/meetmate_SAARchitect.png",
    year: "AI Architecture",
    location: "Agentic RAG",
    shortSummary: "Stage-aware AI architecture.",
    fullDescription: "Stage-aware agentic adaptive RAG architecture diagram.",
    projectUrl: "/static/images/vnpt-ai/meetmate_SAARchitect.png"
  }
];
