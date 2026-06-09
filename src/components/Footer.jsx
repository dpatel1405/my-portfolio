function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-green-400 font-bold text-lg">
          LocalSites<span className="text-white">Co</span>
        </div>
        <p className="text-gray-500 text-sm">
          © 2025 LocalSitesCo. Building websites for local businesses.
        </p>
        <div className="flex gap-6">
          <a href="#projects" className="text-gray-500 text-sm hover:text-green-400">Projects</a>
          <a href="#pricing" className="text-gray-500 text-sm hover:text-green-400">Pricing</a>
          <a href="#contact" className="text-gray-500 text-sm hover:text-green-400">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;