'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function JoinUs() {
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
          Join Our Team
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Interested to be part of the committee in fostering entrepreneurial spirit among students and providing them with the necessary support and resources to thrive in the startup ecosystem?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button asChild>
            <Link href="/apply-now">
              Apply Now
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Be a Member Section */}
      <section className="bg-light-surface dark:bg-dark-surface py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-8">
            Be a Member
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Membership Option 1 */}
            <div className="bg-background rounded-lg p-6 shadow-1 text-center">
              <img src="/images/membership-icon1.svg" alt="Membership Icon" className="w-24 h-24 mb-4" />
              <h3 className="text-xl font-bold mb-2">Student Member</h3>
              <p className="text-foreground/80">Join our community of passionate student entrepreneurs.</p>
            </div>

            {/* ... (Other membership options) */}
          </div>

          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/register-at-myis">
                Register at MYSIS
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}