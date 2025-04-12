import { getEvents } from '@/lib/hygraph'

export default async function sitemap() {
  const { data } = await getEvents()
  const events = data.eventData || []

  const eventUrls = events.map((event) => ({
    url: `https://umscomm.vercel.app/events/${event.id}`,
    // lastModified: new Date(event.updatedAt || event.createdAt || new Date()),
  }))

  const routes = [
    '',
    '/events',
    '/about',
    '/join-us',
  ].map((route) => ({
    url: `https://umscomm.vercel.app${route}`,
    lastModified: new Date(),
  }))

  return [...routes, ...eventUrls]
}