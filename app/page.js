import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-purple-50 text-gray-900">
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 sm:px-10 md:px-16 max-w-7xl mx-auto gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
            Welcome to JustChat 🚀
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Connect with the world, chat in real-time, and build communities like never before.  
            JustChat makes conversations simple, fast, and fun.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start mt-4">
            <a
              href="/forums"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-xl transition text-base sm:text-lg font-semibold"
            >
              Explore Forums
            </a>
            <a
              href="#"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-pink-600 hover:bg-pink-700 text-white rounded-xl shadow-xl transition text-base sm:text-lg font-semibold"
            >
              Start Chatting
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/134/134914.png"
            alt="Chat App Illustration"
            width={350}
            height={350}
            className="drop-shadow-2xl rounded-xl w-64 sm:w-80 md:w-[400px] h-auto"
          />
        </div>
      </section>

      {/* Why JustChat */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Why JustChat?
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {[
            { title: "🌍 Global Reach", desc: "Connect with people around the world in real-time." },
            { title: "⚡ Super Fast", desc: "Lightning-fast communication with zero delays." },
            { title: "🔒 Secure", desc: "End-to-end encryption keeps your chats private." },
            { title: "🤝 Communities", desc: "Build, join, and engage with like-minded groups." },
            { title: "📱 Cross-Platform", desc: "Use JustChat on mobile, tablet, or desktop seamlessly." },
            { title: "🎨 Customizable", desc: "Personalize your chats with themes & reactions." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-gray-50 rounded-2xl border shadow-lg text-center hover:scale-105 transition-transform"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Pricing Plans
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {[
            { title: "Free", desc: "Basic features for casual use.", price: "$0", color: "purple" },
            { title: "Pro", desc: "Advanced tools for power users.", price: "$9/mo", color: "pink" },
            { title: "Enterprise", desc: "Best for teams & organizations.", price: "$20/mo", color: "cyan" },
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 sm:p-10 bg-white rounded-2xl border ${
                plan.color === "purple"
                  ? "border-purple-500 shadow-2xl"
                  : plan.color === "pink"
                  ? "border-pink-500 shadow-2xl"
                  : "border-blue-500 shadow-2xl"
              } text-center hover:scale-105 transition-transform`}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{plan.title}</h3>
              <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg">{plan.desc}</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6">{plan.price}</p>
              <button
                className={`w-full py-3 sm:py-4 bg-${plan.color}-600 hover:bg-${plan.color}-700 text-white rounded-xl text-base sm:text-lg font-semibold`}
              >
                {plan.title === "Free" ? "Get Started" : plan.title === "Pro" ? "Upgrade" : "Contact Us"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          What People Say
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {[
            { name: "Aman", feedback: "JustChat is the fastest chat app I’ve ever used!" },
            { name: "Sara", feedback: "I love the community feature, it feels like home." },
            { name: "John", feedback: "Simple, secure, and fun. Highly recommended." },
          ].map((item, idx) => (
            <div key={idx} className="p-6 sm:p-8 bg-white rounded-2xl shadow-xl border text-center">
              <p className="text-gray-700 italic mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
                “{item.feedback}”
              </p>
              <h4 className="text-base sm:text-lg font-semibold">- {item.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 sm:space-y-8">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Is JustChat free to use?</h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              Yes! The Free plan includes basic features. You can upgrade anytime for advanced tools.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Can I use JustChat on mobile?</h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              Absolutely! JustChat works seamlessly on desktop, tablet, and mobile devices.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">How secure is my data?</h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              We use end-to-end encryption to make sure your conversations stay private and safe.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
