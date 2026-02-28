import { Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL } from "@/lib/portfolio-data";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-2">{PERSONAL.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Computer engineer specializing in robotics, industrial automation, and embedded
              systems. Based in {PERSONAL.location}.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4 uppercase tracking-wider">Connect</h4>
            <div className="space-y-3">
              {[
                { label: "LinkedIn", url: PERSONAL.linkedin, Icon: Linkedin },
                { label: "GitHub", url: PERSONAL.github, Icon: Github },
                { label: "Email", url: `mailto:${PERSONAL.email}`, Icon: Mail },
              ].map(({ label, url, Icon }) => (
                <a
                  key={label}
                  href={url}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4 uppercase tracking-wider">Status</h4>
            <div className="inline-flex items-center gap-2 glass-button px-4 py-2 rounded-full text-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">Available for Projects</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-glass-border flex flex-col sm:flex-row justify-between text-xs text-muted-foreground">
          <span>© 2025 {PERSONAL.name}. Built with React + Tailwind.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
