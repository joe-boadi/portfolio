"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Code, Coffee, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Always exploring new technologies and best practices",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with cross-functional teams",
  },
  {
    icon: Coffee,
    title: "Dedication",
    description: "Passionate about delivering exceptional user experiences",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate frontend developer with over 3+ years of experience
            creating modern, responsive, and user-friendly web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I started my journey in web development during my Computer
                Science and Engineering studies, where I discovered my passion
                for creating intuitive user interfaces and seamless user
                experiences.
              </p>
              <p>
                Over the years, I've worked with various technologies and
                frameworks, specializing in Vue.js, Nuxt.js, React, and Next.js.
                I'm particularly interested in performance optimization,
                accessibility, and modern development practices.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source
                projects, playing a piano, or exploring the latest trends in web
                development.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Current Focus</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Vue 3</Badge>
                <Badge variant="secondary">React 18</Badge>
                <Badge variant="secondary">Next.js 15</Badge>
                <Badge variant="secondary">Nuxt 3</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <highlight.icon className="h-8 w-8 text-primary mb-4" />
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
