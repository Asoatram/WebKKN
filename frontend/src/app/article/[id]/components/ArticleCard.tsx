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
      {/* Header */}
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

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-neutral-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Column */}
          <div className="text-sm text-gray-600 space-y-4 md:col-span-1">
            <div>
              <p className="font-semibold text-black">Contributor</p>
              <p>{article.author}</p>
            </div>
            <div>
              <p className="font-semibold text-black">Date</p>
              <p>{new Date(article.date).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="text-sm leading-relaxed text-gray-600 text-justify space-y-4 md:col-span-3">
            {article.content.split('\n\n').map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
