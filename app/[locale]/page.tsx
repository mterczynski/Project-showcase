import About from "@/components/About";
import Commercial_projects from "@/components/Commercial_projects";
import Message from "@/components/Message";
import Nav from "@/components/Nav";
import PersonalProjects from "@/components/PersonalProjects";
import { updateLandingPageViews } from "@/lib/updateview";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pl" }];
}

export default async function Home() {
  const newCount = await updateLandingPageViews();
  console.log(`${newCount} views`);
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
