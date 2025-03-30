import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Who are we? Section */}
      <section className="text-center py-16 px-8">
        <h1 className="text-2xl leading-9 md:text-3xl md:leading-[48px] lg:text-4xl lg:leading-[60px] font-semibold mb-8">Who are we?</h1>
        <p className="text-lg leading-7 md:text-xl md:leading-7 lg:text-2xl lg:leading-9 text-gray-700 font-semibold m-auto max-w-6xl">
          A community founded upon a commitment to <span className="text-brand-primary_negative font-bold">fostering entrepreneurial spirit </span>
          among students and providing them with the necessary support and resources to
          <span className="text-brand-primary_negative font-bold"> thrive in the startup ecosystem</span>.
        </p>
      </section>

      {/* Objectives Section */}
      <section className="bg-gray-100 py-16 px-8">
        <h2 className="text-center text-2xl leading-9 md:text-3xl md:leading-[48px] lg:text-4xl lg:leading-[60px] font-semibold mb-8">Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Objective items */}
          <div className="flex space-x-4">
            <div className="text-4xl">🎯</div>
            <p className="text-base lg:text-lg lg:leading-relaxed">
              Providing the right platform for entrepreneurs with the necessary skills, resources, and nurturing.
            </p>
          </div>

          <div className="flex space-x-4">
            <div className="text-4xl">🎯</div>
            <p className="text-base lg:text-lg lg:leading-relaxed">
              Facilitating collaborative learning where students from diverse backgrounds can share ideas and learn from each other.
            </p>
          </div>

          <div className="flex space-x-4">
            <div className="text-4xl">🎯</div>
            <p className="text-base lg:text-lg lg:leading-relaxed">
              Building collaborations between student entrepreneurs, mentors, investors, and stakeholders.
            </p>
          </div>

          <div className="flex space-x-4">
            <div className="text-4xl">🎯</div>
            <p className="text-base lg:text-lg lg:leading-relaxed">
              Cultivating a dynamic ecosystem where experts converge to educate students with diverse skills, facilitating the development of innovative startups.
            </p>
          </div>

          <div className="flex space-x-4">
            <div className="text-4xl">🎯</div>
            <p className="text-base lg:text-lg lg:leading-relaxed">
              Ensuring student welfare improvement by involving industry experts to connect with students, increasing job opportunities, and enhancing the quality of graduates.
            </p>
          </div>
        </div>
      </section>

      {/* Our location */}
      <section className="py-16 px-8">
        <h2 className="text-center text-2xl leading-9  md:text-3xl md:leading-[48px] lg:text-4xl lg:leading-[60px] font-semibold mb-8">Our Location</h2>
        <div className="flex justify-center text-base lg:text-lg lg:leading-relaxed mb-8">
          <p className="font-semibold">📍 Address: <span className="font-normal"> Faculty of Computer Science and Information Technology, Universiti Malaya</span></p>
        </div>
        <div className="items-center justify-center flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8731716836314!2d101.65069480000001!3d3.1282134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49720ec81b9b%3A0x58d63e7d8749e9d8!2sFaculty%20of%20Computer%20Science%20and%20Information%20Technology!5e0!3m2!1sen!2sjp!4v1737705182081!5m2!1sen!2sjp"
            width="1500"
            height="450"
            title="UM Faculty of Computer Science and Information Technology"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="text-gray-700">Faculty of Computer Science and Information Technology, University of Malaya, 50603 Kuala Lumpur, Malaysia.</p>
          </div>
        </div> */}
      </section>


    </div>
  );
}

