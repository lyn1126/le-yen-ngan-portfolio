import { ArrowDown } from "lucide-react";

import { Profile } from "@/data/profile";

import { SectionShell } from "./section-shell";

export function Workflow({ profile }: { profile: Profile }) {
  return (
    <SectionShell
      id="workflow"
      eyebrow="Workflow"
      title="Sample workflow"
      description="Một ví dụ đơn giản về cách em hình dung và tiếp cận các đầu việc vận hành theo từng bước rõ ràng."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {profile.workflow.map((step, index) => (
          <article
            key={step}
            className="rounded-[1.5rem] border border-border/70 bg-white/78 p-5"
          >
            <p className="text-[11px] font-semibold tracking-[0.24em] text-primary uppercase">
              Step 0{index + 1}
            </p>
            <p className="mt-4 text-[15px] leading-8 text-foreground">{step}</p>
            {index < profile.workflow.length - 1 ? (
              <ArrowDown className="mt-6 size-4 text-primary md:hidden" />
            ) : null}
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
