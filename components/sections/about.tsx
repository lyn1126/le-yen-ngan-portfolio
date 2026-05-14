import { CheckCircle2 } from "lucide-react";

import { Profile } from "@/data/profile";

import { SectionShell } from "./section-shell";

export function About({ profile }: { profile: Profile }) {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="Giới thiệu ngắn gọn"
      description="Tập trung vào định hướng nghề nghiệp và cách em tiếp cận những công việc đòi hỏi sự ổn định, cẩn thận và rõ quy trình."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {profile.about.map((item) => (
          <article
            key={item}
            className="rounded-[1.75rem] border border-border/70 bg-white/75 p-6 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.24)]"
          >
            <CheckCircle2 className="size-5 text-primary" />
            <p className="mt-5 text-[15px] leading-8 text-muted-foreground">{item}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
