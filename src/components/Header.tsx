'use client'

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import logo from '@public/images/umscom_logo.svg'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-primary_negative bg-background/95 md:rounded-[2.5rem] shadow-md">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="UMSCOM Logo"
              width={80}
              height={32}
              priority
            />
            {/* <span className="font-poppins text-xl font-bold text-brand-primary">
              UMSCOM
            </span> */}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors text-white hover:text-white/80">
            Home
          </Link>
          <Link href="/events" className="transition-colors text-white hover:text-white/80">
            Events
          </Link>
          <Link href="/about" className="transition-colors text-white hover:text-white/80">
            About
          </Link>
          <Link href="/contact" className="transition-colors text-white hover:text-white/80">
            Contact
          </Link>
          <Link href="/collaborators" className="transition-colors text-white hover:text-white/80">
            Collaborators
          </Link>
          <Link href="/join-us" className="transition-colors text-white hover:text-white/80">
            Join Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute w-full bg-brand-primary_negative/95 backdrop-blur-sm">
          <div className="flex flex-col space-y-4 p-6">
            <Link
              href="/"
              className="transition-colors text-white hover:text-white/80 py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/events"
              className="transition-colors text-white hover:text-white/80 py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/about"
              className="transition-colors text-white hover:text-white/80 py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="transition-colors text-white hover:text-white/80 py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/collaborators"
              className="transition-colors text-white hover:text-white/80 py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Collaborators
            </Link>
            <Link
              href="/join-us"
              className="transition-colors text-white hover:text-white/80 py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}