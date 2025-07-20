#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Automated Blog Post Generator
 * Converts text files to blog post objects
 */

// Category mapping
const CATEGORY_MAP = {
  'power-systems': {
    category: 'Power Systems',
    icon: 'Zap',
    description: 'Grid optimization, outage prediction'
  },
  'ai-ml': {
    category: 'AI/ML',
    icon: 'Brain',
    description: 'Machine learning, pipelines'
  },
  'geospatial': {
    category: 'Geospatial',
    icon: 'Code',
    description: 'ArcGIS, spatial analytics'
  },
  'business': {
    category: 'Business Analytics',
    icon: 'BarChart3',
    description: 'BI, data visualization'
  }
};

/**
 * Extract hashtags from content
 */
function extractHashtags(content) {
  const hashtagRegex = /#(\w+)/g;
  const hashtags = content.match(hashtagRegex) || [];
  return hashtags.map(tag => tag.substring(1));
}

/**
 * Estimate read time based on word count
 */
function estimateReadTime(content) {
  const words = content.split(/\s+/).length;
  const wordsPerMinute = 200;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

/**
 * Generate excerpt from content
 */
function generateExcerpt(content, maxLength = 150) {
  // Remove hashtags and clean content
  const cleanContent = content.replace(/#\w+/g, '').trim();
  const sentences = cleanContent.split(/[.!?]+/).filter(s => s.trim().length > 0);
  
  if (sentences.length === 0) return '';
  
  let excerpt = sentences[0];
  for (let i = 1; i < sentences.length; i++) {
    const testExcerpt = excerpt + '. ' + sentences[i];
    if (testExcerpt.length <= maxLength) {
      excerpt = testExcerpt;
    } else {
      break;
    }
  }
  
  return excerpt.length > maxLength ? excerpt.substring(0, maxLength - 3) + '...' : excerpt;
}

/**
 * Format content for markdown
 */
function formatContent(content) {
  // Remove hashtags from the content
  let formattedContent = content.replace(/#\w+/g, '').trim();
  
  // Split into lines and process
  const lines = formattedContent.split('\n');
  const processedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.length === 0) {
      processedLines.push('');
      continue;
    }
    
    // Skip the title line (first line)
    if (i === 0) {
      processedLines.push(`# ${line}`);
      processedLines.push('');
      continue;
    }
    
    // Process bullet points
    if (line.startsWith('•') || line.startsWith('-')) {
      processedLines.push(`- ${line.substring(1).trim()}`);
    }
    // Process section headers (lines that end with :)
    else if (line.endsWith(':')) {
      processedLines.push(`## ${line.substring(0, line.length - 1)}`);
      processedLines.push('');
    }
    // Regular paragraphs
    else {
      processedLines.push(line);
    }
  }
  
  return processedLines.join('\n');
}

/**
 * Generate blog post object from text file
 */
function generateBlogPost(textFilePath) {
  try {
    const content = fs.readFileSync(textFilePath, 'utf8');
    const lines = content.split('\n');
    
    // Extract title (first line)
    const title = lines[0].trim();
    
    // Extract hashtags
    const hashtags = extractHashtags(content);
    
    // Determine category from file path
    const filePath = path.parse(textFilePath);
    const folderName = path.basename(path.dirname(textFilePath));
    const categoryInfo = CATEGORY_MAP[folderName] || CATEGORY_MAP['power-systems'];
    
    // Generate metadata
    const excerpt = generateExcerpt(content);
    const readTime = estimateReadTime(content);
    const formattedContent = formatContent(content);
    
    // Generate current date
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Create blog post object
    const blogPost = {
      title,
      excerpt,
      category: categoryInfo.category,
      date: currentDate,
      readTime,
      icon: categoryInfo.icon,
      featured: false, // Default to false, can be manually set
      content: formattedContent,
      tags: hashtags,
      author: 'Craig'
    };
    
    return blogPost;
    
  } catch (error) {
    console.error('Error processing file:', error.message);
    return null;
  }
}

/**
 * Generate TypeScript code for blog post
 */
function generateTypeScriptCode(blogPost, nextId) {
  return `  {
    id: ${nextId},
    title: "${blogPost.title}",
    excerpt: "${blogPost.excerpt}",
    category: "${blogPost.category}",
    date: "${blogPost.date}",
    readTime: "${blogPost.readTime}",
    icon: "${blogPost.icon}",
    featured: ${blogPost.featured},
    content: \`
${blogPost.content}
    \`,
    tags: ${JSON.stringify(blogPost.tags)},
    author: "${blogPost.author}"
  },`;
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: node generate-blog-post.js <text-file-path>');
    console.log('Example: node generate-blog-post.js content/blog-docs/power-systems/Power\ System\ Application.txt');
    process.exit(1);
  }
  
  const textFilePath = args[0];
  
  if (!fs.existsSync(textFilePath)) {
    console.error('Error: File not found:', textFilePath);
    process.exit(1);
  }
  
  console.log('Processing file:', textFilePath);
  
  const blogPost = generateBlogPost(textFilePath);
  
  if (!blogPost) {
    console.error('Failed to generate blog post');
    process.exit(1);
  }
  
  console.log('\n=== Generated Blog Post ===');
  console.log('Title:', blogPost.title);
  console.log('Category:', blogPost.category);
  console.log('Tags:', blogPost.tags.join(', '));
  console.log('Read Time:', blogPost.readTime);
  console.log('Featured:', blogPost.featured);
  
  console.log('\n=== TypeScript Code ===');
  console.log('Add this to app/data/blogPosts.ts:');
  console.log(generateTypeScriptCode(blogPost, 'NEXT_ID'));
  
  console.log('\n=== Content Preview ===');
  console.log(blogPost.content.substring(0, 200) + '...');
  
  console.log('\n=== Next Steps ===');
  console.log('1. Copy the TypeScript code above');
  console.log('2. Paste it into app/data/blogPosts.ts');
  console.log('3. Update the id to the next available number');
  console.log('4. Test with npm run build');
  console.log('5. Deploy to production');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  generateBlogPost,
  generateTypeScriptCode,
  extractHashtags,
  estimateReadTime,
  generateExcerpt,
  formatContent
}; 