export default function Hero() {
  return (
    <header className="max-w-4xl mx-auto text-center px-4 pt-16 pb-12 sm:pt-20 sm:pb-16 transition-colors duration-300">
      {/* Accent Tagline */}

      {/* Main Title heading */}
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
        Invest in Your Academic Excellence with{" "}
        <span className="text-brand-primary dark:text-brand-secondary">
          Ilmify
        </span>
      </h1>

      {/* Brief description */}
      <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto dark:text-gray-400">
        Choose a flexible tutorial plan that fits your learning pace. Access
        live interactions, comprehensive study guides, and expert 1-on-1
        mentorship today.
      </p>

      {/* Hero CTA Button with hover and focus adjustments */}
      <div className="mt-8 flex justify-center">
        <a
          href="#pricing-grid"
          className="inline-flex items-center justify-center px-6 py-3 font-semibold text-sm rounded-xl 
            bg-brand-primary text-white shadow-xs hover:bg-brand-secondary 
            focus:outline-hidden focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 
            dark:focus:ring-offset-gray-900 transition-all duration-200 cursor-pointer"
        >
          View Detailed Plans
        </a>
      </div>
    </header>
  );
}
