import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/site-data";
import { FormField } from "@/components/site/FormField";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — MediCore Diagnostics" },
      { name: "description", content: "Contact MediCore Diagnostics for appointments, home collection, or general enquiries. Address, phone, email and map." },
      { property: "og:title", content: "Contact MediCore Diagnostics" },
      { property: "og:description", content: "Get in touch — address, phone, email and directions." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  phone: z.string().trim().regex(/^[+\d][\d\s\-()]{6,19}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(120),
  subject: z.string().trim().min(3, "Enter a subject").max(120),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

type FormState = z.input<typeof schema>;

function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }
async function submit(e: React.FormEvent) {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      toast.error("Please fill all fields correctly");
      return;
    }
    setErrors({});
    
    // Payload preparation
    const payload = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      subject: form.subject,
      message: form.message,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/contact/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Success toast tabhi chalega jab Django 200/201 response dega
      toast.success("Message sent successfully!");
      
      // Form fields tabhi khali hongi jab data chala jayega
      setForm({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <section className="gradient-hero-bg">
        <div className="container-page py-14 text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">Contact</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold">We're here to help.</h1>
          <p className="mt-3 text-muted-foreground">Reach out for bookings, home collection or any general question.</p>
        </div>
      </section>

      <section className="container-page py-14 grid gap-8 lg:grid-cols-2">
        <div className="grid gap-5">
          {[
            { Icon: MapPin, t: "Address", v: SITE.address },
            { Icon: Phone, t: "Phone", v: SITE.phone, href: SITE.phoneHref },
            { Icon: Mail, t: "Email", v: SITE.email, href: `mailto:${SITE.email}` },
          ].map(({ Icon, t, v, href }) => (
            <div key={t} className="card-elevated card-elevated-hover p-5 flex items-start gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold">{t}</p>
                {href ? <a href={href} className="mt-1 block text-muted-foreground hover:text-primary break-words">{v}</a> : <p className="mt-1 text-muted-foreground">{v}</p>}
              </div>
            </div>
          ))}
          <div className="card-elevated p-5">
            <p className="text-sm font-semibold flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Working Hours</p>
            <ul className="mt-3 space-y-2 text-sm">
              {SITE.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-3">
                  <span className="text-muted-foreground">{h.day}</span>
                  <span className="font-medium">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe src={SITE.mapEmbed} width="100%" height="260" loading="lazy" title="Map" className="block" />
          </div>
        </div>

        <form onSubmit={submit} noValidate className="card-elevated p-6 sm:p-8 grid gap-5 h-fit">
          <h2 className="text-xl font-semibold">Send us a message</h2>
          <FormField label="Name" htmlFor="c-name" required error={errors.name}>
            <Input id="c-name" autoComplete="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your full name" />
          </FormField>
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Phone" htmlFor="c-phone" required error={errors.phone}>
              <Input id="c-phone" type="tel" autoComplete="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+1 555 010 2040" />
            </FormField>
            <FormField label="Email" htmlFor="c-email" required error={errors.email}>
              <Input id="c-email" type="email" autoComplete="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" />
            </FormField>
          </div>
          <FormField label="Subject" htmlFor="c-subject" required error={errors.subject}>
            <Input id="c-subject" value={form.subject} onChange={(e) => update("subject", e.target.value)} placeholder="How can we help?" />
          </FormField>
          <FormField label="Message" htmlFor="c-message" required error={errors.message}>
            <Textarea id="c-message" rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us a bit more..." />
          </FormField>
          <Button type="submit" size="lg" className="gradient-primary-bg text-primary-foreground">Send Message</Button>
        </form>
      </section>
    </>
  );
}
