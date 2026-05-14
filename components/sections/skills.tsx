import { BadgeCheck } from "lucide-react";

import { Profile } from "@/data/profile";

import { SectionShell } from "./section-shell";

export function Skills({ profile }: { profile: Profile }) {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="Kỹ năng phù hợp với vị trí"
      description="Thay vì liệt kê chung chung, nhóm kỹ năng được gom theo đúng các phần việc gần với vận hành sàn."
    >
      <div className="grid gap-4 xl:grid-cols-2">
        {profile.skills.map((group) => (
          <article
            key={group.title}
            className="rounded-[1.75rem] border border-border/70 bg-white/78 p-6"
          >
            <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
            <ul className="mt-5 grid gap-3">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-8 text-muted-foreground">
                  <BadgeCheck className="mt-1 size-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
