import { BookOpen, GraduationCap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Profile } from "@/data/profile";

import { SectionShell } from "./section-shell";

export function Education({ profile }: { profile: Profile }) {
  const { education } = profile;

  return (
    <SectionShell
      id="education"
      eyebrow="Education"
      title="Học vấn"
      description="Thông tin học tập hiện tại và các mảng kiến thức liên quan đến công việc E-commerce Operations."
    >
      <Card className="border-primary/10">
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <GraduationCap className="size-4" />
                </div>
                <CardTitle>{education.school}</CardTitle>
              </div>
              <CardDescription className="text-sm leading-7 text-muted-foreground">
                {education.major}
              </CardDescription>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {education.year}
              </Badge>
              <Badge variant="outline">{education.duration}</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <BookOpen className="size-4 text-primary" />
            <span>Kiến thức liên quan</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {education.relatedKnowledge.map((item) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </SectionShell>
  );
}
