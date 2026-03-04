import React from 'react';
import { ArrowRight, CheckCircle2, Users, Brain, Calendar, Sparkles, Globe2, X, Mail, Clock, MousePointer, FileText, TrendingUp } from 'lucide-react';

function AiEventCalendarPage() {
  const handleAiDifferenceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/ai-difference');
    window.dispatchEvent(new CustomEvent('navigationRequest', { detail: 'ai-difference' }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="animate-fade-in text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              AI Event Calendar
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Automate the process of collecting and posting events to your website.
            </p>
            {/* Image Section */}
            <div className="mt-8 w-full overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1745008204/ChatGPT_Image_Apr_18_2025_04_29_39_PM.png"
                alt="AI Event Sourcing Process"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative bg-gray-50 p-6 rounded-2xl">
              <div className="mb-4">
                <Sparkles className="h-10 w-10 text-[#2aa5b3]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Events AI
              </h3>
              <p className="mt-2 text-gray-600">
                Intelligent event discovery and enhancement.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  'Define your sources',
                  'Enrich data with AI',
                  'Customized for your audience'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button
                  onClick={handleAiDifferenceClick}
                  className="group inline-flex items-center gap-x-2 text-sm font-semibold text-[#2aa5b3] hover:text-[#4dbbc7]"
                >
                  <span className="border-b border-dotted border-[#2aa5b3]">READ: Why our AI is Different</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="relative bg-gray-50 p-6 rounded-2xl">
              <div className="mb-4">
                <Globe2 className="h-10 w-10 text-[#2aa5b3]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Easy Integrations
              </h3>
              <p className="mt-2 text-gray-600">
                Flexible options for sharing your events.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  'Send events to your existing website',
                  'Use our mobile first interface',
                  'Provide an RSS feed for partners',
                  'Generate newsletters instantly'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center p-2 bg-white rounded border border-gray-200">
                  <img
                    src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770733374/tempest.png"
                    alt="Tempest"
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center p-2 bg-white rounded border border-gray-200">
                  <img
                    src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770733374/footer-logo.png"
                    alt="Partner Logo"
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center p-2 bg-white rounded border border-gray-200">
                  <img
                    src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770933390/drupal_logo.png"
                    alt="Drupal"
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center p-2 bg-white rounded border border-gray-200">
                  <img
                    src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770933390/WordPress_logo.svg.png"
                    alt="WordPress"
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://calendly.com/dustinrowe/whats-good-inquiry"
              className="inline-flex items-center gap-x-2 rounded-full bg-[#2aa5b3] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4dbbc7]"
            >
              Save time, post better events, and create newsletters
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* AI Newsletter Generator Section */}
      <section id="ai-newsletter-generator" className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Compact Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <Mail className="h-6 w-6 text-[#2aa5b3]" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-3">
              AI Newsletter Generator
            </h2>
            <p className="mx-auto max-w-2xl text-base text-gray-600">
              Save 2 hours every week on your event newsletter.
            </p>
          </div>

          {/* Side-by-Side Layout: Video + Info */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left: Video */}
              <div>
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <div className="bg-gray-900 p-4">
                    <iframe
                      width="640"
                      height="400"
                      src="https://www.loom.com/embed/ac4b5f9a47db4bfdbebabfd1e55a9059"
                      frameBorder="0"
                      allowFullScreen
                      className="rounded-lg w-full"
                      style={{ aspectRatio: '16/10' }}
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Right: Info Panel */}
              <div className="flex flex-col justify-center">
                <p className="text-gray-700 mb-6">
                  Click specific events to include, generate rich text, and copy-paste into any email platform.
                </p>

                {/* Key Benefits */}
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">AI finds and organizes all events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Click to select events you want</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Generate formatted text instantly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Copy-paste into any email platform</span>
                  </li>
                </ul>

                {/* Testimonial Quote */}
                <div className="bg-gradient-to-br from-[#e5f5f7] to-white p-6 rounded-xl border border-[#2aa5b3]/30">
                  <div className="text-3xl text-[#2aa5b3] mb-2">"</div>
                  <p className="text-gray-800 italic mb-3 leading-relaxed">
                    What used to take me 2 hours a week to write by hand, now can be done in 5 minutes.
                  </p>
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-900">— Megan Rowe</div>
                    <div className="text-xs text-gray-600">Founder / Media Operator in Wilmington, NC</div>
                  </div>

                  {/* Stats */}
                  <div className="pt-4 border-t border-gray-200 flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#2aa5b3]" />
                      <span className="text-gray-700"><span className="font-bold text-gray-900">2 hrs</span> saved/week</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-[#2aa5b3]" />
                      <span className="text-gray-700"><span className="font-bold text-gray-900">60%</span> open rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#2aa5b3] to-transparent md:hidden"></div>
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[7px] rounded-full bg-[#2aa5b3] border-4 border-white shadow-lg md:hidden"></div>

                <div className="hidden md:flex md:col-span-1 md:justify-center md:relative">
                  <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-[#2aa5b3] to-transparent"></div>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#2aa5b3] flex items-center justify-center text-white font-bold text-xl shadow-lg">1</div>
                </div>

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
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#2aa5b3] to-transparent md:hidden"></div>
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[7px] rounded-full bg-[#2aa5b3] border-4 border-white shadow-lg md:hidden"></div>

                <div className="hidden md:flex md:col-span-1 md:justify-center md:relative">
                  <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-[#2aa5b3] to-transparent"></div>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#2aa5b3] flex items-center justify-center text-white font-bold text-xl shadow-lg">2</div>
                </div>

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
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[7px] rounded-full bg-[#2aa5b3] border-4 border-white shadow-lg md:hidden"></div>

                <div className="hidden md:flex md:col-span-1 md:justify-center md:relative">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#2aa5b3] flex items-center justify-center text-white font-bold text-xl shadow-lg">3</div>
                </div>

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

          {/* CTA */}
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

export default AiEventCalendarPage;
