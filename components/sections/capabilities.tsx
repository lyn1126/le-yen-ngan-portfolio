import { ArrowUpRight, CheckCheck } from "lucide-react";

import { Profile } from "@/data/profile";

import { SectionShell } from "./section-shell";

export function Capabilities({ profile }: { profile: Profile }) {
  return (
    <SectionShell
      id="capabilities"
      eyebrow="Capabilities"
      title="What I can help with"
      description="Những đầu việc gần với vị trí E-commerce Operations mà em có thể bắt đầu hỗ trợ ở mức cơ bản."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {profile.whatICanHelpWith.map((item, index) => (
          <article
            key={item}
            className="group rounded-[1.5rem] border border-border/70 bg-white/78 p-5 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                <p className="text-[11px] font-semibold tracking-[0.24em] text-primary uppercase">
                  0{index + 1}
                </p>
                <p className="text-[15px] leading-8 text-foreground">{item}</p>
              </div>
              <CheckCheck className="mt-1 size-4 shrink-0 text-primary" />
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <ArrowUpRight className="size-4 text-primary" />
              <span>Phù hợp với vai trò intern / part-time</span>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
