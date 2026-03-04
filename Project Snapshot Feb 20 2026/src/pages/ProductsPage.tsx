import React from 'react';
import { ArrowRight, CheckCircle2, Calendar, Smartphone, Zap, Globe2, BarChart3, Users } from 'lucide-react';

function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6">
              Two Powerful Products.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2aa5b3] via-[#4dbbc7] to-[#7cd1da]">
                One Mission: Better Destination Marketing
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Automate event discovery and elevate visitor experiences with solutions you can purchase individually or together
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a
                href="#ai-event-calendars"
                className="inline-flex items-center gap-x-2 rounded-full bg-[#2aa5b3] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#4dbbc7]"
              >
                Explore AI Event Calendars
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#mobile-trip-guides"
                className="inline-flex items-center gap-x-2 rounded-full border-2 border-[#2aa5b3] bg-transparent px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#2aa5b3]/10"
              >
                Explore Mobile Trip Guides
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Event Calendars Section */}
      <section id="ai-event-calendars" className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-white py-32 border-t-4 border-[#2aa5b3]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2aa5b3] border-2 border-[#2aa5b3] shadow-md mb-6">
                <Calendar className="h-5 w-5 text-white" />
                <span className="text-sm font-bold text-white">Product 1</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                AI Event Calendars
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Automate your event discovery and curation. Our AI scans 100+ sources daily to find, enrich, and organize events so your team can focus on strategy instead of manual data entry.
              </p>
              <div className="mb-8">
                <img
                  src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1745008204/ChatGPT_Image_Apr_18_2025_04_29_39_PM.png"
                  alt="AI Event Sourcing Process"
                  className="w-full h-auto rounded-xl shadow-2xl border-4 border-white"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Get</h3>
              {[
                'Automated event discovery from 100+ sources',
                'AI-powered event enrichment and categorization',
                'Smart filtering removes duplicates and low-quality listings',
                'Direct integration with existing DMO websites',
                'RSS feed export for distribution partners',
                'Real-time event updates throughout the day',
                'SEO-optimized individual event pages',
                'Analytics dashboard with engagement metrics',
                'Custom approval workflow for brand control',
                'AI newsletter generation',
                '60% increase in event coverage without additional staff'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-x-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-500 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}

              <div className="pt-6">
                <a
                  href="https://calendly.com/dustinrowe/whats-good-inquiry"
                  className="inline-flex items-center gap-x-2 rounded-full bg-[#2aa5b3] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4dbbc7] shadow-lg"
                >
                  Schedule Demo
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Myrtle Beach Case Study Card */}
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl border-4 border-[#2aa5b3] p-8 md:p-10 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                  <img
                    src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770396698/All-VMB_Logo_Wave-Orange.webp"
                    alt="Visit Myrtle Beach"
                    className="h-20 w-auto"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  SUCCESS STORY
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  See How Myrtle Beach Scaled Event Coverage by 60%
                </h3>
                <p className="text-gray-600 mb-4">
                  Visit Myrtle Beach transformed their destination marketing with 55+ hours saved monthly and zero additional staff needed.
                </p>
                <a
                  href="#real-results"
                  className="inline-flex items-center gap-x-2 rounded-full bg-[#2aa5b3] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4dbbc7] shadow-lg"
                >
                  View Full Case Study
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Trip Guides Section */}
      <section id="mobile-trip-guides" className="relative bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 py-32 border-t-4 border-gray-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Get</h3>
              {[
                'Itinerary building tools for custom trip planning',
                'Video-optimized platform for next-generation content',
                'Real-time upcoming events showcase',
                'Complete business listings directory',
                'Easy-to-use dashboard for destination managers',
                'In-depth analytics on visitor behavior and engagement',
                'Mobile-first responsive design',
                'Web-based platform for SEO benefits and instant access',
                'Email capture for itinerary sharing and CRM growth',
                'Fully custom branded to match destination identity',
                'Integrates with existing CRM systems or includes standalone CRM',
                'AI newsletter generation',
                'No app store approval or download friction'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-x-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-500 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}

              <div className="pt-6">
                <a
                  href="https://checkwhatsgood.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-x-2 rounded-full bg-[#2aa5b3] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4dbbc7] shadow-lg"
                >
                  See Live Demo
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-700 border-2 border-gray-700 shadow-md mb-6">
                <Smartphone className="h-5 w-5 text-white" />
                <span className="text-sm font-bold text-white">Product 2</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Mobile Trip Guides
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A next-gen visitor experience platform. This is a website, not an app—giving you SEO benefits, instant accessibility, and a video-first interface that modern travelers expect.
              </p>
              <div className="mb-8 bg-gray-900 p-4 rounded-2xl shadow-2xl border-4 border-white">
                <iframe
                  width="640"
                  height="480"
                  src="https://www.loom.com/embed/1c80c792c9b44faaa07777de372bf3dc?sid=ced00b33-ceb9-429f-89d8-c09af6298faa"
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-xl w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Independence Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-blue-50 py-28 border-t-4 border-[#2aa5b3]/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose One or Both—They Work Your Way
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each product is powerful on its own. Together, they create an unbeatable destination marketing platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#2aa5b3]/10">
                <Calendar className="h-6 w-6 text-[#2aa5b3]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI Event Calendars Only
              </h3>
              <p className="text-gray-600">
                Perfect for organizations needing automated event discovery and management without changing their visitor experience.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2aa5b3] to-[#4dbbc7] p-8 rounded-2xl shadow-md text-white">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Best Together
              </h3>
              <p className="text-blue-50">
                Combine automated event curation with a modern visitor platform for maximum impact on your destination marketing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#2aa5b3]/10">
                <Smartphone className="h-6 w-6 text-[#2aa5b3]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Mobile Trip Guides Only
              </h3>
              <p className="text-gray-600">
                Ideal for destinations with existing event calendars who want to provide visitors with a next-gen trip planning experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="bg-white py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built to Integrate with Your Existing Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly connect with the platforms you already use
            </p>
          </div>

          <div className="flex justify-center items-center gap-12 flex-wrap max-w-5xl mx-auto">
            <img
              src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770933390/simpleviewlogo.png"
              alt="Simpleview"
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770933390/drupal_logo.png"
              alt="Drupal"
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770933390/WordPress_logo.svg.png"
              alt="WordPress"
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770933390/tempest-color.png"
              alt="Tempest"
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Strong Closing CTA Section */}
      <section className="bg-gradient-to-br from-[#2aa5b3] to-[#4dbbc7] py-28 border-t-4 border-[#7cd1da]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Destination Marketing?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join leading destinations using our products to automate event discovery and create exceptional visitor experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://calendly.com/dustinrowe/whats-good-inquiry"
              className="inline-flex items-center justify-center gap-x-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#2aa5b3] transition hover:bg-blue-50"
            >
              Schedule a Demo
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="https://checkwhatsgood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-x-2 rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
            >
              See It Live
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <p className="text-blue-100 text-sm">
            Full implementation support included. We're with you every step of the way.
          </p>
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
