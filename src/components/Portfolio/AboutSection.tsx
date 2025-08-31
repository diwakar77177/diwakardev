import { Card, CardContent } from '@/components/ui/card';
import { Code, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Open Source Contributor',
      description: 'Actively contributing to open source projects and sharing knowledge with the developer community.'
    },
    {
      icon: Users,
      title: 'Collaborative Team Player',
      description: 'Experienced in Agile environments, improving team efficiency by 20% through effective collaboration.'
    },
    {
      icon: Award,
      title: 'Competitive Programmer',
      description: 'Passionate about algorithmic problem-solving and competitive programming challenges.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Content */}
          <div>
            <h3 className="text-2xl font-poppins font-semibold mb-6 text-primary">
              Crafting Digital Solutions with Passion
            </h3>
            
            <div className="space-y-4 text-foreground-muted leading-relaxed">
              <p>
                I'm a results-oriented Computer Science student and Developer with a passion 
                for building secure, scalable web applications. Currently pursuing my B.Tech 
                in Computer Science at NIMS University (expected 2026), I combine academic 
                knowledge with hands-on industry experience.
              </p>
              
              <p>
                My expertise lies in full-stack development with the .NET framework, cloud 
                technologies like AWS, and creating robust solutions that solve real-world 
                problems. I believe in writing clean, maintainable code and following best 
                practices to deliver exceptional user experiences.
              </p>
              
              <p>
                Beyond coding, I'm actively engaged with the tech community through open 
                source contributions and competitive programming. I thrive in collaborative 
                environments where innovation meets practical implementation.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Education</h4>
              <div className="border-l-2 border-primary pl-4">
                <div className="font-medium text-foreground">B.Tech in Computer Science</div>
                <div className="text-sm text-foreground-muted">NIMS University • Expected 2026</div>
              </div>
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-card border-card-border hover:border-primary/50 transition-all duration-300 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                      <p className="text-sm text-foreground-muted">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;