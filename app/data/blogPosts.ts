export interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  icon: React.ReactNode
  featured?: boolean
  content?: string
  tags?: string[]
  author?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Power System Analytics",
    excerpt: "Exploring how machine learning is revolutionizing grid optimization and outage prediction in modern power systems.",
    category: "Power Systems",
    date: "2024-07-19",
    readTime: "5 min read",
    icon: "Zap",
    featured: true,
    content: `
      # The Future of Power System Analytics

      Power systems are undergoing a digital transformation, with machine learning and advanced analytics playing a crucial role in grid optimization and reliability.

      ## Key Trends

      ### 1. Predictive Maintenance
      Machine learning algorithms can now predict equipment failures before they occur, reducing downtime and maintenance costs.

      ### 2. Load Forecasting
      Advanced forecasting models help utilities better predict energy demand and optimize generation schedules.

      ### 3. Grid Optimization
      Real-time analytics enable dynamic grid management for improved efficiency and reliability.

      ## Implementation Strategies

      - Data collection from IoT sensors
      - Real-time monitoring systems
      - Predictive analytics platforms
      - Automated response systems

      The future of power systems lies in intelligent, data-driven decision making that enhances both efficiency and reliability.
    `,
    tags: ["Power Systems", "Machine Learning", "Grid Optimization", "Predictive Analytics"],
    author: "Craig"
  },
  {
    id: 2,
    title: "Building Scalable AI/ML Pipelines",
    excerpt: "Lessons learned from developing production-ready machine learning pipelines for enterprise applications.",
    category: "AI/ML",
    date: "2024-07-15",
    readTime: "8 min read",
    icon: "Brain",
    content: `
      # Building Scalable AI/ML Pipelines

      Developing production-ready machine learning pipelines requires careful consideration of scalability, reliability, and maintainability.

      ## Pipeline Architecture

      ### Data Ingestion
      - Real-time data streaming
      - Batch processing capabilities
      - Data validation and quality checks

      ### Model Training
      - Automated hyperparameter tuning
      - Model versioning and tracking
      - A/B testing frameworks

      ### Deployment
      - Containerized deployments
      - Auto-scaling capabilities
      - Monitoring and alerting

      ## Best Practices

      1. **Modular Design**: Break pipelines into reusable components
      2. **Version Control**: Track code, data, and model versions
      3. **Testing**: Implement comprehensive testing strategies
      4. **Monitoring**: Real-time performance monitoring
      5. **Documentation**: Maintain clear documentation

      Scalable ML pipelines are the foundation of successful AI implementations in enterprise environments.
    `,
    tags: ["Machine Learning", "Pipeline Development", "Enterprise AI", "Scalability"],
    author: "Craig"
  },
  {
    id: 3,
    title: "ArcGIS and Spatial Analytics in 2024",
    excerpt: "How geospatial analytics and machine learning are transforming location-based decision making.",
    category: "Geospatial",
    date: "2024-07-10",
    readTime: "6 min read",
    icon: "Code",
    content: `
      # ArcGIS and Spatial Analytics in 2024

      Geospatial analytics combined with machine learning is revolutionizing how organizations make location-based decisions.

      ## Spatial Analysis Capabilities

      ### Advanced Mapping
      - 3D visualization techniques
      - Interactive web mapping
      - Real-time spatial data integration

      ### Machine Learning Integration
      - Spatial clustering algorithms
      - Predictive spatial modeling
      - Automated feature extraction

      ### Location Intelligence
      - Site suitability analysis
      - Route optimization
      - Market area analysis

      ## Applications

      - **Urban Planning**: Smart city development
      - **Environmental Monitoring**: Climate change analysis
      - **Business Intelligence**: Location-based insights
      - **Infrastructure Management**: Asset optimization

      The integration of spatial analytics with AI is creating new opportunities for data-driven decision making.
    `,
    tags: ["ArcGIS", "Spatial Analytics", "Geospatial", "Location Intelligence"],
    author: "Craig"
  },
  {
    id: 4,
    title: "Data-Driven Business Intelligence",
    excerpt: "Modern approaches to transforming raw business data into actionable insights and strategic recommendations.",
    category: "Business Analytics",
    date: "2024-07-05",
    readTime: "7 min read",
    icon: "BarChart3",
    content: `
      # Data-Driven Business Intelligence

      Modern business intelligence goes beyond traditional reporting to provide actionable insights that drive strategic decisions.

      ## Key Components

      ### Data Integration
      - Multi-source data aggregation
      - Real-time data processing
      - Data quality management

      ### Advanced Analytics
      - Predictive modeling
      - Prescriptive analytics
      - Natural language processing

      ### Visualization
      - Interactive dashboards
      - Real-time monitoring
      - Mobile-responsive design

      ## Implementation Strategy

      1. **Assessment**: Evaluate current data infrastructure
      2. **Planning**: Design analytics architecture
      3. **Development**: Build analytics solutions
      4. **Deployment**: Implement and train users
      5. **Optimization**: Continuous improvement

      Data-driven BI transforms organizations by providing insights that lead to better decisions and improved outcomes.
    `,
    tags: ["Business Intelligence", "Data Analytics", "Dashboard Design", "Strategic Insights"],
    author: "Craig"
  }
]

export const getPostById = (id: number): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id)
}

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase())
}

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured)
}

export const getRecentPosts = (limit: number = 6): BlogPost[] => {
  return blogPosts
    .filter(post => !post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
} 