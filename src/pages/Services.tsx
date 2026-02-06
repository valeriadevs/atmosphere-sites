import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Layout } from '@/components/Layout';

const services = [
  {
    title: 'Restaurant Websites',
    description: 'Full-service dining establishments that prioritize atmosphere and experience.',
  },
  {
    title: 'Café & Bakery Websites',
    description: 'Warm, inviting digital spaces for neighborhood favorites.',
  },
  {
    title: 'Bars & Wine Lounges',
    description: 'Sophisticated online presence for evening destinations.',
  },
  {
    title: 'Grill & Barbecue Restaurants',
    description: 'Bold, confident websites that capture the energy of live fire cooking.',
  },
];

const deliverables = [
  'Custom-designed site (no templates)',
  'Mobile-first responsive layout',
  'Menu-focused user experience',
  'Fast, clean, modern build',
  'Optional hosting & setup help',
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="label-uppercase mb-4 animate-fade-up">Services</p>
            <h1 className="heading-display animate-fade-up-delay-1">
              What I Do
            </h1>
            <p className="body-large mt-6 animate-fade-up-delay-2">
              Specialized web design for restaurants and hospitality businesses that understand the importance of first impressions.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20 md:pb-28 border-b border-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-8 md:p-10 border border-border bg-muted/30 rounded-lg animate-fade-up transition-all duration-300 hover:bg-muted/60 hover:border-secondary/50 hover:-translate-y-1 hover:shadow-lg cursor-default"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                <h3 className="heading-small mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="label-uppercase mb-4">Deliverables</p>
              <h2 className="heading-large">What Clients Get</h2>
            </div>
            <div>
              <ul className="space-y-5">
                {deliverables.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 pb-5 border-b border-border last:border-0 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
                  >
                    <span className="w-6 h-6 rounded-full border border-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                    </span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-wide text-center">
          <h2 className="heading-large mb-4">Ready to stand out?</h2>
          <p className="body-large mb-8 max-w-xl mx-auto">
            Let's create a website that captures the soul of your restaurant.
          </p>
          <Link to="/contact" className="btn-primary">
            Start a Project <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
