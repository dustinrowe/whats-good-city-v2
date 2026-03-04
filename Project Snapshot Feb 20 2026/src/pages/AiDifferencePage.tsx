import React from 'react';
import { ArrowRight, Brain, AlertCircle, Database, Settings, Target, FileJson, Users } from 'lucide-react';

function AiDifferencePage() {
  return (
    <div className="bg-white">
      {/* Hero Section with Diagonal Design */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 bg-gray-900 transform -skew-y-6 origin-top-left"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="flex flex-col gap-8">
            <div className="w-full">
              <div className="relative max-w-3xl mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2aa5b3] to-[#7cd1da] rounded-lg blur opacity-25"></div>
                <div className="relative bg-gray-900 p-8 rounded-lg border border-gray-800">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="text-gray-500 font-light text-2xl sm:text-3xl lg:text-4xl whitespace-nowrap">More than a</span>
                      <span className="text-rose-400 font-bold text-2xl sm:text-3xl lg:text-4xl tracking-wide line-through decoration-rose-500/50">WRAPPER</span>
                    </div>
                    <div className="mt-6 flex flex-wrap items-baseline gap-3">
                      <span className="text-gray-300 font-light text-3xl sm:text-4xl lg:text-5xl whitespace-nowrap">A purpose-built</span>
                      <span className="text-[#2aa5b3] font-black text-4xl sm:text-5xl lg:text-6xl tracking-wider">EVENT ENGINE</span>
                    </div>
                  </h1>
                  <p className="mt-8 text-xl text-gray-400">
                    Most AI event tools stop at the surface. We dive deep.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full max-w-3xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: Brain, text: "Purpose Built for Events", href: "#why-different" },
                  { icon: Settings, text: "Control Your Sources", href: "#why-different" },
                  { icon: FileJson, text: "Enriched Data", href: "#why-different" },
                  { icon: Users, text: "Uniquely Yours", href: "#why-different" }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700 hover:bg-gray-700/50 transition-colors cursor-pointer"
                  >
                    <item.icon className="h-8 w-8 text-[#2aa5b3] mb-2" />
                    <p className="text-gray-300 text-sm">{item.text}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section with Floating Cards */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#2aa5b3] to-transparent"></div>
            
            <div className="relative grid gap-12">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 transform hover:-translate-y-1 transition-transform">
                <AlertCircle className="h-12 w-12 text-rose-500 mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">The Problem</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Most platforms are wrappers on top of Perplexity, OpenAI or other public AI model. They rely on 2–3 common event sites, missing the majority of what's really happening. This leads to:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Risk of hallucinated info',
                    'Repetition of the same events',
                    'Missing local gems',
                    'Outdated events'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-rose-200 bg-rose-500/10 p-3 rounded-lg">
                      <div className="h-2 w-2 rounded-full bg-rose-500"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section with Hexagon Grid */}
      <section id="why-different" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 inline-block border-b-4 border-[#2aa5b3]">
              Why We're Different
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Purpose Built for Events",
                description: "Custom model, built and trained specifically for events aggregation"
              },
              {
                icon: Settings,
                title: "Control Your Sources",
                description: "Choose and manage your event data sources to ensure consistent and holistic events captured"
              },
              {
                icon: FileJson,
                title: "Enriched Data",
                description: "AI enhances event information with additional context to fit your unique tone and audience"
              },
              {
                icon: Users,
                title: "Uniquely Yours",
                description: "Each model is tailored to your specific audience and needs"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#2aa5b3]/5 to-transparent rounded-xl transition-opacity group-hover:opacity-100 opacity-0"></div>
                <feature.icon className="relative h-12 w-12 text-[#2aa5b3] mb-4 transform transition-transform group-hover:scale-110" />
                <h3 className="relative text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="relative text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Section with Diagonal Split */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#2aa5b3] transform -skew-y-6"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mx-auto max-w-3xl">
              Get The Most Complete View of Happenings In Your City
            </h2>
            <div className="mt-10">
              <a
                href="https://calendly.com/dustinrowe/whats-good-inquiry"
                className="inline-flex items-center gap-x-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#2aa5b3] transition hover:bg-blue-50 hover:scale-105 transform"
              >
                Talk to Our Team
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AiDifferencePage;