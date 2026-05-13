import { Flag, MoveRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Profile } from "@/data/profile";

import { SectionShell } from "./section-shell";

export function CareerObjective({ profile }: { profile: Profile }) {
  return (
    <SectionShell
      id="career-objective"
      eyebrow="Objective"
      title="Mục tiêu nghề nghiệp"
      description="Tập trung vào việc tích lũy trải nghiệm thực tế và phát triển theo hướng vận hành thương mại điện tử."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {profile.objectives.map((objective) => (
          <Card key={objective.title} className="border-primary/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <Flag className="size-4" />
                </div>
                <CardTitle>{objective.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-7 text-muted-foreground">
                {objective.content}
              </CardDescription>
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                <MoveRight className="size-4" />
                <span>Định hướng rõ ràng và thực tế</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
