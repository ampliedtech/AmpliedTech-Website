import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Section from "@/components/section";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      
      <main>
        {/* Hero Section */}
        <Section background="ink" className="pt-32">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-textd">
              Privacy Policy
            </h1>
            <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </Section>

        {/* Privacy Content */}
        <Section background="surface">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text">Information We Collect</h2>
                <div className="space-y-4 text-brand-secondary">
                  <p>We collect information you provide directly to us, such as when you:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fill out our contact form</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Request a consultation</li>
                    <li>Communicate with us via email or phone</li>
                  </ul>
                  <p>This may include your name, email address, phone number, company name, and any other information you choose to provide.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text">How We Use Your Information</h2>
                <div className="space-y-4 text-brand-secondary">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send you technical information and updates about our services</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text">Information Sharing</h2>
                <div className="space-y-4 text-brand-secondary">
                  <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>To comply with legal requirements</li>
                    <li>To protect our rights and property</li>
                    <li>With trusted service providers who assist us in operating our website and conducting our business</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text">Data Security</h2>
                <div className="space-y-4 text-brand-secondary">
                  <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text">Your Rights</h2>
                <div className="space-y-4 text-brand-secondary">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt out of marketing communications</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text">Contact Us</h2>
                <div className="space-y-4 text-brand-secondary">
                  <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                  <div className="bg-surface rounded-xl p-4">
                    <p><strong>Email:</strong> info@ampliedtech.com</p>
                    <p><strong>Phone:</strong> +91 98765 43210</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text">Changes to This Policy</h2>
                <div className="space-y-4 text-brand-secondary">
                  <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date below.</p>
                  <p><strong>Last updated:</strong> December 2024</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      
      <SiteFooter />
    </div>
  );
}
