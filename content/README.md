# Content Management System

This folder contains the source materials for blog posts and content management.

## Folder Structure

```
content/
├── blog-docs/           # Word documents and source materials for blog posts
│   ├── power-systems/   # Power systems related documents
│   ├── ai-ml/          # AI/ML related documents
│   ├── geospatial/     # Geospatial and ArcGIS documents
│   └── business/       # Business analytics documents
├── images/             # Images for blog posts
├── templates/          # Blog post templates
├── AUTOMATED_WORKFLOW.md # Automated workflow documentation
└── README.md          # This file
```

## How to Use

### 1. Automated Blog Generation (Recommended)

#### Quick Start:
1. **Create Text File**: Write your blog post content in a `.txt` file
2. **Place in Category Folder**: Put the file in the appropriate subfolder
3. **Run Generator**: Use the automated script to generate blog post
4. **Add to Website**: Copy generated code to `app/data/blogPosts.ts`

#### Text File Format:
```
Power System Optimization & Data Analytics: A Smarter Grid in Action
[Main content with clear sections and bullet points]

#GridModernization #PowerSystems #DataAnalytics
```

#### Run Automation:
```bash
# Windows
scripts/generate-blog.bat "content/blog-docs/power-systems/Your File.txt"

# Or directly
node scripts/generate-blog-post.js "content/blog-docs/power-systems/Your File.txt"
```

### 2. Manual Blog Post Creation

1. **Create Word Document**: Write your blog post content in a Word document
2. **Organize by Category**: Place the document in the appropriate subfolder:
   - `power-systems/` - Power system analytics, grid optimization, outage prediction
   - `ai-ml/` - Machine learning, AI pipelines, model development
   - `geospatial/` - ArcGIS, spatial analytics, location intelligence
   - `business/` - Business intelligence, data analytics, dashboards

3. **Naming Convention**: Use descriptive names like:
   - `Power System Optimization Blog Post.docx`
   - `LSTM Model Development Guide.docx`
   - `ArcGIS Spatial Analysis Tutorial.docx`

### 3. Converting to Blog Post

1. **Read the Document**: Extract the content and key points
2. **Create Blog Post**: Add to `app/data/blogPosts.ts` with:
   - Descriptive title and excerpt
   - Appropriate category and tags
   - Full markdown content
   - Proper metadata (date, read time, author)

3. **Update Search**: The post will automatically be searchable on the explore page

### 3. Folder Organization

#### `power-systems/`
- Grid optimization documents
- Outage prediction research
- Power system analytics guides
- SCADA system documentation

#### `ai-ml/`
- Machine learning pipeline guides
- Model development documentation
- AI implementation case studies
- Algorithm explanations

#### `geospatial/`
- ArcGIS tutorials and guides
- Spatial analysis documentation
- Location intelligence research
- GIS implementation guides

#### `business/`
- Business intelligence guides
- Dashboard development docs
- Data analytics tutorials
- KPI tracking documentation

## File Naming Guidelines

### Word Documents
- Use descriptive, clear names
- Include the topic/category in the name
- Use title case (e.g., "Power System Optimization Guide.docx")
- Avoid special characters except hyphens and underscores

### Images
- Use descriptive names with category prefix
- Include dimensions if relevant (e.g., "ps-grid-optimization-800x600.jpg")
- Use lowercase with hyphens

## Content Workflow

1. **Draft**: Create Word document with your content
2. **Review**: Edit and refine the content
3. **Organize**: Place in appropriate subfolder
4. **Convert**: Extract content and create blog post
5. **Publish**: Add to website and test search functionality

## Best Practices

### Content Guidelines
- Write clear, professional content
- Include code examples where relevant
- Use proper markdown formatting
- Add relevant tags for searchability
- Include author information

### Organization
- Keep related documents together
- Use consistent naming conventions
- Maintain folder structure
- Update this README when adding new categories

### Version Control
- Word documents are source materials
- Blog posts in `app/data/blogPosts.ts` are the published versions
- Keep both in sync when making updates

## Quick Reference

### Adding a New Post
1. Create Word document in appropriate subfolder
2. Extract content and add to `app/data/blogPosts.ts`
3. Test search functionality on `/explore` page
4. Update tags and categories as needed

### Categories Available
- **Power Systems**: Grid optimization, outage prediction, energy analytics
- **AI/ML**: Machine learning, AI pipelines, model development
- **Geospatial**: ArcGIS, spatial analytics, location intelligence
- **Business Analytics**: BI, dashboards, data analytics

### Icons Available
- **Zap**: Power systems and energy
- **Brain**: AI/ML and machine learning
- **Code**: Geospatial and technical topics
- **BarChart3**: Business analytics and BI

## Automated Features

The blog generator automatically:
- ✅ Extracts title from first line
- ✅ Determines category from folder location
- ✅ Extracts hashtags for tags
- ✅ Estimates read time
- ✅ Generates excerpt
- ✅ Formats content for markdown
- ✅ Creates TypeScript code

## Documentation

- [AUTOMATED_WORKFLOW.md](./AUTOMATED_WORKFLOW.md) - Complete workflow guide
- [scripts/generate-blog-post.js](../scripts/generate-blog-post.js) - Automation script
- [scripts/generate-blog.bat](../scripts/generate-blog.bat) - Windows batch file

This system provides a structured approach to managing blog content from text files and Word documents to published posts, with both automated and manual workflows available. 