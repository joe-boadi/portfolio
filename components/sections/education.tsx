"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "University of Mines and Technology, Ghana",
    period: "2021 - 2024",
    gpa: "3.0/4.0",
    description:
      "Focused on software engineering, algorithms, and web technologies. Graduated with Second Class Upper Division.",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Web Development",
      "Database Systems",
      "Software Engineering",
    ],
  },
];

const certifications = [
  {
    title: "AWS Ceertified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS",
  },
  {
    title: "Vue.js Certified Developer",
    issuer: "Vue School",
    date: "2022",
    credentialId: "...",
  },
  {
    title: "React Developer Certification",
    issuer: "Codecademy",
    date: "2024",
    credentialId: "Codecademy",
  },
];

const achievements = [
  "Promising Developer - TechProdigies 2023",
  "Research Information Lead - UMaT TechProdigies Club",
  "Hackathon Second Runner-Up - Career Fair 2022",
  "Open Source Contributor - 10+ contributions",
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic background and professional certifications that support
            my expertise in frontend development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                {education.map((edu, index) => (
                  <div key={index} className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <p className="text-primary font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-muted-foreground">
                        {edu.period} • GPA: {edu.gpa}
                      </p>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                    <div>
                      <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <Badge key={course} variant="outline">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                Professional Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="text-center p-4 border rounded-lg"
                  >
                    <h3 className="font-semibold mb-2">{cert.title}</h3>
                    <p className="text-primary font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-muted-foreground text-sm mb-2">
                      {cert.date}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      ID: {cert.credentialId}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
