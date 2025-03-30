import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Calendar, Target } from 'lucide-react';
import { getEvents, getUpcomingEvents } from '../lib/hygraph/index';
import HeroSection from '@/app/HeroSection';
import HomeEventsSection from '@/app/HomeEventsSection';

export default async function Home() {
  // Server-side data fetching
  // const { data } = await getEvents();
  const { data } = await getUpcomingEvents();
  const upcomingEvents = data.event || [];
  // console.log('Events:', events);
  // const { upcomingEvents } = filterEvents(events);
  // console.log('Upcoming Events:', upcomingEvents);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Now a client component */}
      <HeroSection />

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