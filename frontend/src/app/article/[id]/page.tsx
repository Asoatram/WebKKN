'use client';

import { useEffect, useState } from 'react';
import ArticleCard from './components/ArticleCard';
import { useParams } from 'next/navigation';

type Article = {
  title: string;
  image: string;
  content: string;
  author: string;
  date: string;
  category: string;
};

export default function ArticlePage() {
  const params = useParams();
  const id = params?.id as string;

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

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

  return (
    <div className="bg-white">
      {loading ? (
        <p className="text-center py-10">Loading article...</p>
      ) : article ? (
        <ArticleCard article={article} />
      ) : (
        <p className="text-center py-10">Article not found.</p>
      )}
    </div>
  );
}
