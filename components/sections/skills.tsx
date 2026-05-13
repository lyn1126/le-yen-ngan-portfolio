import { BadgeCheck } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Profile } from "@/data/profile";

import { SectionShell } from "./section-shell";

export function Skills({ profile }: { profile: Profile }) {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="Kỹ năng phù hợp với vị trí"
      description="Những nhóm kỹ năng em đang rèn luyện để hỗ trợ tốt các công việc vận hành, dữ liệu và chăm sóc khách hàng."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {profile.skills.map((group) => (
          <Card key={group.title} className="border-primary/10">
            <CardHeader>
              <CardTitle>{group.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-muted-foreground">
                    <BadgeCheck className="mt-1 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
