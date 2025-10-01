import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ContactProps {
  data: {
    email: string;
    phone: string;
    location: string;
    social: {
      github?: string;
      linkedin?: string;
      blog?: string;
    };
  };
}

export const Contact = ({ data }: ContactProps) => {
  const copyEmail = () => {
    navigator.clipboard.writeText(data.email);
    toast({
      title: "Email copied!",
      description: "The email address has been copied to your clipboard.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-4">
              I'm always open to discussing new opportunities and collaborations
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center gradient-card border-border/50 backdrop-blur-sm hover:shadow-lg transition-smooth">
              <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-foreground">Email</h3>
              <p className="text-sm text-muted-foreground break-all">{data.email}</p>
            </Card>
            <Card className="p-6 text-center gradient-card border-border/50 backdrop-blur-sm hover:shadow-lg transition-smooth">
              <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-foreground">Phone</h3>
              <p className="text-sm text-muted-foreground">{data.phone}</p>
            </Card>
            <Card className="p-6 text-center gradient-card border-border/50 backdrop-blur-sm hover:shadow-lg transition-smooth">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-foreground">Location</h3>
              <p className="text-sm text-muted-foreground">{data.location}</p>
            </Card>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="gradient-hero text-white shadow-glow"
              onClick={() => window.location.href = `mailto:${data.email}`}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-primary/5"
              onClick={copyEmail}
            >
              <Copy className="mr-2 h-5 w-5" />
              Copy Email
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {data.social.github && (
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-smooth"
                onClick={() => window.open(data.social.github, "_blank")}
              >
                <Github className="h-6 w-6" />
              </Button>
            )}
            {data.social.linkedin && (
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-smooth"
                onClick={() => window.open(data.social.linkedin, "_blank")}
              >
                <Linkedin className="h-6 w-6" />
              </Button>
            )}
            {data.social.blog && (
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-smooth"
                onClick={() => window.open(data.social.blog, "_blank")}
              >
                <ExternalLink className="h-6 w-6" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
