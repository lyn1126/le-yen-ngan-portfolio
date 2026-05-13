import { ClipboardList, Sparkles } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Profile } from "@/data/profile";

import { SectionShell } from "./section-shell";

export function PracticeProjects({ profile }: { profile: Profile }) {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Practice projects"
      description="Các bài thực hành thể hiện cách em tiếp cận công việc vận hành, chuẩn bị dữ liệu và hỗ trợ khách hàng."
    >
      <div className="grid gap-4 xl:grid-cols-3">
        {profile.projects.map((project) => (
          <Card key={project.title} className="border-primary/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <ClipboardList className="size-4" />
                </div>
                <CardTitle>{project.title}</CardTitle>
              </div>
              <CardDescription className="text-sm leading-7 text-muted-foreground">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <ul className="grid gap-3">
                {project.tasks.map((task) => (
                  <li key={task} className="flex items-start gap-3 text-sm leading-7 text-muted-foreground">
                    <Sparkles className="mt-1 size-4 shrink-0 text-primary" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl bg-secondary/70 p-4">
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  Skills applied
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {project.skills}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
