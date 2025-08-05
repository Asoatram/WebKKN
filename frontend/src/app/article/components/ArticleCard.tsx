'use client';

import Image from 'next/image';
import Link from 'next/link';

export interface NewsItem {
  id: number;
  category: string;
  title: string;
  date: string;
  image: string;
}

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <Link
      href={`/news/${news.id}`}
      className="flex items-start gap-6 pb-6 border-b max-w-6xl mx-auto hover:bg-gray-50 transition rounded-lg px-4 py-2"
    >
      <Image
        src={news.image}
        alt={news.title}
        width={200}
        height={130}
        className="rounded min-w-[200px] object-cover"
      />
      <div>
        <p className="text-red-600 text-sm font-medium mb-1">{news.category}</p>
        <h2 className="text-xl font-semibold leading-snug mb-2">{news.title}</h2>
        <p className="text-sm text-gray-500">{news.date}</p>
      </div>
    </Link>
  );
};


export default NewsCard;
