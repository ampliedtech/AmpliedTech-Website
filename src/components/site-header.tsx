"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Customers", href: "/customers" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-brand-primary/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
              <span className="text-textd font-bold text-lg">A</span>
            </div>
            <span className="text-textd font-bold text-xl group-hover:text-brand-secondary transition-colors duration-300">Amplied</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-textd hover:text-brand-secondary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              variant="ghost"
              className="text-textd hover:bg-brand-primary/10 hover:text-brand-secondary transition-all duration-300"
            >
              <Link href="/contact">Contact</Link>
            </Button>
            <Button asChild className="bg-brand-primary hover:bg-brand-secondary text-textd shadow-lg hover:shadow-glow transition-all duration-300">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-textd"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-ink border-brand-primary/20">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                      <span className="text-textd font-bold text-lg">A</span>
                    </div>
                    <span className="text-textd font-bold text-xl">Amplied</span>
                  </div>
                </div>
                
                <nav className="flex-1">
                  <div className="space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-textd hover:text-brand-secondary transition-colors duration-200 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>

                <div className="space-y-4 pt-8">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-brand-primary/50 text-brand-primary hover:bg-brand-primary/10 hover:border-brand-primary"
                  >
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Contact
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-brand-primary hover:bg-brand-secondary text-textd shadow-lg hover:shadow-glow transition-all duration-300"
                  >
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
