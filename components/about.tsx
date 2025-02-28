"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, experience, and what drives me
            as a backend engineer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Backend Engineer"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Alex Johnson</span>
            </h3>
            <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Senior Backend Engineer
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              With over 8 years of experience in backend development, I
              specialize in building robust, scalable systems that power modern
              applications. My expertise spans across distributed systems,
              microservices architecture, database optimization, and API design.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm passionate about clean code, performance optimization, and
              implementing best practices in software development. My goal is to
              create backend solutions that not only meet current requirements
              but are also maintainable and adaptable to future needs.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              When I'm not coding, you'll find me contributing to open-source
              projects, mentoring junior developers, or exploring the latest
              technologies in the backend ecosystem.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline" className="rounded-full">
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button asChild className="rounded-full">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;