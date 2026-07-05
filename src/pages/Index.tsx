import { Header } from "@/components/webapp/header"
import { PromoBanner } from "@/components/webapp/promo-banner"
import { ServicesRow } from "@/components/webapp/services-row"
import { SteamTopupWidget } from "@/components/webapp/steam-topup-widget"
import { FeaturesSection } from "@/components/features-section"
import { ApplicationsTimeline } from "@/components/applications-timeline"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Index() {
  return (
    <div className="dark">
      <Header />
      <main className="bg-black">
        <PromoBanner />
        <ServicesRow />
        <section className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <SteamTopupWidget />
          </div>
        </section>
        <FeaturesSection />
        <ApplicationsTimeline />
        <TestimonialsSection />
        <section id="faq">
          <FAQSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
