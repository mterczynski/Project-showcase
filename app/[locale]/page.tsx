import About from "@/components/About";
import Commercial_projects from "@/components/Commercial_projects";
import Message from "@/components/Message";
import Nav from "@/components/Nav";
import PersonalProjects from "@/components/PersonalProjects";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pl" }];
}

export default async function Home() {
  return (
    <>
      <Nav />
      <About />
      <Commercial_projects />
      <Message />
      <PersonalProjects />
    </>
  );
}
