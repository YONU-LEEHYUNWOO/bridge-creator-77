import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, FileCheck, GraduationCap } from "lucide-react";

interface AwardsProps {
  awards: Array<{
    title: string;
    date: string;
    organization: string;
    description: string;
  }>;
  certifications: Array<{
    title: string;
    date: string;
    organization: string;
    description: string;
  }>;
  education: Array<{
    title: string;
    date: string;
    organization: string;
    description: string;
  }>;
}

export const Awards = ({ awards, certifications, education }: AwardsProps) => {
  return (
    <section id="awards" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              수상 & 성과
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Awards */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">수상 경력</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <Card
                  key={index}
                  className="p-6 gradient-card border-border/50 backdrop-blur-sm hover:shadow-lg transition-smooth animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Badge className="mb-3 bg-primary/10 text-primary">
                    {award.date}
                  </Badge>
                  <h4 className="text-xl font-bold mb-2 text-foreground">
                    {award.title}
                  </h4>
                  <p className="text-primary font-semibold mb-2">
                    {award.organization}
                  </p>
                  <p className="text-muted-foreground">
                    {award.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <FileCheck className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">자격증</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-6 gradient-card border-border/50 backdrop-blur-sm hover:shadow-lg transition-smooth animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Badge className="mb-3 bg-accent/10 text-accent">
                    {cert.date}
                  </Badge>
                  <h4 className="text-xl font-bold mb-2 text-foreground">
                    {cert.title}
                  </h4>
                  <p className="text-primary font-semibold mb-2">
                    {cert.organization}
                  </p>
                  <p className="text-muted-foreground">
                    {cert.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">교육 & 과정</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 gradient-card border-border/50 backdrop-blur-sm hover:shadow-lg transition-smooth animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Badge className="mb-3 bg-secondary/50 text-secondary-foreground">
                    {edu.date}
                  </Badge>
                  <h4 className="text-xl font-bold mb-2 text-foreground">
                    {edu.title}
                  </h4>
                  <p className="text-primary font-semibold mb-2">
                    {edu.organization}
                  </p>
                  <p className="text-muted-foreground">
                    {edu.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
