'use client';

import Image from 'next/image';

export default function ArticleCard() {
  const articleText = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
qui ratione voluptatem sequi nesciunt. \n\n Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. \n\n Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
nisi ut aliquid ex ea commodi consequatur? \n\n Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`;

  return (
    <div className="py-6">
      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        <p className="text-red-600 text-sm font-medium mb-2">Entertainment</p>
        <h1 className="text-2xl text-black md:text-3xl font-semibold mb-6">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing
        </h1>
        <div className="overflow-hidden shadow-md">
          <Image
            src="/Foto-berita.png"
            alt="Article cover"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 text-neutral-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Column */}
          <div className="text-sm text-gray-600 space-y-4 md:col-span-1">
            <div>
              <p className="font-semibold text-black">Contributor</p>
              <p>Ikhwan Teladan</p>
            </div>
            <div>
              <p className="font-semibold text-black">Date</p>
              <p>28 Juni 2026</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="text-sm leading-relaxed text-gray-600 text-justify space-y-4 md:col-span-3">
            {articleText.split('\n\n').map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
