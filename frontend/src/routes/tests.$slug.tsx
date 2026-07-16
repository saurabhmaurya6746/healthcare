import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarClock, CheckCircle2, Clock, FileText, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TESTS, type Test } from "@/lib/site-data";

export const Route = createFileRoute("/tests/$slug")({
  loader: ({ params }): { test: Test } => {
    const test = TESTS.find((t) => t.slug === params.slug);
    if (!test) throw notFound();
    return { test };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.test.name} — MediCore Diagnostics` : "Test — MediCore";
    const desc = loaderData?.test.description ?? "Diagnostic test details.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: TestDetail,
});

function TestDetail() {
  const { test } = Route.useLoaderData();
  return (
    <>
      <section className="gradient-hero-bg">
        <div className="container-page py-14">
          <Link to="/tests" className="text-sm text-muted-foreground hover:text-primary">← Back to all tests</Link>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Badge variant="secondary" className="bg-white/70 text-primary">{test.category}</Badge>
              <h1 className="mt-3 text-4xl sm:text-5xl font-bold">{test.name}</h1>
              <p className="mt-3 text-muted-foreground text-lg">{test.description}</p>
            </div>
            <div className="rounded-2xl bg-background border border-border p-5 shadow-soft min-w-[220px]">
              <p className="text-sm text-muted-foreground">Price</p>
              <p className="text-3xl font-bold text-gradient-primary">${test.price}</p>
              <Button asChild className="mt-4 w-full gradient-primary-bg text-primary-foreground">
                <Link to="/book" search={{ item: test.slug } as never}>
                  <CalendarClock className="h-4 w-4 mr-2" /> Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="card-elevated p-6">
            <h2 className="text-xl font-semibold flex items-center gap-2"><ListChecks className="h-5 w-5 text-primary" /> Preparation</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {test.preparation.map((p: string) => (
                <li key={p} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />{p}</li>
              ))}
            </ul>
          </div>

          <div className="card-elevated p-6">
            <h2 className="text-xl font-semibold flex items-center gap-2"><FileText className="h-5 w-5 text-primary" /> Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="mt-4">
              {test.faqs.map((f: { q: string; a: string }, i: number) => (
                <AccordionItem key={i} value={`i-${i}`}>
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="card-elevated p-6">
            <h3 className="font-semibold">At a glance</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between"><dt className="text-muted-foreground">Duration</dt><dd>{test.duration}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Report</dt><dd className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {test.report}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Category</dt><dd>{test.category}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Home collection</dt><dd>Available</dd></div>
            </dl>
          </div>
        </aside>
      </section>
    </>
  );
}
