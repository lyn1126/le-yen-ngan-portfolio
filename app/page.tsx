import { About } from "@/components/sections/about";
import { Capabilities } from "@/components/sections/capabilities";
import { CareerObjective } from "@/components/sections/career-objective";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { PracticeProjects } from "@/components/sections/practice-projects";
import { Skills } from "@/components/sections/skills";
import { Workflow } from "@/components/sections/workflow";
import { WhyMe } from "@/components/sections/why-me";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div
      id="top"
      className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_26%),radial-gradient(circle_at_top_right,_rgba(147,197,253,0.14),_transparent_22%),linear-gradient(180deg,_rgba(247,250,255,0.92)_0%,_rgba(255,255,255,0.98)_18%,_rgba(255,255,255,1)_100%)]"
    >
      <Header profile={profile} />
      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-20 sm:px-6 lg:gap-24 lg:px-8">
        <Hero profile={profile} />
        <About profile={profile} />
        <CareerObjective profile={profile} />
        <Capabilities profile={profile} />
        <Skills profile={profile} />
        <Education profile={profile} />
        <PracticeProjects profile={profile} />
        <Workflow profile={profile} />
        <WhyMe profile={profile} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}
