import React from 'react';
import { ExternalLink } from 'lucide-react';

function AboutPage() {
  const founders = [
    {
      name: 'Dustin Rowe',
      title: 'Founder / CEO',
      bio: 'The builder. Previously built software for the top pharmaceutical tech company that helped get COVID vaccines and GLP-1 drugs approved, leading a team of 30 across development and Quality Assurance. Founded an influencer marketplace before that. Now he runs everything from product to hiring and strategy, and makes sure the platform scales without breaking.',
      image: 'https://res.cloudinary.com/checkwhatsgood/image/upload/v1770068695/dustin.png'
    },
    {
      name: 'Megan Rowe',
      title: 'Founder / CMO',
      bio: 'The connector. Built an audience from zero to 30M impressions by showcasing What\'s Good in action rather than just talking about it. Worked with 100+ hospitality businesses, turns real insights into winning strategies, and bridges audience behavior with product development.',
      image: 'https://res.cloudinary.com/checkwhatsgood/image/upload/v1770068695/meagn.png'
    },
    {
      name: 'Mahmud Ahsan',
      title: 'Founder / Lead Developer',
      bio: 'The full-stack architect. Serial entrepreneur who\'s co-founded three companies and built mobile apps downloaded 15+ million times. He architected What\'s Good\'s entire platform from scratch—frontend to backend. His superpower: turning complex technical challenges into elegant, scalable solutions.',
      image: 'https://res.cloudinary.com/checkwhatsgood/image/upload/v1770068695/Mahmud.png'
    }
  ];

  const pressOutlets = [
    { name: 'Destination Discourse', url: 'https://www.youtube.com/watch?v=wh4dmTZ9oYE', logo: 'https://res.cloudinary.com/checkwhatsgood/image/upload/v1770224008/dest-discourse2.png' },
    { name: 'ARK Invest', url: 'https://www.youtube.com/watch?v=-vntO9ZYTHo&t=40s', logo: 'https://res.cloudinary.com/checkwhatsgood/image/upload/v1770224007/20230317_ArkInvest.webp' },
    { name: 'Grepbeat', url: 'https://grepbeat.com/2024/10/30/wilmingtons-check-whats-good-connects-people-to-local-events-businesses/', logo: 'https://res.cloudinary.com/checkwhatsgood/image/upload/v1770224007/RedGrepBeatSquare-01.webp' },
    { name: 'Wilmington Biz', url: 'https://www.wilmingtonbiz.com/wilmingtonbiz_magazine/2024/09/25/young_startups_get_to_the_good_stuff/25934', logo: 'https://res.cloudinary.com/checkwhatsgood/image/upload/v1770224021/Screenshot_2026-02-04_at_11.47.06_AM.png' },
    { name: 'Tampa Bay Business Journal', url: 'https://www.bizjournals.com/tampabay/inno/stories/news/2024/01/31/whats-good-st-pete-angel-investors.html?csrc=6398&utm_campaign=trueAnthemTrendingContent&utm_medium=trueanthem&utm_source=linkedin', logo: 'https://res.cloudinary.com/checkwhatsgood/image/upload/v1770224007/tampa_bay_biz_journal.png' },
    { name: 'Wilma Magazine', url: 'https://www.wilmamag.com/good-times/', logo: 'https://res.cloudinary.com/checkwhatsgood/image/upload/v1770224424/Screenshot_2026-02-04_at_12.00.10_PM.png' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2aa5b3] via-[#4dbbc7] to-[#7cd1da]">
                About Us
              </span>
            </h1>

            <p className="mt-8 text-xl text-gray-400 max-w-3xl">
              We didn't set out to build software for destinations. We set out to solve a problem we were living. Here's how it started.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            The Origin Story
          </h2>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              In 2024, we were frustrated by a problem we couldn't solve: great events were happening all around us, but finding them was nearly impossible. By the time something showed up on social media, it was already over. Local event calendars were sparse, clunky, outdated.
            </p>

            <p>
              So we asked: why doesn't event discovery technology work better? And what happens if we build it?
            </p>

            <p>
              We built an AI-powered system to automatically find, filter, and organize events at scale. Then we launched Check What's Good in Wilmington as our proof of concept - a live testing ground to see if the technology actually worked in the real world.
            </p>

            <p>
              Then something unexpected happened: we accidentally built a media business.
            </p>

            <p>
              People couldn't stop using it. Locals told us they had no idea Wilmington had so much going on. Tourists said they planned their entire trip with us. Airbnb hosts reached out saying their guests loved the site.
            </p>

            <p>
              We hit 30 million impressions from people in our small city and around the country - not because we had a massive budget, or really any budget at all, but because we'd solved a problem people desperately wanted solved.
            </p>

            <p>
              What started as a tech proof of concept became a full media operation. We learned what works by actually doing it: curating events, managing content, selling sponsorships, optimizing for engagement, hitting inboxes every week—and most importantly, driving real foot traffic... the kind of foot traffic that made our partners say wow and notice a difference in attendance of their featured events.
            </p>

            <p>
              Then the DMOs started noticing.
            </p>

            <p>
              Tourism officials reached out asking how we did it (we didn't even know what an occupancy tax was at the time). Media companies wanted to know our tech stack. That's when we realized: <strong>every destination is fighting the exact same battle we just won.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-16 text-center">
            Our Leadership
          </h2>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {founders.map((founder) => (
              <div key={founder.name} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                  <p className="text-[#2aa5b3] font-semibold mb-4">{founder.title}</p>
                  <p className="text-gray-600 leading-relaxed">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 text-center">
            As Featured In
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Media coverage and press mentions
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {pressOutlets.map((outlet) => (
              <a
                key={outlet.name}
                href={outlet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center h-32 relative overflow-hidden">
                  <img
                    src={outlet.logo}
                    alt={outlet.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                  <ExternalLink className="absolute top-2 right-2 h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            Why We're Different
          </h2>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              <strong>We're builders first, operators second - and that's what makes us different.</strong>
            </p>

            <p>
              Most SaaS founders build a product based on assumptions, then try to find customers. We built the technology first, then stress-tested it in the real world by running an actual media business.
            </p>

            <p>
              We didn't just theorize about what destinations need - we lived it. Managing content daily. Selling sponsorships. Optimizing for engagement. Driving real foot traffic to events.
            </p>

            <p>
              Check What's Good in Wilmington isn't just our proof of concept. It's a revenue-generating business that proves the technology works at scale.
            </p>

            <p>
              Now we're putting that battle-tested platform in the hands of destinations and media brands who can make a bigger impact than our team ever could alone.
            </p>

            <p className="text-xl font-semibold text-gray-900">
              We're not trying to replace what you do. We're building the technology so you can do it better.
            </p>

            <p>
              In Wilmington, Meg creates content, manages the website, handles advertisers, and reaches millions of people each month. She doesn't spend her time manually writing event listings or copying data from Facebook - the AI handles that. She focuses on distribution, because what good is great content if it doesn't get in front of the right people to inspire action?
            </p>

            <p>
              <strong>That's what we're giving you: the time and tools to focus on what matters.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">
            Our Philosophy
          </h2>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">85% Automated. 15% Human.</h3>
              <p className="text-lg text-gray-600">
                AI does the grunt work—finding events, creating uniform data, organizing it. Your team does the brand work—curating, promoting, connecting with your community.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clarity Over Clutter.</h3>
              <p className="text-lg text-gray-600">
                Event discovery should feel exciting, not like Excel. Clean. Visual. Scrollable.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Engagement Over Volume.</h3>
              <p className="text-lg text-gray-600">
                High-intent visitors who explore 20+ events are worth more than drive-by clicks. We optimize for depth, not just traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#2aa5b3] via-[#4dbbc7] to-[#7cd1da] sm:text-4xl mb-4">
              Ready to see what it can do?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              Schedule a demo or explore a live example of the platform in action.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://calendly.com/dustinrowe/whats-good-inquiry"
                className="inline-flex items-center gap-x-2 rounded-full bg-[#2aa5b3] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#4dbbc7]"
              >
                Book a Demo
              </a>
              <a
                href="https://www.checkwhatsgood.com/c/events/Wilmington"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2 rounded-full bg-white/10 border-2 border-white/20 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/20"
              >
                See a Live Example
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
