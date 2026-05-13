import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      <div className="flex flex-col gap-4">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold tracking-[0.24em] text-primary uppercase">
            {eyebrow}
          </p>
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            {description ? (
              <p className="text-base leading-7 text-muted-foreground">
                {description}
              </p>
            ) : null}
          </div>
        </div>
        <Separator />
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}
