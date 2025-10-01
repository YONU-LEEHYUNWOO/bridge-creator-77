import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

interface AboutProps {
  data: {
    name: string;
    title: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
  };
  kpis: Array<{
    value: string;
    label: string;
    description: string;
  }>;
}

export const About = ({ data, kpis }: AboutProps) => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Story Card */}
          <Card className="p-8 gradient-card border-border/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-foreground">{data.name}</h3>
            <p className="text-lg text-muted-foreground mb-4">{data.title}</p>
            <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
              {data.bio}
            </p>
          </Card>

          {/* KPI Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kpis.map((kpi, index) => (
              <Card
                key={index}
                className="p-6 text-center gradient-card border-border/50 backdrop-blur-sm hover:scale-105 transition-smooth group"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {kpi.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {kpi.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {kpi.description}
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <span>{data.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span>{data.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{data.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
