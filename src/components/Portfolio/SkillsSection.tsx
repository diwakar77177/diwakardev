import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Code, Database, Cloud, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C#", "Java", "Python", "SQL", "JavaScript", "HTML/CSS"],
      color: "text-primary"
    },
    {
      title: "Frameworks & Databases",
      icon: Database,
      skills: ["ASP.NET", ".NET Framework", "SQL Server", "REST APIs"],
      color: "text-accent"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS (EC2, S3)", "Docker", "CI/CD", "IaC", "Jenkins"],
      color: "text-blue-400"
    },
    {
      title: "Tools & Concepts",
      icon: Wrench,
      skills: ["Git", "Backend Development", "Serverless Architecture", "Microservices"],
      color: "text-green-400"
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      type: "Cloud Certification"
    },
    {
      title: "Technology Job Simulation",
      issuer: "Deloitte",
      type: "Professional Simulation"
    },
    {
      title: "Software Development Job Simulation",
      issuer: "Citi",
      type: "Professional Simulation"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold mb-4">
            Skills & <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground-muted max-w-3xl mx-auto">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card border-card-border shadow-card hover:shadow-glow transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-background-secondary p-3 rounded-lg mr-3">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="font-poppins font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary" 
                      className="mr-1 mb-1 bg-muted/30 text-foreground-muted border-border hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-poppins font-bold mb-4 flex items-center justify-center">
              <Award className="w-8 h-8 text-accent mr-3" />
              Certifications
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="bg-card border-card-border shadow-card hover:border-primary/50 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h4 className="font-poppins font-semibold text-foreground mb-2">
                    {cert.title}
                  </h4>
                  
                  <p className="text-primary font-medium mb-1">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-sm text-foreground-muted">
                    {cert.type}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skill Progression Indicators */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center space-x-8 text-sm text-foreground-muted">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
              <span>Expert Level</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
              <span>Professional</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
              <span>Competent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;