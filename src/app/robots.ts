export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://umscomm.vercel.app/sitemap.xml',
  }
}