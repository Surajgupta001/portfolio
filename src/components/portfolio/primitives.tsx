import { Github, Linkedin, Code2 } from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, description, className }: { eyebrow: string; title: string; description?: string; className?: string }) {
  return <div className={cn("max-w-2xl", className)}><p className="eyebrow">{eyebrow}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>{description && <p className="mt-4 text-base leading-7 text-muted-foreground">{description}</p>}</div>;
}
export function TechBadge({ children }: { children: string }) { return <span className="inline-flex rounded border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">{children}</span>; }
export function SocialLinks({ labels = false, className }: { labels?: boolean; className?: string }) {
  const links = [
    { label: "GitHub", href: profile.links.github, icon: Github },
    { label: "LinkedIn", href: profile.links.linkedin, icon: Linkedin },
    { label: "LeetCode", href: profile.links.leetcode, icon: Code2 },
  ];
  return <div className={cn("flex flex-wrap items-center gap-2", className)}>{links.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Icon className="size-4" />{labels && label}</a>)}</div>;
}
