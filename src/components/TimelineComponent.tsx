// in App.tsx
import Timeline from "./Timeline";
import type { TimelineEntry } from "./Timeline";

const myEvents: TimelineEntry[] = [
  {
    date: "August 2024 - Present",
    title: "M.S. in CS",
    subtitle: "Penn State University",
    description: "Took courses around machine learning, AI, OS, DSA, and Computer Architecture.",
    iconType: "education",
  },
  {
    date: "July 2022 - August 2024",
    title: "Software Engineer",
    subtitle: "Fareportal",
    description: "Developed backend and frontend solutions to automate transactions, prevent fraud, and optimize database performance, significantly improving speed, accuracy, and security.",
    iconType: "work",
  },
  {
    date: "Jan 2022 - June 2022",
    title: "Software Engineer Intern",
    subtitle: "Fareportal",
    description: "Built proof-of-concepts, wrote unit tests and worked on migration to kubernetes.",
    iconType: "work",
  },
  {
    date: "July 2018 - July 2022",
    title: "BTech. in CSE",
    subtitle: "Vellore Institue Of Technology, VIT",
    iconType: "education",
  },
];

export default function TimelineComponent() {
  return (
    <>
      {/* other sections */}
      <Timeline entries={myEvents} />
      {/* other sections */}
    </>
  );
}
