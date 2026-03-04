import React from 'react';
import { ArrowRight, CheckCircle2, Mail, Zap, PenTool, Users } from 'lucide-react';

function NewsletterPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="animate-fade-in text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Automate Your Event Newsletter with AI
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Keep subscribers engaged with automatically curated local events.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#schedule-demo" className="group relative inline-flex items-center gap-x-2 rounded-full bg-green-600 px-8 py-3 text-white transition hover:bg-green-500">
                Schedule Demo
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Feature 1 */}
            <div className="relative">
              <div className="mb-4">
                <Mail className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Automated Event Curation
              </h3>
              <p className="mt-2 text-gray-600">
                Let AI handle finding and curating the best local events.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  'AI-powered discovery',
                  'Smart categorization',
                  'Automated updates',
                  'Quality filters'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="relative">
              <div className="mb-4">
                <Zap className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Easy Integration
              </h3>
              <p className="mt-2 text-gray-600">
                Seamlessly integrate with your existing email platform.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  'One-click integration',
                  'Custom templates',
                  'API access',
                  'Automated scheduling'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="relative">
              <div className="mb-4">
                <PenTool className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Custom Design Tools
              </h3>
              <p className="mt-2 text-gray-600">
                Create beautiful, branded event sections for your newsletter.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  'Custom templates',
                  'Brand matching',
                  'Mobile-responsive',
                  'Rich media support'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="relative">
              <div className="mb-4">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Engagement Analytics
              </h3>
              <p className="mt-2 text-gray-600">
                Track how subscribers interact with event content.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  'Click tracking',
                  'Engagement metrics',
                  'A/B testing',
                  'Performance reports'
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

      {/* Case Study Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Newsletter Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See how newsletters are saving time and growing engagement.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Case Study 1 */}
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <div className="flex items-center gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                  alt="Local Insider"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Local Insider</h3>
                  <p className="text-gray-600">City Events Newsletter</p>
                </div>
              </div>
              <blockquote className="mt-4">
                <p className="text-gray-600">
                  "Whats Good has cut our newsletter production time in half."
                </p>
              </blockquote>
              <div className="mt-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">50% reduction in production time</span>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">35% increase in click-through rates</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <div className="flex items-center gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                  alt="Weekly Events"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Weekly Events</h3>
                  <p className="text-gray-600">Community Newsletter</p>
                </div>
              </div>
              <blockquote className="mt-4">
                <p className="text-gray-600">
                  "Our subscribers love the curated events section."
                </p>
              </blockquote>
              <div className="mt-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">25% increase in subscribers</span>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">40% higher engagement rate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-green-600 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Ready to automate your event newsletter?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-green-100">
              Join newsletters using Whats Good to save time and boost engagement.
            </p>
            <div className="mt-10">
              <a
                href="#schedule-demo"
                className="group relative inline-flex items-center gap-x-2 rounded-full bg-white px-8 py-3 text-green-600 transition hover:bg-green-50"
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

export default NewsletterPage;