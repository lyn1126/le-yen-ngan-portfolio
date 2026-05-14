import { GraduationCap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Profile } from "@/data/profile";

import { SectionShell } from "./section-shell";

export function Education({ profile }: { profile: Profile }) {
  const { education } = profile;

  return (
    <SectionShell
      id="education"
      eyebrow="Education"
      title="Học vấn"
      description="Phần này nên giữ gọn nhưng phải đủ tín hiệu về nền tảng học tập và các môn liên quan."
    >
      <div className="space-y-5 rounded-[1.9rem] border border-border/70 bg-white/78 p-6 sm:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <GraduationCap className="size-4" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{education.school}</h3>
            </div>
            <p className="text-[15px] leading-8 text-muted-foreground">{education.major}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-primary/10 px-3 text-primary">
              {education.year}
            </Badge>
            <Badge variant="outline" className="px-3">
              {education.duration}
            </Badge>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {education.relatedKnowledge.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border/70 bg-background/78 px-4 py-3 text-sm text-foreground"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
