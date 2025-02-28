'use client';

import { motion } from 'framer-motion';
import { BookOpen, Code, Database, Cloud, Cpu, BarChart } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const learningItems = [
  {
    title: 'Rust Programming',
    description:
      'Learning Rust for high-performance, memory-safe systems programming.',
    icon: <Code className="h-6 w-6 text-primary" />,
    progress: 65,
    resources: [
      'The Rust Programming Language Book',
      'Rust by Example',
      'Building a REST API with Rust',
    ],
  },
  {
    title: 'WebAssembly',
    description: 'Exploring WebAssembly for high-performance web applications.',
    icon: <Cpu className="h-6 w-6 text-primary" />,
    progress: 40,
    resources: [
      'WebAssembly.org tutorials',
      'Rust and WebAssembly',
      'Building with AssemblyScript',
    ],
  },
  {
    title: 'Machine Learning for Backend',
    description:
      'Implementing ML models in backend systems for intelligent features.',
    icon: <BarChart className="h-6 w-6 text-primary" />,
    progress: 55,
    resources: [
      'TensorFlow.js',
      'ML with Python',
      'Integrating ML models with APIs',
    ],
  },
  {
    title: 'Blockchain Development',
    description: 'Building decentralized applications and smart contracts.',
    icon: <Database className="h-6 w-6 text-primary" />,
    progress: 30,
    resources: [
      'Ethereum Development',
      'Solidity Programming',
      'Web3.js Integration',
    ],
  },
  {
    title: 'Serverless Architecture',
    description: 'Advanced serverless patterns and best practices.',
    icon: <Cloud className="h-6 w-6 text-primary" />,
    progress: 75,
    resources: [
      'AWS Lambda Advanced Patterns',
      'Serverless Framework',
      'Event-driven Architecture',
    ],
  },
  {
    title: 'System Design Patterns',
    description:
      'Advanced patterns for designing large-scale distributed systems.',
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    progress: 80,
    resources: [
      'Designing Data-Intensive Applications',
      'System Design Interview',
      'Microservices Patterns',
    ],
  },
];

const LearningCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full card-hover">
        <CardHeader className="pb-2">
          <div className="flex items-center mb-2">
            <div className="bg-primary/10 p-2 rounded-full mr-3">
              {item.icon}
            </div>
            <CardTitle>{item.title}</CardTitle>
          </div>
          <CardDescription>{item.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.progress}%
              </span>
            </div>
            <Progress value={item.progress} className="h-2" />
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2">Learning Resources:</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              {item.resources.map((resource, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{resource}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Learning = () => {
  return (
    <section id="learning" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Continuous Learning</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I believe in lifelong learning. Here are the technologies and skills
            I'm currently exploring to stay at the cutting edge of backend
            development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningItems.map((item, index) => (
            <LearningCard key={index} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            "The only way to do great work is to love what you do. If you
            haven't found it yet, keep looking. Don't settle."
          </p>
          <p className="text-sm font-medium">— Steve Jobs</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Learning;
