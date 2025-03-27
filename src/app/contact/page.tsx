import Link from 'next/link';
import Image from 'next/image';
import { socialLinks } from '@/data/socialLinks';

export default function ContactPage() {

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-8 py-16">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-2xl leading-9 md:text-3xl md:leading-[48px] lg:text-4xl lg:leading-[60px] font-semibold mb-6">
            Want to get in touch with us?
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8">
            Have questions about UMSCOM? We&rsquo;d love to hear from you. Send us a message and we&rsquo;ll respond as soon as possible.
          </p>
          <p className="text-lg mb-6">Email us at</p>
          <p className="font-semibold text-lg">umstartupcommittee@gmail.com</p>
          <a
            href="mailto:umstartupcommittee@gmail.com"
            className="inline-block mt-6 px-6 py-3 bg-yellow-400 text-black font-medium rounded-md shadow-md hover:bg-yellow-500"
          >
            Send us an email
          </a>
        </div>
      </section>

      {/* Social media section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-8 bg-gray-100">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-center">Get social with us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Instagram */}
          <Link
            href={socialLinks.instagram || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors group"
            aria-label="Instagram"
          >
            <div className='mb-3'>
              <Image
                src="/images/skill-icons_instagram.png"
                alt="Instagram"
                width={96}
                height={96}
                className="h-24 w-24 group-hover:scale-110 transition-transform"
              />
            </div>
            <span className='text-foreground/80 group-hover:text-brand-tertiary'>@umscomm</span>
          </Link>

          {/* Discord */}
          <Link
            href={socialLinks.discord || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors group"
          >
            <div className="mb-3">
              <Image
                src="/images/skill-icons_discord.png"
                alt="Discord"
                width={96}
                height={96}
                className="h-24 w-24 group-hover:scale-110 transition-transform"
              />
            </div>
            <span className="text-foreground/80 group-hover:text-brand-tertiary">UM Startup Community</span>
          </Link>

          {/* LinkedIn */}
          <Link
            href={socialLinks.linkedin || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors group"
          >
            <div className="mb-3">
              <Image
                src="/images/skill-icons_linkedin.png"
                alt="LinkedIn"
                width={96}
                height={96}
                className="h-24 w-24 group-hover:scale-110 transition-transform"
              />
            </div>
            <span className="text-foreground/80 group-hover:text-brand-tertiary">UM Startup Community</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
