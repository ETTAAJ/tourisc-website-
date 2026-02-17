import { useState, useMemo, useEffect } from 'react';
import Hero from '../components/Hero';
import ActivityCard from '../components/ActivityCard';
import AgadirFilterBar from '../components/AgadirFilterBar';
import CTASection from '../components/CTASection';
import WhatsAppButton from '../components/WhatsAppButton';
import { cities } from '../data/cities';
import { activities } from '../data/activities';

const Agadir = () => {
  const city = cities.find(c => c.slug === 'agadir');
  
  // Filter to show only the new Agadir activities
  const allowedActivityIds = [
    'agadir-beach-experience-new',
    'agadir-oufella-sunset',
    'agadir-paradise-valley',
    'agadir-camel-ride-new',
    'agadir-quad-biking-new',
    'agadir-desert-safari-dinner',
    'agadir-crocoparc',
    'agadir-boat-trip-fishing',
    'agadir-surf-taghazout',
    'agadir-souk-el-had'
  ];
  
  const cityActivities = activities.filter(a => 
    a.cityId === 'agadir' && allowedActivityIds.includes(a.id)
  );

  const [filters, setFilters] = useState({
    category: null,
  });

  const filteredActivities = useMemo(() => {
    return cityActivities.filter(activity => {
      if (filters.category && activity.category !== filters.category) return false;
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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'United Kingdom',
      rating: 5,
      text: 'Paradise Valley was absolutely stunning! The natural pools and rock formations were breathtaking. Our guide was knowledgeable and made the experience unforgettable.',
      activity: 'Paradise Valley Day Trip'
    },
    {
      name: 'Michael Chen',
      location: 'Canada',
      rating: 5,
      text: 'The quad biking adventure was incredible! We rode through amazing desert landscapes and coastal trails. Highly recommend for adventure seekers.',
      activity: 'Quad Biking Adventure'
    },
    {
      name: 'Emma Martinez',
      location: 'Spain',
      rating: 5,
      text: 'Agadir Beach Experience was perfect for relaxation. The golden sands and crystal-clear waters were exactly as described. A must-do in Agadir!',
      activity: 'Agadir Beach Experience'
    },
    {
      name: 'David Thompson',
      location: 'Australia',
      rating: 5,
      text: 'The surf trip to Taghazout was amazing! Professional instructors and perfect waves. One of the best surf experiences I\'ve had in Morocco.',
      activity: 'Surf Trip to Taghazout'
    }
  ];

  const faqs = [
    {
      question: 'What are the best things to do in Agadir?',
      answer: 'The best things to do in Agadir include relaxing on the golden beaches, visiting Paradise Valley, experiencing camel rides, quad biking adventures, surfing in Taghazout, and exploring the Oufella Kasbah for sunset views.'
    },
    {
      question: 'Is Paradise Valley worth visiting from Agadir?',
      answer: 'Absolutely! Paradise Valley is one of the top Agadir activities. It\'s a stunning natural oasis with crystal-clear pools, dramatic rock formations, and perfect for hiking and swimming. It\'s a must-see for nature lovers.'
    },
    {
      question: 'Where can I go camel riding in Agadir?',
      answer: 'You can experience camel ride Agadir adventures along the beautiful beaches. The tours typically last 1-2 hours and offer stunning coastal views. It\'s perfect for families and couples seeking an authentic Moroccan experience.'
    },
    {
      question: 'What is the best time for quad biking in Agadir?',
      answer: 'Quad biking Agadir adventures are best enjoyed in the morning or late afternoon to avoid the midday heat. The desert and coastal trails offer amazing scenery year-round, but spring and autumn provide the most comfortable temperatures.'
    },
    {
      question: 'How far is Taghazout from Agadir?',
      answer: 'Taghazout is located just 20km north of Agadir, making it easily accessible for a day trip. It\'s one of Morocco\'s premier surf destinations, perfect for surf in Taghazout experiences with world-class waves and professional instructors.'
    },
    {
      question: 'What should I bring for Agadir activities?',
      answer: 'For beach activities, bring sunscreen, swimwear, and towels. For adventure activities like quad biking or Paradise Valley, wear comfortable clothing, closed-toe shoes, and bring water. Don\'t forget your camera for the stunning views!'
    }
  ];

  const attractions = [
    { name: 'Agadir Beach', description: 'Golden sands and crystal-clear waters', lat: 30.4219, lng: -9.5981 },
    { name: 'Agadir Kasbah', description: 'Historic hilltop fortress ruins', lat: 30.4283, lng: -9.6000 },
    { name: 'Valley of the Birds', description: 'Tranquil park with exotic birds', lat: 30.4200, lng: -9.5900 },
    { name: 'Marina Agadir', description: 'Modern marina with restaurants and shops', lat: 30.4167, lng: -9.5833 },
  ];

  return (
    <div>
      <Hero
        title="Best Things to Do in Agadir"
        subtitle="Discover beaches, desert adventures and unforgettable experiences in Agadir, Morocco."
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop&q=80"
        showButtons={true}
        buttonText="Book Your Experience"
        buttonLink="#activities"
      />

      {/* Activities Section */}
      <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Best Things to Do in Agadir
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Explore the best Agadir activities including Paradise Valley Agadir, camel ride Agadir, quad biking Agadir, and surf in Taghazout experiences. Discover beaches, desert adventures, and unforgettable experiences.
            </p>
          </div>

          <AgadirFilterBar onFilterChange={setFilters} />

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

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Guests Say
            </h2>
            <p className="text-lg text-white/80">
              Real experiences from travelers who explored Agadir with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-orange/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-orange">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-white/80 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-white/60 text-sm">{testimonial.location}</p>
                  <p className="text-orange text-sm mt-1">{testimonial.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-white/80">
              Everything you need to know about Agadir activities
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-orange/30 transition-all duration-300"
              >
                <h3 className="text-white font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-white/70 leading-relaxed">{faq.answer}</p>
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
                Discover Agadir's top attractions and key locations on our interactive map
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108755.41712042948!2d-9.5981!3d30.4278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e4b6b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sAgadir%2C%20Morocco!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
                title="Agadir Map"
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
        title="Ready to Explore Agadir?"
        subtitle="Book your luxury experience today and discover the coastal paradise of Agadir, Morocco"
        buttonText="Book Your Experience"
        buttonLink="#activities"
      />

      <WhatsAppButton />
    </div>
  );
};

export default Agadir;
