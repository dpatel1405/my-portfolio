function Navbar() {
  return (
    <nav className="border-b border-gray-800 px-6 py-4 flex items-center justify-between sticky top-0 bg-gray-950 z-50">

      {/* Logo */}
      <div className="text-green-400 font-bold text-xl">
        LocalSites<span className="text-white">Co</span>
      </div>

      {/* Links */}
      <div className="flex gap-8">
        <a href="#projects" className="text-gray-400 text-sm hover:text-white">Projects</a>
        <a href="#skills" className="text-gray-400 text-sm hover:text-white">Skills</a>
        <a href="#pricing" className="text-gray-400 text-sm hover:text-white">Pricing</a>
        <a href="#contact" className="text-gray-400 text-sm hover:text-white">Contact</a>
      </div>

      {/* CTA */}
      <a href="#contact">
        <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2 rounded-lg">
          Hire Me
        </button>
      </a>

    </nav>
  );
}

export default Navbar;