import React from 'react';
import { ArrowRight, CheckCircle2, BarChart3, Calendar, Globe2, Users, Sparkles, Smartphone, Brain, X } from 'lucide-react';

function DmoPage() {
  const handleAiDifferenceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/ai-difference');
    // Trigger a custom event to notify App component to change the page
    window.dispatchEvent(new CustomEvent('navigationRequest', { detail: 'ai-difference' }));
  };

  return (
    <div className="bg-white">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-[#e5f5f7] py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.1]">
                Your{' '}
                <span className="relative">
                  <span className="relative z-10 text-[#2aa5b3]">Event Calendar</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[#2aa5b3]/20 -rotate-1"></span>
                </span>
                {' '}shouldn't be an afterthought
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Events are the number 1 page type on DMO websites{' '}
                <a 
                  href="https://www.destinationanalysts.com/wp-content/uploads/2020/05/DMA-West-DMO-Website-User-Conversion-Study-Executive-Summary.pdf?utm_source=chatgpt.com"
                  className="text-sm inline-flex items-center gap-x-1 underline decoration-[#2aa5b3] hover:text-[#2aa5b3] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  - Destination Analysts
                </a>
              </p>
            </div>

            {/* Right Content - Quote Block */}
            <a 
              href="#podcast-section"
              className="group relative bg-gray-900 rounded-2xl p-8 shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1750694074/billgeist.jpg"
                  alt="Bill Geist"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white">Bill Geist</h4>
                  <p className="text-gray-400">Author of Destination Leadership</p>
                </div>
              </div>
              <blockquote className="text-xl text-white mb-4">
                "It has a huge upside to keep people in town longer than they normally would stay"
              </blockquote>
              <div className="flex items-center text-[#2aa5b3] group-hover:translate-x-2 transition-transform">
                <span className="mr-2">Talking Event Calendars on Destination Discourse</span>
                <ArrowRight className="h-5 w-5" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Product Offerings Section */}
      <section className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful Solutions for DMOs</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Choose one or both products to automate event discovery and elevate your visitor experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* AI Event Calendars */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#2aa5b3]/10">
                <Sparkles className="h-8 w-8 text-[#2aa5b3]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Event Calendars</h3>
              <p className="text-gray-300 mb-6">
                Automate event discovery from 100+ sources. Our AI enriches data, removes duplicates, and integrates seamlessly with your existing website.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Automated event discovery & enrichment',
                  'Direct integration with your DMO website',
                  'RSS feed export for partners',
                  '60% increase in event coverage'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/ai-event-calendar"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', '/ai-event-calendar');
                  window.dispatchEvent(new CustomEvent('navigationRequest', { detail: 'ai-event-calendar' }));
                }}
                className="inline-flex items-center gap-x-2 rounded-full bg-[#2aa5b3] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4dbbc7]"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Mobile Trip Guides */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#2aa5b3]/10">
                <Smartphone className="h-8 w-8 text-[#2aa5b3]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mobile Trip Guides</h3>
              <p className="text-gray-300 mb-6">
                A next-gen visitor experience platform. Web-based for SEO benefits with a video-first, mobile-optimized interface travelers expect.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Itinerary building & trip planning tools',
                  'Video-optimized content platform',
                  'Real-time events & business directory',
                  'No app download required'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/mobile-trip-guide"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', '/mobile-trip-guide');
                  window.dispatchEvent(new CustomEvent('navigationRequest', { detail: 'mobile-trip-guide' }));
                }}
                className="inline-flex items-center gap-x-2 rounded-full bg-[#2aa5b3] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4dbbc7]"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Easy Integrations Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Works with Your Existing Tech Stack
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Seamlessly integrate with leading DMO website platforms. No need to replace your current system—our solutions enhance what you already have.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Integration Features */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#2aa5b3]/20">
              <div className="mb-6">
                <Globe2 className="h-12 w-12 text-[#2aa5b3]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Flexible Integration Options
              </h3>
              <p className="text-gray-600 mb-6">
                Choose the integration approach that works best for your destination.
              </p>
              <ul className="space-y-4">
                {[
                  'Direct API integration with your existing DMO website',
                  'Use our mobile-first web app as your visitor platform',
                  'RSS feed export for distribution partners and stakeholders',
                  'Custom integration support for unique requirements'
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-x-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-500 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button
                  onClick={handleAiDifferenceClick}
                  className="group inline-flex items-center gap-x-2 text-sm font-semibold text-[#2aa5b3] hover:text-[#4dbbc7]"
                >
                  <span className="border-b border-dotted border-[#2aa5b3]">READ: Why our AI is Different</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Platform Logos */}
            <div className="bg-gradient-to-br from-[#e5f5f7] to-white p-8 rounded-2xl shadow-lg border-2 border-[#2aa5b3]/20">
              <div className="mb-6">
                <Users className="h-12 w-12 text-[#2aa5b3]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Trusted DMO Software Partners
              </h3>
              <p className="text-gray-600 mb-8">
                We integrate seamlessly with the platforms you already use.
              </p>
              <div className="grid grid-cols-2 gap-8 items-center mb-8">
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow">
                  <img
                    src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770933390/simpleviewlogo.png"
                    alt="Simpleview"
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow">
                  <img
                    src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770933390/tempest-color.png"
                    alt="Tempest"
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow">
                  <img
                    src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770933390/drupal_logo.png"
                    alt="Drupal"
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow">
                  <img
                    src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770933390/WordPress_logo.svg.png"
                    alt="WordPress"
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-500 text-center">
                Plus custom integrations available for other platforms
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://calendly.com/dustinrowe/whats-good-inquiry"
              className="inline-flex items-center gap-x-2 rounded-full bg-[#2aa5b3] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#4dbbc7] shadow-lg"
            >
              Discuss Your Integration Needs
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcast-section" className="bg-gray-900 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              The Underappreciated Power of Event Calendars
            </h2>
            <p className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto">
              Two leaders in tourism discuss why destination marketing organizations need to prioritize fixing and upgrading their events calendars—and what better looks like.
            </p>
          </div>

          {/* Host Information */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Speaker 1 */}
              <div className="flex items-center gap-4 justify-center sm:justify-end">
                <img
                  src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1750694074/billgeist.jpg"
                  alt="Bill Geist"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">Bill Geist</h3>
                  <p className="text-gray-400">Author of Destination Leadership</p>
                </div>
              </div>

              {/* Speaker 2 */}
              <div className="flex items-center gap-4 justify-center sm:justify-start">
                <img
                  src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1750694074/stuartbutler.jpg"
                  alt="Stuart Butler"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">Stuart Butler</h3>
                  <p className="text-gray-400">CMO at Visit Myrtle Beach</p>
                </div>
              </div>
            </div>
          </div>

          {/* Spotify Player */}
          <div className="max-w-2xl mx-auto">
            <a 
              href="https://open.spotify.com/episode/3WyL2m5kcgtPrKCN5OZ5aU?t=1351"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group"
            >
              <div className="absolute inset-0 bg-[#2aa5b3]/0 group-hover:bg-[#2aa5b3]/10 transition-colors rounded-xl z-10"></div>
              <iframe 
                style={{ borderRadius: '12px' }} 
                src="https://open.spotify.com/embed/episode/3WyL2m5kcgtPrKCN5OZ5aU?utm_source=generator&t=1355849" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
            </a>
          </div>
        </div>
      </section>

      {/* Myrtle Beach Case Study */}
      <section id="myrtle-beach-case-study" className="bg-white py-24">
        {/* Hero Section with Background Image */}
        <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden mb-16">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770398703/istockphoto-1426245549-612x612.jpg"
              alt="Myrtle Beach"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            {/* Myrtle Beach Logo */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770396698/All-VMB_Logo_Wave-Orange.webp"
                  alt="Visit Myrtle Beach"
                  className="max-h-24 w-auto"
                />
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                How Myrtle Beach Scaled Event Coverage by 60%—Without Adding Headcount
              </h2>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section 1: Goal + Context */}
          <div className="mb-24">
            <div className="text-sm font-semibold text-[#2aa5b3] mb-4">GOAL + CONTEXT</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">How Myrtle Beach Filled Their Event Calendar, Without Burning Out Their Team</h3>
            <p className="text-xl text-gray-600 mb-8">
              <span className="font-bold text-[#2aa5b3]">Goal:</span> Fill Myrtle Beach's event calendar, their most high-intent page for visitors, to ensure visitors see a vibrant 7-day destination that makes them want to stay longer and keep coming back - without adding additional strain to their team.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              When the Myrtle Beach team talked with us, their <span className="text-red-600 font-semibold">chief complaints</span> were:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="mb-4">
                  <X className="h-10 w-10 text-red-600" />
                </div>
                <p className="text-gray-700 italic">
                  We spend more time chasing partners for event details than actually promoting our destination. We need a way to capture events without waiting on someone else to hit 'submit.'
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="mb-4">
                  <X className="h-10 w-10 text-red-600" />
                </div>
                <p className="text-gray-700 italic">
                  Our calendar looks dead mid-week, and it's hurting our brand perception
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="mb-4">
                  <X className="h-10 w-10 text-red-600" />
                </div>
                <p className="text-gray-700 italic">
                  We know great events are happening, but we're not capturing them fast enough
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Options */}
          <div className="mb-24">
            <div className="text-sm font-semibold text-[#2aa5b3] mb-4">OPTIONS</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-12">Options DMOs Typically Consider</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-2 border-red-200 bg-red-50 p-6 rounded-xl opacity-75">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Hire More Staff</h4>
                <p className="text-gray-600">
                  Good if you have budget and 6+ months to onboard new team members to handle manual event curation.
                </p>
              </div>
              <div className="border-2 border-red-200 bg-red-50 p-6 rounded-xl opacity-75">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Lower Quality Standards</h4>
                <p className="text-gray-600">
                  Good if event volume matters more than brand reputation and you're okay with junk listings.
                </p>
              </div>
              <div className="border-2 border-[#2aa5b3] bg-[#e5f5f7] p-6 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-3">AI + Human Workflow</h4>
                <p className="text-gray-600">
                  Good if you want to scale event coverage without sacrificing quality or adding headcount.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Results */}
          <div className="mb-24">
            <div className="text-sm font-semibold text-[#2aa5b3] mb-4">RESULTS</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">From 107 to 172 Events—And a Team That Can Finally Focus on Strategy</h3>
            <p className="text-xl text-gray-600 mb-12">60% more events, 55+ hours saved monthly, zero additional headcount</p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-gray-50 rounded-xl border-2 border-[#2aa5b3]">
                <div className="text-4xl font-bold text-[#2aa5b3] mb-2">60%</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">More Events</div>
                <div className="text-xs text-gray-600">(107 → 172/month)</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl border-2 border-[#2aa5b3]">
                <div className="text-4xl font-bold text-[#2aa5b3] mb-2">55+</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">Hours Saved</div>
                <div className="text-xs text-gray-600">Every month</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl border-2 border-[#2aa5b3]">
                <div className="text-4xl font-bold text-[#2aa5b3] mb-2">65</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">New Pages</div>
                <div className="text-xs text-gray-600">Indexed for search</div>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-xl border-2 border-red-200">
                <div className="text-4xl font-bold text-red-600 mb-2">0</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">Additional</div>
                <div className="text-xs text-gray-600">Staff needed</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200">
              <div className="text-4xl text-[#2aa5b3] mb-4">"</div>
              <p className="text-gray-700 italic mb-6 text-lg">
                Working with What's Good has been a game-changer. Their AI-powered event aggregator saves our team time and resources while still delivering a seamless, high-quality experience for locals and visitors looking for events in Myrtle Beach. Dustin has been incredibly hands-on and collaborative, and even after launch continues to go above and beyond - actively listening, making improvements, and fine-tuning the product to create the best possible experience for everyone.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770997784/Tiffany-Henry_1_1.jpg"
                  alt="Tiffany Henry"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-gray-900">— Tiffany Henry</div>
                  <div className="text-sm text-gray-600">Marketing Coordinator, Myrtle Beach Area CVB</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: How It Works */}
          <div className="mb-24">
            <div className="text-sm font-semibold text-[#2aa5b3] mb-4">HOW IT WORKS</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-12">3 Steps to Scale Event Coverage</h3>

            {/* Timeline Container */}
            <div className="max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="relative pl-8 pb-16 md:pl-0 md:grid md:grid-cols-12 md:gap-8">
                {/* Timeline Line & Node */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#2aa5b3] to-transparent md:hidden"></div>
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[7px] rounded-full bg-[#2aa5b3] border-4 border-white shadow-lg md:hidden"></div>

                {/* Desktop Timeline Elements */}
                <div className="hidden md:flex md:col-span-1 md:justify-center md:relative">
                  <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-[#2aa5b3] to-transparent"></div>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#2aa5b3] flex items-center justify-center text-white font-bold text-xl shadow-lg">1</div>
                </div>

                {/* Content */}
                <div className="md:col-span-11">
                  <div className="bg-gradient-to-br from-[#e5f5f7] to-white p-8 rounded-2xl shadow-md border border-[#2aa5b3]/20 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#2aa5b3]/10 flex items-center justify-center">
                        <Users className="h-7 w-7 text-[#2aa5b3]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-gray-900">We Confirm Your Sources</h4>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                        <span>Identify trusted local sources and partner websites</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                        <span>Define your event criteria and quality standards</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                        <span>Set up automated monitoring for continuous coverage</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative pl-8 pb-16 md:pl-0 md:grid md:grid-cols-12 md:gap-8">
                {/* Timeline Line & Node */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#2aa5b3] to-transparent md:hidden"></div>
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[7px] rounded-full bg-[#2aa5b3] border-4 border-white shadow-lg md:hidden"></div>

                {/* Desktop Timeline Elements */}
                <div className="hidden md:flex md:col-span-1 md:justify-center md:relative">
                  <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-[#2aa5b3] to-transparent"></div>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#2aa5b3] flex items-center justify-center text-white font-bold text-xl shadow-lg">2</div>
                </div>

                {/* Content */}
                <div className="md:col-span-11">
                  <div className="bg-gradient-to-br from-[#e5f5f7] to-white p-8 rounded-2xl shadow-md border border-[#2aa5b3]/20 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#2aa5b3]/10 flex items-center justify-center">
                        <Brain className="h-7 w-7 text-[#2aa5b3]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-gray-900">Our AI Does the Heavy Lifting</h4>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                        <span>Continuously scans 100+ sources for new events</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                        <span>Extracts and standardizes event details, dates, times, and locations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                        <span>Enhances listings with images, descriptions, and context</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                        <span>Removes duplicates and filters out low-quality listings automatically</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-12 md:gap-8">
                {/* Timeline Node (no line after last step) */}
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[7px] rounded-full bg-[#2aa5b3] border-4 border-white shadow-lg md:hidden"></div>

                {/* Desktop Timeline Elements */}
                <div className="hidden md:flex md:col-span-1 md:justify-center md:relative">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#2aa5b3] flex items-center justify-center text-white font-bold text-xl shadow-lg">3</div>
                </div>

                {/* Content */}
                <div className="md:col-span-11">
                  <div className="bg-gradient-to-br from-[#e5f5f7] to-white p-8 rounded-2xl shadow-md border border-[#2aa5b3]/20 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#2aa5b3]/10 flex items-center justify-center">
                        <Calendar className="h-7 w-7 text-[#2aa5b3]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-gray-900">You Approve & Publish Events</h4>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                        <span>Quick visual review of AI-curated event listings</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                        <span>One-click approval for events that fit your destination brand</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                        <span>Instant publishing to your live event calendar and website</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                        <span>Zero manual data entry or partner follow-up required</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: CTA */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Want Similar Results for Your Destination?</h3>
            <p className="text-xl text-gray-600 mb-8">See how What's Good can scale your event coverage without the manual grind.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/dustinrowe/whats-good-inquiry"
                className="inline-flex items-center justify-center gap-x-2 rounded-full bg-[#2aa5b3] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#4dbbc7]"
              >
                Schedule a Demo
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://checkwhatsgood.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-x-2 rounded-full border-2 border-[#2aa5b3] bg-white px-8 py-3 text-sm font-semibold text-[#2aa5b3] transition hover:bg-[#e5f5f7]"
              >
                See Check What's Good Live
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#2aa5b3] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Ready to transform your destination's event discovery?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
              Join leading DMOs using Whats Good to showcase their events.
            </p>
            <div className="mt-10">
              <a
                href="https://calendly.com/dustinrowe/whats-good-inquiry"
                className="group relative inline-flex items-center gap-x-2 rounded-full bg-white px-8 py-3 text-[#2aa5b3] transition hover:bg-blue-50"
              >
                Schedule Your Demo
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DmoPage;