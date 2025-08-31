import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, TrendingUp, Shield } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "CI/CD Pipeline Automation",
      description: "Designed and implemented a complete CI/CD pipeline using Jenkins, Docker, and AWS EC2 to automate builds, testing, and deployments for a .NET web application.",
      outcome: "Reduced deployment time by 50%",
      icon: TrendingUp,
      technologies: ["Jenkins", "Docker", "AWS EC2", ".NET", "Git"],
      highlights: [
        "Automated build and testing processes",
        "Containerized application deployment",
        "Zero-downtime deployment strategy",
        "Integrated quality gates and monitoring"
      ],
      gradient: "from-primary/20 to-primary-glow/20"
    },
    {
      id: 2,
      title: "Internet Banking System",
      description: "Engineered a secure, full-stack net banking portal using ASP.NET, C#, and REST APIs with SQL Server for robust data storage and management.",
      outcome: "Achieved 99.9% uptime during testing",
      icon: Shield,
      technologies: ["ASP.NET", "C#", "REST APIs", "SQL Server", "JavaScript"],
      highlights: [
        "Secure user authentication system",
        "Real-time transaction processing",
        "Comprehensive audit logging",
        "Mobile-responsive design"
      ],
      gradient: "from-accent/20 to-yellow-400/20"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground-muted max-w-3xl mx-auto">
            Showcasing innovative solutions that demonstrate my expertise in full-stack 
            development, cloud technologies, and secure application architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-card border-card-border shadow-card hover:shadow-glow transition-all duration-500 group overflow-hidden"
            >
              <CardHeader className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`}></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="bg-background/90 p-3 rounded-lg">
                    <project.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-primary hover:bg-primary-glow text-primary-foreground"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl font-poppins font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                
                <p className="text-foreground-muted mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Outcome */}
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mb-4">
                  <div className="text-sm font-medium text-primary">Key Outcome</div>
                  <div className="text-foreground font-semibold">{project.outcome}</div>
                </div>

                {/* Project Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Project Highlights</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span className="text-foreground-muted">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary"
                        className="bg-muted/50 text-foreground-muted border-border hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-200 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-foreground-muted mb-6">
            Want to see more of my work or discuss a potential collaboration?
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow px-8"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;