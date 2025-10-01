import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  techStack: string[];
  myRole: string;
  results: string;
  links: {
    github?: string;
    demo?: string;
    blog?: string;
  };
}

interface ProjectsProps {
  data: Project[];
}

export const Projects = ({ data }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              주요 프로젝트
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden gradient-card border-border/50 backdrop-blur-sm hover:shadow-xl transition-smooth cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Project Detail Modal */}
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              {selectedProject && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {selectedProject.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full rounded-lg"
                    />

                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-foreground">기술 스택</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-primary/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-foreground">태그</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <Badge key={tag} className="bg-primary/10 text-primary">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-foreground">프로젝트 소개</h4>
                      <p className="text-foreground/80 leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-foreground">나의 역할</h4>
                      <p className="text-foreground/80 leading-relaxed">
                        {selectedProject.myRole}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-foreground">결과 & 성과</h4>
                      <p className="text-foreground/80 leading-relaxed">
                        {selectedProject.results}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      {selectedProject.links.github && (
                        <Button
                          variant="outline"
                          className="border-primary/50 hover:bg-primary/10"
                          onClick={() => window.open(selectedProject.links.github, "_blank")}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          코드 보기
                        </Button>
                      )}
                      {selectedProject.links.demo && (
                        <Button
                          className="gradient-hero text-white"
                          onClick={() => window.open(selectedProject.links.demo, "_blank")}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          라이브 데모
                        </Button>
                      )}
                      {selectedProject.links.blog && (
                        <Button
                          variant="secondary"
                          onClick={() => window.open(selectedProject.links.blog, "_blank")}
                        >
                          블로그 글 읽기
                        </Button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};
