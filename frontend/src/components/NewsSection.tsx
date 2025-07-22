'use client';

import Image from 'next/image';

interface NewsItem {
  id: number;
  category: string;
  title: string;
  date: string;
  imageUrl: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    category: 'Entertainment',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    date: '26 Agustus 2028',
    imageUrl: '/Foto-berita.png', // Update with your image path
  },
  // Repeat for additional items
  {
    id: 2,
    category: 'Entertainment',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    date: '26 Agustus 2028',
    imageUrl: '/Foto-berita.png',
  },
  {
    id: 3,
    category: 'Entertainment',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    date: '26 Agustus 2028',
    imageUrl: '/Foto-berita.png',
  },
  {
    id: 4,
    category: 'Entertainment',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    date: '26 Agustus 2028',
    imageUrl: '/Foto-berita.png',
  },
];

export default function LatestNews() {
  return (
    <section className="bg-white px-8 py-12 text-black mx-auto">
      <h2 className="text-3xl font-bold mb-4">Latest <span className="block">News</span></h2>
      <hr className="border-t w-32 border-black mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Main news */}
        <div className="space-y-3">
          <Image
            src={newsItems[0].imageUrl}
            alt="Main news"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full"
          />
          <p className="text-sm text-red-500 font-medium">{newsItems[0].category}</p>
          <h3 className="text-lg font-semibold">{newsItems[0].title}</h3>
          <p className="text-sm text-gray-600">{newsItems[0].date}</p>
        </div>

        {/* Other news */}
        <div className="grid grid-rows-3  gap-4">
          {newsItems.slice(1).map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="flex-shrink-0">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={150}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-red-500 font-medium">{item.category}</p>
                <h4 className="text-sm font-semibold">{item.title}</h4>
                <p className="text-xs text-gray-600">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
