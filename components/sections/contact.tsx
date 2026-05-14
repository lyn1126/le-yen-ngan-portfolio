import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Profile } from "@/data/profile";

import { SectionShell } from "./section-shell";

export function Contact({ profile }: { profile: Profile }) {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title={profile.contactTitle}
      description={profile.contactDescription}
    >
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_21rem]">
        <div className="rounded-[2rem] border border-primary/12 bg-[linear-gradient(135deg,rgba(239,246,255,0.9),rgba(255,255,255,0.96))] p-6 sm:p-8">
          <p className="text-[11px] font-semibold tracking-[0.24em] text-primary uppercase">
            {profile.availability.title}
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.4rem] border border-border/70 bg-white/90 p-4">
              <Mail className="size-5 text-primary" />
              <p className="mt-4 text-sm font-medium text-foreground">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-2 block break-all text-sm leading-7 text-muted-foreground transition-colors hover:text-primary"
              >
                {profile.email}
              </a>
            </div>
            <div className="rounded-[1.4rem] border border-border/70 bg-white/90 p-4">
              <Phone className="size-5 text-primary" />
              <p className="mt-4 text-sm font-medium text-foreground">Phone</p>
              <a
                href={`tel:${profile.phone}`}
                className="mt-2 block text-sm leading-7 text-muted-foreground transition-colors hover:text-primary"
              >
                {profile.phone}
              </a>
            </div>
            <div className="rounded-[1.4rem] border border-border/70 bg-white/90 p-4">
              <MapPin className="size-5 text-primary" />
              <p className="mt-4 text-sm font-medium text-foreground">Location</p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{profile.location}</p>
            </div>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-border/70 bg-white/82 p-6">
          <p className="text-[11px] font-semibold tracking-[0.24em] text-primary uppercase">
            Availability
          </p>
          <ul className="mt-5 grid gap-3">
            {profile.availability.items.map((item) => (
              <li key={item} className="text-[15px] leading-8 text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-col gap-3">
            <Button size="lg" className="h-11 justify-start" asChild>
              <a href={`mailto:${profile.email}`}>
                <Mail data-icon="inline-start" />
                Gửi email cho em
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-11 justify-start" asChild>
              <a href={`tel:${profile.phone}`}>
                <Phone data-icon="inline-start" />
                Gọi điện trực tiếp
              </a>
            </Button>
          </div>
        </aside>
      </div>
    </SectionShell>
  );
}
