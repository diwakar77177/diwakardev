import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:diwakarowz22@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Brand */}
          <div className="font-poppins font-bold text-2xl text-primary">
            DIWAKAR
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-primary transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-foreground-muted flex items-center justify-center">
              © {currentYear} MR DIWAKAR. Made with{' '}
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              and lots of code.
            </p>
            <p className="text-sm text-foreground-muted mt-2">
              Full-stack Developer • Building the Future, One Line at a Time
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;