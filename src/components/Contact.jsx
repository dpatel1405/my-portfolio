import { useState } from 'react';

function Contact() {

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xeewgjwn', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }

    setLoading(false);
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-green-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Tell us about your business and we'll get back to you within 24 hours with a free quote.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-900 border border-green-700 rounded-2xl p-12 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
            <p className="text-gray-400 text-sm">
              Thanks for reaching out! We will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
          >

            {/* Name */}
            <div className="mb-5">
              <label className="block text-white font-semibold text-sm mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Jane Smith"
                required
                className="w-full bg-gray-800 border border-gray-700 focus:border-green-500 rounded-lg px-4 py-3 text-white text-sm focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-white font-semibold text-sm mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="jane@business.com"
                required
                className="w-full bg-gray-800 border border-gray-700 focus:border-green-500 rounded-lg px-4 py-3 text-white text-sm focus:outline-none"
              />
            </div>

            {/* Business Name */}
            <div className="mb-5">
              <label className="block text-white font-semibold text-sm mb-2">
                Business Name
              </label>
              <input
                type="text"
                name="business"
                placeholder="Your Business Name"
                required
                className="w-full bg-gray-800 border border-gray-700 focus:border-green-500 rounded-lg px-4 py-3 text-white text-sm focus:outline-none"
              />
            </div>

            {/* Package */}
            <div className="mb-5">
              <label className="block text-white font-semibold text-sm mb-2">
                Package Interested In
              </label>
              <select
                name="package"
                required
                className="w-full bg-gray-800 border border-gray-700 focus:border-green-500 rounded-lg px-4 py-3 text-white text-sm focus:outline-none"
              >
                <option value="">Select a package</option>
                <option value="starter">Starter — $500</option>
                <option value="professional">Professional — $1,000</option>
                <option value="premium">Premium — $1,500</option>
                <option value="unsure">Not sure yet</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block text-white font-semibold text-sm mb-2">
                Tell Us About Your Business
              </label>
              <textarea
                name="message"
                placeholder="What does your business do? What do you need from a website?"
                required
                rows={4}
                className="w-full bg-gray-800 border border-gray-700 focus:border-green-500 rounded-lg px-4 py-3 text-white text-sm focus:outline-none resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl text-sm transition-all disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Send Message →'}
            </button>

          </form>
        )}

      </div>
    </section>
  );
}

export default Contact;