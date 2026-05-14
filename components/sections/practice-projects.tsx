import { ClipboardList, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Profile } from "@/data/profile";

import { SectionShell } from "./section-shell";

export function PracticeProjects({ profile }: { profile: Profile }) {
  return (
    <SectionShell
      id="projects"
      eyebrow="Work Samples"
      title="Relevant practice"
      description="Thay cho một phần 'project' chung chung, đây là các case practice thể hiện cách em tiếp cận công việc vận hành gần với thực tế."
    >
      <div className="grid gap-5">
        {profile.projects.map((project, index) => (
          <article
            key={project.title}
            className="grid gap-6 rounded-[2rem] border border-border/70 bg-white/82 p-6 sm:p-8 lg:grid-cols-[9rem_minmax(0,1fr)]"
          >
            <div className="space-y-3">
              <p className="text-[11px] font-semibold tracking-[0.24em] text-primary uppercase">
                Case 0{index + 1}
              </p>
              <div className="rounded-2xl bg-primary/8 p-4 text-sm leading-7 text-foreground/88">
                {project.context}
              </div>
            </div>

            <div className="space-y-5">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <ClipboardList className="size-4" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                </div>
                <p className="text-[15px] leading-8 text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_18rem]">
                <ul className="grid gap-3">
                  {project.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-3 text-[15px] leading-8 text-muted-foreground">
                      <Sparkles className="mt-1 size-4 shrink-0 text-primary" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-4 rounded-[1.5rem] border border-primary/12 bg-[linear-gradient(180deg,rgba(239,246,255,0.72),rgba(255,255,255,0.96))] p-5">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.24em] text-primary uppercase">
                      Outcome
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {project.outcome}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.24em] text-primary uppercase">
                      Skills
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.skills.split(", ").map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-white/85 text-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
