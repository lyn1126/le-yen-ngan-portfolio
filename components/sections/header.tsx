import { Menu, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Profile } from "@/data/profile";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header({ profile }: { profile: Profile }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="min-w-0">
          <p className="truncate text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            {profile.name}
          </p>
          <p className="truncate text-sm text-muted-foreground">{profile.role}</p>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" asChild>
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Button variant="outline" size="sm" asChild>
            <a href={`tel:${profile.phone}`}>
              <Phone data-icon="inline-start" />
              Call
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={`mailto:${profile.email}`}>
              <Mail data-icon="inline-start" />
              Email
            </a>
          </Button>
        </div>

        <Button variant="outline" size="icon-sm" className="sm:hidden" asChild>
          <a href="#contact" aria-label="Go to contact section">
            <Menu />
          </a>
        </Button>
      </div>
    </header>
  );
}
