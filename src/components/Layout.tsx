import { ReactNode, useEffect, useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { useIsMobile } from '@/hooks/use-mobile';
import marbleBackground from '@/assets/marble-background.jpg';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Disable parallax on mobile to prevent glitches from dynamic address bar
    if (isMobile) return;
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Parallax marble background - use fixed height on mobile to prevent address bar glitch */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${marbleBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
          transform: isMobile ? 'none' : `translateY(${scrollY * 0.3}px) scale(1.1)`,
          transition: isMobile ? 'none' : 'transform 0.1s ease-out',
          ...(isMobile ? { height: '100lvh', top: 0, bottom: 'auto' } : {}),
        }}
      />
      
      {/* Subtle overlay for readability */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          backgroundColor: 'hsl(var(--background) / 0.6)',
          ...(isMobile ? { height: '100lvh', top: 0, bottom: 'auto' } : {}),
        }}
      />
      
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
