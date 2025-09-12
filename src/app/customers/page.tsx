import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Section from "@/components/section";
import CustomersLogos from "@/components/customers-logos";
import Testimonials from "@/components/testimonials";
import CTABand from "@/components/cta-band";

const caseStudies = [
  {
    company: "YappyApps",
    industry: "Mobile App Development",
    challenge: "Needed to scale their mobile app infrastructure to handle 100K+ users",
    solution: "Implemented cloud-native architecture with auto-scaling and microservices",
    results: [
      "99.9% uptime achieved",
      "50% reduction in infrastructure costs",
      "3x faster app performance",
      "Seamless scaling to 500K+ users"
    ],
    logo: "/logos/yappyapps.png"
  },
  {
    company: "Shephertz Technologies",
    industry: "Cloud Infrastructure",
    challenge: "Required secure, compliant cloud infrastructure for enterprise clients",
    solution: "Built multi-tenant cloud platform with advanced security and compliance features",
    results: [
      "SOC2 Type II compliance achieved",
      "Zero security incidents",
      "40% faster deployment times",
      "99.95% SLA maintained"
    ],
    logo: "/logos/shephertz.png"
  },
  {
    company: "Witzeal Technologies",
    industry: "Gaming Solutions",
    challenge: "Needed to optimize game performance and reduce deployment time",
    solution: "Implemented DevOps pipeline and cloud infrastructure optimization",
    results: [
      "70% reduction in deployment time",
      "60% improvement in game performance",
      "Zero-downtime deployments",
      "50% cost savings on infrastructure"
    ],
    logo: "/logos/witzeal.png"
  },
  {
    company: "Wealthians",
    industry: "Fintech Platform",
    challenge: "Required robust security and compliance for financial services platform",
    solution: "Implemented comprehensive cybersecurity framework and compliance management",
    results: [
      "100% compliance with financial regulations",
      "Zero security breaches",
      "24/7 threat monitoring",
      "Automated compliance reporting"
    ],
    logo: "/logos/wealthians.png"
  }
];

export default function CustomersPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      
      <main>
        {/* Hero Section */}
        <Section background="ink" className="pt-32">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-textd">
              Our Customers
            </h1>
            <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
              We&apos;re proud to partner with innovative companies across various industries, helping them achieve their digital transformation goals.
            </p>
          </div>
        </Section>

        {/* Customer Logos */}
        <Section background="surface">
          <CustomersLogos />
        </Section>

        {/* Case Studies */}
        <Section background="light">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-text">
                Success Stories
              </h2>
              <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
                Discover how we&apos;ve helped our clients achieve remarkable results through our Technology-as-a-Service approach
              </p>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div
                  key={study.company}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-xl flex items-center justify-center">
                        <span className="text-brand-primary font-bold text-xl">
                          {study.company.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text">
                          {study.company}
                        </h3>
                        <p className="text-brand-secondary">
                          {study.industry}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-text mb-2">Challenge:</h4>
                        <p className="text-brand-secondary">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-text mb-2">Solution:</h4>
                        <p className="text-brand-secondary">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-text mb-2">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-brand-secondary">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="w-full h-80 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-2xl border border-brand-secondary/20 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-24 h-24 bg-brand-primary/20 rounded-full mx-auto flex items-center justify-center">
                          <span className="text-brand-primary font-bold text-2xl">
                            {study.company.charAt(0)}
                          </span>
                        </div>
                        <p className="text-brand-secondary text-lg font-medium">
                          {study.company}
                        </p>
                        <p className="text-brand-secondary/70 text-sm">
                          {study.industry}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Testimonials */}
        <Section background="surface">
          <Testimonials />
        </Section>

        <CTABand />
      </main>
      
      <SiteFooter />
    </div>
  );
}
