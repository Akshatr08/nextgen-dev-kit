import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Code, Layout, Shield } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>WebDevKit - Modern Web Development Starter Kit</title>
        <meta name="description" content="A production-ready starter kit for modern web development with React, TypeScript, and Tailwind CSS." />
      </Helmet>
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Modern Web Development
                <span className="text-blue-600 dark:text-blue-500"> Made Easy</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Start building production-ready web applications with our carefully curated stack of modern technologies.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="primary" className="flex items-center">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline">
                  View on GitHub
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Everything You Need
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Built with the latest technologies and best practices in mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm">
                <Code className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Modern Stack</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  React, TypeScript, and Tailwind CSS working together seamlessly.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm">
                <Layout className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Responsive Design</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Beautiful, responsive layouts that work on any device.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm">
                <Shield className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Authentication</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Secure authentication system powered by Supabase.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};