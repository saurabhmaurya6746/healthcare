import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CheckCircle2, Clock, FileDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CATEGORIES, PACKAGES, TESTS, type Test, type TestCategory } from "@/lib/site-data";
import { ReportsInfo } from "@/components/site/ReportsInfo";

export const Route = createFileRoute("/tests")({
  head: () => ({
    meta: [
      { title: "Tests & Health Packages — MediCore Diagnostics" },
      { name: "description", content: "Browse lab tests, radiology and health packages by category. Transparent pricing, fast reports, home sample collection." },
      { property: "og:title", content: "Tests & Health Packages — MediCore Diagnostics" },
      { property: "og:description", content: "Browse and book diagnostic tests and health packages online." },
      { property: "og:url", content: "/tests" },
    ],
    links: [{ rel: "canonical", href: "/tests" }],
  }),
  component: TestsPage,
});

type SectionCategory = TestCategory | "All";

function TestsPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<SectionCategory>("All");

  const filteredTests = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TESTS.filter(
      (t) => q === "" || t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)
    );
  }, [query]);

  const visibleCategories = useMemo<TestCategory[]>(() => {
    const base = CATEGORIES.filter((c) => c !== "Health Packages");
    return cat === "All" ? base : base.filter((c) => c === cat);
  }, [cat]);

  return (
    <>
      <section className="gradient-hero-bg">
        <div className="container-page py-14 max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">Tests & Packages</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold">Find the right test in seconds.</h1>
          <p className="mt-3 text-muted-foreground">Search hundreds of tests and curated health packages.</p>
          <div className="mt-7 relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tests, e.g. thyroid, MRI, ultrasound"
              className="h-14 pl-11 pr-4 bg-background border-border rounded-2xl text-base shadow-soft"
            />
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="flex flex-wrap gap-2">
          {(["All", ...CATEGORIES] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                cat === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Category sections */}
        {cat !== "Health Packages" && (
          <div className="mt-10 space-y-14">
            {visibleCategories.map((category) => {
              const items = filteredTests.filter((t) => t.category === category);
              if (items.length === 0) return null;
              return <CategorySection key={category} category={category} tests={items} />;
            })}
            {visibleCategories.every((c) => filteredTests.filter((t) => t.category === c).length === 0) && (
              <p className="text-center text-muted-foreground py-10">No tests match your search.</p>
            )}
          </div>
        )}
      </section>

      <section id="packages" className="bg-secondary/50 py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest">Health Packages</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Curated checkups with clear pricing.</h2>
            </div>
            <Button asChild variant="outline" className="border-primary/30 hover:bg-primary-soft">
              <a href="/brochure.pdf" download><FileDown className="h-4 w-4 mr-2" /> Download Brochure</a>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PACKAGES.map((p) => (
              <div key={p.slug} className={`card-elevated card-elevated-hover p-6 bg-background relative ${p.popular ? "ring-2 ring-primary" : ""}`}>
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
                <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.duration}</span>
                  <span>•</span>
                  <span>Report {p.report}</span>
                </div>
                <ul className="mt-5 space-y-2 text-sm">
                  {p.includes.map((i) => (
                    <li key={i} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />{i}</li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full gradient-primary-bg text-primary-foreground">
                  <Link to="/book" search={{ item: p.slug } as never}>Book Now</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReportsInfo />
    </>
  );
}

function CategorySection({ category, tests }: { category: TestCategory; tests: Test[] }) {
  return (
    <div>
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-widest">Category</p>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold">{category}</h2>
        </div>
        <p className="text-sm text-muted-foreground">{tests.length} test{tests.length === 1 ? "" : "s"} available</p>
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tests.map((t) => (
          <TestCard key={t.slug} test={t} />
        ))}
      </div>
    </div>
  );
}

function TestCard({ test: t }: { test: Test }) {
  return (
    <article className="card-elevated card-elevated-hover p-6 flex flex-col">
      <Badge variant="secondary" className="bg-primary-soft text-primary hover:bg-primary-soft self-start">{t.category}</Badge>
      <h3 className="mt-4 font-semibold text-lg">{t.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{t.description}</p>
      <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {t.duration}</span>
        <span>•</span>
        <span>Report {t.report}</span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-2xl font-bold text-gradient-primary">${t.price}</span>
        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm" className="border-primary/30 hover:bg-primary-soft">
            <Link to="/tests/$slug" params={{ slug: t.slug }}>Details</Link>
          </Button>
          <Button asChild size="sm" className="gradient-primary-bg text-primary-foreground">
            <Link to="/book" search={{ item: t.slug } as never}>Book Now</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
