import Header from './Header';
import ScheduleContent from './ScheduleContent';
import ContactForm from './ContactForm';
import Footer from './Footer';
import CountdownTimer from './CountdownTimer';

export default function Home() {
  return (
    <main>
      <Header />
      <section
        id="home"
        className="relative bg-cover bg-center bg-no-repeat text-center py-8 px-4 flex-col items-center justify-center min-h-screen"
        style={{
          backgroundImage: "url('https://content-media-cdn.codefinity.com/courses/125aa555-8e38-4918-bf19-386e1a021074/hero+image.png')",
          filter: "blur(8px)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-[#EA2F14] mb-4">
            Grill & Chill: A Backyard Hangout
          </h1>
          <p className="text-lg mb-2">
            Join us for a relaxing evening with neighbors, food, and fun!
          </p>
          <p className="text-lg mb-2 bg-[#FFE4C4] text-[#EA2F14] font-semibold py-1 px-2 rounded">
            Oakview Park – Picnic Area B
          </p>
          <p className="text-lg mb-4 bg-[#FFE4C4] text-[#EA2F14] font-semibold py-1 px-2 rounded">
            Saturday at 4:00 PM
          </p>
          <a
            href="#contact"
            className="bg-[#E6521F] text-white py-2 px-4 rounded-full"
          >
            Join Now
          </a>
        </div>
      </section>
      <CountdownTimer />
      <section id="about" className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-4">About the Event</h2>
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          <p className="mb-4 lg:mb-0">
            It's BBQ time, neighbors! Join us at 4 PM this Saturday at Oakview Park - Picnic Area B for a laid-back evening filled with music, food, and great company. We'll have a grill, a picnic setup, and a small stage for anyone who wants to perform. Whether you sing, dance, play guitar, or want to share a laugh, we'd love to see you shine!
          </p>
          <img
            src="https://content-media-cdn.codefinity.com/courses/125aa555-8e38-4918-bf19-386e1a021074/grill+and+chill.png"
            alt="Grill and Chill Event"
            className="w-full lg:w-1/2"
          />
        </div>
      </section>
      <ScheduleContent />
      <ContactForm />
      <Footer />
    </main>
  );
}