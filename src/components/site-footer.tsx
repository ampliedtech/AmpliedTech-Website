import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";
import Logo from "@/components/logo";

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Customers", href: "/customers" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  resources: [
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Technology Stack", href: "/#tech-stack" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ampliedtechnologies/", icon: Linkedin },
  { name: "Twitter", href: "https://x.com/ampliedtech", icon: Twitter },
  { name: "GitHub", href: "https://github.com/ampliedtech", icon: Github },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-textd">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo variant="full" size="md" animated={false} />
            </div>
            <p className="text-brand-secondary/80 text-sm mb-6 max-w-xs">
              Your Partner in Digital Growth.
              <br />
              We deliver secure, scalable, and innovative technology-as-a-service.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-brand-secondary/70 hover:text-brand-primary transition-colors duration-300 hover:scale-110"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-textd font-semibold mb-4">Company</h3>
            <ul className="space-y-*">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-brand-secondary hover:text-textd transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-textd font-semibold mb-4">Resources</h3>
            <ul className="space-y-">
              {footerLinks.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-brand-secondary hover:text-textd transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-textd font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-brand-secondary text-sm">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:info@ampliedtech.com"
                  className="hover:text-textd transition-colors duration-200"
                >
                  info@ampliedtech.com
                </a>
              </div>
              <Button
                asChild
                className="bg-brand-primary hover:bg-brand-secondary text-textd text-sm shadow-lg hover:shadow-glow transition-all duration-300"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-primary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-secondary text-sm">
              © 2025 Amplied Technologies LLP. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-brand-secondary hover:text-textd transition-colors duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
