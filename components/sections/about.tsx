import { CheckCircle2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Profile } from "@/data/profile";

import { SectionShell } from "./section-shell";

export function About({ profile }: { profile: Profile }) {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="Giới thiệu ngắn gọn"
      description="Một vài nét chính về định hướng học tập và cách em tiếp cận công việc vận hành sàn."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {profile.about.map((item) => (
          <Card key={item} className="border-primary/10 bg-background/80">
            <CardContent className="flex h-full flex-col gap-4 pt-4">
              <CheckCircle2 className="size-5 text-primary" />
              <p className="leading-7 text-muted-foreground">{item}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
