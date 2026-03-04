import React from 'react';
import { ArrowRight, Sparkles, Globe2, Calendar, BarChart3, Zap, Building2, Newspaper } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
        
        {/* Large Lightning Bolt */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
          <div className="relative w-[800px] h-[800px]">
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" 
                className="animate-draw"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: 'rgba(42, 165, 179, 0.2)' }}
              />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2aa5b3]/10 border border-[#2aa5b3]/20 mb-8">
              <Zap className="h-4 w-4 text-[#2aa5b3]" />
              <span className="text-sm font-medium text-[#2aa5b3]">Powered by AI</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="animate-fade-in text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2aa5b3] via-[#4dbbc7] to-[#7cd1da]">
                Automated Event Curation
              </span>
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl text-gray-300">
                for the Next Generation of Destination Marketing
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="mt-8 text-xl text-gray-400 max-w-2xl">
              Give your users access to realtime information on the top events, happenings, activities, and happy hours in your city.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://calendly.com/dustinrowe/whats-good-inquiry"
                className="inline-flex items-center gap-x-2 rounded-full bg-[#2aa5b3] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#4dbbc7]"
              >
                Schedule Demo
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Myrtle Beach Case Study Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#e5f5f7] via-blue-50 to-cyan-50 py-16">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770398703/istockphoto-1426245549-612x612.jpg"
            alt="Myrtle Beach"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => {
              onNavigate('dmo');
              setTimeout(() => {
                document.getElementById('myrtle-beach-case-study')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="group w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer text-left"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Logo and Headline */}
              <div>
                <div className="mb-6 inline-block bg-white rounded-lg shadow-md p-4">
                  <img
                    src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770396698/All-VMB_Logo_Wave-Orange.webp"
                    alt="Visit Myrtle Beach"
                    className="h-16 w-auto"
                  />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  How Myrtle Beach Scaled Event Coverage by 60%—Without Adding Headcount
                </h2>
                <div className="inline-flex items-center gap-2 text-[#2aa5b3] font-semibold group-hover:gap-3 transition-all">
                  <span className="border-b-2 border-[#2aa5b3] border-dashed">Read the Full Case Study</span>
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>

              {/* Right Side - Stats and Testimonial */}
              <div className="space-y-6">
                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-[#2aa5b3] to-[#4dbbc7] rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-white mb-1">60%</div>
                    <div className="text-xs text-white/90 font-medium">More Events</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#2aa5b3] to-[#4dbbc7] rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-white mb-1">55+</div>
                    <div className="text-xs text-white/90 font-medium">Hours Saved</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-white mb-1">0</div>
                    <div className="text-xs text-white/90 font-medium">New Staff</div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#2aa5b3]">
                  <p className="text-gray-700 italic mb-3 text-sm leading-relaxed">
                    "Working with What's Good has been a game-changer. Their AI-powered event aggregator saves our team time and resources while still delivering a seamless, high-quality experience..."
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1770997784/Tiffany-Henry_1_1.jpg"
                      alt="Tiffany Henry"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Tiffany Henry</div>
                      <div className="text-xs text-gray-600">Marketing Coordinator, Myrtle Beach Area CVB</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Solutions for Every Need
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Tailored solutions for different organizations
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* DMO Card */}
            <button
              onClick={() => onNavigate('dmo')}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 to-cyan-700 p-8 cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1663013123196-f83decee810f?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">For DMOs</h3>
                <p className="text-cyan-50 mb-6">
                  Transform your destination's digital presence with AI-powered event discovery and curation.
                </p>
                <div className="inline-flex items-center gap-2 text-white">
                  Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </button>

            {/* Media Card */}
            <button
              onClick={() => onNavigate('media')}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 to-blue-900 p-8 cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600">
                  <Newspaper className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">For Local Media</h3>
                <p className="text-blue-50 mb-6">
                  Automate event discovery and create engaging newsletters with AI-powered tools.
                </p>
                <div className="inline-flex items-center gap-2 text-white">
                  Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white" id="how-it-works">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our AI-powered platform streamlines every aspect of event sourcing, creation, and management
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-[#e5f5f7] text-[#2aa5b3]">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">AI Discovery</h3>
              <p className="mt-2 text-gray-600">
                Connect to hundreds of pages across the web to automate event aggregation
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-[#e5f5f7] text-[#2aa5b3]">
                <Globe2 className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">User friendly interface</h3>
              <p className="mt-2 text-gray-600">
                Scroll to discover like familiar social media platforms
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-[#e5f5f7] text-[#2aa5b3]">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Smart Curation</h3>
              <p className="mt-2 text-gray-600">
                Filter and organize events with AI-powered categorization
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-[#e5f5f7] text-[#2aa5b3]">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Analytics</h3>
              <p className="mt-2 text-gray-600">
                Track performance with detailed engagement metrics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos Section */}
      <section className="bg-gray-900 py-12 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-[#2aa5b3] mb-8">
            You're in Good Company
          </h2>
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>

            {/* Scrolling Container */}
            <div className="overflow-hidden whitespace-nowrap">
              <div className="inline-block animate-scroll">
                {[
                  'https://res.cloudinary.com/checkwhatsgood/image/upload/t_greyscale/v1738741196/stpete/app/logo.png',
                  'https://res.cloudinary.com/checkwhatsgood/image/upload/t_greyscale/v1739312889/wichita/app/logo.png',
                  'https://res.cloudinary.com/checkwhatsgood/image/upload/t_greyscale/v1740420417/huntsville/app/Huntsville_Explorer_Logo_with_Rocket.png',
                  'https://res.cloudinary.com/checkwhatsgood/image/upload/t_greyscale/v1768577153/wilmandbeacheslogo.png',
                  'https://res.cloudinary.com/checkwhatsgood/image/upload/t_greyscale/v1768577153/shelbytourismlogo.jpg',
                  'https://res.cloudinary.com/checkwhatsgood/image/upload/t_greyscale/v1768577153/visitmyrtlebeachlogo.jpg'
                ].map((logo, index) => (
                  <div key={`${logo}-${index}`} className="inline-block px-8">
                    <div className="h-20 w-40 flex items-center justify-center">
                      <img
                        src={logo}
                        alt="Partner Logo"
                        className="max-h-14 max-w-[140px] w-auto h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="inline-block animate-scroll">
                {[
                  'https://res.cloudinary.com/checkwhatsgood/image/upload/t_greyscale/v1738741196/stpete/app/logo.png',
                  'https://res.cloudinary.com/checkwhatsgood/image/upload/t_greyscale/v1739312889/wichita/app/logo.png',
                  'https://res.cloudinary.com/checkwhatsgood/image/upload/t_greyscale/v1740420417/huntsville/app/Huntsville_Explorer_Logo_with_Rocket.png',
                  'https://res.cloudinary.com/checkwhatsgood/image/upload/t_greyscale/v1768577153/wilmandbeacheslogo.png',
                  'https://res.cloudinary.com/checkwhatsgood/image/upload/t_greyscale/v1768577153/shelbytourismlogo.jpg',
                  'https://res.cloudinary.com/checkwhatsgood/image/upload/t_greyscale/v1768577153/visitmyrtlebeachlogo.jpg'
                ].map((logo, index) => (
                  <div key={`${logo}-${index}-duplicate`} className="inline-block px-8">
                    <div className="h-20 w-40 flex items-center justify-center bg-white/5 rounded-lg backdrop-blur-sm">
                      <img
                        src={logo}
                        alt="Partner Logo"
                        className="max-h-14 max-w-[140px] w-auto h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#2aa5b3] via-[#4dbbc7] to-[#7cd1da] sm:text-4xl">
              Ready to transform your event strategy?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              Join leading organizations using Whats Good to showcase their events.
            </p>
            <div className="mt-10">
              <a
                href="https://calendly.com/dustinrowe/whats-good-inquiry"
                className="group relative inline-flex items-center gap-x-2 rounded-full bg-[#2aa5b3] px-8 py-3 text-white transition hover:bg-[#4dbbc7]"
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

export default HomePage;