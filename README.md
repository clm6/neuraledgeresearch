# NeuralEdge Research - Sanity CMS + Next.js

A modern full-stack website with Sanity CMS for content management and Next.js for the frontend.

## 🚀 Features

- **Sanity Studio v3** - Modern headless CMS
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Dynamic Routing** - Individual blog post and project pages
- **GROQ Queries** - Powerful content querying
- **Portable Text** - Rich text rendering
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
neuraledge-website/
├── app/                    # Next.js App Router
│   ├── blog/              # Blog pages
│   ├── projects/          # Project pages
│   ├── components/        # React components
│   └── page.tsx          # Homepage
├── components/            # Reusable UI components
│   ├── BlogList.tsx      # Blog post grid
│   └── ProjectGrid.tsx   # Project grid
├── lib/                   # Utility libraries
│   └── sanity.ts         # Sanity client & queries
├── schemas/              # Sanity content schemas
│   ├── blogPost.ts       # Blog post schema
│   ├── project.ts        # Project schema
│   ├── siteSettings.ts   # Site settings schema
│   └── blockContent.ts   # Rich text schema
├── sanity.config.ts      # Sanity Studio config
└── package.json          # Dependencies
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Sanity

1. **Create a Sanity project** at [sanity.io](https://sanity.io)
2. **Get your project ID** from the Sanity dashboard
3. **Create environment variables**:

```bash
# Create .env.local file
cp env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

4. **Update sanity.config.ts** with your project ID:
```typescript
projectId: 'your-actual-project-id', // Replace with your actual project ID
```

### 3. Add Sample Content

#### Create a Blog Post:
1. Run `npm run studio` to start Sanity Studio
2. Go to `http://localhost:3333`
3. Create a new "Blog Post" with:
   - **Title**: "Power System Optimization Techniques"
   - **Slug**: `power-system-optimization` (auto-generated)
   - **Author**: "Craig Martinez"
   - **Published at**: Today's date
   - **Excerpt**: "Advanced techniques for optimizing power system performance..."
   - **Tags**: `["Power Systems", "Analytics", "Optimization"]`
   - **Body**: Add rich text content

#### Create a Project:
1. Create a new "Project" with:
   - **Title**: "Grid Performance Analysis Platform"
   - **Slug**: `grid-performance-analysis`
   - **Short Description**: "A comprehensive platform for analyzing grid performance..."
   - **Tags**: `["Power Systems", "Machine Learning", "Analytics"]`
   - **Body**: Add detailed project description

### 4. Start Development

```bash
# Start Next.js development server
npm run dev

# Start Sanity Studio (in another terminal)
npm run studio
```

- **Frontend**: `http://localhost:3000`
- **Sanity Studio**: `http://localhost:3333`

## 📝 Content Types

### Blog Posts
- Title, slug, author, published date
- Excerpt and rich text body
- Featured image with hotspot
- Tags for categorization

### Projects
- Title, slug, short description
- Rich text body for detailed content
- Featured image with hotspot
- Tags and publication date

### Site Settings
- Site title and tagline
- Contact email
- Logo image
- Site description

## 🔧 GROQ Queries

The project includes pre-built GROQ queries in `lib/sanity.ts`:

- `blogPostsQuery` - Fetch all blog posts
- `blogPostQuery` - Fetch single blog post by slug
- `projectsQuery` - Fetch all projects
- `projectQuery` - Fetch single project by slug
- `siteSettingsQuery` - Fetch site configuration

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**:
```bash
git add .
git commit -m "Initial Sanity + Next.js setup"
git push origin main
```

2. **Connect to Vercel**:
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy automatically

### Deploy Sanity Studio (Optional)

```bash
# Deploy Sanity Studio to Sanity's hosting
npx sanity deploy
```

## 🎨 Customization

### Styling
- Modify `app/globals.css` for global styles
- Update Tailwind classes in components
- Customize color scheme in `tailwind.config.js`

### Components
- Add new components in `components/` folder
- Create reusable UI blocks
- Follow TypeScript interfaces for type safety

### Content Schema
- Modify schemas in `schemas/` folder
- Add new content types as needed
- Update GROQ queries in `lib/sanity.ts`

## 📚 Key Dependencies

- `next-sanity` - Sanity client for Next.js
- `@portabletext/react` - Rich text rendering
- `@sanity/image-url` - Image URL builder
- `date-fns` - Date formatting
- `framer-motion` - Animations
- `lucide-react` - Icons

## 🔍 Troubleshooting

### Common Issues

1. **Sanity client errors**: Check project ID and dataset in environment variables
2. **Image loading issues**: Ensure images are uploaded in Sanity Studio
3. **TypeScript errors**: Run `npm run lint` to check for type issues
4. **Build failures**: Ensure all dependencies are installed

### Development Tips

- Use Sanity Studio for content management
- Preview changes in real-time
- Use GROQ queries for flexible content fetching
- Leverage Portable Text for rich content

## 📞 Support

For questions or issues:
- Check Sanity documentation: [sanity.io/docs](https://sanity.io/docs)
- Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Create issues in the repository

---

**Built with ❤️ using Sanity + Next.js** 
