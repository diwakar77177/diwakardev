import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const ExperienceSection = () => {
  const experience = {
    title: "Software Engineer - Intern",
    company: "Crossover",
    duration: "May 2025 - July 2025",
    location: "Remote",
    achievements: [
      "Engineered and deployed 3 new microservices, improving system modularity and performance by 15%",
      "Collaborated within an Agile team to increase feature delivery by 20% through efficient teamwork",
      "Implemented CI/CD pipelines reducing deployment time and increasing code quality",
      "Worked with cloud technologies including AWS EC2 and Docker for scalable solutions"
    ],
    technologies: ["C#", ".NET", "AWS", "Docker", "Microservices", "Agile"]
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-card-border shadow-card hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8">
              {/* Company Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">
                    {experience.title}
                  </h3>
                  <div className="text-xl text-primary font-semibold mb-3">
                    {experience.company}
                  </div>
                </div>
                
                <div className="flex flex-col md:items-end space-y-2">
                  <div className="flex items-center text-foreground-muted">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                  <div className="flex items-center text-foreground-muted">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{experience.location}</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-accent" />
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-foreground-muted">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline Visualization */}
          <div className="mt-12 flex justify-center">
            <div className="relative">
              <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
              <div className="absolute -left-2 bottom-0 w-5 h-5 bg-primary rounded-full shadow-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;