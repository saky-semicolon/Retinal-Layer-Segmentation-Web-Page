
import React from 'react';

interface ReferenceProps {
  authors: string;
  year: string;
  title: string;
  source: string;
  url?: string;
  doi?: string;
}

const Reference: React.FC<ReferenceProps> = ({ authors, year, title, source, url, doi }) => {
  return (
    <div className="mb-4 pl-8 -indent-8 text-sm">
      <p>
        {authors} ({year}). {title}. <em>{source}</em>.
        {doi && <span> doi: {doi}</span>}
        {url && (
          <span>
            {' '}
            Retrieved from <a href={url} className="text-primary hover:underline break-words" target="_blank" rel="noopener noreferrer">{url}</a>
          </span>
        )}
      </p>
    </div>
  );
};

export default Reference;
