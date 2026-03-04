import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { supabase, BlogPost } from '../lib/supabase';

function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('blog_posts')
          .select(`
            *,
            author:authors(*)
          `)
          .order('published_date', { ascending: false });

        if (error) throw error;

        setPosts((data as BlogPost[]) || []);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const navigateToPost = (slug: string) => {
    window.history.pushState({}, '', `/blog/${slug}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#2aa5b3]/10 to-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Insights on AI-powered local event discovery, media business models, and building better community platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2aa5b3] mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading posts...</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => {
                const formattedDate = new Date(post.published_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                });

                return (
                  <article
                    key={post.id}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                    onClick={() => navigateToPost(post.slug)}
                  >
                    <div className="relative h-64 sm:h-80 overflow-hidden">
                      <img
                        src={post.image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        {post.author && (
                          <div className="flex items-center gap-2">
                            <img
                              src={post.author.image_url}
                              alt={post.author.name}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <span className="font-medium text-gray-900">{post.author.name}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <time dateTime={post.published_date}>{formattedDate}</time>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.read_time_minutes} min read</span>
                        </div>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#2aa5b3] transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 leading-relaxed mb-6">
                        {post.preview}
                      </p>

                      <div className="inline-flex items-center gap-2 text-[#2aa5b3] font-semibold group-hover:text-[#4dbbc7] transition-colors">
                        Read More
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-white to-[#2aa5b3]/10 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Want to See This in Action?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a demo to see how What's Good can transform your local event discovery and create real revenue for your market.
            </p>
            <a
              href="https://calendly.com/dustinrowe/whats-good-inquiry"
              className="inline-flex items-center gap-x-2 rounded-full bg-[#2aa5b3] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#4dbbc7] shadow-lg"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
