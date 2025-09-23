import { Metadata } from 'next'
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Section from '@/components/section'

export const metadata: Metadata = {
  title: 'Terms of Service | Amplied Technologies',
  description: 'Terms of Service for Amplied Technologies LLP - Talent as a Service provider',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      
      <main>
        {/* Hero Section */}
        <Section background="ink" className="pt-32">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-textd">
              Terms of Service
            </h1>
            <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
              Please read these terms carefully before using our services. By accessing our services, you agree to be bound by these terms.
            </p>
            <p className="text-sm text-brand-secondary">
              Last updated: January 16, 2025
            </p>
          </div>
        </Section>

        {/* Terms Content */}
        <Section background="surface">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>1. Acceptance of Terms</h2>
                <div className="space-y-4 text-brand-secondary" style={{ color: "#044078" }}>
                  <p>By accessing and using Amplied Technologies LLP&apos;s (&quot;Company&quot;) services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>2. Description of Service</h2>
                <div className="space-y-4 text-brand-secondary" style={{ color: "#044078" }}>
                  <p>Amplied Technologies LLP provides Talent as a Service (TaaS) solutions including but not limited to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: "#044078" }}>
                    <li>Custom software development and enterprise applications</li>
                    <li>Cloud infrastructure and DevOps services</li>
                    <li>Cybersecurity solutions and compliance</li>
                    <li>Data analytics and AI solutions</li>
                    <li>Digital transformation and strategic consulting</li>
                    <li>Ongoing support and maintenance</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>3. Service Agreement</h2>
                <div className="space-y-4 text-brand-secondary" style={{ color: "#044078" }}>
                  <p>Our TaaS model provides ongoing partnership with continuous support, regular improvements, and predictable costs. Services are provided on a subscription basis as outlined in individual service agreements.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>4. Client Responsibilities</h2>
                <div className="space-y-4 text-brand-secondary">
                  <p>Clients are responsible for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: "#044078" }}>
                    <li>Providing accurate and complete information</li>
                    <li>Timely payment of service fees</li>
                    <li>Collaboration and communication as needed</li>
                    <li>Compliance with applicable laws and regulations</li>
                    <li>Maintaining confidentiality of proprietary information</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>5. Payment Terms</h2>
                <div className="space-y-4 text-brand-secondary" style={{ color: "#044078" }}>
                  <p>Payment terms are specified in individual service agreements. Generally, services are billed monthly in advance. Late payments may result in service suspension.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>6. Intellectual Property</h2>
                <div className="space-y-4 text-brand-secondary" style={{ color: "#044078" }}>
                  <p>All intellectual property rights in the services, software, and materials provided remain with Amplied Technologies LLP unless otherwise specified in writing. Clients retain ownership of their data and business processes.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>7. Confidentiality</h2>
                <div className="space-y-4 text-brand-secondary" style={{ color: "#044078" }}>
                  <p>Both parties agree to maintain the confidentiality of proprietary information shared during the course of the service relationship. This obligation survives termination of the agreement.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>8. Limitation of Liability</h2>
                <div className="space-y-4 text-brand-secondary" style={{ color: "#044078" }}>
                  <p>To the maximum extent permitted by law, Amplied Technologies LLP&apos;s liability is limited to the amount paid for services in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>9. Service Availability</h2>
                <div className="space-y-4 text-brand-secondary" style={{ color: "#044078" }}>
                  <p>While we strive for high availability, we do not guarantee uninterrupted service. Scheduled maintenance will be communicated in advance when possible.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>10. Termination</h2>
                <div className="space-y-4 text-brand-secondary" style={{ color: "#044078" }}>
                  <p>Either party may terminate the service agreement with 30 days written notice. Upon termination, clients retain access to their data as specified in the service agreement.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>11. Governing Law</h2>
                <div className="space-y-4 text-brand-secondary" style={{ color: "#044078" }}>
                  <p>These terms are governed by the laws of India. Any disputes will be resolved through binding arbitration in accordance with Indian arbitration laws.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>12. Changes to Terms</h2>
                <div className="space-y-4 text-brand-secondary" style={{ color: "#044078" }}>
                  <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of services constitutes acceptance of modified terms.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>13. Contact Information</h2>
                <div className="space-y-4 text-brand-secondary" style={{ color: "#044078" }}>
                  <p>For questions about these Terms of Service, please contact us at:</p>
                  <div className="bg-surface rounded-xl p-4" style={{ color: "#044078" }}>
                    <p><strong>Email:</strong> info@ampliedtech.com</p>
                    <p><strong>Website:</strong> https://ampliedtech.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      
      <SiteFooter />
    </div>
  )
}

