import { Link } from '@tanstack/react-router'
import { clinicInfo } from '../../lib/clinicInfo'

const quickLinks = [
  { to: '/services', label: 'Treatment' },
  { to: '/ivf', label: 'IVF & Procedures' },
  { to: '/egg-freezing', label: 'Egg Freezing' },
  { to: '/donor', label: 'Donor' },
  { to: '/genetic-testing', label: 'Genetic Testing' },
  { to: '/prices', label: 'Prices' },
  { to: '/guides', label: 'Fertility Guides' },
  { to: '/successes', label: 'Our Successes' },
  { to: '/booking', label: 'Booking' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-gradient-to-r from-primary/10 via-background to-accent/10 backdrop-blur">
      <div className="w-full px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="text-base font-extrabold">{clinicInfo.name}</div>
            <div className="mt-2 text-sm text-muted-foreground">
              {clinicInfo.addressLine1}
              {clinicInfo.addressLine2 ? `, ${clinicInfo.addressLine2}` : ''}
              <br />
              {clinicInfo.city}, {clinicInfo.country}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              <a className="hover:underline" href={`tel:${clinicInfo.phone}`}>
                {clinicInfo.phone}
              </a>
              <br />
              <a className="hover:underline" href={`mailto:${clinicInfo.email}`}>
                {clinicInfo.email}
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-extrabold">Quick Links</div>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to as any}
                    className="text-sm font-semibold text-foreground/85 transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-extrabold">Find Us - Allen Avenue, Ikeja</div>
            <div className="mt-3 overflow-hidden rounded-2xl border border-border/70 bg-background/40 shadow-sm">
              <iframe
                title="M&C Fertility Center Location Map"
                src="https://www.google.com/maps?q=Allen%20Avenue%2C%20Ikeja%2C%20Lagos&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} {clinicInfo.name}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

