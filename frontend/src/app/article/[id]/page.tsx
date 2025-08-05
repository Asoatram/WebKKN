'use client';

import { Suspense, useEffect, useState } from 'react';
import ArticleCard from './components/ArticleCard';
import { useParams } from 'next/navigation';
import LenisClient from '@/app/providers/LenisScrollPRoviders';

type Article = {
  title: string;
  image: string;
  content: string;
  author: string;
  date: string;
  category: string;
};

function ArticleContent({ id }: { id: string }) {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center py-10">Loading article...</p>;
  }

  if (!article) {
    return <p className="text-center py-10">Article not found.</p>;
  }

  return <ArticleCard article={article} />;
}

export default function ArticlePage() {
  const params = useParams();
  const id = params?.id as string;

  if (!id) {
    return <p className="text-center py-10">No article ID provided.</p>;
  }

  return (
    <LenisClient>
      <Suspense fallback={<p className="text-center py-10">Loading article...</p>}>
        <div className="bg-white">
          <ArticleContent id={id} />
        </div>
      </Suspense>
    </LenisClient>
  );
}
