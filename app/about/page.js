import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-purple-50 text-gray-900">
      {/* Hero Section */}
      <section className="py-24 px-8 max-w-6xl mx-auto text-center space-y-6">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
          About JustChat 💬
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          JustChat is more than just a messaging app. It's a platform designed
          to connect people globally, build communities, and enable secure,
          real-time conversations — fast, fun, and simple.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="hover:scale-105 transition-transform border p-10 border-black rounded-2xl shadow-xl font-semibold">
          <h2 className="text-4xl font-bold mb-6 text-purple-600">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to make global communication accessible, fast, and
            enjoyable for everyone. Whether you're chatting with friends,
            joining communities, or building teams — JustChat makes it easy.
          </p>
        </div>
        <div className="hover:scale-105 transition-transform border p-14 border-black rounded-2xl shadow-xl font-semibold">
          <h2 className="text-4xl font-bold mb-6 text-blue-600">Our Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We envision a world where conversations know no boundaries — where
            people can connect, share, and grow without limits, all while
            feeling safe and secure.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-4 gap-10 text-center">
          {[
            { title: "🔒 Security", desc: "End-to-end encryption keeps your data safe." },
            { title: "⚡ Speed", desc: "Optimized servers for instant communication." },
            { title: "🌍 Community", desc: "Building global communities without barriers." },
            { title: "🎨 Simplicity", desc: "Clean, user-friendly design for everyone." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl border shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {[
            { name: "Aradhy", role: "Founder & CEO" },
            { name: "Harry", role: "Lead Developer" },
            { name: "Nimish", role: "Community Manager" },
          ].map((member, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-xl shadow-lg border hover:scale-106 transition-transform">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt={member.name}
                width={120}
                height={120}
                className="mx-auto rounded-full mb-6"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Join the JustChat Revolution 🚀</h2>
        <p className="text-lg text-gray-700 mb-8">
          Be part of the fastest growing chat platform today. Start your journey with us.
        </p>
        <a
          href="/forums"
          className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-lg font-semibold shadow-lg hover:opacity-90 transition"
        >
          Start Chatting
        </a>
      </section>
    </div>
  );
}
