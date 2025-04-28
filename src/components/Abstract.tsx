
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface AbstractProps {
  content: string;
}

const Abstract: React.FC<AbstractProps> = ({ content }) => {
  return (
    <section id="abstract" className="mb-12">
      <h2 className="text-2xl font-serif font-bold mb-4">Abstract</h2>
      <Card>
        <CardContent className="pt-6">
          <p className="leading-relaxed">{content}</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Abstract;
