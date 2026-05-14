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
    <section id={id} className={cn("scroll-mt-28", className)}>
      <div className="grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-12">
        <div className="space-y-4">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-primary uppercase">
            {eyebrow}
          </p>
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-[2.15rem]">
              {title}
            </h2>
            {description ? (
              <p className="text-sm leading-7 text-muted-foreground sm:text-[15px]">
                {description}
              </p>
            ) : null}
          </div>
        </div>
        <div className="space-y-8">
          <Separator className="bg-border/80" />
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}
