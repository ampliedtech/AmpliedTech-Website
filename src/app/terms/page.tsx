import { Metadata } from 'next'
import Section from '@/components/section'

export const metadata: Metadata = {
  title: 'Terms of Service | Amplied Technologies',
  description: 'Terms of Service for Amplied Technologies LLP - Technology-as-a-Service provider',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-brand-primary/5">
      <Section className="py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-textd mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-textl max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-textl space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-textd mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Amplied Technologies LLP&apos;s (&quot;Company&quot;) services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textd mb-4">2. Description of Service</h2>
              <p>
                Amplied Technologies LLP provides Technology-as-a-Service (TaaS) solutions including but not limited to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Software development and maintenance</li>
                <li>Cloud infrastructure and DevOps services</li>
                <li>Cybersecurity solutions</li>
                <li>Technical consulting and support</li>
                <li>Digital transformation services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textd mb-4">3. Service Agreement</h2>
              <p>
                Our TaaS model provides ongoing partnership with continuous support, regular improvements, and predictable costs. Services are provided on a subscription basis as outlined in individual service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textd mb-4">4. Client Responsibilities</h2>
              <p>
                Clients are responsible for:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Providing accurate and complete information</li>
                <li>Timely payment of service fees</li>
                <li>Collaboration and communication as needed</li>
                <li>Compliance with applicable laws and regulations</li>
                <li>Maintaining confidentiality of proprietary information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textd mb-4">5. Payment Terms</h2>
              <p>
                Payment terms are specified in individual service agreements. Generally, services are billed monthly in advance. Late payments may result in service suspension.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textd mb-4">6. Intellectual Property</h2>
              <p>
                All intellectual property rights in the services, software, and materials provided remain with Amplied Technologies LLP unless otherwise specified in writing. Clients retain ownership of their data and business processes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textd mb-4">7. Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of proprietary information shared during the course of the service relationship. This obligation survives termination of the agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textd mb-4">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Amplied Technologies LLP&apos;s liability is limited to the amount paid for services in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textd mb-4">9. Service Availability</h2>
              <p>
                While we strive for high availability, we do not guarantee uninterrupted service. Scheduled maintenance will be communicated in advance when possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textd mb-4">10. Termination</h2>
              <p>
                Either party may terminate the service agreement with 30 days written notice. Upon termination, clients retain access to their data as specified in the service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textd mb-4">11. Governing Law</h2>
              <p>
                These terms are governed by the laws of India. Any disputes will be resolved through binding arbitration in accordance with Indian arbitration laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textd mb-4">12. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of services constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textd mb-4">13. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-brand-primary/10 rounded-lg">
                <p><strong>Email:</strong> info@ampliedtech.com</p>
                <p><strong>Website:</strong> https://amplied.tech</p>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </main>
  )
}

