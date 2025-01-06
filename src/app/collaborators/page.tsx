'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Collaborators() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 py-20 md:py-32 text-center overflow-hidden">
        {/* ... (Similar hero section as in the Home component) */}

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl font-poppins"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Collaborators
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We are grateful for the support of our partners who share our vision of fostering entrepreneurial spirit among students.
        </motion.p>
      </section>

      {/* Collaborators Section */}
      <section className="bg-light-surface dark:bg-dark-surface py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-8">
            Our Partners
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Collaborator 1 */}
            <div className="bg-background rounded-lg p-6 shadow-1 text-center">
              <img src="/images/collaborator1-logo.svg" alt="Collaborator 1 Logo" className="w-24 h-24 mb-4" />
              <h3 className="text-xl font-bold mb-2">Collaborator 1 Name</h3>
              <p className="text-foreground/80">Brief description of the collaborator and their contribution to UMSCOM.</p>
            </div>

            {/* ... (Other collaborators) */}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-brand-primary text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">
            Interested to collaborate?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Interested to collaborate in fostering entrepreneurial spirit among students and providing them with the necessary support and resources to thrive in the startup ecosystem?
          </p>
          <Button asChild>
            <Link href="/contact">
              Send us an email
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}