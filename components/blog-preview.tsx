"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, ThumbsUp, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Microservices with Node.js",
    excerpt:
      "Learn how to design and implement scalable microservices architecture using Node.js, Docker, and Kubernetes.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    date: "May 15, 2025",
    readTime: "8 min read",
    likes: 124,
    comments: 32,
    tags: ["Microservices", "Node.js", "Architecture"],
  },
  {
    id: 2,
    title: "Advanced MongoDB Optimization Techniques",
    excerpt:
      "Discover advanced techniques for optimizing MongoDB performance, including indexing strategies, query optimization, and schema design.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    date: "April 28, 2025",
    readTime: "10 min read",
    likes: 98,
    comments: 24,
    tags: ["MongoDB", "Database", "Performance"],
  },
  {
    id: 3,
    title: "Implementing Event-Driven Architecture",
    excerpt:
      "A comprehensive guide to implementing event-driven architecture in modern backend systems using Kafka and RabbitMQ.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    date: "April 10, 2025",
    readTime: "12 min read",
    likes: 156,
    comments: 45,
    tags: ["Event-Driven", "Kafka", "Architecture"],
  },
];

const BlogCard = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm card-hover"
    >
      <div className="relative h-48">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag, idx) => (
            <Badge key={idx} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="mr-4">{post.date}</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{post.readTime}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>{post.comments}</span>
            </div>
          </div>
          <Button asChild size="sm" variant="ghost">
            <Link href={`/blog/${post.id}`}>
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const BlogPreview = () => {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing my knowledge and insights on backend development, system
            architecture, and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button asChild className="rounded-full">
            <Link href="/blog">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;