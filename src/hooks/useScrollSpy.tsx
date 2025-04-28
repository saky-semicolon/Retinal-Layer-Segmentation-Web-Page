
import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[], offset = 100) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      // Find the section that is currently in view
      const currentSection = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return { id, top: -1, bottom: -1 };
          
          const rect = element.getBoundingClientRect();
          return {
            id,
            top: rect.top + window.scrollY,
            bottom: rect.bottom + window.scrollY,
          };
        })
        .find((section) => {
          return scrollPosition >= section.top && scrollPosition < section.bottom;
        });
      
      if (currentSection) {
        setActiveId(currentSection.id);
      } else if (scrollPosition < document.getElementById(sectionIds[0])?.getBoundingClientRect().top) {
        setActiveId(sectionIds[0]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize with current position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
};

export default useScrollSpy;
