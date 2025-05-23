import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Calendar, Target } from 'lucide-react';
import { getUpcomingEvents } from '../lib/hygraph/index';
import HeroSection from '@/app/HeroSection';
import HomeEventsSection from '@/app/HomeEventsSection';
// import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { collaborators } from '@/data/collaborators';
import Image from 'next/image';

export const revalidate = 300;

export default async function Home() {
  // Server-side data fetching
  // const { data } = await getEvents();
  const { data } = await getUpcomingEvents();
  // console.log('Upcoming events data:', data);
  const upcomingEvents = data.event || [];
  // console.log('Events:', events);
  // const { upcomingEvents } = filterEvents(events);
  // console.log('Upcoming Events:', upcomingEvents);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Now a client component */}
      <HeroSection />


      {/* Collaborators/Partners Logo Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold font-poppins mb-4">Our Collaborators</h2>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-8">
            We collaborated with leading organizations to provide the best opportunities for our members
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
            {collaborators.map((collaborator) => (
              <div
                key={collaborator.id}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center w-full h-40 md:h-48"
              >
                <Image
                  src={collaborator.logo}
                  alt={collaborator.alt || collaborator.name}
                  width={collaborator.width}
                  height={collaborator.height}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold font-poppins mb-4">Our Partners</h2>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-8">
            We collaborated with leading organizations to provide the best opportunities for our members
          </p>
          <InfiniteMovingCards
            items={collaborators}
            direction="left"
            speed="normal"
            pauseOnHover={true}
            className="bg-white rounded-xl shadow-sm p-4 border border-gray-100"
          />
        </div>
      </section> */}

      {/* Features Section - Can be server rendered */}
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

      {/* Upcoming Events Section - Now a client component with server props */}
      <HomeEventsSection initialEvents={upcomingEvents} />

      {/* CTA Section - Can be server rendered */}
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