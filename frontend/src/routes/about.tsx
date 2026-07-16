import { createFileRoute } from "@tanstack/react-router";
import { Award, Eye, HeartHandshake, Microscope, ShieldCheck, Target, Users } from "lucide-react";
import teamImg from "@/assets/team.jpg";
import labImg from "@/assets/lab-facility.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — MediCore Diagnostics" },
      { name: "description", content: "Learn about MediCore Diagnostics — our mission, values, expert doctors and modern accredited laboratories." },
      { property: "og:title", content: "About MediCore Diagnostics" },
      { property: "og:description", content: "Our mission, values, expert team and modern accredited laboratories." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="gradient-hero-bg">
        <div className="container-page py-16 lg:py-20 text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">About Us</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold">Trusted diagnostics, delivered with heart.</h1>
          <p className="mt-4 text-muted-foreground text-lg">
            MediCore Diagnostics is a network of accredited laboratories and radiology centers built on a simple promise — accurate results, quickly, with genuine care.
          </p>
        </div>
      </section>

      <section className="container-page py-20 grid gap-12 lg:grid-cols-2 items-center">
        <img src={teamImg} alt="MediCore team of doctors and technicians" width={1400} height={900} loading="lazy" className="rounded-3xl border border-border shadow-card object-cover" />
        <div>
          <h2 className="text-3xl font-bold">Our story</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Founded in 2009 by a group of pathologists and radiologists, MediCore was born from the belief that quality diagnostics shouldn't be a privilege. Fifteen years and over a million reports later, we continue to invest in the best equipment, best people and the best patient experience.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From routine blood work to complex molecular diagnostics, every sample is handled with the same discipline — because behind every report is a person waiting for answers.
          </p>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {[
            { Icon: Target, t: "Our Mission", d: "To make accurate, affordable and accessible diagnostic care available to every family we serve." },
            { Icon: Eye, t: "Our Vision", d: "To be the most trusted diagnostic partner for patients and clinicians in the communities we operate in." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="card-elevated p-8 bg-background">
              <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary-bg text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">Our Values</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">The principles behind every report.</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: ShieldCheck, t: "Integrity", d: "Honest results, always." },
            { Icon: Award, t: "Excellence", d: "World-class quality standards." },
            { Icon: HeartHandshake, t: "Empathy", d: "We treat you like family." },
            { Icon: Users, t: "Accessibility", d: "Care that meets you where you are." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="card-elevated card-elevated-hover p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">Our People</p>
            <h2 className="mt-3 text-3xl font-bold">Experienced doctors and skilled staff.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team includes board-certified pathologists, radiologists, and trained phlebotomists — many with over two decades of experience. Every report we release is validated by a senior specialist.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[["45+", "Specialists"], ["120+", "Trained staff"], ["15", "Years of care"]].map(([v, l]) => (
                <div key={l} className="rounded-2xl bg-background border border-border p-4">
                  <p className="text-2xl font-bold text-primary">{v}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <img src={labImg} alt="Modern laboratory facility" width={1400} height={900} loading="lazy" className="order-1 lg:order-2 rounded-3xl border border-border shadow-card object-cover" />
        </div>
      </section>

      <section className="container-page py-20">
        <div className="rounded-3xl border border-border p-8 md:p-12 bg-background grid gap-8 lg:grid-cols-[1fr_1fr] items-center">
          <div>
            <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary-bg text-primary-foreground">
              <Microscope className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-3xl font-bold">Quality assurance you can trust.</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Our labs follow strict internal QC and participate in external proficiency testing programs, ensuring your results meet the highest standards of accuracy and reproducibility.
            </p>
          </div>
          <ul className="grid gap-3">
            {[
              "Accredited by NABL / ISO 15189 equivalent programs",
              "Daily internal quality control on every instrument",
              "External proficiency testing with global reference labs",
              "Bar-coded sample traceability end-to-end",
              "Bio-safety protocols reviewed continuously",
            ].map((t) => (
              <li key={t} className="flex gap-3 rounded-xl bg-secondary/50 border border-border px-4 py-3 text-sm">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0" />{t}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
