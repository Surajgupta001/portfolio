import * as Dialog from "@radix-ui/react-dialog";
import { Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

const navItems = ["About", "Projects", "Skills", "Journey", "Achievements", "Contact"];

function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const next = stored ? stored === "dark" : true;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return <Button variant="ghost" size="icon" onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>{dark ? <Sun className="size-4" /> : <Moon className="size-4" />}</Button>;
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${scrolled ? "border-border bg-background/85 shadow-sm backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
    <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 lg:px-8">
      <a href="#top" className="flex min-w-0 items-center gap-3 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><span className="grid size-8 shrink-0 place-items-center rounded bg-primary text-xs font-semibold text-primary-foreground">SG</span><span className="truncate text-sm font-semibold text-foreground">Suraj Gupta</span></a>
      <div className="hidden items-center gap-1 lg:flex">
        <nav className="mr-2 flex items-center" aria-label="Main navigation">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="rounded px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{item}</a>)}</nav>
        <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-10 place-items-center rounded text-muted-foreground hover:bg-accent hover:text-foreground"><Github className="size-4" /></a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-10 place-items-center rounded text-muted-foreground hover:bg-accent hover:text-foreground"><Linkedin className="size-4" /></a>
        <Button asChild variant="outline" size="sm"><a href="/resume.pdf" download="Suraj_Kumar_Gupta_Resume.pdf">Resume</a></Button><ThemeToggle />
      </div>
      <div className="flex items-center lg:hidden"><ThemeToggle /><Dialog.Root open={open} onOpenChange={setOpen}><Dialog.Trigger asChild><Button variant="ghost" size="icon" aria-label="Open navigation"><Menu className="size-5" /></Button></Dialog.Trigger><Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-50 bg-overlay/70 backdrop-blur-sm" /><Dialog.Content className="fixed inset-y-0 right-0 z-50 w-[min(88vw,22rem)] border-l border-border bg-background p-6 shadow-2xl"><div className="flex items-center justify-between"><Dialog.Title className="text-base font-semibold">Navigation</Dialog.Title><Dialog.Close asChild><Button variant="ghost" size="icon" aria-label="Close navigation"><X className="size-5" /></Button></Dialog.Close></div><nav className="mt-10 grid gap-2">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-lg font-medium text-foreground hover:bg-accent">{item}</a>)}</nav><div className="mt-8 border-t border-border pt-6"><div className="flex flex-wrap gap-2"><Button asChild variant="outline" size="icon"><a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="size-4" /></a></Button><Button asChild variant="outline" size="icon"><a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="size-4" /></a></Button><Button asChild variant="outline"><a href="/resume.pdf" download="Suraj_Kumar_Gupta_Resume.pdf">Download Resume</a></Button></div></div></Dialog.Content></Dialog.Portal></Dialog.Root></div>
    </div>
  </header>;
}
