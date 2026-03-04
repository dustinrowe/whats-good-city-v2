import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
}

function SEO({
  title,
  description,
  image,
  url,
  type = 'website',
  author,
  publishedTime
}: SEOProps) {
  useEffect(() => {
    document.title = `${title} | What's Good`;

    const metaTags = [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
    ];

    if (image) {
      metaTags.push(
        { property: 'og:image', content: image },
        { name: 'twitter:image', content: image }
      );
    }

    if (url) {
      metaTags.push({ property: 'og:url', content: url });
    }

    if (author && type === 'article') {
      metaTags.push({ name: 'author', content: author });
    }

    if (publishedTime && type === 'article') {
      metaTags.push({ property: 'article:published_time', content: publishedTime });
    }

    metaTags.forEach(({ name, property, content }) => {
      const attr = name ? 'name' : 'property';
      const attrValue = name || property;

      let element = document.querySelector(`meta[${attr}="${attrValue}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, attrValue!);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });

    return () => {
      document.title = "What's Good";
    };
  }, [title, description, image, url, type, author, publishedTime]);

  return null;
}

export default SEO;
