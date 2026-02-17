import { useState, TouchEvent } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { projects } from '@/data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const slides = [
    { image: project.image, label: 'Homepage', gradient: project.placeholderGradient },
    { image: project.menuImage, label: 'Menu', gradient: project.menuGradient },
    { image: project.atmosphereImage, label: 'Atmosphere', gradient: project.atmosphereGradient },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-8 md:pt-12">
        <div className="container-wide">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            <span className="text-sm">Back to Work</span>
          </Link>

          <div className="mb-8 md:mb-12 animate-fade-up">
            <p className="label-uppercase mb-3">{project.category}</p>
            <h1 className="heading-display">{project.title}</h1>
            <p className="body-large mt-4 max-w-2xl">{project.tagline}</p>
          </div>
        </div>

        {/* Screenshot Carousel */}
        <div className="container-wide animate-fade-up-delay-1">
          <div className="relative">
            {/* Main Image with Crossfade + Swipe Support */}
            <div 
              className="w-full aspect-[4/3] md:aspect-[16/9] bg-muted overflow-hidden rounded-lg relative touch-pan-y"
              onTouchStart={(e: TouchEvent<HTMLDivElement>) => {
                const touch = e.touches[0];
                e.currentTarget.dataset.touchStartX = touch.clientX.toString();
              }}
              onTouchEnd={(e: TouchEvent<HTMLDivElement>) => {
                const touchStartX = parseFloat(e.currentTarget.dataset.touchStartX || '0');
                const touchEndX = e.changedTouches[0].clientX;
                const diff = touchStartX - touchEndX;
                
                if (Math.abs(diff) > 50) {
                  if (diff > 0) {
                    nextSlide();
                  } else {
                    prevSlide();
                  }
                }
              }}
            >
              {slides.map((slide, index) => (
                slide.image && slide.image.length > 0 ? (
                  <img
                    key={index}
                    src={slide.image}
                    alt={`${project.title} - ${slide.label}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ) : (
                  <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ background: slide.gradient || 'linear-gradient(135deg, #333 0%, #555 100%)' }}
                  />
                )
              ))}
              
              {/* Navigation Arrows - Desktop only */}
              <button
                onClick={prevSlide}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full items-center justify-center text-foreground hover:bg-background transition-colors shadow-lg z-20"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full items-center justify-center text-foreground hover:bg-background transition-colors shadow-lg z-20"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Slide Indicator & Label */}
            <div className="flex flex-col items-center mt-4 gap-3">
              <p className="text-sm text-muted-foreground">{slides[currentSlide].label}</p>
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-foreground' : 'bg-border hover:bg-muted-foreground'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* View Live CTA - Only show if liveUrl exists */}
          {project.liveUrl && (
            <div className="mt-8 flex justify-center">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View Live Site <ExternalLink size={14} />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Sidebar Info */}
            <ScrollReveal className="lg:col-span-1 space-y-8">
              <div>
                <p className="label-uppercase mb-2">Style</p>
                <p className="text-lg">{project.style}</p>
              </div>
              <div>
                <p className="label-uppercase mb-2">Type</p>
                <p className="text-lg">{project.restaurantType}</p>
              </div>
              <div>
                <p className="label-uppercase mb-2">Design Goal</p>
                <p className="text-lg text-muted-foreground">{project.designGoal}</p>
              </div>
            </ScrollReveal>

            {/* Main Content */}
            <ScrollReveal delay={100} className="lg:col-span-2">
              <h2 className="heading-medium mb-6">About the Project</h2>
              <p className="body-large mb-10">{project.description}</p>

              <h3 className="heading-small mb-4">What I Designed</h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container-wide text-center">
          <p className="heading-small italic text-muted-foreground">
            Built to feel like the restaurant, not a website.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-border">
        <div className="container-wide">
          <div className="grid grid-cols-2">
            <Link
              to={`/work/${prevProject.slug}`}
              className="py-10 md:py-14 border-r border-border group"
            >
              <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                <ArrowLeft size={18} />
                <span className="text-sm">Previous</span>
              </div>
              <p className="heading-small mt-2 group-hover:text-secondary transition-colors">
                {prevProject.title}
              </p>
            </Link>
            <Link
              to={`/work/${nextProject.slug}`}
              className="py-10 md:py-14 text-right group"
            >
              <div className="flex items-center justify-end gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                <span className="text-sm">Next</span>
                <ArrowRight size={18} />
              </div>
              <p className="heading-small mt-2 group-hover:text-secondary transition-colors">
                {nextProject.title}
              </p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
