'use client'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 py-20 md:py-32 text-center overflow-hidden">
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
    </section>
  );
}