"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // World Cup 2026 kickoff date (June 11, 2026)
    const kickoffDate = new Date("2026-06-11T00:00:00Z").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = kickoffDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initialize immediately

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 space-y-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            FIFA 2026 Predictor
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto">
            A real-time prediction league system. Coming Soon.
          </p>
        </div>

        {/* Kickoff Countdown Timer */}
        <div className="flex gap-3 md:gap-6 text-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="flex flex-col items-center justify-center p-4 md:p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm min-w-[80px] md:min-w-[100px]"
            >
              <span className="text-3xl md:text-5xl font-black text-gray-800">
                {value.toString().padStart(2, "0")}
              </span>
              <span className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-widest mt-1">
                {unit}
              </span>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full flex flex-col sm:flex-row items-center justify-between p-6 border-t border-gray-100 text-sm">
        <div className="text-gray-500">
          Developed by{" "}
          <Link
            href="https://www.setitup.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gray-900 "
          >
            SAFWAN P
          </Link>
        </div>

        <div className="mt-4 sm:mt-0">
          <Link
            href="https://github.com/safwanpp/fifa-2026-prediction"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400"
            aria-label="GitHub Repository"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </footer>
    </div>
  );
}