"use client";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Have questions? We'd love to hear from you. Send us a message!
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-center text-gray-500">
          Or reach us at: <span className="text-blue-500">contact@example.com</span>
        </div>
      </div>
    </div>
  );
}
