import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim(); const email = String(form.get("email") ?? "").trim(); const message = String(form.get("message") ?? "").trim();
    const next: Record<string, string> = {};
    if (name.length < 2) next["name"] = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) next["email"] = "Please enter a valid email address.";
    if (message.length < 10) next["message"] = "Please add at least 10 characters.";
    setErrors(next); if (Object.keys(next).length) return;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)}`;
  };
  const field = "mt-2 w-full rounded-md border border-input bg-background px-3 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-accent-strong focus:ring-2 focus:ring-ring";
  return <form onSubmit={submit} noValidate className="rounded-lg border border-border bg-card p-5 shadow-card sm:p-7"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-medium">Name<input className={field} name="name" autoComplete="name" placeholder="Your name" aria-invalid={!!errors["name"]} aria-describedby="name-error" />{errors["name"] && <span id="name-error" className="mt-1 block text-xs text-destructive">{errors["name"]}</span>}</label><label className="text-sm font-medium">Email<input className={field} name="email" type="email" autoComplete="email" placeholder="you@example.com" aria-invalid={!!errors["email"]} aria-describedby="email-error" />{errors["email"] && <span id="email-error" className="mt-1 block text-xs text-destructive">{errors["email"]}</span>}</label></div><label className="mt-5 block text-sm font-medium">Message<textarea className={`${field} min-h-36 resize-y`} name="message" placeholder="Tell me about the opportunity or project." aria-invalid={!!errors["message"]} aria-describedby="message-error" />{errors["message"] && <span id="message-error" className="mt-1 block text-xs text-destructive">{errors["message"]}</span>}</label><div className="mt-5 flex flex-wrap items-center justify-between gap-4"><p className="max-w-sm text-xs leading-5 text-muted-foreground">Submitting opens your email app with the message prepared. Nothing is sent automatically.</p><Button type="submit">Prepare email <ArrowUpRight className="size-4" /></Button></div></form>;
}
