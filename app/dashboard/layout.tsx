'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  User,
  Briefcase,
  Code,
  BookOpen,
  Mail,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const sidebarItems = [
  {
    title: 'Overview',
    href: '/dashboard',
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    title: 'About',
    href: '/dashboard/about',
    icon: <User className="w-5 h-5" />,
  },
  {
    title: 'Skills',
    href: '/dashboard/skills',
    icon: <Code className="w-5 h-5" />,
  },
  {
    title: 'Projects',
    href: '/dashboard/projects',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: 'Blog',
    href: '/dashboard/blog',
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    title: 'Contact',
    href: '/dashboard/contact',
    icon: <Mail className="w-5 h-5" />,
  },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        if (!response.ok) {
          router.push('/login');
        } else {
          setIsAuthenticated(true);
        }
      } catch (_error) {
        router.push('/login');
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });

      if (response.ok) {
        router.push('/login');
      }
    } catch (_error) {
      console.error('Logout error:', _error);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : -300 }}
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <ul className="space-y-2">
            {sidebarItems.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center p-2 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Button
                variant="ghost"
                className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10"
                onClick={handleLogout}
              >
                <LogOut className="w-5 h-5 mr-3" />
                Logout
              </Button>
            </li>
          </ul>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className={`p-4 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="mb-4 flex items-center">
          {!isSidebarOpen && (
            <Button
              variant="ghost"
              size="icon"
              className="mr-4"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>
        <main className="p-4 rounded-lg bg-white dark:bg-gray-800">
          {children}
        </main>
      </div>
    </div>
  );
}
