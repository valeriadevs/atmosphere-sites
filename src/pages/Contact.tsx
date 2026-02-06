import { Mail, Instagram, MessageCircle } from 'lucide-react';
import { Layout } from '@/components/Layout';

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="label-uppercase mb-4 animate-fade-up">Contact</p>
            <h1 className="heading-display animate-fade-up-delay-1">
              Let's Talk
            </h1>
            <p className="body-large mt-6 animate-fade-up-delay-2">
              If you're opening a restaurant, or redesigning an existing one, let's talk.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-20 md:pb-28 lg:pb-36">
        <div className="container-wide">
          <div className="max-w-2xl">
            <div className="space-y-0">
              {/* Email */}
              <a
                href="mailto:hello@valeriastudio.com"
                className="flex items-center gap-6 py-8 border-b border-border group animate-fade-up"
                style={{ animationDelay: '0.1s', opacity: 0 }}
              >
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-secondary transition-colors">
                  <Mail size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <div>
                  <p className="label-uppercase mb-1">Email</p>
                  <p className="text-lg group-hover:text-secondary transition-colors">
                    hello@valeriastudio.com
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/valeriastudio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 py-8 border-b border-border group animate-fade-up"
                style={{ animationDelay: '0.2s', opacity: 0 }}
              >
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-secondary transition-colors">
                  <Instagram size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <div>
                  <p className="label-uppercase mb-1">Instagram</p>
                  <p className="text-lg group-hover:text-secondary transition-colors">
                    @valeriastudio
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 py-8 border-b border-border group animate-fade-up"
                style={{ animationDelay: '0.3s', opacity: 0 }}
              >
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-secondary transition-colors">
                  <MessageCircle size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <div>
                  <p className="label-uppercase mb-1">WhatsApp</p>
                  <p className="text-lg group-hover:text-secondary transition-colors">
                    Send a message
                  </p>
                </div>
              </a>
            </div>

            {/* Additional Note */}
            <div className="mt-16 p-8 md:p-10 bg-muted animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <p className="heading-small mb-4">What to include</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span>Your restaurant's name and concept</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span>Current website (if you have one)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span>Timeline and budget range</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span>Any inspiration or references</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
