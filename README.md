# NeuralEdge Research Website

A modern, professional website for NeuralEdge Research showcasing data analytics services including business analytics, power system analytics, AI/ML pipeline development, ArcGIS consulting, research consultation, and lightweight software development.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Proper meta tags and structured data
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **Accessible**: WCAG compliant design with proper semantic HTML
- **Contact Form**: Integrated contact form for lead generation
- **Service Showcase**: Detailed presentation of all services offered

## Services Offered

1. **Business Analytics**
   - Performance Dashboards
   - KPI Tracking
   - Predictive Analytics
   - Data Visualization

2. **Power System Analytics**
   - Grid Performance Analysis
   - Load Forecasting
   - Outage Prediction
   - Energy Optimization

3. **AI/ML Pipeline Development**
   - Custom ML Models
   - Data Pipeline Design
   - Model Training
   - Production Deployment

4. **ArcGIS ML & AI Consulting**
   - Spatial Analysis
   - GIS Integration
   - Location Intelligence
   - Remote Sensing

5. **Research Consultation**
   - Research Design
   - Statistical Analysis
   - Data Collection
   - Results Interpretation

6. **Lightweight Software Development**
   - Custom Applications
   - API Development
   - Data Processing Tools
   - Automation Scripts

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd neuraledge-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
neuraledge-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Homepage component
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## Customization

### Colors and Branding

The website uses a custom color palette defined in `tailwind.config.js`:

- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: Purple gradient for highlights

### Content Updates

To update content:

1. **Services**: Edit the `services` array in `app/page.tsx`
2. **Contact Information**: Update email and contact details in the contact section
3. **Meta Data**: Modify the metadata in `app/layout.tsx`

### Styling

- Custom CSS classes are defined in `app/globals.css`
- Component-specific styles use Tailwind utility classes
- Animations are handled by Framer Motion

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `out` directory to Netlify

### Other Platforms

The site is a static Next.js application and can be deployed to any static hosting service.

## SEO and Performance

- **Meta Tags**: Complete Open Graph and Twitter Card meta tags
- **Performance**: Optimized images and lazy loading
- **Accessibility**: Semantic HTML and ARIA labels
- **Mobile**: Responsive design with touch-friendly interactions

## Contact Information

- **Email**: craig@neuraledgeresearch.com
- **Website**: neuraledgeresearch.com

## License

This project is proprietary to NeuralEdge Research.

## Support

For questions or support, contact craig@neuraledgeresearch.com #   n e u r a l e d g e r e s e a r c h  
 "# neuraledgeresearch" 
