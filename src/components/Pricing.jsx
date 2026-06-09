function Pricing() {
  return (
    <section id="pricing" className="bg-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-green-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Packages
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple Transparent Pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            No hidden fees. Pick the package that fits your business.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Starter */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Starter
            </p>
            <div className="text-4xl font-bold text-white mb-2">$500</div>
            <div className="text-gray-500 text-sm mb-8">One time payment</div>
            <div className="flex flex-col gap-4 mb-8">
              {[
                'Up to 3 pages',
                'Mobile responsive',
                'Contact form',
                'Basic SEO',
                'Netlify hosting setup',
                '1 revision round',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-400 text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <a href="#contact">
              <button className="w-full border border-gray-600 hover:border-green-500 text-gray-300 hover:text-white font-semibold py-3 rounded-lg transition-all">
                Get Started
              </button>
            </a>
          </div>

          {/* Professional — highlighted */}
          <div className="bg-green-600 border border-green-500 rounded-2xl p-8 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-green-700 text-xs font-bold px-4 py-1 rounded-full">
              MOST POPULAR
            </div>
            <p className="text-green-200 text-sm font-semibold uppercase tracking-widest mb-4">
              Professional
            </p>
            <div className="text-4xl font-bold text-white mb-2">$1,000</div>
            <div className="text-green-200 text-sm mb-8">One time payment</div>
            <div className="flex flex-col gap-4 mb-8">
              {[
                'Up to 5 pages',
                'Mobile responsive',
                'Contact form + email',
                'Quote calculator',
                'Chat widget',
                'SEO optimized',
                'Google Analytics',
                '2 revision rounds',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  <span className="text-white text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <a href="#contact">
              <button className="w-full bg-white hover:bg-green-50 text-green-700 font-bold py-3 rounded-lg transition-all">
                Get Started
              </button>
            </a>
          </div>

          {/* Premium */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Premium
            </p>
            <div className="text-4xl font-bold text-white mb-2">$1,500</div>
            <div className="text-gray-500 text-sm mb-8">One time payment</div>
            <div className="flex flex-col gap-4 mb-8">
              {[
                'Unlimited pages',
                'Mobile responsive',
                'Contact form + email',
                'Quote calculator',
                'Chat widget',
                'Advanced SEO',
                'Google Analytics',
                'Google Search Console',
                'Image gallery',
                '3 revision rounds',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-400 text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <a href="#contact">
              <button className="w-full border border-gray-600 hover:border-green-500 text-gray-300 hover:text-white font-semibold py-3 rounded-lg transition-all">
                Get Started
              </button>
            </a>
          </div>

        </div>

        {/* Maintenance Note */}
        <div className="mt-8 bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
          <p className="text-gray-400 text-sm">
            All packages include <span className="text-white font-semibold">free deployment</span> to Netlify. Optional monthly maintenance available from <span className="text-green-400 font-semibold">$75/month</span>.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Pricing;