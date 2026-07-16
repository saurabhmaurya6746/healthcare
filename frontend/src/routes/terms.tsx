import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — MediCore Diagnostics" },
      { name: "description", content: "Terms and conditions governing the use of MediCore Diagnostics services and website." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections = [
  { h: "Acceptance of terms", p: "By using our website or services, you agree to these terms. If you do not agree, please do not use our services." },
  { h: "Services", p: "MediCore Diagnostics provides diagnostic testing, radiology, and related healthcare services. Availability of specific tests may vary by location." },
  { h: "Appointments and cancellations", p: "Appointments can be rescheduled or cancelled up to 2 hours before the scheduled time. Repeated no-shows may attract a booking fee." },
  { h: "Payment", p: "Payment is due at the time of service unless otherwise arranged with your insurance provider. All prices are in USD and inclusive of applicable taxes." },
  { h: "Reports and interpretation", p: "Reports issued by MediCore are for medical use and should be interpreted by a qualified clinician. We are not a substitute for medical advice." },
  { h: "Limitation of liability", p: "To the maximum extent permitted by law, MediCore is not liable for indirect or consequential damages arising from the use of our services." },
  { h: "Changes", p: "We may update these terms from time to time. Continued use of our services after changes constitutes acceptance." },
];

function TermsPage() {
  return (
    <>
      <section className="gradient-hero-bg">
        <div className="container-page py-14 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold">Terms & Conditions</h1>
          <p className="mt-3 text-muted-foreground">Last updated: January 2026</p>
        </div>
      </section>
      <section className="container-page py-14 max-w-3xl mx-auto space-y-8">
        {sections.map((s) => (
          <div key={s.h} className="card-elevated p-6">
            <h2 className="text-xl font-semibold">{s.h}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.p}</p>
          </div>
        ))}
      </section>
    </>
  );
}
