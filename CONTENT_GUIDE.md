# 📝 Content Management Guide

## 🎯 **Quick Start: Add Content via Sanity Studio**

### **Step 1: Start Sanity Studio**
```bash
cd neuraledge-website
npm run studio
```
Open `http://localhost:3333` in your browser

### **Step 2: Add Blog Posts**

1. **Click "Blog Post"** in the left sidebar
2. **Click "Create new"** button
3. **Fill in the required fields**:

   **Title**: "Power System Optimization Techniques"
   
   **Slug**: Auto-generates from title (or customize)
   
   **Author**: "Craig Martinez"
   
   **Published at**: Today's date
   
   **Excerpt**: "Advanced techniques for optimizing power system performance..."
   
   **Tags**: `["Power Systems", "Analytics", "Optimization"]`
   
   **Body**: Use the rich text editor to add content
   
   **Main Image**: Upload a featured image (optional)

### **Step 3: Add Projects**

1. **Click "Project"** in the left sidebar
2. **Click "Create new"**
3. **Fill in the fields**:

   **Title**: "Grid Performance Analysis Platform"
   
   **Slug**: Auto-generates from title
   
   **Short Description**: "A comprehensive platform for analyzing grid performance..."
   
   **Tags**: `["Power Systems", "Machine Learning", "Analytics"]`
   
   **Body**: Detailed project description
   
   **Main Image**: Upload project screenshot (optional)

## 🚀 **Rich Text Editor Tips**

### **Formatting Options**
- **Bold**: `Ctrl+B` or use toolbar
- **Italic**: `Ctrl+I` or use toolbar
- **Headings**: Use H1, H2, H3 styles
- **Lists**: Bullet points and numbered lists
- **Links**: Add URLs to text
- **Images**: Upload and insert images

### **Content Structure**
```
# Main Heading (H1)
## Section Heading (H2)
### Subsection (H3)

Regular paragraph text with **bold** and *italic* formatting.

- Bullet point 1
- Bullet point 2
- Bullet point 3

1. Numbered list item 1
2. Numbered list item 2
3. Numbered list item 3

[Link text](https://example.com)
```

## 📊 **Content Types Overview**

### **Blog Posts**
- **Purpose**: Articles, research insights, case studies
- **Fields**: Title, slug, author, date, excerpt, body, tags, image
- **URL**: `/blog/[slug]`

### **Projects**
- **Purpose**: Portfolio items, technical solutions, research projects
- **Fields**: Title, slug, description, body, tags, image, date
- **URL**: `/projects/[slug]`

### **Site Settings**
- **Purpose**: Global site configuration
- **Fields**: Title, tagline, contact email, logo, description

## 🎨 **Content Best Practices**

### **Blog Posts**
1. **Compelling Titles**: Clear, descriptive, SEO-friendly
2. **Engaging Excerpts**: 2-3 sentences that hook readers
3. **Structured Content**: Use headings and subheadings
4. **Relevant Tags**: 3-5 tags for categorization
5. **Quality Images**: High-resolution featured images

### **Projects**
1. **Clear Descriptions**: Explain the problem and solution
2. **Technical Details**: Include technologies and methodologies
3. **Visual Content**: Screenshots, diagrams, or videos
4. **Outcomes**: Highlight results and impact
5. **Tags**: Relevant technical categories

## 🔧 **Advanced: API Content Addition**

### **Using the Sample Script**
```bash
# Install Sanity client if needed
npm install @sanity/client

# Run the sample content script
node scripts/add-sample-content.js
```

### **Manual API Usage**
```javascript
const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'roddowtr',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'your-token', // Create in Sanity dashboard
  useCdn: false,
})

// Create a blog post
const blogPost = await client.create({
  _type: 'blogPost',
  title: 'Your Title',
  slug: { _type: 'slug', current: 'your-slug' },
  author: 'Your Name',
  publishedAt: new Date().toISOString(),
  excerpt: 'Your excerpt...',
  body: [
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: 'Your content...' }]
    }
  ]
})
```

## 🌐 **Content Display**

### **Where Content Appears**
- **Homepage**: Latest 3 blog posts and projects
- **Blog Page**: All blog posts (`/blog`)
- **Projects Page**: All projects (`/projects`)
- **Individual Pages**: Full content with rich text

### **Content Updates**
- **Real-time**: Changes appear immediately on your website
- **No Rebuild**: Content updates without code changes
- **Version Control**: Sanity tracks content versions

## 📱 **Mobile Content Management**

### **Sanity Studio Mobile**
- Access your CMS from any device
- Edit content on the go
- Upload images from mobile
- Preview changes instantly

## 🔍 **SEO Optimization**

### **Content SEO**
- **Descriptive Titles**: Include keywords naturally
- **Meta Descriptions**: Use excerpts for SEO
- **Structured Content**: Use proper heading hierarchy
- **Image Alt Text**: Add descriptive alt text
- **Internal Links**: Link between related content

### **URL Structure**
- **Blog Posts**: `/blog/power-system-optimization`
- **Projects**: `/projects/grid-analysis-platform`
- **SEO-friendly**: Clean, descriptive URLs

## 🚀 **Content Workflow**

### **Recommended Process**
1. **Plan**: Outline your content structure
2. **Draft**: Write in Sanity Studio
3. **Review**: Preview on your website
4. **Publish**: Set publish date
5. **Promote**: Share on social media

### **Content Calendar**
- **Weekly**: 1-2 blog posts
- **Monthly**: 1-2 new projects
- **Quarterly**: Update site settings

## 🆘 **Troubleshooting**

### **Common Issues**
- **Content not appearing**: Check publish dates
- **Images not loading**: Verify image uploads
- **Slug conflicts**: Ensure unique slugs
- **Rich text issues**: Check formatting

### **Getting Help**
- **Sanity Documentation**: [sanity.io/docs](https://sanity.io/docs)
- **Community**: [sanity.io/community](https://sanity.io/community)
- **Support**: Contact for technical issues

---

**Happy content creating! 🎉** 