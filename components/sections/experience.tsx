"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Frontend Engineer",
    company: "AmaliTech",
    location: "Cologne, Germany",
    period: "2024 - Present",
    description:
      "Frontend development for enterprise applications using Vue.js, React, and TypeScript. Mentoring developers and establishing best practices.",
    technologies: [
      "Vue.js",
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "GraphQL",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Ideation Axis Inc.",
    location: "Accra, Ghana",
    period: "2023 - 2024",
    description:
      "Developed responsive web applications and improved performance by 40%. Collaborated with UX/UI designers to implement pixel-perfect designs.",
    technologies: [
      "React",
      "Vue.js",
      "JavaScript",
      "SCSS",
      "Webpack",
      "Jest",
      "Git",
    ],
  },
  {
    title: "Research Information Lead",
    company: "TechProdigies Club, UMaT",
    location: "Tarkwa, Ghana",
    period: "2022 - 2023",
    description:
      "Co-led Groundbreaking IoT Projects: Successfully co-led the research and development of innovative IoT projects, earning cash prizes.",
    technologies: ["IoT", "Python", "JavaScript", "Raspberry Pi"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey in frontend development, building scalable
            applications and leading development teams.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">
                        {experience.title}
                      </CardTitle>
                      <p className="text-lg font-semibold text-primary">
                        {experience.company}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {experience.period}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {experience.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
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
