import { Flag, MoveRight } from "lucide-react";

import { Profile } from "@/data/profile";

import { SectionShell } from "./section-shell";

export function CareerObjective({ profile }: { profile: Profile }) {
  return (
    <SectionShell
      id="career-objective"
      eyebrow="Objective"
      title="Mục tiêu nghề nghiệp"
      description="Viết theo hướng thực tế, thể hiện rõ em đang tìm cơ hội gì và muốn phát triển thành ai trong mảng vận hành."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {profile.objectives.map((objective) => (
          <article
            key={objective.title}
            className="rounded-[1.75rem] border border-primary/12 bg-[linear-gradient(180deg,rgba(239,246,255,0.72),rgba(255,255,255,0.96))] p-6"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <Flag className="size-4" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{objective.title}</h3>
            </div>
            <p className="mt-5 text-[15px] leading-8 text-muted-foreground">
              {objective.content}
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
              <MoveRight className="size-4" />
              <span>Định hướng rõ ràng, có thể chuyển thành đầu việc cụ thể</span>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
