'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Database, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950 z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10 dark:bg-primary/5"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1],
              x: [0, Math.random() * 40 - 20, 0],
              y: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Software Backend Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
          >
            Building Robust <br /> Backend Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8"
          >
            Specialized in developing scalable, high-performance backend systems
            and APIs that power modern applications. Let's build something great
            together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="rounded-full">
              <Link href="#contact">
                Hire Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <Link href="#projects">View My Work</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl"
          >
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm card-hover">
              <Server className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">API Development</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                RESTful & GraphQL APIs with best practices
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm card-hover">
              <Database className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Database Design</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Optimized schemas for performance & scale
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm card-hover">
              <Code className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Microservices</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Distributed systems architecture
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
