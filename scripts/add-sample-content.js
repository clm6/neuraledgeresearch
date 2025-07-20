const { createClient } = require('@sanity/client')

// Initialize Sanity client
const client = createClient({
  projectId: 'roddowtr',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN, // You'll need to create a token in Sanity dashboard
  useCdn: false,
})

// Sample blog post data
const sampleBlogPost = {
  _type: 'blogPost',
  title: 'Power System Optimization Techniques',
  slug: {
    _type: 'slug',
    current: 'power-system-optimization-techniques'
  },
  author: 'Craig Martinez',
  publishedAt: new Date().toISOString(),
  excerpt: 'Advanced techniques for optimizing power system performance using modern analytics and machine learning approaches.',
  tags: ['Power Systems', 'Analytics', 'Optimization'],
  body: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Power system optimization is a critical aspect of modern energy management. This article explores advanced techniques for improving grid performance, reducing energy losses, and enhancing system reliability.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Key Optimization Strategies'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '1. Load Forecasting: Using historical data and machine learning to predict energy demand\n2. Grid Balancing: Real-time monitoring and adjustment of power distribution\n3. Energy Storage: Implementing battery systems for peak shaving\n4. Renewable Integration: Optimizing solar and wind power integration'
        }
      ]
    }
  ]
}

// Sample project data
const sampleProject = {
  _type: 'project',
  title: 'Grid Performance Analysis Platform',
  slug: {
    _type: 'slug',
    current: 'grid-performance-analysis-platform'
  },
  shortDescription: 'A comprehensive platform for analyzing grid performance using real-time data and predictive analytics.',
  tags: ['Power Systems', 'Machine Learning', 'Analytics'],
  publishedAt: new Date().toISOString(),
  body: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'This project developed a comprehensive platform for analyzing power grid performance in real-time. The system integrates multiple data sources including SCADA systems, weather data, and historical performance metrics.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Key Features'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Real-time monitoring dashboard\n• Predictive analytics for load forecasting\n• Anomaly detection algorithms\n• Performance optimization recommendations\n• Integration with existing grid infrastructure'
        }
      ]
    }
  ]
}

// Function to add sample content
async function addSampleContent() {
  try {
    console.log('Adding sample blog post...')
    const blogPost = await client.create(sampleBlogPost)
    console.log('✅ Blog post created:', blogPost._id)

    console.log('Adding sample project...')
    const project = await client.create(sampleProject)
    console.log('✅ Project created:', project._id)

    console.log('🎉 Sample content added successfully!')
    console.log('Visit http://localhost:3000 to see your content')
  } catch (error) {
    console.error('❌ Error adding content:', error.message)
    console.log('💡 Make sure to:')
    console.log('1. Create a Sanity token in your project dashboard')
    console.log('2. Set SANITY_TOKEN environment variable')
    console.log('3. Or use Sanity Studio to add content manually')
  }
}

// Run the script
addSampleContent() 