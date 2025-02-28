'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Distributed Task Queue System',
    description:
      'A high-performance distributed task queue system built with Node.js and Redis. Handles millions of background jobs with automatic retries, priority queues, and real-time monitoring.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    tags: ['Node.js', 'Redis', 'Microservices', 'Docker'],
    github: 'https://github.com',
    demo: 'https://example.com',
    category: 'backend',
  },
  {
    id: 2,
    title: 'Real-time Analytics API',
    description:
      'A scalable real-time analytics API that processes and aggregates millions of events per day. Built with Go, TimescaleDB, and Kafka for high throughput and low latency.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    tags: ['Go', 'TimescaleDB', 'Kafka', 'Kubernetes'],
    github: 'https://github.com',
    demo: 'https://example.com',
    category: 'api',
  },
  {
    id: 3,
    title: 'E-commerce Microservices',
    description:
      'A complete e-commerce backend built with a microservices architecture. Includes services for product catalog, inventory, orders, payments, and user management.',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    tags: ['Java', 'Spring Boot', 'MongoDB', 'RabbitMQ'],
    github: 'https://github.com',
    demo: 'https://example.com',
    category: 'microservices',
  },
  {
    id: 4,
    title: 'GraphQL API Gateway',
    description:
      'A unified GraphQL API gateway that aggregates multiple backend services. Provides a single entry point for clients with efficient data fetching and real-time subscriptions.',
    image:
      'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    tags: ['Node.js', 'GraphQL', 'Apollo', 'Redis'],
    github: 'https://github.com',
    demo: 'https://example.com',
    category: 'api',
  },
  {
    id: 5,
    title: 'Serverless Content Management System',
    description:
      'A modern headless CMS built with serverless architecture. Features content modeling, versioning, localization, and a RESTful API for content delivery.',
    image:
      'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    tags: ['AWS Lambda', 'DynamoDB', 'Node.js', 'Serverless'],
    github: 'https://github.com',
    demo: 'https://example.com',
    category: 'backend',
  },
  {
    id: 6,
    title: 'Authentication Microservice',
    description:
      'A secure authentication and authorization service with support for OAuth2, JWT, MFA, and role-based access control. Designed for high availability and security.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    github: 'https://github.com',
    demo: 'https://example.com',
    category: 'microservices',
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm card-hover"
    >
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between">
          <Button asChild variant="outline" size="sm">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="mr-2 h-4 w-4" /> Code
            </a>
          </Button>
          <Button asChild size="sm">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects =
    activeTab === 'all'
      ? projects
      : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my backend engineering projects, demonstrating my
            expertise in building scalable and robust systems.
          </p>
        </motion.div>

        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="mb-12"
        >
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="backend">Backend Systems</TabsTrigger>
              <TabsTrigger value="api">APIs</TabsTrigger>
              <TabsTrigger value="microservices">Microservices</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="rounded-full">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More Projects on GitHub{' '}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
