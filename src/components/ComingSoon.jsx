import React, { useState, useEffect } from "react";

const ComingSoon = () => {
  const [countDownDate, setCountDownDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    // Set countdown date only once (30 days from now)
    const endDate = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
    setCountDownDate(endDate);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance < 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      setTimeLeft({
        days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0"),
        minutes: String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0"),
        seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0"),
      });
    };

    // Update countdown every second
    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Run immediately

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You will be notified when we launch!");
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center bg-gradient-to-br from-indigo-50 to-white font-['Poppins']">
      <main className="flex flex-col items-center justify-center w-full px-4 text-center">
        <div className="max-w-3xl w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent">
            Coming Soon
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8">
            We're crafting something amazing for you. Our new platform is under construction and will be launched soon.
          </p>

          {/* ✅ Responsive Countdown Grid (Fixing Overflow) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto mb-6">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-indigo-500">
                  {timeLeft[label.toLowerCase()]}
                </span>
                <span className="text-gray-500">{label}</span>
              </div>
            ))}
          </div>

          <div className="max-w-md mx-auto mb-6">
            <form className="flex gap-4" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-grow px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
              <button type="submit" className="px-6 py-3 bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors rounded-lg">
                Notify Me
              </button>
            </form>
          </div>

          <div className="flex justify-center gap-6 mb-4">
            {["twitter", "facebook", "instagram", "linkedin"].map((social, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                <i className={`fab fa-${social} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="text-center text-gray-500 text-sm pb-4">
        <p>&copy; 2024 Your Brand. All rights reserved.</p>
        <p className="mt-2">Contact us: hello@yourbrand.com</p>
      </footer>
    </div>
  );
};

export default ComingSoon;
