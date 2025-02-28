"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { 
  Calendar, 
  Clock, 
  ThumbsUp, 
  MessageSquare, 
  ArrowLeft,
  Share2,
  User
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

// Mock data - in a real app, this would come from the API
const blogPosts = [
  {
    id: "1",
    title: "Building Scalable Microservices with Node.js",
    excerpt:
      "Learn how to design and implement scalable microservices architecture using Node.js, Docker, and Kubernetes.",
    content: `
      <p>Microservices architecture has become the standard for building large-scale applications that need to scale independently. In this comprehensive guide, we'll explore how to build scalable microservices using Node.js.</p>
      
      <h2>Why Microservices?</h2>
      <p>Microservices architecture breaks down a large application into smaller, independent services that can be developed, deployed, and scaled separately. This approach offers several advantages:</p>
      <ul>
        <li>Independent scaling of services based on demand</li>
        <li>Technology flexibility for different services</li>
        <li>Easier maintenance and updates</li>
        <li>Better fault isolation</li>
        <li>Improved team autonomy</li>
      </ul>
      
      <h2>Setting Up Your Node.js Microservice</h2>
      <p>Let's start by setting up a basic Node.js microservice using Express:</p>
      
      <pre><code>
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Service-specific endpoints
app.get('/api/resource', (req, res) => {
  // Implementation
});

app.post('/api/resource', (req, res) => {
  // Implementation
});

app.listen(PORT, () => {
  console.log(\`Service running on port \${PORT}\`);
});
      </code></pre>
      
      <h2>Service Discovery and Communication</h2>
      <p>In a microservices architecture, services need to discover and communicate with each other. There are several approaches:</p>
      
      <h3>API Gateway</h3>
      <p>An API Gateway acts as a single entry point for all client requests, routing them to the appropriate microservices. It can also handle cross-cutting concerns like authentication, rate limiting, and logging.</p>
      
      <h3>Service Registry</h3>
      <p>A service registry keeps track of all available service instances and their locations. Services can register themselves when they start up and deregister when they shut down.</p>
      
      <h3>Message Queues</h3>
      <p>For asynchronous communication between services, message queues like RabbitMQ or Kafka can be used. This decouples services and provides resilience against failures.</p>
      
      <h2>Containerization with Docker</h2>
      <p>Docker allows you to package your microservice with all its dependencies into a standardized unit called a container. Here's a simple Dockerfile for a Node.js microservice:</p>
      
      <pre><code>
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
      </code></pre>
      
      <h2>Orchestration with Kubernetes</h2>
      <p>Kubernetes automates the deployment, scaling, and management of containerized applications. Here's a basic Kubernetes deployment for our microservice:</p>
      
      <pre><code>
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-microservice
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-microservice
  template:
    metadata:
      labels:
        app: my-microservice
    spec:
      containers:
      - name: my-microservice
        image: my-microservice:latest
        ports:
        - containerPort: 3000
        resources:
          limits:
            cpu: "0.5"
            memory: "512Mi"
          requests:
            cpu: "0.2"
            memory: "256Mi"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
      </code></pre>
      
      <h2>Database Considerations</h2>
      <p>In a microservices architecture, each service typically has its own database to ensure loose coupling. This pattern is known as the Database-per-Service pattern.</p>
      
      <p>For Node.js microservices, MongoDB is a popular choice due to its JSON-like document model, which aligns well with JavaScript objects.</p>
      
      <h2>Monitoring and Logging</h2>
      <p>Effective monitoring and logging are crucial for microservices. Consider using:</p>
      <ul>
        <li>Prometheus for metrics collection</li>
        <li>Grafana for visualization</li>
        <li>ELK Stack (Elasticsearch, Logstash, Kibana) for centralized logging</li>
        <li>Jaeger or Zipkin for distributed tracing</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building scalable microservices with Node.js involves more than just writing code. It requires careful consideration of service boundaries, communication patterns, deployment strategies, and operational concerns.</p>
      
      <p>By following the practices outlined in this guide, you'll be well on your way to building a robust, scalable microservices architecture that can grow with your application's needs.</p>
    `,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    date: "May 15, 2025",
    readTime: "8 min read",
    likes: 124,
    comments: [
      {
        id: "c1",
        name: "Jane Smith",
        content: "Great article! I've been looking for a comprehensive guide on microservices with Node.js.",
        createdAt: "2025-05-16T10:30:00Z"
      },
      {
        id: "c2",
        name: "John Doe",
        content: "I'm curious about how you handle database transactions across multiple microservices. Any thoughts on that?",
        createdAt: "2025-05-16T14:45:00Z"
      },
      {
        id: "c3",
        name: "Alice Johnson",
        content: "Have you considered using gRPC for service-to-service communication? I've found it to be more efficient than REST for internal services.",
        createdAt: "2025-05-17T09:15:00Z"
      }
    ],
    tags: ["Microservices", "Node.js", "Architecture"],
  },
  // Other blog posts would be here
];

export default function BlogPostPage() {
  const params = useParams();
  const { toast } = useToast();
  const [post, setPost] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", content: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // In a real app, this would fetch from the API
    const foundPost = blogPosts.find(p => p.id === params.id);
    if (foundPost) {
      setPost(foundPost);
      setLikes(foundPost.likes);
      setComments(foundPost.comments || []);
    }
  }, [params.id]);

  const handleLike = async () => {
    // In a real app, this would call the API
    setLikes(prev => prev + 1);
    toast({
      title: "Thanks for your like!",
      description: "Your appreciation has been recorded.",
    });
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    
    if (!newComment.name.trim() || !newComment.content.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real app, this would call the API
    const comment = {
      id: `c${comments.length + 1}`,
      name: newComment.name,
      content: newComment.content,
      createdAt: new Date().toISOString(),
    };
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setComments(prev => [...prev, comment]);
    setNewComment({ name: "", content: "" });
    setIsSubmitting(false);
    
    toast({
      title: "Comment added",
      description: "Your comment has been posted successfully.",
    });
  };

  if (!post) {
    return (
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center mb-8">
            <Button asChild variant="ghost" size="sm" className="mr-4">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </Button>
          </div>
          <div className="text-center py-20">
            <p className="text-xl">Blog post not found</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Button asChild variant="ghost" size="sm" className="mr-4">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, idx) => (
                <Badge key={idx} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="mr-4">{post.date}</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="relative h-80 md:h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div 
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="flex items-center justify-between mb-8">
            <Button onClick={handleLike} variant="outline" className="flex items-center">
              <ThumbsUp className="mr-2 h-4 w-4" />
              Like ({likes})
            </Button>
            <Button variant="outline" className="flex items-center">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>

          <Separator className="mb-8" />

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Comments ({comments.length})</h2>
            
            <div className="space-y-6 mb-8">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{comment.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(comment.createdAt).toLocaleDateString()} at{" "}
                        {new Date(comment.createdAt).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-4">Leave a Comment</h3>
            <form onSubmit={handleCommentSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your name"
                  value={newComment.name}
                  onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your comment"
                  className="min-h-32"
                  value={newComment.content}
                  onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>Submitting...</>
                ) : (
                  <>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Post Comment
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}