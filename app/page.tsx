'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { 
  BarChart3, 
  Zap, 
  Brain, 
  Map, 
  Search, 
  Code, 
  Mail, 
  Phone, 
  ArrowRight,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'
import NeuralBackground from './components/NeuralBackground'



export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const formRef = React.useRef<HTMLFormElement>(null)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('m8X1fD3AJ5d89R-Z6')
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    const formData = new FormData(e.currentTarget)
    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
      from_email: formData.get('email') // Add sender's email as from address
    }

    try {
      const result = await emailjs.send(
        'service_4kbbx8s', // Your Gmail service ID
        'template_17i6q0j', // Your EmailJS template ID
        templateParams,
        'm8X1fD3AJ5d89R-Z6' // Your EmailJS public key
      )

      console.log('EmailJS result:', result)
      
      if (result.status === 200 || result.status === 0) {
        setSubmitMessage('Thank you for your message! We will get back to you soon.')
        // Reset form safely
        if (formRef.current) {
          formRef.current.reset()
        }
      } else {
        console.error('EmailJS error status:', result.status)
        setSubmitMessage('There was an error sending your message. Please try again.')
      }
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitMessage('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Analytics",
      description: "Transform your business data into actionable insights with advanced analytics and visualization solutions.",
      features: ["Performance Dashboards", "KPI Tracking", "Predictive Analytics", "Data Visualization"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Power System Analytics",
      description: "Specialized analytics for power systems, grid optimization, and energy efficiency solutions.",
      features: ["Grid Performance Analysis", "Load Forecasting", "Outage Prediction", "Energy Optimization"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Pipeline Development",
      description: "End-to-end machine learning solutions from data preprocessing to model deployment.",
      features: ["Custom ML Models", "Data Pipeline Design", "Model Training", "Production Deployment"]
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "ArcGIS ML & AI Consulting",
      description: "Geospatial analytics and machine learning solutions using ArcGIS and advanced spatial analysis.",
      features: ["Spatial Analysis", "GIS Integration", "Location Intelligence", "Remote Sensing"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Research Consultation",
      description: "Expert consultation for research projects requiring advanced data analytics and statistical analysis.",
      features: ["Research Design", "Statistical Analysis", "Data Collection", "Results Interpretation"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Lightweight Software Development",
      description: "Custom software solutions and tools for data processing, automation, and workflow optimization.",
      features: ["Custom Applications", "API Development", "Data Processing Tools", "Automation Scripts"]
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
              <h1 className="text-2xl font-bold text-gradient">NeuralEdge Research</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">About</a>
              <a href="/explore" className="text-gray-700 hover:text-primary-600 transition-colors">Explore</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
              <a href="#contact" className="btn-primary">Get Started</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
                <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-primary-600">Services</a>
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary-600">About</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary-600">Contact</a>
                <a href="#contact" className="block px-3 py-2 btn-primary text-center">Get Started</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-24 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-32" style={{ lineHeight: '1.5' }}>
                Modern Data Analytics for
                <span className="text-gradient block mt-8 mb-12" style={{ lineHeight: '1.6' }}>Today's Problems</span>
              </h1>
              <p className="text-xl text-gray-600 mb-24 max-w-3xl mx-auto">
                Professional data analytics services delivering insights that drive business growth, 
                power system optimization, and cutting-edge AI/ML solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="#contact" className="btn-primary inline-flex items-center">
                  Let's Work Together
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="/explore" className="btn-secondary inline-flex items-center">
                  Explore Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto font-semibold">
                Comprehensive data analytics solutions tailored to your specific industry and business needs.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:border-primary-200"
              >
                <div className="text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-800 mb-4 font-semibold">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose NeuralEdge Research?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Knowledge</h3>
                    <p className="text-gray-800 font-semibold">Deep expertise in data analytics, machine learning, and industry-specific solutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern Technology</h3>
                    <p className="text-gray-800 font-semibold">Cutting-edge tools and frameworks for scalable, production-ready solutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Actionable Insights</h3>
                    <p className="text-gray-800 font-semibold">Transform complex data into clear, actionable insights that drive business decisions.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Data?</h3>
                <p className="text-primary-100 mb-6">
                  Let's discuss how our data analytics expertise can help you achieve your business goals.
                </p>
                <a href="#contact" className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg inline-flex items-center hover:bg-gray-50 transition-colors">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-800 max-w-2xl mx-auto font-semibold">
                Ready to start your data analytics project? Contact us to discuss your needs and explore how we can help.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:craig@neuraledgeresearch.com" className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                      craig@neuraledgeresearch.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-lg font-semibold text-gray-900">843-718-5163</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Service Areas</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-2">Business Analytics</h5>
                    <p className="text-sm text-gray-600">Performance dashboards, KPI tracking, predictive analytics</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-2">Power Systems</h5>
                    <p className="text-sm text-gray-600">Grid optimization, load forecasting, outage prediction</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-2">AI/ML Solutions</h5>
                    <p className="text-sm text-gray-600">Custom models, data pipelines, deployment</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-2">ArcGIS & Spatial</h5>
                    <p className="text-sm text-gray-600">Geospatial analytics, location intelligence</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Start Your Project</h3>
              <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="business-analytics">Business Analytics</option>
                    <option value="power-systems">Power System Analytics</option>
                    <option value="ai-ml">AI/ML Pipeline Development</option>
                    <option value="arcgis">ArcGIS ML & AI Consulting</option>
                    <option value="research">Research Consultation</option>
                    <option value="software">Lightweight Software Development</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitMessage && (
                  <div className={`mt-4 p-3 rounded-lg text-sm ${
                    submitMessage.includes('Thank you') 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">NeuralEdge Research</h3>
              <p className="text-gray-400 mb-4">
                Modern data analytics solutions for businesses and organizations seeking to unlock the full potential of their data.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Business Analytics</li>
                <li>Power System Analytics</li>
                <li>AI/ML Pipeline Development</li>
                <li>ArcGIS ML & AI Consulting</li>
                <li>Research Consultation</li>
                <li>Software Development</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: craig@neuraledgeresearch.com</p>
                <p>Website: neuraledgeresearch.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NeuralEdge Research. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 