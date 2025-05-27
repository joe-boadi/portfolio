"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Bluetooth Intrusion Detection System",
    description:
      "An AI-powered Bluetooth intrusion detection system for smartwatches. This repository contains an intelligent algorithm that detects and prevents unauthorized Bluetooth connections, ensuring the security and privacy of smartwatch users.",
    image: "/bluetooth.jpeg?height=200&width=400",
    technologies: ["Python", "notebook", "", "Seaborn", "sklearn"],
    liveUrl:
      "https://github.com/joe-boadi/bluetooth-intrusion-detection/blob/main/new_model.ipynb",
    githubUrl: "https://github.com/joe-boadi/bluetooth-intrusion-detection",
  },
  {
    title: "Password Generator App",
    description: "A web-based password generator app made with Next.js",
    image: "/password.jpg?height=200&width=400",
    technologies: ["React", "Next", "TailwindCSS", "DaisyUI", "TypeScript"],
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/alexjohnson/task-manager",
  },
  {
    title: "Frontend Quiz App",
    description:
      "Frontend quiz made with React+Typescript, testing your knowledge of frontend technologies.",
    image: "/frontendQuiz.jpg?height=200&width=400",
    technologies: ["React", "Typescript", "Quiz API", "CSS Modules"],
    liveUrl: "https://frontend-quiz-app-pink.vercel.app/",
    githubUrl: "https://github.com/joe-boadi/frontend-quiz-app",
  },
  {
    title: "Multi-Step Form",
    description:
      "Application of React-Routing, State management, and use of CSS modules...",
    image: "/multi-step.jpg?height=200&width=400",
    technologies: ["Nuxt.js", "Strapi", "GraphQL", "PostgreSQL", "Docker"],
    liveUrl: "https://multi-step-form-nine-sigma.vercel.app/",
    githubUrl: "https://github.com/joe-boadi/multi-step-form",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating my expertise in modern
            web technologies and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
