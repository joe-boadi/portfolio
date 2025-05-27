"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { Code, Palette, Database, Wrench, Globe, Smartphone } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Frameworks",
    icon: Code,
    skills: [
      { name: "Vue.js", level: 95 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Nuxt.js", level: 85 },
    ],
  },
  {
    title: "Languages",
    icon: Globe,
    skills: [
      { name: "TypeScript", level: 92 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    title: "Styling & Design",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "SCSS/Sass", level: 85 },
      { name: "CSS-in-JS", level: 80 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      { name: "Node.js", level: 75 },
      { name: "GraphQL", level: 70 },
      { name: "REST APIs", level: 85 },
      { name: "PostgreSQL", level: 65 },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: [
      { name: "Git", level: 90 },
      { name: "Webpack", level: 80 },
      { name: "Vite", level: 85 },
      { name: "Docker", level: 70 },
    ],
  },
  {
    title: "Mobile & PWA",
    icon: Smartphone,
    skills: [
      { name: "Progressive Web Apps", level: 85 },
      { name: "React Native", level: 70 },
      { name: "Ionic", level: 65 },
      { name: "Capacitor", level: 60 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My technical expertise spans across modern frontend technologies, with a focus on creating performant and
            accessible web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <category.icon className="h-6 w-6 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
