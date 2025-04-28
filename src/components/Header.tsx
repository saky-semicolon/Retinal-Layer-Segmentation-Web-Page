import React from 'react';

interface HeaderProps {
  title: string;
  authors: { name: string; affiliation: number; isCorresponding?: boolean }[];
  affiliations: string[];
  date: string;
  email?: string;
}

const Header: React.FC<HeaderProps> = ({ title, authors, affiliations, date, email }) => {
  return (
    <header className="text-center py-10 px-4 mb-8 border-b">
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">{title}</h1>
      <div className="mb-2">
        {authors.map((author, index) => (
          <span key={index} className="inline-block">
            <span className="text-blue-600">{author.name}</span>
            <sup>
              {author.affiliation}
              {author.isCorresponding && '*'}
            </sup>
            {index < authors.length - 1 && <span className="mx-1">,</span>}
          </span>
        ))}
      </div>
      <div className="text-sm text-black italic mb-2">
        {affiliations.map((affiliation, index) => (
          <p key={index}>
            <sup>{index + 1}</sup> {affiliation}
          </p>
        ))}
      </div>
      <p className="text-sm text-black font-medium">{date}</p>
      {email && <p className="text-sm text-black">{email}</p>}
    </header>
  );
};

export default Header;