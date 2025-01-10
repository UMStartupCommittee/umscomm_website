'use client'
//import { hygraphClient } from '@/lib/hygraph';
//import { HygraphResponse } from '@/types/hygraph';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 py-20 md:py-32 text-center overflow-hidden">
        {/* Animated background */}
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
          className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl font-poppins"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Empowering Student Entrepreneurs at Universiti Malaya
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join the largest startup community in UM and turn your ideas into reality
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button asChild>
            <Link href="/join-us">
              Join UMSCOM
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Upcoming Events Section Temporary*/}
      <section className="bg-light-surface dark:bg-dark-surface py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins">
              Upcoming Events
            </h2>
            <Link
              href="/events"
              className="text-brand-primary hover:text-brand-primary/80 font-medium transition-colors"
            >
              View all events →
            </Link>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Event Card 1 */}
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

            {/* Event Card 2 */}
            <div className="bg-background rounded-lg p-6 shadow-1">
              <p className="text-brand-secondary font-medium mb-2">MAR 20, 2024</p>
              <h3 className="text-xl font-bold mb-2">Pitch Perfect Workshop</h3>
              <p className="text-foreground/80 mb-4">
                Learn how to pitch your startup idea effectively to investors
              </p>
              <Link
                href="/events/pitch-workshop"
                className="text-brand-primary hover:text-brand-primary/80 font-medium"
              >
                Learn more →
              </Link>
            </div>

            {/* Event Card 3 */}
            <div className="bg-background rounded-lg p-6 shadow-1">
              <p className="text-brand-secondary font-medium mb-2">MAR 25, 2024</p>
              <h3 className="text-xl font-bold mb-2">Founder Fireside Chat</h3>
              <p className="text-foreground/80 mb-4">
                Interactive session with successful startup founders from Malaysia
              </p>
              <Link
                href="/events/fireside-chat"
                className="text-brand-primary hover:text-brand-primary/80 font-medium"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}