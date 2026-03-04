import React, { useState, useEffect, useRef } from 'react';
import DmoPage from './pages/DmoPage';
import MediaPage from './pages/MediaPage';
import HomePage from './pages/HomePage';
import AiDifferencePage from './pages/AiDifferencePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ProductsPage from './pages/ProductsPage';
import AiEventCalendarPage from './pages/AiEventCalendarPage';
import MobileTripGuidePage from './pages/MobileTripGuidePage';
import { ChevronDown, Menu, X } from 'lucide-react';

function App() {
  const [activePage, setActivePage] = useState(() => {
    // Initialize based on current URL path
    const path = window.location.pathname.slice(1) || 'home';
    return path;
  });
  const [blogPostSlug, setBlogPostSlug] = useState<string | null>(null);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isUseCasesDropdownOpen, setIsUseCasesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle browser back/forward navigation
    const handlePopState = () => {
      const path = window.location.pathname.slice(1) || 'home';

      // Check if it's a blog post route
      if (path.startsWith('blog/')) {
        const slug = path.replace('blog/', '');
        setActivePage('blog-post');
        setBlogPostSlug(slug);
      } else {
        setActivePage(path);
        setBlogPostSlug(null);
      }
    };

    // Set initial route on mount
    handlePopState();

    // Listen for browser navigation events
    window.addEventListener('popstate', handlePopState);

    // Listen for navigation requests from child components
    const handleNavigationRequest = (event: CustomEvent) => {
      handleNavigation(event.detail);
    };

    window.addEventListener('navigationRequest', handleNavigationRequest as EventListener);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('navigationRequest', handleNavigationRequest as EventListener);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavigation = (page: string) => {
    setActivePage(page);
    setIsProductsDropdownOpen(false);
    setIsUseCasesDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
    // Update URL without full page reload
    window.history.pushState({}, '', `/${page === 'home' ? '' : page}`);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-white ${isMobileMenuOpen ? 'relative' : ''}`}>
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex-shrink-0">
              <button 
                onClick={() => handleNavigation('home')} 
                className="flex items-center gap-2"
              >
                <img
                  src="https://res.cloudinary.com/checkwhatsgood/image/upload/v1744577531/blue_whats_good_logo.png"
                  alt="Whats Good"
                  className="h-12 w-auto"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              {/* Products Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsProductsDropdownOpen(!isProductsDropdownOpen);
                    setIsUseCasesDropdownOpen(false);
                    setIsAboutDropdownOpen(false);
                  }}
                  onBlur={() => setTimeout(() => setIsProductsDropdownOpen(false), 150)}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition ${
                    activePage === 'ai-event-calendar' || activePage === 'mobile-trip-guide'
                      ? 'text-[#2aa5b3] border-b-2 border-[#2aa5b3]'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Products
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isProductsDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      <button
                        onClick={() => handleNavigation('ai-event-calendar')}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      >
                        AI Event Calendar
                      </button>
                      <button
                        onClick={() => handleNavigation('mobile-trip-guide')}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Mobile Trip Guide
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Use Cases Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsUseCasesDropdownOpen(!isUseCasesDropdownOpen);
                    setIsProductsDropdownOpen(false);
                    setIsAboutDropdownOpen(false);
                  }}
                  onBlur={() => setTimeout(() => setIsUseCasesDropdownOpen(false), 150)}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition ${
                    activePage === 'dmo' || activePage === 'media'
                      ? 'text-[#2aa5b3] border-b-2 border-[#2aa5b3]'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Use Cases
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isUseCasesDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      <button
                        onClick={() => handleNavigation('dmo')}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      >
                        DMOs
                      </button>
                      <button
                        onClick={() => handleNavigation('media')}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Local Media
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsAboutDropdownOpen(!isAboutDropdownOpen);
                    setIsProductsDropdownOpen(false);
                    setIsUseCasesDropdownOpen(false);
                  }}
                  onBlur={() => setTimeout(() => setIsAboutDropdownOpen(false), 150)}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition ${
                    activePage === 'about' || activePage === 'ai-difference'
                      ? 'text-[#2aa5b3] border-b-2 border-[#2aa5b3]'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  About
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isAboutDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      <button
                        onClick={() => handleNavigation('about')}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Our Story / Team
                      </button>
                      <button
                        onClick={() => handleNavigation('ai-difference')}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Why Our AI is Different
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavigation('blog')}
                className={`px-3 py-2 text-sm font-medium transition ${
                  activePage === 'blog'
                    ? 'text-[#2aa5b3] border-b-2 border-[#2aa5b3]'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Blog
              </button>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href="https://calendly.com/dustinrowe/whats-good-inquiry"
                className="inline-flex items-center gap-x-2 rounded-full bg-[#2aa5b3] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4dbbc7]"
              >
                Schedule Demo
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-md p-2 text-gray-700 hover:bg-gray-100"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm md:hidden z-50">
          {/* Mobile menu content */}
          <div 
            ref={mobileMenuRef}
            className="absolute right-0 top-0 w-full max-w-sm bg-white h-screen overflow-y-auto"
          >
            <div className="h-20 flex items-center justify-end px-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-md p-2 text-gray-700 hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              {/* Products Section */}
              <div className="space-y-1">
                <div className="px-4 py-2 text-base font-bold text-gray-900">
                  Products
                </div>
                <div className="pl-4 space-y-1">
                  <button
                    onClick={() => handleNavigation('ai-event-calendar')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                  >
                    AI Event Calendar
                  </button>
                  <button
                    onClick={() => handleNavigation('mobile-trip-guide')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                  >
                    Mobile Trip Guide
                  </button>
                </div>
              </div>

              {/* Use Cases Section */}
              <div className="space-y-1">
                <div className="px-4 py-2 text-base font-bold text-gray-900">
                  Use Cases
                </div>
                <div className="pl-4 space-y-1">
                  <button
                    onClick={() => handleNavigation('dmo')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                  >
                    DMOs
                  </button>
                  <button
                    onClick={() => handleNavigation('media')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                  >
                    Local Media
                  </button>
                </div>
              </div>

              {/* About Section */}
              <div className="space-y-1">
                <div className="px-4 py-2 text-base font-bold text-gray-900">
                  About
                </div>
                <div className="pl-4 space-y-1">
                  <button
                    onClick={() => handleNavigation('about')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                  >
                    Our Story / Team
                  </button>
                  <button
                    onClick={() => handleNavigation('ai-difference')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                  >
                    Why Our AI is Different
                  </button>
                </div>
              </div>

              <button
                onClick={() => handleNavigation('blog')}
                className="block w-full text-left px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
              >
                Blog
              </button>

              <div className="pt-4">
                <a
                  href="https://calendly.com/dustinrowe/whats-good-inquiry"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center rounded-full bg-[#2aa5b3] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4dbbc7]"
                >
                  See a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className={`pt-20 ${isMobileMenuOpen ? 'blur-sm' : ''}`}>
        {activePage === 'home' && <HomePage onNavigate={handleNavigation} />}
        {activePage === 'products' && <ProductsPage />}
        {activePage === 'ai-event-calendar' && <AiEventCalendarPage />}
        {activePage === 'mobile-trip-guide' && <MobileTripGuidePage />}
        {activePage === 'blog' && <BlogPage />}
        {activePage === 'blog-post' && blogPostSlug && <BlogPostPage slug={blogPostSlug} />}
        {activePage === 'dmo' && <DmoPage />}
        {activePage === 'media' && <MediaPage />}
        {activePage === 'ai-difference' && <AiDifferencePage />}
        {activePage === 'about' && <AboutPage />}
      </main>
    </div>
  );
}

export default App;