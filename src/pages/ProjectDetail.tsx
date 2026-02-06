import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { projects } from '@/data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return <Navigate to="/work" replace />;
  }

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

        {/* Full-width hero image */}
        <div className="w-full aspect-[16/9] bg-muted overflow-hidden animate-fade-up-delay-1">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Sidebar Info */}
            <div className="lg:col-span-1 space-y-8">
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
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
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
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container-wide">
          <p className="heading-small italic text-center text-muted-foreground">
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
