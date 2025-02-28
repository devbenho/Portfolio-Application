"use client";

import { motion } from "framer-motion";
import { 
  Database, 
  Server, 
  Code, 
  Cloud, 
  Lock, 
  GitBranch, 
  Terminal, 
  Cpu, 
  BarChart, 
  Layers 
} from "lucide-react";

const skills = [
  {
    category: "Backend Development",
    icon: <Server className="h-6 w-6 text-primary" />,
    items: [
      "Node.js",
      "Python",
      "Java",
      "Go",
      "C#/.NET",
    ],
  },
  {
    category: "Databases",
    icon: <Database className="h-6 w-6 text-primary" />,
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Elasticsearch",
    ],
  },
  {
    category: "API Development",
    icon: <Code className="h-6 w-6 text-primary" />,
    items: [
      "RESTful APIs",
      "GraphQL",
      "gRPC",
      "WebSockets",
      "OpenAPI/Swagger",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6 text-primary" />,
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Terraform",
    ],
  },
  {
    category: "Architecture",
    icon: <Layers className="h-6 w-6 text-primary" />,
    items: [
      "Microservices",
      "Event-Driven",
      "Domain-Driven Design",
      "Serverless",
      "System Design",
    ],
  },
  {
    category: "Other Skills",
    icon: <Terminal className="h-6 w-6 text-primary" />,
    items: [
      "Security",
      "Performance Optimization",
      "Testing",
      "Git/Version Control",
      "Problem Solving",
    ],
  },
];

const SkillCard = ({ category, icon, items }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm skill-card"
    >
      <div className="flex items-center mb-6">
        {icon}
        <h3 className="text-lg font-semibold ml-2">{category}</h3>
      </div>
      <div className="space-y-2">
        {items.map((skill, index) => (
          <div key={index} className="flex items-center">
            <span className="text-primary mr-2">•</span>
            <span className="text-sm font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiencies
            in backend development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <SkillCard
              key={index}
              category={skillGroup.category}
              icon={skillGroup.icon}
              items={skillGroup.items}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">
            Certifications & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">AWS Certified Solutions Architect</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Amazon Web Services
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">MongoDB Certified Developer</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  MongoDB, Inc.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Certified Kubernetes Administrator</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Cloud Native Computing Foundation
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;