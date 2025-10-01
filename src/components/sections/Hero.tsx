import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  data: {
    name: string;
    title: string;
    catchphrase: string;
    profileImage: string;
  };
}

export const Hero = ({ data }: HeroProps) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10 dark:opacity-20" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center gap-8 animate-fade-in-up">
          {/* Profile Image with Squircle */}
          <div className="relative group">
            <div className="absolute inset-0 gradient-hero rounded-[3rem] blur-xl opacity-50 group-hover:opacity-70 transition-smooth" />
            <img
              src={data.profileImage}
              alt={data.name}
              className="relative w-48 h-48 object-cover rounded-[3rem] border-4 border-background shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
              {data.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {data.title}
            </p>
            <p className="text-2xl md:text-3xl font-bold text-foreground mt-6">
              {data.catchphrase}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button
              size="lg"
              className="gradient-hero text-white shadow-glow hover:scale-105 transition-smooth group"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-primary/5 transition-smooth"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
