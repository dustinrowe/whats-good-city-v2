import React, { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { supabase, BlogPost } from '../lib/supabase';
import AuthorCard from '../components/AuthorCard';
import SEO from '../components/SEO';

interface BlogPostPageProps {
  slug: string;
}

function BlogPostPage({ slug }: BlogPostPageProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;

      try {
        setLoading(true);
        setError(null);

        const { data, error: fetchError } = await supabase
          .from('blog_posts')
          .select(`
            *,
            author:authors(*)
          `)
          .eq('slug', slug)
          .maybeSingle();

        if (fetchError) throw fetchError;

        if (!data) {
          setError('Blog post not found');
          return;
        }

        setPost(data as BlogPost);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2aa5b3] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const navigateToBlog = () => {
    window.history.pushState({}, '', '/blog');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">{error || 'The blog post you\'re looking for doesn\'t exist.'}</p>
          <button
            onClick={navigateToBlog}
            className="inline-flex items-center gap-2 text-[#2aa5b3] font-semibold hover:text-[#4dbbc7] transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const currentUrl = `${window.location.origin}/blog/${post.slug}`;

  return (
    <div className="bg-white">
      <SEO
        title={post.title}
        description={post.meta_description || post.preview}
        image={post.image_url}
        url={currentUrl}
        type="article"
        author={post.author?.name}
        publishedTime={post.published_date}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={navigateToBlog}
          className="inline-flex items-center gap-2 text-[#2aa5b3] font-semibold hover:text-[#4dbbc7] transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Blog
        </button>

        <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden mb-8 shadow-lg">
          <img
            src={post.image_url}
            alt={post.title}
            className="w-full h-full object-cover"
          />

          {/* Logo Overlay for specific blog post */}
          {post.slug === 'how-we-landed-our-first-dmo-contracts-without-a-sales-team' && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-16 pb-8">
              <div className="max-w-4xl mx-auto px-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
                  {/* ARK Invest Logo */}
                  <div className="flex items-center justify-center bg-white/95 rounded-lg px-6 py-3 shadow-xl backdrop-blur-sm">
                    <span className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                      <span className="text-gray-900">ARK</span>
                      <span className="text-[#2aa5b3]"> Invest</span>
                    </span>
                  </div>

                  {/* Startups.com Logo */}
                  <div className="flex items-center justify-center bg-white/95 rounded-lg px-6 py-3 shadow-xl backdrop-blur-sm">
                    <span className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                      Startups.com
                    </span>
                  </div>

                  {/* CFXO Logo */}
                  <div className="flex items-center justify-center bg-white/95 rounded-lg px-6 py-3 shadow-xl backdrop-blur-sm">
                    <span className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.1em' }}>
                      CFXO
                    </span>
                  </div>
                </div>

                <p className="text-white text-center text-sm sm:text-base font-medium mt-4 drop-shadow-lg">
                  Backed by Industry Leaders
                </p>
              </div>
            </div>
          )}
        </div>

        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            {post.author && (
              <div className="flex items-center gap-3">
                <img
                  src={post.author.image_url}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{post.author.name}</p>
                  <p className="text-[#2aa5b3]">{post.author.title}</p>
                </div>
              </div>
            )}

            <div className="flex items-center gap-4 ml-auto">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.published_date}>{formattedDate}</time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.read_time_minutes} min read</span>
              </div>
            </div>
          </div>
        </header>

        <div className="border-t border-gray-200 pt-8 mb-12">
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-[#2aa5b3] prose-a:no-underline hover:prose-a:text-[#4dbbc7]
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:my-6 prose-li:text-gray-700
              prose-img:rounded-lg prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {post.author && (
          <div className="mt-16">
            <AuthorCard author={post.author} />
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-gray-200">
          <button
            onClick={navigateToBlog}
            className="inline-flex items-center gap-2 text-[#2aa5b3] font-semibold hover:text-[#4dbbc7] transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to All Posts
          </button>
        </div>
      </article>

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

export default BlogPostPage;
