import { Instagram, MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site-data";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full text-white shadow-card transition-transform hover:scale-110"
        style={{ backgroundColor: "oklch(0.65 0.17 145)" }}
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href={SITE.socials.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="grid h-12 w-12 place-items-center rounded-full text-white shadow-card transition-transform hover:scale-110"
        style={{ background: "linear-gradient(135deg,#f58529,#dd2a7b,#8134af)" }}
      >
        <Instagram className="h-5 w-5" />
      </a>
      <a
        href={SITE.phoneHref}
        aria-label="Call us"
        className="grid h-12 w-12 place-items-center rounded-full gradient-primary-bg text-primary-foreground shadow-card transition-transform hover:scale-110"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
