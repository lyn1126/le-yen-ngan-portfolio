import { About } from "@/components/sections/about";
import { CareerObjective } from "@/components/sections/career-objective";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { PracticeProjects } from "@/components/sections/practice-projects";
import { Skills } from "@/components/sections/skills";
import { WhyMe } from "@/components/sections/why-me";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_32%),linear-gradient(180deg,_rgba(239,246,255,0.65)_0%,_rgba(255,255,255,0.95)_22%,_rgba(255,255,255,1)_100%)]">
      <Header profile={profile} />
      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-20 sm:px-6 lg:gap-24 lg:px-8">
        <Hero profile={profile} />
        <About profile={profile} />
        <CareerObjective profile={profile} />
        <Skills profile={profile} />
        <Education profile={profile} />
        <PracticeProjects profile={profile} />
        <WhyMe profile={profile} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}
