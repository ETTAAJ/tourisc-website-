import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, image, showButtons = true, citySlug = null }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/90"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 text-balance">
            {subtitle}
          </p>
        )}

        {showButtons && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {citySlug ? (
              <Link
                to={`/${citySlug}`}
                className="px-8 py-4 bg-orange text-white font-semibold rounded-xl hover:bg-orange/90 transition-all duration-300 shadow-lg hover:shadow-orange/50"
              >
                Explore {citySlug.charAt(0).toUpperCase() + citySlug.slice(1)}
              </Link>
            ) : (
              <Link
                to="/marrakech"
                className="px-8 py-4 bg-orange text-white font-semibold rounded-xl hover:bg-orange/90 transition-all duration-300 shadow-lg hover:shadow-orange/50"
              >
                Start Your Journey
              </Link>
            )}
            <Link
              to="/#destinations"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-dark transition-all duration-300"
            >
              View Destinations
            </Link>
          </div>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
