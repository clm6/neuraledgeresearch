# Content Management Guide

## How to Add/Edit Blog Posts

### 1. **Edit Existing Posts**
To modify existing posts, edit the `app/data/blogPosts.ts` file:

```typescript
// Example: Edit the first post
{
  id: 1,
  title: "Your New Title",
  excerpt: "Your new excerpt...",
  category: "Your Category",
  date: "2024-07-20", // Update date
  readTime: "6 min read", // Update read time
  icon: "Zap", // Icon name
  featured: true, // Set as featured or false
  content: `
    # Your Full Content Here
    
    Write your full blog post content in markdown format.
    
    ## Sections
    
    You can use markdown formatting:
    - **Bold text**
    - *Italic text*
    - [Links](https://example.com)
    
    ### Code Examples
    \`\`\`python
    def example():
        return "Hello World"
    \`\`\`
  `,
  tags: ["Tag1", "Tag2", "Tag3"],
  author: "Your Name"
}
```

### 2. **Add New Posts**
To add a new post, add a new object to the `blogPosts` array:

```typescript
{
  id: 5, // Use the next available ID
  title: "Your New Post Title",
  excerpt: "Brief description of your post...",
  category: "AI/ML", // Choose from: Power Systems, AI/ML, Geospatial, Business Analytics
  date: "2024-07-25", // Use YYYY-MM-DD format
  readTime: "5 min read",
  icon: "Brain", // Available icons: Zap, Brain, Code, BarChart3
  featured: false, // Set to true to feature on homepage
  content: `
    # Your Full Blog Post Content
    
    Write your complete blog post here using markdown.
    
    ## Key Points
    
    - Point 1
    - Point 2
    - Point 3
    
    ## Conclusion
    
    Your conclusion here.
  `,
  tags: ["Your", "Tags", "Here"],
  author: "Your Name"
}
```

### 3. **Available Icons**
- `"Zap"` - Lightning bolt (Power Systems)
- `"Brain"` - Brain icon (AI/ML)
- `"Code"` - Code brackets (Geospatial/Technical)
- `"BarChart3"` - Bar chart (Business Analytics)

### 4. **Categories**
- `"Power Systems"` - Energy and grid analytics
- `"AI/ML"` - Machine learning and AI
- `"Geospatial"` - Spatial analytics and GIS
- `"Business Analytics"` - Business intelligence

### 5. **Content Formatting**
Use markdown in the `content` field:
- `# Heading 1`
- `## Heading 2`
- `### Heading 3`
- `**Bold text**`
- `*Italic text*`
- `- List items`
- `\`\`\`code blocks\`\`\``

### 6. **Search Functionality**
The search feature automatically searches:
- Post titles
- Post excerpts
- Post categories
- Post content (when implemented)

### 7. **File Structure**
```
app/
├── data/
│   └── blogPosts.ts          # All blog post data
├── explore/
│   └── page.tsx             # Explore page with search
└── components/
    └── NeuralBackground.tsx  # Background effects
```

### 8. **Quick Commands**

**To add a new post:**
1. Open `app/data/blogPosts.ts`
2. Add new post object to the array
3. Save file
4. Refresh the explore page

**To edit an existing post:**
1. Open `app/data/blogPosts.ts`
2. Find the post by ID
3. Modify the fields
4. Save file
5. Refresh the explore page

**To change featured posts:**
1. Set `featured: true` for posts you want featured
2. Set `featured: false` for others
3. Only one post should be featured at a time

### 9. **Best Practices**
- Use descriptive titles
- Write compelling excerpts
- Include relevant tags
- Use appropriate categories
- Keep content well-formatted
- Update dates when editing
- Test search functionality

### 10. **Search Features**
- Real-time search as you type
- Searches titles, excerpts, and categories
- Shows result count
- Filters posts dynamically
- Case-insensitive search

The search functionality is now live on the explore page at `/explore`! 