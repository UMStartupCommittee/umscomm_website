'use client'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import EventCard from '@/components/EventCard';
import { Event } from '@/types/hygraph';
import { useEffect } from 'react';
import { getEvents } from '../lib/hygraph/index';
import { useEvents } from '@/lib/context/EventsContext';

export default function Home() {
  const { events, setEvents, isLoaded, setIsLoaded } = useEvents();
  // const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      const { data, errors } = await getEvents();
      if (errors?.length) {
        console.log("Error", errors);
      } else {
        // console.log("Fetched events:", data);
        setEvents(data.eventData);
      }
    }
    fetchEvents();
  }, [isLoaded, setEvents, setIsLoaded]);

  const { upcomingEvents } = filterEvents(events);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-100 relative flex flex-col items-center justify-center min-h-[80vh] px-4 py-20 md:py-32 text-center overflow-hidden">
        {/* Animated background WIP*/}
        <div className="absolute inset-0 -z-10">
          {/* Gradient layer */}
          {/* <div
            className="absolute inset-0 bg-gradient-to-br from-brand-primary_negative/30 via-background to-brand-secondary/30"
            style={{
              backgroundSize: '400% 400%',
              animation: 'gradient 15s ease infinite',
            }}
          /> */}

          {/* Grid overlay with motion */}
          {/* <motion.div
            className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center bg-repeat opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
          /> */}
        </div>

        {/* Content with animations */}
        <motion.h1
          className="text-2xl leading-9 md:text-5xl md:leaing-[60px] lg:text-6xl lg:leading-[90px] font-semibold mb-6 max-w-3xl font-poppins"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Empowering Student Entrepreneurs at Universiti Malaya */}
          <div className="grow shrink basis-0 text-center">
            <span >Igniting the </span>
            <span className="text-brand-primary_negative">Entrepreneurial Spirit </span>
            <span >of UM Studentpreneurs</span>
          </div>
        </motion.h1>

        {/* <motion.p
          className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join the largest startup community in UM and turn your ideas into reality
        </motion.p> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button asChild>
            <Link href="/join-us">
              Learn more about UMSCOM
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Upcoming Events Section Temporary*/}
      <section className='bg-light-surface dark:bg-dark-surface py-16 px-4'>
        <div className='max-w-6xl mx-auto'>
          {/* Section Heading */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins">
              Upcoming Events
            </h2>
          </div>

          {/* Event Cards */}
          <div>
            {events.length === 0 ? (
              <p>Loading events...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {upcomingEvents.map((event, index) => (
                  <EventCard key={index} {...event} />
                ))}
              </div>
            )}
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {SampleEventData.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div> */}

          {/* Navigate to Events page button */}
          <div className='flex justify-start'>
            <Button asChild>
              <Link href="/events">
                Explore more events
              </Link>
            </Button>
          </div>
        </div>

      </section>

      {/* <section className="bg-light-surface dark:bg-dark-surface py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins">
              Upcoming Events
            </h2>
            <Link
              href="/events"
              className="text-brand-primary hover:text-brand-primary/80 font-medium transition-colors"
            >
              View all events →
            </Link>
          </div>

          {/* Event Cards *//*}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Event Card 1 *//*}
            <div className="bg-background rounded-lg p-6 shadow-1">
              <p className="text-brand-secondary font-medium mb-2">MAR 15, 2024</p>
              <h3 className="text-xl font-bold mb-2">Startup Weekend UM</h3>
              <p className="text-foreground/80 mb-4">
                54-hour event where aspiring entrepreneurs pitch ideas and work in teams
              </p>
              <Link
                href="/events/startup-weekend"
                className="text-brand-primary hover:text-brand-primary/80 font-medium"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section> */}

    </div>
  );
}

const filterEvents = (events: Event[]) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return {
    upcomingEvents: events.filter(event => new Date(event.eventDate) >= today),
    pastEvents: events.filter(event => new Date(event.eventDate) < today)
  };
}