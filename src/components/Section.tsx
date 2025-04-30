import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  imageSrc?: string; // Optional image source
  imageAlt?: string; // Optional image alt text
  imageClassName?: string; // Optional image className for styling
}

const Section: React.FC<SectionProps> = ({ id, title, children, imageSrc, imageAlt, imageClassName }) => {
  return (
    <section id={id} className="mb-12 scroll-mt-20">
      <h2 className="text-2xl font-serif font-bold mb-6">{title}</h2> {/* Removed border-b */}
      {imageSrc && (
        <div className="flex justify-center mb-6">
          <img 
            src={imageSrc} 
            alt={imageAlt || 'Section image'} 
            className={imageClassName || 'w-full h-auto'}
          />
        </div>
      )}
      <div className="prose prose-slate max-w-none">
        {children}
      </div>
    </section>
  );
};

export default Section;