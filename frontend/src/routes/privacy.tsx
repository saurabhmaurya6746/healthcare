import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — MediCore Diagnostics" },
      { name: "description", content: "How MediCore Diagnostics collects, uses and protects your personal and health information." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => <LegalPage title="Privacy Policy" sections={sections} />,
});

const sections = [
  { h: "Introduction", p: "This Privacy Policy explains how MediCore Diagnostics collects, uses, and safeguards personal and health information you share with us when using our services or website." },
  { h: "Information we collect", p: "We collect information you provide directly (name, contact details, medical history relevant to tests) and information generated during your visit such as test results and appointment records." },
  { h: "How we use information", p: "Information is used to schedule appointments, process tests, deliver reports, and communicate with you about your care. Aggregated, de-identified data may be used to improve services." },
  { h: "Sharing of information", p: "We do not sell your personal data. Information may be shared with your referring physician, insurance providers you authorize, and regulators as required by law." },
  { h: "Data security", p: "We use encryption in transit and at rest, restricted access, and audited systems to protect your information. Despite reasonable safeguards, no system is 100% secure." },
  { h: "Your rights", p: "You may request access, correction, or deletion of your data subject to legal retention requirements. Contact us to exercise these rights." },
  { h: "Contact", p: "For privacy questions, email privacy@medicore-diagnostics.com." },
];

function LegalPage({ title, sections }: { title: string; sections: { h: string; p: string }[] }) {
  return (
    <>
      <section className="gradient-hero-bg">
        <div className="container-page py-14 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold">{title}</h1>
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
