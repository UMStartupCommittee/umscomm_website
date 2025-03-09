'use client'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { collaborators } from '@/data/collaborators';

export default function Collaborators() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Our Collaborators Section */}
      <section className="bg-light-surface dark:bg-dark-surface py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-12 text-center">
            Our Collaborators
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
            {/* <Image
              src="/images/Amazon_Logo.jpeg"
              alt="Collaborator 1"
              width={200}
              height={100}
              className="hover:opacity-80 transition-opacity"
            /> */}
            {collaborators.map((collaborator) => (
              <Image
                key={collaborator.id}
                src={collaborator.logo}
                alt={collaborator.alt}
                width={collaborator.width}
                height={collaborator.height}
                objectFit='cover'
                className="hover:opacity-80 hover:scale-110 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interested to Collaborate Section */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
            Interested to collaborate?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90">
            Join us in fostering entrepreneurial spirit among students and providing them with the necessary support and resources to thrive in the startup ecosystem.
          </p>
          <Button
            asChild
            className="text-brand-primary hover:bg-brand-secondary/70"
          >
            <Link href="/contact">
              Send us an email
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}