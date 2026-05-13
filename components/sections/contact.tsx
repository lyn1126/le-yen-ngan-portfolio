import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Profile } from "@/data/profile";

import { SectionShell } from "./section-shell";

export function Contact({ profile }: { profile: Profile }) {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Liên hệ"
      description="Em sẵn sàng trao đổi thêm về cơ hội internship hoặc part-time trong lĩnh vực E-commerce Operations."
    >
      <Card className="border-primary/10 bg-gradient-to-br from-primary/6 via-background to-background">
        <CardHeader>
          <CardTitle>Kết nối nhanh</CardTitle>
          <CardDescription className="text-sm leading-7 text-muted-foreground">
            Hiện tại em ưu tiên các công việc tại TP.HCM, remote hoặc hybrid và có thể bắt
            đầu với các đầu việc hỗ trợ vận hành cơ bản.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-background/80 p-4 ring-1 ring-border">
              <Mail className="size-5 text-primary" />
              <p className="mt-4 text-sm font-medium text-foreground">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-2 block break-all text-sm leading-7 text-muted-foreground transition-colors hover:text-primary"
              >
                {profile.email}
              </a>
            </div>
            <div className="rounded-2xl bg-background/80 p-4 ring-1 ring-border">
              <Phone className="size-5 text-primary" />
              <p className="mt-4 text-sm font-medium text-foreground">Phone</p>
              <a
                href={`tel:${profile.phone}`}
                className="mt-2 block text-sm leading-7 text-muted-foreground transition-colors hover:text-primary"
              >
                {profile.phone}
              </a>
            </div>
            <div className="rounded-2xl bg-background/80 p-4 ring-1 ring-border">
              <MapPin className="size-5 text-primary" />
              <p className="mt-4 text-sm font-medium text-foreground">Location</p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{profile.location}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button size="lg" asChild>
              <a href={`mailto:${profile.email}`}>
                <Mail data-icon="inline-start" />
                Send email
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`tel:${profile.phone}`}>
                <Phone data-icon="inline-start" />
                Call now
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </SectionShell>
  );
}
