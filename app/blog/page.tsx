import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  Clock,
  ThumbsUp,
  MessageSquare,
  ArrowLeft,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

async function getBlogPosts() {
  try {
    // In a real app, this would fetch from the API
    // For now, we'll use static data
    return [
      {
        id: 1,
        title: 'Building Scalable Microservices with Node.js',
        excerpt:
          'Learn how to design and implement scalable microservices architecture using Node.js, Docker, and Kubernetes.',
        content: 'This is the full content of the blog post...',
        image:
          'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
        date: 'May 15, 2025',
        readTime: '8 min read',
        likes: 124,
        comments: 32,
        tags: ['Microservices', 'Node.js', 'Architecture'],
      },
      {
        id: 2,
        title: 'Advanced MongoDB Optimization Techniques',
        excerpt:
          'Discover advanced techniques for optimizing MongoDB performance, including indexing strategies, query optimization, and schema design.',
        content: 'This is the full content of the blog post...',
        image:
          'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
        date: 'April 28, 2025',
        readTime: '10 min read',
        likes: 98,
        comments: 24,
        tags: ['MongoDB', 'Database', 'Performance'],
      },
      {
        id: 3,
        title: 'Implementing Event-Driven Architecture',
        excerpt:
          'A comprehensive guide to implementing event-driven architecture in modern backend systems using Kafka and RabbitMQ.',
        content: 'This is the full content of the blog post...',
        image:
          'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
        date: 'April 10, 2025',
        readTime: '12 min read',
        likes: 156,
        comments: 45,
        tags: ['Event-Driven', 'Kafka', 'Architecture'],
      },
      {
        id: 4,
        title: 'Securing Your Node.js Applications',
        excerpt:
          'Learn best practices for securing your Node.js applications against common vulnerabilities and attacks.',
        content: 'This is the full content of the blog post...',
        image:
          'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
        date: 'March 22, 2025',
        readTime: '15 min read',
        likes: 210,
        comments: 56,
        tags: ['Security', 'Node.js', 'Best Practices'],
      },
      {
        id: 5,
        title: 'Building RESTful APIs with Express.js',
        excerpt:
          'A comprehensive guide to building clean, maintainable RESTful APIs with Express.js and Node.js.',
        content: 'This is the full content of the blog post...',
        image:
          'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
        date: 'March 5, 2025',
        readTime: '10 min read',
        likes: 178,
        comments: 42,
        tags: ['REST API', 'Express.js', 'Node.js'],
      },
      {
        id: 6,
        title: 'Database Sharding Strategies',
        excerpt:
          'Explore different database sharding strategies for horizontal scaling of your applications.',
        content: 'This is the full content of the blog post...',
        image:
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
        date: 'February 18, 2025',
        readTime: '12 min read',
        likes: 145,
        comments: 38,
        tags: ['Database', 'Scaling', 'Architecture'],
      },
    ];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Button asChild variant="ghost" size="sm" className="mr-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Blog</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div
              key={post.id}
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
                    <Link href={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
