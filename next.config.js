/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is now stable in Next.js 14
  // Handle Sanity errors gracefully
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
}

module.exports = nextConfig 