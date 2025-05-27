"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-primary">Kwadjo Boadi-Mantey</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mt-4">
              Frontend Developer
            </h2>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
              I specialize in building exceptional digital experiences with
              Vue.js, React, Next.js, and TypeScript. Currently crafting
              innovative solutions at TechCorp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" onClick={scrollToAbout}>
                Learn More
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-primary to-primary/50 p-1">
                <div className="w-full h-full rounded-full bg-background p-8 flex items-center justify-center">
                  <Image
                    src="/joe_boadi.jpg?height=200&width=400"
                    alt="Alex Johnson"
                    width={300}
                    height={300}
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
