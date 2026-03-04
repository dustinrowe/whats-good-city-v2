import React from 'react';
import { ArrowRight, CheckCircle2, Smartphone, BarChart3, MapPin, Calendar, TrendingUp, Users } from 'lucide-react';

function MobileTripGuidePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2aa5b3] via-[#4dbbc7] to-[#7cd1da] py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6">
              Mobile Trip Guide
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-2xl text-blue-50">
              Inspire visitors to discover more, stay longer, and explore deeper
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              A web-based platform that helps visitors find the restaurant, bar, or hidden gem that makes their trip memorable—no app download required.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a
                href="https://checkwhatsgood.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#2aa5b3] transition hover:bg-blue-50 shadow-lg"
              >
                See Live Demo
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://calendly.com/dustinrowe/whats-good-inquiry"
                className="inline-flex items-center gap-x-2 rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                Schedule Demo
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">See It In Action</h2>
            <p className="text-xl text-gray-600">
              Visual discovery optimized for mobile with itinerary tools that drive exploration
            </p>
          </div>
          <div className="w-full overflow-hidden rounded-2xl shadow-2xl">
            <div className="bg-gray-900 p-4 w-full">
              <iframe
                width="640"
                height="618"
                src="https://www.loom.com/embed/1c80c792c9b44faaa07777de372bf3dc?sid=ced00b33-ceb9-429f-89d8-c09af6298faa"
                frameBorder="0"
                allowFullScreen
                className="rounded-xl w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Three Core Benefits Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Three Ways to Transform Visitor Engagement
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Discover Local Experiences */}
            <div className="bg-gradient-to-br from-[#e5f5f7] to-white p-8 rounded-2xl shadow-lg border-2 border-[#2aa5b3]/20">
              <div className="mb-6">
                <img
                  src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1771612107/discover_local_experieinces_1.png"
                  alt="Discover Local Experiences"
                  className="w-full h-64 object-contain rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Discover Local Experiences
              </h3>
              <p className="text-gray-600">
                Help visitors find the restaurant, bar, or hidden gem that makes their trip memorable
              </p>
            </div>

            {/* Builds Itineraries */}
            <div className="bg-gradient-to-br from-[#e5f5f7] to-white p-8 rounded-2xl shadow-lg border-2 border-[#2aa5b3]/20">
              <div className="mb-6">
                <img
                  src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1771611723/build_itineraries.png"
                  alt="Build Itineraries"
                  className="w-full h-64 object-contain rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Builds Itineraries
              </h3>
              <p className="text-gray-600">
                Ready-made guides or build your own day-by-day plans with curated trip ideas + custom planning tools
              </p>
            </div>

            {/* Measure Impact */}
            <div className="bg-gradient-to-br from-[#e5f5f7] to-white p-8 rounded-2xl shadow-lg border-2 border-[#2aa5b3]/20">
              <div className="mb-6">
                <img
                  src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1771611724/measure_impact.png"
                  alt="Measure Impact"
                  className="w-full h-64 object-contain rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Measure Impact
              </h3>
              <p className="text-gray-600">
                Track visitor engagement, provide partner analytics, and demonstrate ROI to stakeholders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Web App Explanation Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
              A Mobile-First Website That Feels Like an App
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              It's NOT an app—it's modern web technology that gives visitors an app-like experience without any downloads or friction
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Advantage of a Web App */}
            <div className="relative bg-white p-8 rounded-2xl shadow-lg border-2 border-[#2aa5b3]/20">
              <div className="mb-6">
                <Smartphone className="h-12 w-12 text-[#2aa5b3]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Advantage of a Web App
              </h3>
              <p className="text-gray-600 mb-6">
                Modern web technology that feels native without the friction.
              </p>
              <ul className="space-y-4">
                {[
                  'Feels like a native app, without the download',
                  'Instant access—no signup friction for new users',
                  'Every attraction, restaurant, and event gets its own unique URL that Google can find and index',
                  'Powerful SEO drives organic traffic and fuels your entire online presence',
                  'In depth performance analytics for your partners'
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-x-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-500 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Management */}
            <div className="relative bg-white p-8 rounded-2xl shadow-lg border-2 border-[#2aa5b3]/20">
              <div className="mb-6">
                <BarChart3 className="h-12 w-12 text-[#2aa5b3]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Data Management
              </h3>
              <p className="text-gray-600 mb-6">
                Complete control over your data and user experience.
              </p>
              <ul className="space-y-4">
                {[
                  'Control the algorithm to route visitors to specific partners, events, or areas',
                  'Connect to CRM data from leading DMO website providers',
                  'Add points of interest via google maps integration',
                  'Monetization potential by controlling featured points of interest'
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-x-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-500 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              The Complete Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for modern destination marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Web-based Platform */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#2aa5b3]/20">
              <div className="mb-4">
                <Smartphone className="h-12 w-12 text-[#2aa5b3]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Web-based Platform
              </h3>
              <p className="text-gray-600">
                No app downloads, maximum search visibility. Instant access for every visitor.
              </p>
            </div>

            {/* Fully White-labeled */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#2aa5b3]/20">
              <div className="mb-4">
                <CheckCircle2 className="h-12 w-12 text-[#2aa5b3]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fully White-labeled
              </h3>
              <p className="text-gray-600">
                Fully customizable to match your destination's unique brand identity.
              </p>
            </div>

            {/* Flexible Integration */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#2aa5b3]/20">
              <div className="mb-4">
                <Users className="h-12 w-12 text-[#2aa5b3]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Flexible Integration
              </h3>
              <p className="text-gray-600">
                Works with Simpleview, Tempest, or as a standalone solution.
              </p>
            </div>

            {/* In-depth Analytics */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#2aa5b3]/20">
              <div className="mb-4">
                <BarChart3 className="h-12 w-12 text-[#2aa5b3]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                In-depth Analytics
              </h3>
              <p className="text-gray-600">
                Track visitor engagement and provide partner analytics to demonstrate ROI.
              </p>
            </div>

            {/* Curated Trip Ideas */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#2aa5b3]/20">
              <div className="mb-4">
                <MapPin className="h-12 w-12 text-[#2aa5b3]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Curated Trip Ideas
              </h3>
              <p className="text-gray-600">
                Ready-made itineraries plus custom planning tools for personalized experiences.
              </p>
            </div>

            {/* SEO Optimized */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#2aa5b3]/20">
              <div className="mb-4">
                <TrendingUp className="h-12 w-12 text-[#2aa5b3]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                SEO Optimized
              </h3>
              <p className="text-gray-600">
                Individual pages for maximum SEO benefit and organic search visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integrations Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Works with Leading DMO Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Seamlessly integrate with Simpleview, Tempest, or use as a standalone solution
            </p>
          </div>

          <div className="flex justify-center items-center gap-12 flex-wrap">
            <img
              src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770933390/simpleviewlogo.png"
              alt="Simpleview"
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770933390/tempest-color.png"
              alt="Tempest"
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
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-[#2aa5b3] to-[#4dbbc7] py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
              Ready to Transform Your Visitor Experience?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-blue-100 mb-10">
              Join leading destinations using our Mobile Trip Guide to inspire visitors to discover more, stay longer, and explore deeper.
            </p>
            <a
              href="https://calendly.com/dustinrowe/whats-good-inquiry"
              className="inline-flex items-center gap-x-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#2aa5b3] transition hover:bg-blue-50 shadow-xl"
            >
              Get Started Today
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MobileTripGuidePage;
