import React from 'react';
import { ArrowRight, CheckCircle2, Newspaper, Coins, PenTool, BarChart3, Mail, Sparkles, Globe2, Users } from 'lucide-react';

function MediaPage() {
  return (
    <div className="bg-white">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="animate-fade-in bg-gradient-to-r from-[#2aa5b3] via-[#4dbbc7] to-[#7cd1da] bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
              Stop Chasing Events. Start Monetizing Them.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              You're stuck updating content that expires before you can make it worth your time. There's a better way.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="https://calendly.com/dustinrowe/whats-good-inquiry" className="group relative inline-flex items-center gap-x-2 rounded-full bg-[#2aa5b3] px-8 py-3 text-white transition hover:bg-[#4dbbc7]">
                See a Demo
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Media Companies Love Whats Good Section */}
      <section className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Why Local Media Companies Love Whats Good
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Join leading media companies in revolutionizing local event coverage
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#2aa5b3]/10">
                <Sparkles className="h-8 w-8 text-[#2aa5b3]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Save Time</h3>
              <p className="text-gray-400">
                Reduce event curation time by 80% with AI-powered automation.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#2aa5b3]/10">
                <Users className="h-8 w-8 text-[#2aa5b3]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Grow Audience</h3>
              <p className="text-gray-400">
                Increase organic user acquisition with SEO friendly pages
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#2aa5b3]/10">
                <Coins className="h-8 w-8 text-[#2aa5b3]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Drive Revenue</h3>
              <p className="text-gray-400">
                Create new revenue streams with premium event listings and sponsorships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City Hub Web App Section */}
      <section id="city-hub-web-app" className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              City Hub Web App
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Launch your own events platform with our white-label solution.
            </p>
            {/* Video Section */}
            <div className="mt-8 w-full overflow-hidden rounded-2xl shadow-lg">
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
        </div>

        {/* Features Grid */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative bg-gray-50 p-6 rounded-2xl">
              <div className="mb-4">
                <Globe2 className="h-10 w-10 text-[#2aa5b3]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                White-Label Platform
              </h3>
              <p className="mt-2 text-gray-600">
                Fully customizable events platform.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  'Custom branding',
                  'Flexible design',
                  'Mobile responsive',
                  'Easy integration'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative bg-gray-50 p-6 rounded-2xl">
              <div className="mb-4">
                <Coins className="h-10 w-10 text-[#2aa5b3]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Monetization
              </h3>
              <p className="mt-2 text-gray-600">
                Multiple revenue generation options.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  'Premium listings',
                  'Sponsored content',
                  'Ticket commissions',
                  'Subscription options'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Goal + Context */}
      <section id="case-studies" className="bg-[#F7F9FA] py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
              We Built This Because We Needed It
            </h2>
            <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-6 max-w-3xl mx-auto leading-relaxed">
              Build AI that could find and organize scattered local events from multiple sources—then prove it could actually generate revenue without the manual grind.
            </p>
          </div>

          <div className="mt-12">
            <p className="text-lg text-gray-700 mb-8 font-medium">
              We saw a gap in the market as locals ourselves:
            </p>
            <div className="space-y-6">
              <div className="border-l-4 border-[#2aa5b3] pl-6 py-2">
                <p className="text-lg text-gray-700 italic">
                  "Cool events are happening all around us, but there's no single place to find them"
                </p>
              </div>
              <div className="border-l-4 border-[#2aa5b3] pl-6 py-2">
                <p className="text-lg text-gray-700 italic">
                  "Businesses post on Facebook, Instagram, their websites—events are everywhere and nowhere"
                </p>
              </div>
              <div className="border-l-4 border-[#2aa5b3] pl-6 py-2">
                <p className="text-lg text-gray-700 italic">
                  "No one's built a thorough local source because the manual work doesn't scale"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Results */}
      <section className="bg-[#0A2540] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <p className="text-xs uppercase tracking-wider text-[#2aa5b3] font-semibold mb-6">RESULTS</p>
          </div>

          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="text-lg text-gray-300 mb-4">
              We weren't trying to build a media company. We built AI to solve event discovery, then launched <span className="font-semibold text-white">Check What's Good in Wilmington</span> as our battle-testing ground—a real market with real competition and real revenue on the line.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              <span className="font-bold text-white">We started from zero in 2024.</span> No existing audience. No brand recognition. Just the technology and a hypothesis.
            </p>
            <p className="text-lg text-gray-300">
              <span className="font-bold text-white">Here's what no other platform can show you:</span> We have the analytics. The real numbers from a real media business. These aren't projections—they're what we see in our own dashboard every day.
            </p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#2aa5b3]/20 to-[#2aa5b3]/10 border border-[#2aa5b3]/30 rounded-2xl p-8 text-center">
              <div className="text-5xl sm:text-6xl font-bold text-[#2aa5b3] mb-2">250+</div>
              <div className="text-sm text-gray-300 font-medium">Events Per Month</div>
              <div className="text-xs text-gray-400 mt-1">(in a small city)</div>
            </div>
            <div className="bg-gradient-to-br from-[#2aa5b3]/20 to-[#2aa5b3]/10 border border-[#2aa5b3]/30 rounded-2xl p-8 text-center">
              <div className="text-5xl sm:text-6xl font-bold text-[#2aa5b3] mb-2">20+</div>
              <div className="text-sm text-gray-300 font-medium">Events Per Session</div>
              <div className="text-xs text-gray-400 mt-1">(deep engagement)</div>
            </div>
            <div className="bg-gradient-to-br from-[#2aa5b3]/20 to-[#2aa5b3]/10 border border-[#2aa5b3]/30 rounded-2xl p-8 text-center">
              <div className="text-5xl sm:text-6xl font-bold text-[#2aa5b3] mb-2">80%</div>
              <div className="text-sm text-gray-300 font-medium">Mobile Traffic</div>
              <div className="text-xs text-gray-400 mt-1">(scrolling like Instagram)</div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mx-auto max-w-4xl mb-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Performance Metrics</h3>
            <div className="space-y-12">
              {/* Native Ad CTR */}
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Native Ad CTR</span>
                  <span className="text-xs font-bold text-[#2aa5b3] bg-[#2aa5b3]/20 px-3 py-1 rounded-full">12x Higher</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-gray-400">Our CTR:</span>
                      <span className="text-2xl font-bold text-[#2aa5b3]">5.81%</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-[#2aa5b3] rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-gray-400">Industry Avg:</span>
                      <span className="text-2xl font-bold text-gray-500">0.46%</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-500 rounded-full" style={{ width: '8%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-xl">
                  <p className="text-sm text-gray-300">
                    <span className="font-bold text-white">💡 Why this matters:</span> Your advertisers actually see results and renew. When local businesses get a 5.81% click rate instead of the industry standard 0.46%, they don't ghost you after one month—they become recurring revenue.
                  </p>
                </div>
              </div>

              {/* Scroll Depth */}
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Scroll Depth</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-gray-400">Our Depth:</span>
                      <span className="text-2xl font-bold text-[#2aa5b3]">73%</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-[#2aa5b3] rounded-full" style={{ width: '73%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-gray-400">Industry Avg:</span>
                      <span className="text-2xl font-bold text-gray-500">40%</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-500 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-xl">
                  <p className="text-sm text-gray-300">
                    <span className="font-bold text-white">💡 Why this matters:</span> People are actually consuming your content, which means ads placed "below the fold" still get seen. Your entire inventory is valuable, not just the header spots. That's more revenue per visitor.
                  </p>
                </div>
              </div>

              {/* Returning Users */}
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Returning Users</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-gray-400">Our Rate:</span>
                      <span className="text-2xl font-bold text-[#2aa5b3]">32%</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-[#2aa5b3] rounded-full" style={{ width: '32%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-gray-400">Industry Avg:</span>
                      <span className="text-2xl font-bold text-gray-500">18%</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-500 rounded-full" style={{ width: '18%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-xl">
                  <p className="text-sm text-gray-300">
                    <span className="font-bold text-white">💡 Why this matters:</span> You're building an owned audience, not renting attention from social algorithms. Returning users = free traffic. You don't have to spend money acquiring the same people over and over again. Every week, a third of your audience comes back without you lifting a finger.
                  </p>
                </div>
              </div>

              {/* Rage Clicks */}
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Rage Clicks</span>
                  <span className="text-xs font-bold text-green-400 bg-green-900/30 px-3 py-1 rounded-full">Near-zero frustration</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-gray-400">Our Rate:</span>
                      <span className="text-2xl font-bold text-[#2aa5b3]">0.06%</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-[#2aa5b3] rounded-full" style={{ width: '3%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-gray-400">Industry Avg:</span>
                      <span className="text-2xl font-bold text-gray-500">2-5%</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-500 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-xl">
                  <p className="text-sm text-gray-300">
                    <span className="font-bold text-white">💡 Why this matters:</span> Your UX doesn't frustrate people, which protects your brand and keeps people coming back. It's a good experience that isn't degraded by clunky interfaces, broken links, or confusing navigation. When people trust your site works, they make it a habit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <div className="text-4xl text-[#2aa5b3] mb-4">"</div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I use Check What's Good every weekend to find things to do. It's become my go-to source for events in Wilmington.
              </p>
              <div className="text-sm font-semibold text-white">— Charlie M., Local Resident</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <div className="text-4xl text-[#2aa5b3] mb-4">"</div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Megan and her team provided clear communication and real-time quantifiable metrics on campaign performance. That, coupled with patrons saying they came because of Check What's Good, gave me clarity on ROI. I will continue to use them and recommend them to others.
              </p>
              <div className="text-sm font-semibold text-white">— Joe Apkarian, Owner of The Eagle's Dare, Tacobaby & The Pour House</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <div className="text-4xl text-[#2aa5b3] mb-4">"</div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Visiting Wilmington and found this site. So easy to see what's happening this weekend. Wish every city had this!
              </p>
              <div className="text-sm font-semibold text-white">— Shana C., Website User</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="bg-[#F7F9FA] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <p className="text-xs uppercase tracking-wider text-[#2aa5b3] font-semibold mb-6">HOW IT WORKS</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-16">
              3 Steps to Build Valuable Ad Inventory
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Discovery</h3>
              <p className="text-sm text-gray-600 mb-6 font-medium">Runs 24/7</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">AI scans 100+ sources automatically</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Finds events scattered across social media and websites</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Discovers 250+ events monthly in a small city</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Filtering</h3>
              <p className="text-sm text-gray-600 mb-6 font-medium">Instant</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Removes duplicates and junk listings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Prioritizes local, high-quality events</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Keeps your feed clean and on-brand</span>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="text-5xl mb-6">✓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Curation</h3>
              <p className="text-sm text-gray-600 mb-6 font-medium">15 mins/week</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Your team does a quick vibe check</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Approve events that fit your audience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#2aa5b3] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Focus on distribution, not data entry</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Want to Build This for Your Market?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 mb-10">
              See how What's Good can turn event content into recurring revenue without the manual grind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://calendly.com/dustinrowe/whats-good-inquiry"
                className="group relative inline-flex items-center gap-x-2 rounded-full bg-[#2aa5b3] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#4dbbc7] shadow-lg"
              >
                Schedule a Demo
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="https://checkwhatsgood.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-x-2 rounded-full border-2 border-[#2aa5b3] bg-white px-8 py-4 text-lg font-semibold text-[#2aa5b3] transition hover:bg-[#F7F9FA]"
              >
                See Check What's Good Live
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
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
              Ready to automate your events coverage?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
              Join leading media companies using Whats Good.
            </p>
            <div className="mt-10">
              <a
                href="https://calendly.com/dustinrowe/whats-good-inquiry"
                className="group relative inline-flex items-center gap-x-2 rounded-full bg-white px-8 py-3 text-[#2aa5b3] transition hover:bg-blue-50"
              >
                See a Demo
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MediaPage;