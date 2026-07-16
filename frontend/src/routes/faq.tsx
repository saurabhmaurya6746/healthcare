import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs — MediCore Diagnostics" },
      { name: "description", content: "Answers to common questions about tests, reports, home collection and insurance at MediCore Diagnostics." },
      { property: "og:title", content: "FAQs — MediCore Diagnostics" },
      { property: "og:description", content: "Common questions about diagnostic tests, reports and appointments." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question", name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <section className="gradient-hero-bg">
        <div className="container-page py-14 text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">FAQ</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold">Frequently asked questions.</h1>
          <p className="mt-3 text-muted-foreground">Everything you need to know before your visit.</p>
        </div>
      </section>
      <section className="container-page py-14 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="card-elevated p-2 sm:p-4">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="px-3 text-left text-base font-medium hover:text-primary">{f.q}</AccordionTrigger>
              <AccordionContent className="px-3 text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
