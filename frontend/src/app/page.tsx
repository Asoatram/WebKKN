'use client';

import useSWR from 'swr';
import HomestayCard from '@/components/HomestayCard';
import { fetcher } from '@/lib/fetcher';

export default function HomestaysPage() {
  const { data, error } = useSWR('http://localhost:5000/api/homestays', fetcher);

  if (error) return <p className="text-red-500 p-4">Gagal memuat data.</p>;
  if (!data) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Daftar Homestay</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item: any) => (
          <HomestayCard
            key={item._id}
            name={item.name}
            image={item.image}
            facilities={item.facilities}
          />
        ))}
      </div>
    </div>
  );
}
