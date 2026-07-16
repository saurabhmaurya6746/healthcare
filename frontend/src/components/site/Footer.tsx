import { Link } from "@tanstack/react-router";
import { Activity, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { SITE } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-24 bg-secondary/60 border-t border-border">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl gradient-primary-bg text-primary-foreground">
              <Activity className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-bold">{SITE.name}</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Accredited diagnostic center delivering trusted, timely and affordable medical testing for your family.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {[
              { href: SITE.socials.facebook, Icon: Facebook, label: "Facebook" },
              { href: SITE.socials.instagram, Icon: Instagram, label: "Instagram" },
              { href: SITE.socials.twitter, Icon: Twitter, label: "Twitter" },
              { href: SITE.socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              ["/", "Home"], ["/about", "About Us"], ["/tests", "Tests & Packages"],
              ["/book", "Book Appointment"], ["/faq", "FAQ"], ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-primary transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>{SITE.address}</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /><a href={SITE.phoneHref} className="hover:text-primary">{SITE.phone}</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /><a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Working Hours</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {SITE.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-foreground font-medium">{h.time}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 overflow-hidden rounded-xl border border-border">
            <iframe
              src={SITE.mapEmbed}
              width="100%"
              height="140"
              loading="lazy"
              className="block"
              title="Location map"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
