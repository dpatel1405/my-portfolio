function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-28 text-center">

      {/* Badge */}
      <div className="inline-block bg-green-500 bg-opacity-10 border border-green-500 border-opacity-30 text-green-400 text-sm font-semibold px-4 py-1 rounded-full mb-8">
        🚀 Available For New Projects
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
        I Build Websites That
        <span className="text-green-400"> Get You Clients</span>
      </h1>

      {/* Subheadline */}
      <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
        We build beautiful, fast, and mobile-friendly websites for local businesses. Professional sites that attract customers and generate leads. Starting from $500.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
        <a href="#projects">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg text-lg w-full sm:w-auto transition-all">
            See My Work
          </button>
        </a>
        <a href="#contact">
          <button className="border border-gray-700 hover:border-green-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-lg text-lg w-full sm:w-auto transition-all">
            Get In Touch
          </button>
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 border-t border-gray-800 pt-12 max-w-lg mx-auto">
        <div>
          <div className="text-3xl font-bold text-white">1+</div>
          <div className="text-gray-500 text-sm mt-1">Projects Built</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-white">$500+</div>
          <div className="text-gray-500 text-sm mt-1">Starting Price</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-white">100%</div>
          <div className="text-gray-500 text-sm mt-1">Satisfaction</div>
        </div>
      </div>

    </section>
  );
}

export default Hero;