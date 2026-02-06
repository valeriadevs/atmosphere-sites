import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Layout } from '@/components/Layout';

const steps = [
  {
    number: '01',
    title: 'Choose a Style Direction',
    description: 'We start with a conversation about your restaurant\'s personality, atmosphere, and the feeling you want guests to have before they arrive.',
  },
  {
    number: '02',
    title: 'I Design the Full Experience',
    description: 'From layout to typography to imagery, every detail is crafted to reflect your space. No templates, no shortcuts.',
  },
  {
    number: '03',
    title: 'You Review & Refine',
    description: 'We work together to fine-tune every element until it feels exactly right. Your feedback shapes the final result.',
  },
  {
    number: '04',
    title: 'Site Goes Live',
    description: 'Your new website launches, ready to welcome guests and set the tone for their experience.',
  },
];

const Process = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="label-uppercase mb-4 animate-fade-up">Process</p>
            <h1 className="heading-display animate-fade-up-delay-1">
              How It Works
            </h1>
            <p className="body-large mt-6 animate-fade-up-delay-2">
              Simple, calm, professional. No jargon. No tech flexing. Just good work, done well.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-20 md:pb-28 lg:pb-36">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="py-10 md:py-14 border-b border-border first:pt-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                <div className="flex gap-6 md:gap-10">
                  <span className="font-serif text-3xl md:text-4xl text-secondary">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="heading-small mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-wide text-center">
          <h2 className="heading-large mb-4">Let's begin</h2>
          <p className="body-large mb-8 max-w-xl mx-auto">
            The first step is always a conversation.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in Touch <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Process;
