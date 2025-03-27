export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://umscomm-website.vercel.app/sitemap.xml',
  }
}