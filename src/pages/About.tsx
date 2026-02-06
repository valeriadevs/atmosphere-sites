import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Layout } from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="label-uppercase mb-4 animate-fade-up">About</p>
            <h1 className="heading-display animate-fade-up-delay-1">
              Valeria Studio
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 md:pb-28 lg:pb-36">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Main Content */}
            <div className="lg:col-span-1 space-y-8">
              <p className="text-xl md:text-2xl font-serif leading-relaxed animate-fade-up">
                I design restaurant websites with a focus on mood, flow, and restraint.
              </p>
              <div className="space-y-6 text-muted-foreground leading-relaxed animate-fade-up-delay-1">
                <p>
                  My background is in design and front-end systems, with a deep interest in hospitality spaces. I believe that a restaurant's website should feel like an extension of the dining room — setting expectations, building anticipation, and creating a sense of place.
                </p>
                <p>
                  Every project I take on is approached with intention. I don't use templates. I don't cut corners. Each website is designed from scratch to capture the unique character of the space it represents.
                </p>
                <p>
                  I work best with restaurants that care about how their place feels — establishments that understand that atmosphere starts long before a guest walks through the door.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 animate-fade-up-delay-2">
              <div className="bg-muted p-8 md:p-10 lg:p-12">
                <p className="label-uppercase mb-6">Approach</p>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                    <span>Mood over features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                    <span>Restraint over excess</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                    <span>Clarity over complexity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                    <span>Craft over speed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="heading-large">Let's work together</h2>
              <p className="body-large mt-3">
                If you care about atmosphere, we should talk.
              </p>
            </div>
            <Link to="/contact" className="btn-primary">
              Get in Touch <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
