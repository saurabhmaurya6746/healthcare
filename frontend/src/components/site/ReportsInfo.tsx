import { Clock, FileText, Mail, MessageCircle, ShieldCheck, Smartphone } from "lucide-react";

export function ReportsInfo() {
  const items = [
    {
      Icon: Clock,
      title: "Fast Turnaround",
      description:
        "Most blood test reports are delivered the same day. Radiology and specialized panels typically arrive within 24–48 hours.",
    },
    {
      Icon: FileText,
      title: "Downloadable PDF Reports",
      description:
        "Every report is digitally signed and available as a high-quality PDF from your secure patient portal — anytime, anywhere.",
    },
    {
      Icon: Mail,
      title: "Email Delivery",
      description:
        "As soon as your report is ready, a secure link is emailed to you. No waiting rooms, no follow-up calls required.",
    },
    {
      Icon: MessageCircle,
      title: "WhatsApp Notifications",
      description:
        "Opt in to receive an instant WhatsApp alert with a direct download link the moment your report is validated.",
    },
    {
      Icon: ShieldCheck,
      title: "Doctor Reviewed",
      description:
        "Every report is validated by a senior pathologist or radiologist before release, so you can act on the numbers with confidence.",
    },
    {
      Icon: Smartphone,
      title: "Access Anywhere",
      description:
        "Log in to the MediCore portal from any device to view your history, download reports, or share them with your doctor.",
    },
  ];

  return (
    <section id="reports" className="container-page py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest">Reports</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold">How you'll receive your reports.</h2>
        <p className="mt-3 text-muted-foreground">
          Fast, secure and delivered the way that suits you best — digital PDF, email, WhatsApp or hard copy on request.
        </p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ Icon, title, description }) => (
          <div key={title} className="card-elevated card-elevated-hover p-6">
            <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary-bg text-primary-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
