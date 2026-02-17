import { Link } from 'react-router-dom';

const CTASection = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="bg-dark py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          {title || 'Ready to Experience Morocco?'}
        </h2>
        <p className="text-lg sm:text-xl text-white/80 mb-8 text-balance">
          {subtitle || 'Start planning your luxury Moroccan adventure today. Our expert team is here to create unforgettable experiences.'}
        </p>
        <Link
          to={buttonLink || '/marrakech'}
          className="inline-block px-8 py-4 bg-orange text-white font-semibold rounded-xl hover:bg-orange/90 transition-all duration-300 shadow-lg hover:shadow-orange/50"
        >
          {buttonText || 'Explore Destinations'}
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
