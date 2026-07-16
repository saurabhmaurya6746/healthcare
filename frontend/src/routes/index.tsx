import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity, Award, CalendarClock, CheckCircle2, ClipboardCheck, Clock, FileDown,
  FlaskConical, HeartPulse, ShieldCheck, Star, Stethoscope, Users, ArrowRight, Microscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PACKAGES, SITE, TESTIMONIALS, TESTS } from "@/lib/site-data";
import heroImg from "@/assets/hero-lab.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MediCore Diagnostics — Book Lab Tests & Health Packages Online" },
      { name: "description", content: "Accredited diagnostic center offering blood tests, radiology, and health packages with home collection and fast digital reports." },
      { property: "og:title", content: "MediCore Diagnostics — Book Lab Tests & Health Packages Online" },
      { property: "og:description", content: "Accredited diagnostic center offering blood tests, radiology, and health packages with home collection and fast digital reports." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <WhyUs />
      <FeaturedPackages />
      <PopularTests />
      <Testimonials />
      <HoursCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero-bg">
      <div className="container-page grid gap-10 lg:grid-cols-2 items-center py-16 lg:py-24">
        <div className="animate-fade-in">
          <Badge variant="secondary" className="rounded-full bg-white/70 backdrop-blur border border-primary/20 text-primary px-3 py-1">
            <ShieldCheck className="h-3.5 w-3.5 mr-1.5" /> NABL & ISO Accredited Labs
          </Badge>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            {SITE.tagline.split(".")[0]}.{" "}
            <span className="text-gradient-primary">{SITE.tagline.split(".")[1].trim()}.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Book lab tests, health checkups, and radiology online. Fast, accurate digital reports and free home sample collection.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gradient-primary-bg text-primary-foreground shadow-card hover:opacity-95">
              <Link to="/book"><CalendarClock className="h-4 w-4 mr-2" /> Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary-soft">
              <Link to="/tests">Explore Tests <ArrowRight className="h-4 w-4 ml-2" /></Link>
            </Button>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {[
              ["500+", "Tests"], ["120K+", "Happy Patients"], ["24 hrs", "Fast Reports"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-2xl bg-white/70 backdrop-blur px-4 py-3 border border-white/60">
                <dt className="text-2xl font-bold text-primary">{v}</dt>
                <dd className="text-xs text-muted-foreground mt-0.5">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-in">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] gradient-primary-bg opacity-20 blur-2xl" />
          <img
            src={heroImg}
            alt="Modern diagnostic laboratory technician"
            width={1600} height={1100}
            className="rounded-3xl border border-white/60 shadow-card object-cover w-full h-auto"
          />
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 rounded-2xl bg-background border border-border shadow-card px-4 py-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
              <HeartPulse className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Report accuracy</p>
              <p className="text-base font-bold">99.98%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="container-page py-20">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">About MediCore</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Precision diagnostics for every stage of your life.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            For over 15 years, MediCore Diagnostics has been a name families trust for reliable pathology, radiology and preventive health services. Our state-of-the-art labs combine advanced analyzers with rigorous quality control so you get results you can act on.
          </p>
          <div className="mt-6 grid gap-3">
            {[
              "Accredited by NABL, ISO and CAP-equivalent standards",
              "Trained phlebotomists for painless sample collection",
              "Secure digital reports delivered to your inbox",
            ].map((t) => (
              <div key={t} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{t}</span>
              </div>
            ))}
          </div>
          <Button asChild variant="outline" className="mt-8 border-primary/30 hover:bg-primary-soft">
            <Link to="/about">Learn More About Us <ArrowRight className="h-4 w-4 ml-2" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { Icon: FlaskConical, label: "Advanced Labs", d: "Automated analyzers & PCR facility" },
            { Icon: Microscope, label: "Radiology", d: "Digital X-Ray, USG & more" },
            { Icon: Stethoscope, label: "Doctor Reviews", d: "Free consultation on packages" },
            { Icon: Users, label: "Expert Team", d: "Board-certified pathologists" },
          ].map(({ Icon, label, d }) => (
            <div key={label} className="card-elevated card-elevated-hover p-5">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { Icon: Award, t: "Accredited Quality", d: "Consistently audited to international laboratory standards." },
    { Icon: Clock, t: "Fast Turnaround", d: "Most reports delivered within 24 hours, many the same day." },
    { Icon: ShieldCheck, t: "Data Privacy", d: "Encrypted patient portal and strict confidentiality." },
    { Icon: ClipboardCheck, t: "Home Collection", d: "Free doorstep sample collection with all packages." },
    { Icon: HeartPulse, t: "Preventive Care", d: "Curated health packages to detect issues early." },
    { Icon: Activity, t: "Doctor Reviewed", d: "Reports validated by senior pathologists." },
  ];
  return (
    <section className="bg-secondary/50 py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">Why Choose Us</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Care you can measure — down to the decimal.</h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ Icon, t, d }) => (
            <div key={t} className="card-elevated card-elevated-hover p-6 bg-background">
              <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary-bg text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedPackages() {
  return (
    <section className="container-page py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">Health Packages</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Featured checkups, thoughtfully priced.</h2>
        </div>
        <Button asChild variant="outline" className="border-primary/30 hover:bg-primary-soft">
          <a href="/brochure.pdf" download><FileDown className="h-4 w-4 mr-2" /> Download Brochure</a>
        </Button>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {PACKAGES.map((p) => (
          <div key={p.slug} className={`card-elevated card-elevated-hover p-6 relative ${p.popular ? "ring-2 ring-primary" : ""}`}>
            {p.popular && (
              <span className="absolute -top-3 left-6 gradient-primary-bg text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-soft">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
            <div className="mt-5 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gradient-primary">${p.price}</span>
              <span className="text-sm text-muted-foreground line-through">${p.originalPrice}</span>
            </div>
            <ul className="mt-5 space-y-2 text-sm">
              {p.includes.slice(0, 6).map((i) => (
                <li key={i} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />{i}</li>
              ))}
            </ul>
            <Button asChild className="mt-6 w-full gradient-primary-bg text-primary-foreground hover:opacity-95">
              <Link to="/book" search={{ item: p.slug } as never}>Book Package</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

function PopularTests() {
  const popular = TESTS.slice(0, 6);
  return (
    <section className="bg-secondary/50 py-20">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">Popular Tests</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Frequently booked diagnostic tests.</h2>
          </div>
          <Button asChild variant="ghost" className="text-primary hover:bg-primary-soft">
            <Link to="/tests">View all tests <ArrowRight className="h-4 w-4 ml-2" /></Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((t) => (
            <div key={t.slug} className="card-elevated card-elevated-hover p-6 bg-background">
              <Badge variant="secondary" className="bg-primary-soft text-primary hover:bg-primary-soft">{t.category}</Badge>
              <h3 className="mt-4 font-semibold text-lg">{t.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{t.description}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-2xl font-bold text-gradient-primary">${t.price}</span>
                <span className="text-muted-foreground">{t.report}</span>
              </div>
              <div className="mt-5 flex gap-2">
                <Button asChild variant="outline" size="sm" className="flex-1 border-primary/30 hover:bg-primary-soft">
                  <Link to="/tests/$slug" params={{ slug: t.slug }}>Details</Link>
                </Button>
                <Button asChild size="sm" className="flex-1 gradient-primary-bg text-primary-foreground">
                  <Link to="/book" search={{ item: t.slug } as never}>Book</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="container-page py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest">Testimonials</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold">What patients & partners say.</h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="card-elevated card-elevated-hover p-6">
            <div className="flex gap-1 text-amber-500">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 text-sm leading-relaxed">"{t.quote}"</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full gradient-primary-bg grid place-items-center text-primary-foreground font-semibold">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function HoursCta() {
  return (
    <section className="container-page pb-8">
      <div className="rounded-3xl gradient-primary-bg text-primary-foreground p-8 md:p-12 grid gap-8 lg:grid-cols-[1.4fr_1fr] items-center shadow-card">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">Ready to prioritize your health today?</h2>
          <p className="mt-3 text-primary-foreground/90 max-w-xl">
            Schedule a test or health package in less than 60 seconds. Free home sample collection available.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link to="/book">Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white/40 text-primary-foreground hover:bg-white/10">
              <a href={SITE.phoneHref}>Call {SITE.phone}</a>
            </Button>
          </div>
        </div>
        <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6">
          <h3 className="font-semibold flex items-center gap-2"><Clock className="h-5 w-5" /> Working Hours</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {SITE.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span className="text-primary-foreground/90">{h.day}</span>
                <span className="font-semibold">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
