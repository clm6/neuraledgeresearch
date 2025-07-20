'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Tag, ExternalLink, Brain, Code, BarChart3, Zap, Search } from 'lucide-react'
import Link from 'next/link'
import NeuralBackground from '../components/NeuralBackground'
import { useState, useMemo } from 'react'
import { blogPosts } from '../data/blogPosts'



export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState('')
  
  // Function to convert icon string to React component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6" />
      case 'Brain':
        return <Brain className="w-6 h-6" />
      case 'Code':
        return <Code className="w-6 h-6" />
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6" />
      default:
        return <Zap className="w-6 h-6" />
    }
  }

  // Filter posts based on search term
  const filteredPosts = useMemo(() => {
    if (!searchTerm) return blogPosts
    
    return blogPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm, blogPosts])

  const researchAreas = [
    {
      title: "Power System Optimization",
      description: "Advanced analytics for grid performance, load forecasting, and outage prediction",
      status: "Active Research"
    },
    {
      title: "Machine Learning Pipelines",
      description: "End-to-end ML solutions from data preprocessing to model deployment",
      status: "In Development"
    },
    {
      title: "Geospatial Analytics",
      description: "Spatial analysis and location intelligence using ArcGIS and custom solutions",
      status: "Exploring"
    },
    {
      title: "Business Intelligence",
      description: "Data visualization, KPI tracking, and predictive analytics for business growth",
      status: "Active Research"
    }
  ]

  return (
    <div className="min-h-screen bg-white relative">
      <NeuralBackground />
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gradient">NeuralEdge Research</Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#services" className="text-gray-700 hover:text-primary-600 transition-colors">Services</Link>
              <Link href="/#about" className="text-gray-700 hover:text-primary-600 transition-colors">About</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</Link>
              <Link href="/#contact" className="btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8" style={{ lineHeight: '1.3', marginBottom: '2rem' }}>
                What I'm
                <span className="text-gradient block" style={{ lineHeight: '1.4', marginBottom: '0.5rem' }}>Exploring</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Research, insights, and discoveries in data analytics, AI/ML, and power systems. 
                Sharing knowledge and exploring the cutting edge of technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Posts</h2>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search posts by title, content, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            {searchTerm && (
              <p className="text-sm text-gray-600 mt-2 text-center">
                Showing {filteredPosts.length} of {blogPosts.length} posts
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="text-primary-600 mr-3">
                    {getIconComponent(post.icon)}
                  </div>
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-800 mb-4 font-semibold">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-700 font-semibold">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 font-semibold">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Research Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Latest Research</h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-center">
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Current research initiatives and ongoing projects in data analytics, power systems, and machine learning.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="text-primary-600 mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Grid Optimization</h3>
                  <p className="text-gray-800 mb-4">Advanced analytics for power system reliability and efficiency.</p>
                  <span className="text-sm text-primary-600 bg-primary-50 px-3 py-1 rounded-full">In Progress</span>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="text-primary-600 mb-4">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">ML Pipeline Development</h3>
                  <p className="text-gray-800 mb-4">Scalable machine learning solutions for enterprise applications.</p>
                  <span className="text-sm text-primary-600 bg-primary-50 px-3 py-1 rounded-full">Active</span>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="text-primary-600 mb-4">
                    <Code className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Spatial Analytics</h3>
                  <p className="text-gray-800 mb-4">Geospatial analysis and location intelligence solutions.</p>
                  <span className="text-sm text-primary-600 bg-primary-50 px-3 py-1 rounded-full">Planning</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Research Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{area.title}</h3>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    area.status === 'Active Research' ? 'bg-green-100 text-green-700' :
                    area.status === 'In Development' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {area.status}
                  </span>
                </div>
                <p className="text-gray-800 font-semibold">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Collaborate?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's work together on your next data analytics project or research initiative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn-primary inline-flex items-center">
                Let's Work Together
                <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/#services" className="btn-secondary inline-flex items-center">
                Explore Services
                <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 