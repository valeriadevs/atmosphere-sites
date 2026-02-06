import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import marbleBackground from '@/assets/marble-background.jpg';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${marbleBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Subtle overlay for readability */}
      <div className="fixed inset-0 bg-background/70 pointer-events-none z-0" />
      
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
