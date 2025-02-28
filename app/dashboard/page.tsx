'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Briefcase, Code, FileText, Mail, Users } from 'lucide-react';

const stats = [
  {
    title: 'Total Projects',
    value: '12',
    description: 'Live projects',
    icon: <Briefcase className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Skills',
    value: '25',
    description: 'Technical skills',
    icon: <Code className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Blog Posts',
    value: '8',
    description: 'Published articles',
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Messages',
    value: '5',
    description: 'Unread messages',
    icon: <Mail className="h-6 w-6 text-primary" />,
  },
];

const recentActivities = [
  {
    action: 'Updated project',
    target: 'E-commerce API',
    time: '2 hours ago',
  },
  {
    action: 'Added new skill',
    target: 'GraphQL',
    time: '5 hours ago',
  },
  {
    action: 'Published blog post',
    target: 'Building Scalable Systems',
    time: '1 day ago',
  },
  {
    action: 'Received message',
    target: 'from John Doe',
    time: '2 days ago',
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-sm text-gray-500">Last updated: Just now</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium">
                      {activity.action}{' '}
                      <span className="text-primary">{activity.target}</span>
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 text-center rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Briefcase className="h-6 w-6 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium">Add Project</span>
              </button>
              <button className="p-4 text-center rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Code className="h-6 w-6 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium">Add Skill</span>
              </button>
              <button className="p-4 text-center rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <FileText className="h-6 w-6 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium">Write Post</span>
              </button>
              <button className="p-4 text-center rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium">View Messages</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
