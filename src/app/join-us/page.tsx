'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { members } from '@/data/members';
import Image from 'next/image';

export default function JoinUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 py-20 md:py-32 text-center overflow-hidden">
        {/* ... (Similar hero section as in the Home component) */}

        <motion.h1
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 max-w-3xl font-poppins"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join Our Team
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl  lg:text-2xl text-foreground/80 mb-8 max-w-2xl"
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
      <section className="bg-gray-100 dark:bg-dark-surface py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-12 text-center">
            Our members
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center py-16">
            {members.map((member) => (
              <Image
                key={member.id}
                src={member.logo}
                alt={member.alt}
                width={member.width}
                height={member.height}
                className="hover:opacity-80 hover:scale-110 transition-opacity"
              />
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              asChild
              className="text-brand-primary hover:bg-brand-secondary/70"
            >
              <Link href="https://mysis.um.edu.my/activities/registration">
                Register at MYSIS
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}