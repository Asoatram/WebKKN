import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import HomestayCard from '@/components/HomestayCard';

export default function HomestaysPage() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-t-3xl p-6">
        <Breadcrumbs />
        <h2 className="text-xl font-semibold my-4">Homestay</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <HomestayCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
