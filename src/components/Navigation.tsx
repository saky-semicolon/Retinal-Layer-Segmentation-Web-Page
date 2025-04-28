
import React from 'react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  sections: { id: string; title: string }[];
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ sections, activeSection }) => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-4 z-10 px-6 py-4 mx-auto max-w-screen-lg bg-white/80 backdrop-blur-sm border rounded-lg shadow-sm my-4">
      <ul className="flex flex-wrap gap-2 justify-center">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => handleClick(section.id)}
              className={cn(
                "px-3 py-1 text-sm rounded-md transition-colors",
                activeSection === section.id
                  ? "bg-primary text-primary-foreground font-medium"
                  : "hover:bg-secondary text-muted-foreground"
              )}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
