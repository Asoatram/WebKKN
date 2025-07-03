import Image from 'next/image';

interface Props {
  name: string;
  image: string;
  facilities: string;
}

export default function HomestayCard({ name, image, facilities }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={image.startsWith('http') ? image : `/` + image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold">{name}</h3>
        <p className="text-xs text-gray-500">Fasilitas: {facilities}</p>
        <div className="mt-2 flex justify-between">
          <button className="text-xs bg-black text-white rounded-full px-2 py-1">Detail</button>
          <button className="text-xs bg-white border text-black rounded-full px-2 py-1">Contact WA</button>
        </div>
      </div>
    </div>
  );
}
