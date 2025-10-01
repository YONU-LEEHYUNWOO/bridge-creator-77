import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface ExperienceProps {
  data: Array<{
    company: string;
    position: string;
    period: string;
    responsibilities: string[];
  }>;
}

export const Experience = ({ data }: ExperienceProps) => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              경력
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />

            <div className="space-y-8">
              {data.map((exp, index) => (
                <div key={index} className="relative pl-20 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-glow" />

                  <Card className="p-6 gradient-card border-border/50 backdrop-blur-sm hover:shadow-lg transition-smooth">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-foreground">
                              {exp.position}
                            </h3>
                            <p className="text-primary font-semibold">
                              {exp.company}
                            </p>
                          </div>
                          <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                        </div>
                        <ul className="space-y-2 mt-4">
                          {exp.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="text-foreground/80 flex items-start gap-2"
                            >
                              <span className="text-primary mt-1.5">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
