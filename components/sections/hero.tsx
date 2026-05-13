import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Profile } from "@/data/profile";

export function Hero({ profile }: { profile: Profile }) {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section id="hero" className="pt-8 sm:pt-12">
      <div className="grid gap-8 rounded-[2rem] border border-primary/10 bg-gradient-to-br from-primary/8 via-background to-background p-6 shadow-[0_24px_80px_-40px_rgba(37,99,235,0.45)] sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {profile.badges.map((badge) => (
              <Badge key={badge} variant="secondary" className="bg-primary/10 text-primary">
                {badge}
              </Badge>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.24em] text-primary uppercase">
              Portfolio
            </p>
            <div className="space-y-3">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <p className="text-xl font-medium text-foreground/80 sm:text-2xl">
                {profile.headline}
              </p>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {profile.intro}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href={`mailto:${profile.email}`}>
                <Mail data-icon="inline-start" />
                Liên hệ qua email
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">
                Xem dự án thực hành
                <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </div>

        <div className="flex h-full flex-col justify-between gap-6 rounded-[1.5rem] border border-border/70 bg-background/90 p-6">
          <div className="flex items-center gap-4">
            <Avatar size="lg" className="size-16 bg-primary/10 text-primary">
              <AvatarFallback className="bg-primary/10 font-semibold text-primary">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-lg font-semibold text-foreground">{profile.role}</p>
              <p className="text-sm text-muted-foreground">
                Ứng tuyển internship / part-time
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl bg-secondary/80 p-4">
              <p className="text-sm font-medium text-muted-foreground">Định hướng</p>
              <p className="mt-2 text-sm leading-7 text-foreground">
                E-commerce Operations với thế mạnh ở sự cẩn thận, học hỏi nhanh và theo
                sát quy trình.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl bg-primary/5 p-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="size-4 text-primary" />
                <a href={`tel:${profile.phone}`} className="transition-colors hover:text-primary">
                  {profile.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="size-4 text-primary" />
                <a
                  href={`mailto:${profile.email}`}
                  className="break-all transition-colors hover:text-primary"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
