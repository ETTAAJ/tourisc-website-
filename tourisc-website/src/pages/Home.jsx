import Hero from '../components/Hero';
import CityCard from '../components/CityCard';
import CTASection from '../components/CTASection';
import ClientReviews from '../components/ClientReviews';
import { cities } from '../data/cities';

const Home = () => {
  // Filter out Rabat from cities
  const displayedCities = cities.filter(city => city.slug !== 'rabat');

  return (
    <div>
      <Hero
        title="Experience the Magic of Morocco"
        subtitle="Discover luxury, culture, and adventure in Morocco's most enchanting destinations"
        image="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1920&h=1080&fit=crop"
      />

      {/* Destinations Grid */}
      <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Discover Our Destinations
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Each city offers a unique blend of history, culture, and luxury experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {displayedCities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Tourisc
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange/50 transition-all duration-300">
              <div className="w-12 h-12 bg-orange/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Luxury Experiences</h3>
              <p className="text-white/60">
                Handpicked premium activities and accommodations that exceed expectations
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange/50 transition-all duration-300">
              <div className="w-12 h-12 bg-orange/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Guides</h3>
              <p className="text-white/60">
                Local experts who share authentic stories and hidden gems of Morocco
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange/50 transition-all duration-300">
              <div className="w-12 h-12 bg-orange/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Personalized Service</h3>
              <p className="text-white/60">
                Tailored itineraries designed to match your preferences and travel style
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <ClientReviews />

      <CTASection />
    </div>
  );
};

export default Home;
