
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="mb-12 scroll-mt-20">
      <h2 className="text-2xl font-serif font-bold mb-6 pb-2 border-b">{title}</h2>
      <div className="prose prose-slate max-w-none">
        {children}
      </div>
    </section>
  );
};

export default Section;
