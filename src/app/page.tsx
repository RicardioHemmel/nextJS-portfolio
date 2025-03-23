import { HomeSession } from "./sessions/home";
import { AboutSession } from "./sessions/about"
import { SkillsSession } from "./sessions/skills";
import { ProjectsSession } from "./sessions/projects";
import { ProjectCard } from "../components/projectCard"

export default function Home() {
  return (
    <>
      <HomeSession />
      <AboutSession />
      <SkillsSession />
      <ProjectsSession />
    </>
  );
}