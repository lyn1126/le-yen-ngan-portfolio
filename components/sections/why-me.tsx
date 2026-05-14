import { ShieldCheck } from "lucide-react";

import { Profile } from "@/data/profile";

import { SectionShell } from "./section-shell";

export function WhyMe({ profile }: { profile: Profile }) {
  return (
    <SectionShell
      id="why-me"
      eyebrow="What I Bring"
      title="Lý do em phù hợp"
      description="Các điểm mạnh được diễn đạt theo hướng vận hành, giảm cảm tính và tăng tính ứng tuyển."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {profile.whyMe.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.6rem] border border-border/70 bg-white/78 p-6"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <ShieldCheck className="size-4" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            </div>
            <p className="mt-5 text-[15px] leading-8 text-muted-foreground">{item.content}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
