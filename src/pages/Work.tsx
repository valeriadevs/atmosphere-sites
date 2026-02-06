import { Layout } from '@/components/Layout';
import { ProjectCard } from '@/components/ProjectCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { projects } from '@/data/projects';

const Work = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="label-uppercase mb-4 animate-fade-up">Portfolio</p>
            <h1 className="heading-display animate-fade-up-delay-1">
              Selected Work
            </h1>
            <p className="body-large mt-6 animate-fade-up-delay-2">
              A collection of restaurant and hospitality websites designed to feel like the spaces themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 md:pb-28 lg:pb-36">
        <div className="container-wide">
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
    </Layout>
  );
};

export default Work;
