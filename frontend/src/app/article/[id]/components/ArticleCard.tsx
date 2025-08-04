'use client';

import Image from 'next/image';

type Article = {
  title: string;
  image: string;
  content: string;
  author: string;
  date: string;
  category: string;
};

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="py-6">
      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        <p className="text-red-600 text-sm font-medium mb-2">{article.category}</p>
        <h1 className="text-2xl text-black md:text-3xl font-semibold mb-6">
          {article.title}
        </h1>
        <div className="overflow-hidden shadow-md">
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 text-neutral-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Column: Contributor Info */}
          <div className="text-sm text-gray-600 space-y-4 md:col-span-1">
            <div>
              <p className="font-semibold text-black">Contributor</p>
              <p>{article.author}</p>
            </div>
            <div>
              <p className="font-semibold text-black">Date</p>
              <p>{new Date(article.date).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Right Column: Article Content */}
          <div className="text-sm leading-relaxed text-justify space-y-6 md:col-span-3">
            <p>{article.content}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
