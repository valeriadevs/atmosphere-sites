import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ProjectCard } from '@/components/ProjectCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { projects } from '@/data/projects';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h1 className="heading-display animate-fade-up text-balance">
              Websites for restaurants that care about atmosphere.
            </h1>
            <p className="body-large mt-6 max-w-2xl animate-fade-up-delay-1">
              Luxury, comfort, and clarity — designed to feel like the place itself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-up-delay-2">
              <Link to="/work" className="btn-primary">
                View Work
              </Link>
              <Link to="/contact" className="btn-text">
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
              <div>
                <p className="label-uppercase mb-3">Selected Work</p>
                <h2 className="heading-large">Recent Projects</h2>
              </div>
              <Link
                to="/work"
                className="btn-text mt-6 md:mt-0"
              >
                View all projects <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 100}>
                <ProjectCard
                  slug={project.slug}
                  title={project.title}
                  category={project.category}
                  image={project.image}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <ScrollReveal direction="none">
            <div className="max-w-3xl mx-auto text-center">
              <p className="label-uppercase mb-6">Philosophy</p>
              <blockquote className="heading-medium italic font-serif">
                "Designing restaurant websites isn't about features.
                <br className="hidden md:block" />
                It's about mood, pacing, and appetite."
              </blockquote>
              <p className="body-large mt-8 max-w-xl mx-auto">
                I design sites that feel like the space — before guests ever step inside.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h2 className="heading-large">Ready to begin?</h2>
                <p className="body-large mt-3">
                  Let's create something memorable together.
                </p>
              </div>
              <Link to="/contact" className="btn-primary">
                Start a Project
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
