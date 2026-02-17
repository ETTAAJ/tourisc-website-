import { useState, useMemo } from 'react';
import Hero from '../components/Hero';
import ActivityCard from '../components/ActivityCard';
import FilterBar from '../components/FilterBar';
import CTASection from '../components/CTASection';
import { cities } from '../data/cities';
import { activities } from '../data/activities';

const Agadir = () => {
  const city = cities.find(c => c.slug === 'agadir');
  const cityActivities = activities.filter(a => a.cityId === 'agadir');

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

  const attractions = [
    { name: 'Agadir Beach', description: 'Golden sands and crystal-clear waters' },
    { name: 'Agadir Kasbah', description: 'Historic hilltop fortress ruins' },
    { name: 'Valley of the Birds', description: 'Tranquil park with exotic birds' },
    { name: 'Marina Agadir', description: 'Modern marina with restaurants and shops' },
  ];

  return (
    <div>
      <Hero
        title={city.name}
        subtitle={city.description}
        image={city.image}
        showButtons={false}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About {city.name}</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            {city.shortDescription} Agadir offers a perfect blend of relaxation and adventure. 
            With its year-round sunshine, pristine beaches, and modern resort facilities, it's 
            the ideal destination for those seeking both luxury and leisure. From water sports 
            to spa retreats, Agadir provides a contemporary Moroccan coastal experience.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Experiences in {city.name}
            </h2>
            <p className="text-lg text-white/80">
              Discover curated activities and tours
            </p>
          </div>

          <FilterBar onFilterChange={setFilters} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>

          {filteredActivities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60 text-lg">No activities found matching your filters.</p>
            </div>
          )}
        </div>
      </section>

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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-12 border border-white/10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Explore {city.name} on Map</h2>
            <p className="text-white/60 mb-6">Interactive map coming soon</p>
            <div className="bg-white/10 rounded-xl h-64 flex items-center justify-center">
              <p className="text-white/40">Map Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Explore ${city.name}?`}
        subtitle="Book your luxury experience today and discover the coastal paradise"
        buttonText="View Activities"
        buttonLink="#activities"
      />
    </div>
  );
};

export default Agadir;
