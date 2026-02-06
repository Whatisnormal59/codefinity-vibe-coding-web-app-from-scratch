import { CalendarClock, Flame, Mic, Rocket, Smile } from 'lucide-react';

export default function ScheduleContent() {
  return (
    <section id="schedule" className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Schedule</h2>
        <div className="border-l-4 border-orange-500 pl-4 space-y-6">
          <div className="flex items-center">
            <CalendarClock className="text-[#EA2F14] mr-2" />
            <h3 className="text-xl font-semibold">4:00 PM – Arrivals & Setup</h3>
          </div>
          <p className="text-base">Grab a spot, meet your neighbors, and get comfy.</p>
          <div className="flex items-center">
            <Flame className="text-[#EA2F14] mr-2" />
            <h3 className="text-xl font-semibold">4:30 PM – Grill Time</h3>
          </div>
          <p className="text-base">The BBQ is on! Hot dogs, veggies, and good smells all around.</p>
          <div className="flex items-center">
            <Mic className="text-[#EA2F14] mr-2" />
            <h3 className="text-xl font-semibold">5:00 PM – Open Stage & Performances</h3>
          </div>
          <p className="text-base">Music, poetry, magic, or a duet with Sara — hop on stage and shine!</p>
          <div className="flex items-center">
            <Rocket className="text-[#EA2F14] mr-2" />
            <h3 className="text-xl font-semibold">6:30 PM – Roller Showcase</h3>
          </div>
          <p className="text-base">Look out for a surprise entrance!</p>
          <div className="flex items-center">
            <Smile className="text-[#EA2F14] mr-2" />
            <h3 className="text-xl font-semibold">7:00 PM – Chill & Hangout</h3>
          </div>
          <p className="text-base">More food, more laughs, and lawn games till sunset.</p>
        </div>
      </div>
    </section>
  );
}