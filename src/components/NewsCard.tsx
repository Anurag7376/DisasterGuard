import React from 'react';
import { Newspaper } from 'lucide-react';
import { format } from 'date-fns';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  date: Date;
  imageUrl: string;
}

export const NewsCard: React.FC<{ news: NewsItem }> = ({ news }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={news.imageUrl} alt={news.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <Newspaper className="w-4 h-4 text-blue-600 mr-2" />
          <span className="text-sm text-gray-500">{news.source}</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{news.summary}</p>
        <div className="text-sm text-gray-500">{format(news.date, 'MMM d, yyyy')}</div>
      </div>
    </div>
  );
};