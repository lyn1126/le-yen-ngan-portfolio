import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Profile } from "@/data/profile";

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section id="hero" className="pt-8 sm:pt-12">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_22rem] xl:grid-cols-[minmax(0,1.3fr)_24rem]">
        <div className="space-y-7">
          <div className="flex flex-wrap gap-2">
            {profile.badges.map((badge) => (
              <Badge
                key={badge}
                variant="secondary"
                className="border border-primary/10 bg-primary/8 px-3 text-primary"
              >
                {badge}
              </Badge>
            ))}
          </div>

          <div className="space-y-5">
            <p className="text-[11px] font-semibold tracking-[0.28em] text-primary uppercase">
              Application Portfolio
            </p>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.04]">
                {profile.name}
              </h1>
              <p className="max-w-3xl text-xl leading-8 text-foreground/85 sm:text-2xl sm:leading-9">
                {profile.headline}
              </p>
            </div>
            <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              {profile.intro}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {profile.quickFacts.map((fact, index) => (
              <div
                key={fact}
                className="rounded-2xl border border-border/70 bg-background/80 p-4 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.22)]"
              >
                <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                  0{index + 1}
                </p>
                <p className="mt-3 text-sm leading-7 text-foreground">{fact}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button size="lg" className="h-11 px-4" asChild>
              <a href={`mailto:${profile.email}`}>
                <Mail data-icon="inline-start" />
                Gửi email
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-11 px-4" asChild>
              <a href="#projects">
                Xem work samples
                <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="h-11 px-4" asChild>
              <a href="#contact">
                <Download data-icon="inline-start" />
                Xem thông tin liên hệ
              </a>
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden border-primary/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(239,246,255,0.82))] shadow-[0_30px_90px_-42px_rgba(37,99,235,0.42)]">
          <CardContent className="flex h-full flex-col gap-6 pt-5">
            <div className="flex items-center gap-4">
              <Avatar size="lg" className="size-16 bg-primary/10 text-primary ring-2 ring-white/90">
                <AvatarImage src="/avatar.jpg" alt={profile.name} />
                <AvatarFallback className="bg-primary/10 font-semibold text-primary">
                  {profile.name.slice(0, 1)}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-lg font-semibold text-foreground">{profile.role}</p>
                <p className="text-sm text-muted-foreground">Ứng tuyển internship / part-time</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-primary/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(239,246,255,0.82))] p-2 shadow-[0_22px_60px_-38px_rgba(37,99,235,0.35)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.3rem] bg-slate-100">
                <Image
                  src="/avatar.jpg"
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover object-center scale-[1.02]"
                  sizes="(min-width: 1280px) 384px, (min-width: 1024px) 352px, 100vw"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/14 to-transparent" />
              </div>
            </div>

            <div className="rounded-[1.4rem] border border-primary/10 bg-primary/7 p-5">
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <BriefcaseBusiness className="size-4" />
                <span>What I can help with</span>
              </div>
              <ul className="mt-4 grid gap-3">
                {profile.whatICanHelpWith.slice(0, 3).map((item) => (
                  <li key={item} className="text-sm leading-7 text-foreground/88">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 rounded-[1.4rem] border border-border/70 bg-background/92 p-5">
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

            <div className="mt-auto rounded-[1.4rem] border border-border/70 bg-white/75 p-5">
              <p className="text-[11px] font-semibold tracking-[0.24em] text-primary uppercase">
                Availability
              </p>
              <ul className="mt-3 grid gap-2">
                {profile.availability.items.map((item) => (
                  <li key={item} className="text-sm leading-7 text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
