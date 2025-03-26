'use client'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import EventCard from '@/components/EventCard';
import { Event } from '@/types/hygraph';
import { useEffect } from 'react';
import { getEvents } from '../lib/hygraph/index';
import { useEvents } from '@/lib/context/EventsContext';
import { ArrowRight, Users, Calendar, Target } from 'lucide-react';

// interface Particle {
//   x1: string;
//   x2: string;
//   y1: string;
//   y2: string;
//   size: number;
//   duration: number;
//   scale: number;
//   opacity: number;
// }

export default function Home() {
  const { events, setEvents, isLoaded, setIsLoaded } = useEvents();
  // const [particles, setParticles] = useState<Particle[]>([]);
  // const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      const { data, errors } = await getEvents();
      if (errors?.length) {
        console.log("Error", errors);
      } else {
        setEvents(data.eventData);
        console.log("Events fetched:", data.eventData);
      }
    }
    fetchEvents();
  }, [isLoaded, setEvents, setIsLoaded]);

  const { upcomingEvents } = filterEvents(events);
  // useEffect(() => {
  //   particlesRef.current = [...Array(20)].map((_, i) => {
  //     // Create a grid-like distribution pattern
  //     const section = Math.floor(i / 5); // Divide screen into 4 sections
  //     const position = i % 5; // Position within section

  //     // Calculate base positions in each quadrant
  //     const baseX = (section % 2) * 50; // 0 or 50 (left or right half)
  //     const baseY = Math.floor(section / 2) * 50; // 0 or 50 (top or bottom half)

  //     // Add some randomness within the assigned quadrant
  //     const x1 = baseX + (position * 10) + (Math.random() * 15) + "%";
  //     const y1 = baseY + (Math.random() * 40) + "%";

  //     // Create unique target positions that don't all go to the same place
  //     // Move particles in somewhat different directions for varied motion
  //     const xDir = Math.random() > 0.5 ? 1 : -1;
  //     const yDir = Math.random() > 0.5 ? 1 : -1;
  //     const xDist = 15 + Math.random() * 10; // Between 15-25%
  //     const yDist = 15 + Math.random() * 10; // Between 15-25%

  //     // Calculate second position based on directions
  //     let x2 = parseFloat(x1) + (xDir * xDist) + "%";
  //     let y2 = parseFloat(y1) + (yDir * yDist) + "%";

  //     // Keep in bounds
  //     x2 = Math.max(0, Math.min(100, parseFloat(x2))) + "%";
  //     y2 = Math.max(0, Math.min(100, parseFloat(y2))) + "%";

  //     return {
  //       x1,
  //       x2,
  //       y1,
  //       y2,
  //       size: 80 + Math.random() * 140, // 80-220px for better visibility
  //       duration: 20 + Math.random() * 20, // 20-40s for slower movement
  //       scale: 0.6 + Math.random() * 0.6, // 0.6-1.2 scale
  //       opacity: 0.15 + Math.random() * 0.25 // 0.15-0.4 opacity
  //     };
  //   });

  //   // Update state to trigger rendering
  //   setParticles(particlesRef.current);
  // }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Enhanced */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 py-20 md:py-32 text-center overflow-hidden">
        {/* Animated background with gradient */}
        {/* <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary_negative/20 via-background to-brand-secondary/20 animate-gradient bg-[length:400%_400%]">
            {/* Floating Elements }
            {particles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-brand-primary_negative/10"
                initial={{
                  x: particle.x1,
                  y: particle.y1,
                  scale: particle.scale,
                  opacity: particle.opacity
                }}
                animate={{
                  x: [particle.x1, particle.x2],
                  y: [particle.y1, particle.y2]
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: particle.duration,
                  ease: "easeInOut"
                }}
                style={{
                  width: particle.size,
                  height: particle.size,
                }}
              />
            ))}
          </div>
          {/* Grid overlay }
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center bg-repeat opacity-10" />
        </div> */}

        {/* Hero content with animations */}
        <div className="max-w-5xl mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <span className="px-4 py-1.5 bg-brand-primary_negative/10 text-brand-primary_negative rounded-full text-sm font-medium">Universiti Malaya Startup Community</span>
          </motion.div>

          <motion.h1
            className="text-3xl leading-tight md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto font-poppins"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>Igniting the </span>
            <span className="text-brand-primary_negative">Entrepreneurial Spirit </span>
            <span>of UM Studentpreneurs</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Join the largest startup community in Universiti Malaya and transform your innovative ideas into impactful ventures.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="lg" className="px-8">
              <Link href="/join-us">
                Join UMSCOM
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/events">
                Explore Events
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Curved bottom shape */}
        {/* <div className="absolute bottom-0 w-full h-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="rgb(243 244 246)" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 50 C480 100, 960 0, 1440 50 L1440 100 L0 100 Z"></path>
          </svg>
        </div> */}
      </section>

      {/* Features Section */}
      <section className="bg-brand-primary_negative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-white mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins mb-4">Why Join UMSCOM?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">We provide the resources, community, and opportunities to help you succeed in your entrepreneurial journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-brand-primary_negative/10 w-14 h-14 flex items-center justify-center rounded-full mb-6">
                <Users className="w-7 h-7 text-brand-primary_negative" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vibrant Community</h3>
              <p className="text-foreground/80">Connect with like-minded students, mentors, and industry professionals passionate about entrepreneurship.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-brand-primary_negative/10 w-14 h-14 flex items-center justify-center rounded-full mb-6">
                <Calendar className="w-7 h-7 text-brand-primary_negative" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Exclusive Events</h3>
              <p className="text-foreground/80">Participate in workshops, hackathons, networking sessions, and startup competitions throughout the year.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-brand-primary_negative/10 w-14 h-14 flex items-center justify-center rounded-full mb-6">
                <Target className="w-7 h-7 text-brand-primary_negative" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Skill Development</h3>
              <p className="text-foreground/80">Gain practical skills in pitching, business model development, marketing, and fundraising strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      {/* <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins mb-4">Our Community in Action</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">Take a glimpse into our past events and exciting moments at UMSCOM</p>
          </div>
           */}

      {/* Image Gallery - Masonry Style */}
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Image 1 */}
      {/* <div className="overflow-hidden rounded-lg h-64 md:h-80">
              <Image
                src="/images/event1.png"
                alt="Grab industrial visit"
                width={500}
                height={500}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div> */}

      {/* Image 2 - Taller */}
      {/* <div className="overflow-hidden rounded-lg h-80 md:h-96 row-span-2">
              <Image
                src="/images/events/event2.jpg"
                alt="Pitch competition finalists"
                width={500}
                height={700}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div> */}

      {/* Image 3 */}
      {/* <div className="overflow-hidden rounded-lg h-64 md:h-80">
              <Image
                src="/images/events/event3.jpg"
                alt="Networking session"
                width={500}
                height={500}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div> */}

      {/* Image 4 */}
      {/* <div className="overflow-hidden rounded-lg h-64 md:h-80">
              <Image
                src="/images/events/event4.jpg"
                alt="Mentorship program"
                width={500}
                height={500}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div> */}

      {/* Image 5 - Wider */}
      {/* <div className="overflow-hidden rounded-lg h-64 md:h-80 col-span-2">
              <Image
                src="/images/events/event5.jpg"
                alt="Group photo from hackathon"
                width={800}
                height={500}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div> */}

      {/* Image 6 */}
      {/* <div className="overflow-hidden rounded-lg h-64 md:h-80">
              <Image
                src="/images/events/event6.jpg"
                alt="Workshop session"
                width={500}
                height={500}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section> */}


      {/* Upcoming Events Section - Enhanced */}
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
            {events.length === 0 ? (
              <div className="bg-gray-50 rounded-xl p-16 text-center">
                <div className="animate-pulse flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/3 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
                <p className="mt-6 text-foreground/80">Loading upcoming events...</p>
              </div>
            ) : (
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
            )}
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

      {/* Testimonial/Stats Section */}
      {/* <section className="bg-brand-primary_negative text-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins mb-4">Our Impact</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Building the next generation of entrepreneurs at University of Malaya</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-white/80">Active Members</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">30+</div>
              <p className="text-white/80">Annual Events</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">20+</div>
              <p className="text-white/80">Startups Launched</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-brand-primary_negative/10 to-brand-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins mb-6">
            Ready to Start Your Entrepreneurial Journey?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join UMSCOM today and connect with a community of innovators, access resources, and turn your ideas into reality.
          </p>
          <Button asChild size="lg" className="px-8">
            <Link href="/join-us">
              Become a Member
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
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