import React from 'react';
import { Author } from '../lib/supabase';

interface AuthorCardProps {
  author: Author;
}

function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-6">About the Author</h3>
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <div className="flex-shrink-0">
          <img
            src={author.image_url}
            alt={author.name}
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-900 mb-1">{author.name}</h4>
          <p className="text-[#2aa5b3] font-semibold mb-3">{author.title}</p>
          <p className="text-gray-600 leading-relaxed">{author.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default AuthorCard;
