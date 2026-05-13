import { ShieldCheck } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Profile } from "@/data/profile";

import { SectionShell } from "./section-shell";

export function WhyMe({ profile }: { profile: Profile }) {
  return (
    <SectionShell
      id="why-me"
      eyebrow="Why Me"
      title="Lý do em phù hợp"
      description="Những điểm mạnh nổi bật mà em muốn mang vào vị trí E-commerce Operations."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {profile.whyMe.map((item) => (
          <Card key={item.title} className="border-primary/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <ShieldCheck className="size-4" />
                </div>
                <CardTitle>{item.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-muted-foreground">{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
