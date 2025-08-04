'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface NewsItem {
  id: number;
  category: string;
  title: string;
  date: string;
  image: string;
}

export default function LatestNews() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/articles/news/featured')
      .then((res) => res.json())
      .then((data) => {
        setNewsItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, []);

  if (loading || newsItems.length === 0) {
    return (
      <section className="bg-white px-8 py-12 text-black mx-auto">
        <h2 className="text-3xl font-bold mb-4">Latest <span className="block">News</span></h2>
        <hr className="border-t w-32 border-black mb-8" />
        <p>Loading...</p>
      </section>
    );
  }

  return (
<section className="bg-white px-8 py-12 text-black">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">
      Latest <span className="block">News</span>
    </h2>
    <hr className="border-t w-32 border-black mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Main news */}
        <div className="space-y-3 flex flex-col">
          <Image
            src={newsItems[0].image || '/fallback-image.jpg'}
            alt="Main news"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full"
          />
          <a  href={`/article/${newsItems[0].id}`} className="text-sm text-red-500 font-medium">{newsItems[0].category}</a>
          <a  href={`/article/${newsItems[0].id}`} className="text-lg font-semibold">{newsItems[0].title}</a>
          <a  href={`/article/${newsItems[0].id}`} className="text-sm text-gray-600">{newsItems[0].date}</a>
        </div>

        {/* Other news */}
        <div className="grid grid-rows-3 gap-4">
          {newsItems.slice(1).map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="flex-shrink-0">
                <Image
                  src={item.image || '/fallback-image.jpg'}
                  alt={item.title}
                  width={150}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>
              <div className='flex flex-col'>
                  <a  href={`/article/${item.id}`} className="text-sm hover:cursor-pointer text-red-500 font-medium">{item.category}</a>
                  <a  href={`/article/${item.id}`} className="text-sm hover:cursor-pointer font-semibold">{item.title}</a>
                  <a  href={`/article/${item.id}`} className="text-xs hover:cursor-pointer text-gray-600">{item.date}</a>

              </div>
            </div>
          ))}
        </div>
      </div>
  </div>
</section>
  );
}
