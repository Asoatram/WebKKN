export default function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 h-64">
      {/* Kiri - Background Hitam */}
      <div className="bg-black flex items-start justify-start p-8">
        <h1 className="text-white text-4xl font-bold leading-tight">
          Rupat <br /> Utara.
        </h1>
      </div>

      {/* Kanan - Daftar Link */}
      <div className="bg-white flex items-start justify-start p-8">
        <div>
          <h2 className="text-xl font-bold mb-2 text-black">Products</h2>
          <ul className="space-y-1 text-sm text-black">
            <li>
              <a href="#" className="hover:underline">
                Homestay
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tourism Spots
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tour Guide
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
