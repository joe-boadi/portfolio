import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Kwadjo Boadi-Mantey</h3>
            <p className="text-muted-foreground">
              Frontend Developer passionate about creating exceptional user
              experiences with modern web technologies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="#about"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#contact"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/joe-boadi"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/kwadjo-boadi-mantey-43b670271/"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://x.com/joeboadiDev_"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:manteykwadjo@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Kwadjo Boadi-Mantey. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
