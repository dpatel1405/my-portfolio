function Projects() {
    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-green-400 font-semibold text-sm uppercase tracking-widest mb-3">
                        Our Work
                    </p>
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        Real websites built for real local businesses.
                    </p>
                </div>

                {/* Project Card */}
                <div className="bg-gray-900 border border-gray-800 hover:border-green-500 rounded-2xl overflow-hidden transition-all">

                    {/* Project Image Placeholder */}
                    <div className="bg-gradient-to-br from-green-900 to-gray-900 h-64 flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-6xl mb-4">🏠</div>
                            <div className="text-white font-bold text-xl">Regina Elite Cleaning</div>
                            <div className="text-gray-400 text-sm mt-2">cheerful-manatee-ed83f2.netlify.app</div>
                        </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-8">
                        <h3 className="text-white font-bold text-xl mb-2">
                            Regina Elite Cleaning Co.
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xl mb-6">
                            A full professional website for a local cleaning company in Regina, Saskatchewan. Includes online quote calculator, contact form with email integration, chat widget, FAQ section, service area map, and image gallery.
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {['React', 'Tailwind CSS', 'React Router', 'Formspree', 'Netlify', 'SEO', 'Google Analytics'].map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-gray-800 text-green-400 text-xs font-semibold px-3 py-1 rounded-full border border-gray-700"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Features List */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {[
                                'Online Quote Calculator',
                                'Contact Form + Email',
                                'Live Chat Widget',
                                'Mobile Responsive',
                                'Google Analytics',
                                'SEO Optimized',
                                'Service Area Map',
                                'Image Gallery',
                            ].map((feature) => (
                                <div key={feature} className="flex items-center gap-2">
                                    <span className="text-green-400 font-bold">✓</span>
                                    <span className="text-gray-400 text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Links */}
                        {/* Links */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => window.open('https://cheerful-manatee-ed83f2.netlify.app', '_blank')}
                                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg text-sm transition-all"
                            >
                                View Live Site →
                            </button>
                            <button
                                onClick={() => window.open('https://github.com/dpatel1405/regina-cleaning', '_blank')}
                                className="border border-gray-700 hover:border-green-500 text-gray-400 hover:text-white font-semibold px-6 py-2 rounded-lg text-sm transition-all"
                            >
                                View Code →
                            </button>
                        </div>

                    </div>
                </div>

                {/* More Coming Soon */}
                <div className="mt-6 border border-dashed border-gray-800 rounded-2xl p-10 text-center">
                    <div className="text-4xl mb-4">🚧</div>
                    <p className="text-gray-500 text-sm">More projects coming soon</p>
                </div>

            </div>
        </section>
    );
}

export default Projects;