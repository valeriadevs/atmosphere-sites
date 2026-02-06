import { ReactNode, useEffect, useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import marbleBackground from '@/assets/marble-background.jpg';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Parallax marble background */}
      <div 
        className="fixed inset-0 z-0 will-change-transform"
        style={{
          backgroundImage: `url(${marbleBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
      
      {/* Subtle overlay for readability */}
      <div className="fixed inset-0 bg-background/70 pointer-events-none z-[1]" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <ScrollToTop />
        <Navigation />
        <main className="flex-1 pt-20 md:pt-24">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};
