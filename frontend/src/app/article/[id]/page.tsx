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
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/articles')
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white">
      {loading ? (
        <p className="text-center py-10">Loading articles...</p>
      ) : articles.length > 0 ? (
        articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))
      ) : (
        <p className="text-center py-10">No articles found.</p>
      )}
    </div>
  );
}
