import { HeartHandshake } from "lucide-react";

import { Profile } from "@/data/profile";

export function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="border-t border-border/70 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-muted-foreground sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-2">
          <HeartHandshake className="size-4 text-primary" />
          <p>{profile.name} - E-commerce Operations Portfolio</p>
        </div>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-primary">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} className="transition-colors hover:text-primary">
            {profile.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
