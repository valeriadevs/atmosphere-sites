import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-xl mb-4">Valeria's Space</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Designing places people remember.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <p className="label-uppercase mb-4">Navigation</p>
            <div className="flex flex-col gap-3">
              <Link to="/work" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Work
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Services
              </Link>
              <Link to="/process" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Process
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                About
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <p className="label-uppercase mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://facebook.com/valeriastudio" // ← CHANGE: Your Facebook URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Facebook
              </a>
              <a
                href="mailto:hello@valeriastudio.com" // ← CHANGE: Your email
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                hello@valeriastudio.com {/* ← CHANGE: Your email */}
              </a>
              <a
                href="https://instagram.com/valeriastudio" // ← CHANGE: Your Instagram URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Valeria's Space
          </p>
          <p className="text-sm text-muted-foreground italic font-serif">
            Designed with restraint. Built with intention.
          </p>
        </div>
      </div>
    </footer>
  );
};
