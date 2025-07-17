import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NeuralEdge Research - Modern Data Analytics & AI/ML Solutions',
  description: 'Professional data analytics services including business analytics, power system data analytics, AI/ML pipelines, ArcGIS machine learning, and research consultation.',
  keywords: 'data analytics, business analytics, power systems, AI/ML, machine learning, ArcGIS, research consultation, software development',
  authors: [{ name: 'Craig' }],
  creator: 'NeuralEdge Research',
  publisher: 'NeuralEdge Research',
  robots: 'index, follow',
  openGraph: {
    title: 'NeuralEdge Research - Modern Data Analytics & AI/ML Solutions',
    description: 'Professional data analytics services including business analytics, power system data analytics, AI/ML pipelines, ArcGIS machine learning, and research consultation.',
    url: 'https://neuraledgeresearch.com',
    siteName: 'NeuralEdge Research',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuralEdge Research - Modern Data Analytics & AI/ML Solutions',
    description: 'Professional data analytics services including business analytics, power system data analytics, AI/ML pipelines, ArcGIS machine learning, and research consultation.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 