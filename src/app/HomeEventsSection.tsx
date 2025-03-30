'use client'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/EventCard';
import { Event } from '@/types/hygraph';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface EventsSectionProps {
  initialEvents: Event[];
}

export default function EventsSection({ initialEvents }: EventsSectionProps) {
  const [upcomingEvents] = useState<Event[]>(initialEvents);

  return (
    <section className='py-24 px-4'>
      <div className='max-w-6xl mx-auto'>
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins mb-3">
              Upcoming Events
            </h2>
            <p className="text-foreground/80 max-w-xl">Join our exciting events to learn, network, and grow your entrepreneurial skills</p>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center mt-4 md:mt-0 text-brand-primary_negative hover:underline font-medium transition-colors"
          >
            View all events <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Event Cards */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.slice(0, 4).map((event, index) => (
                <EventCard key={index} {...event} />
              ))
            ) : (
              <div className="col-span-full text-center p-8 bg-gray-50 rounded-xl">
                <p className="text-lg">No upcoming events at the moment. Check back soon!</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigate to Events page button */}
        {upcomingEvents.length > 0 && (
          <div className='flex justify-center'>
            <Button asChild>
              <Link href="/events">
                Explore all events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}