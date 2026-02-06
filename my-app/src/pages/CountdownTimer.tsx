import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("August 26, 2025 16:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-8 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Countdown to the Event</h2>
      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-4xl font-bold">{timeLeft.days}</p>
          <p className="text-sm">Days</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-4xl font-bold">{timeLeft.hours}</p>
          <p className="text-sm">Hours</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-4xl font-bold">{timeLeft.minutes}</p>
          <p className="text-sm">Minutes</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-4xl font-bold">{timeLeft.seconds}</p>
          <p className="text-sm">Seconds</p>
        </div>
      </div>
    </section>
  );
}