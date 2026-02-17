import { useState, useMemo, useEffect } from 'react';
import Hero from '../components/Hero';
import ActivityCard from '../components/ActivityCard';
import FilterBar from '../components/FilterBar';
import CTASection from '../components/CTASection';
import WhatsAppButton from '../components/WhatsAppButton';
import { cities } from '../data/cities';
import { activities } from '../data/activities';

const Marrakech = () => {
  const city = cities.find(c => c.slug === 'marrakech');
  
  // Only show these 4 specific activities
  const allowedActivityIds = [
    'marrakech-jemaa-elfnaa',
    'marrakech-majorelle-garden',
    'marrakech-bahia-palace',
    'marrakech-koutoubia-mosque'
  ];
  
  const cityActivities = activities.filter(a => 
    a.cityId === 'marrakech' && allowedActivityIds.includes(a.id)
  );

  const [filters, setFilters] = useState({
    category: null,
    duration: null,
    priceRange: null,
  });

  const filteredActivities = useMemo(() => {
    return cityActivities.filter(activity => {
      if (filters.category && activity.category !== filters.category) return false;
      if (filters.duration && activity.duration !== filters.duration) return false;
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(Number);
        if (filters.priceRange === '150+') {
          if (activity.price < 150) return false;
        } else if (max) {
          if (activity.price < min || activity.price > max) return false;
        } else {
          if (activity.price >= min) return false;
        }
      }
      return true;
    });
  }, [filters, cityActivities]);

  useEffect(() => {
    // Smooth scroll animation for activity cards
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll('[data-activity-card]');
    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, [filteredActivities]);

  const attractions = [
    { name: 'Jemaa el-Fnaa', description: 'The vibrant heart of Marrakech', lat: 31.6258, lng: -7.9891 },
    { name: 'Bahia Palace', description: 'A masterpiece of Moroccan architecture', lat: 31.6194, lng: -7.9831 },
    { name: 'Majorelle Garden', description: 'A botanical and artistic wonder', lat: 31.6442, lng: -7.9986 },
    { name: 'Koutoubia Mosque', description: 'The iconic symbol of Marrakech', lat: 31.6240, lng: -7.9934 },
  ];

  // Marrakech coordinates
  const marrakechCoordinates = {
    lat: 31.6295,
    lng: -7.9811
  };

  return (
    <div>
      <Hero
        title="Best Things to Do in Marrakech"
        subtitle="Discover the top Marrakech activities, from desert tours and quad biking to cultural experiences and Atlas Mountains day trips. Your ultimate guide to things to do in Marrakech."
        image={city.image}
        showButtons={false}
      />

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About {city.name}</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            {city.shortDescription} Marrakech, known as the Red City, captivates visitors with its 
            vibrant souks, stunning palaces, and magical atmosphere. From the bustling Jemaa el-Fnaa 
            square to the serene Majorelle Garden, every corner tells a story of rich history and 
            cultural heritage. Experience the perfect blend of ancient traditions and modern luxury 
            in this enchanting destination.
          </p>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Best Things to Do in Marrakech
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Explore the best Marrakech activities including desert tours from Marrakech, quad biking Marrakech, camel ride Marrakech, and Atlas Mountains day trip experiences. Discover cultural sites, adventure activities, and authentic food experiences.
            </p>
          </div>

          <FilterBar onFilterChange={setFilters} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredActivities.map((activity) => (
              <div key={activity.id} data-activity-card>
                <ActivityCard activity={activity} />
              </div>
            ))}
          </div>

          {filteredActivities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60 text-lg">No activities found matching your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Top Attractions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((attraction, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl hover:shadow-orange/20 transition-all duration-300 border border-white/10"
              >
                <h3 className="text-xl font-bold text-dark mb-2">{attraction.name}</h3>
                <p className="text-dark/60 text-sm">{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-12 border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Explore {city.name} on Map</h2>
              <p className="text-white/60 mb-6">
                Discover Marrakech's top attractions and key locations on our interactive map
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                width="100%"
                height="500"
                style={{ border: 0, minHeight: '500px' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108755.41712042948!2d-7.9811065!3d31.6294723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakech%2C%20Morocco!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
                title="Marrakech Map"
                className="w-full"
              />
            </div>

            {/* Key Locations */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {attractions.map((attraction, index) => (
                <a
                  key={index}
                  href={`https://www.google.com/maps/search/?api=1&query=${attraction.lat},${attraction.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 text-center transition-all duration-300 hover:border-orange/50 hover:shadow-lg hover:shadow-orange/10"
                >
                  <h3 className="text-white font-semibold text-sm mb-1">{attraction.name}</h3>
                  <p className="text-white/60 text-xs">{attraction.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Explore ${city.name}?`}
        subtitle="Book your luxury experience today and discover the magic of the Red City"
        buttonText="View Activities"
        buttonLink="#activities"
      />

      <WhatsAppButton />
    </div>
  );
};

export default Marrakech;
