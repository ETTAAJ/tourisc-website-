import { useState, useMemo, useEffect } from 'react';
import Hero from '../components/Hero';
import ActivityCard from '../components/ActivityCard';
import FesFilterBar from '../components/FesFilterBar';
import CTASection from '../components/CTASection';
import WhatsAppButton from '../components/WhatsAppButton';
import { cities } from '../data/cities';
import { activities } from '../data/activities';

const Fes = () => {
  const city = cities.find(c => c.slug === 'fes');
  
  // Filter to show only the new Fes activities
  const allowedActivityIds = [
    'fes-medina-guided-tour',
    'fes-chouara-tannery',
    'fes-al-quaraouiyine-university',
    'fes-bou-inania-madrasa',
    'fes-royal-palace-gates',
    'fes-cooking-class-new',
    'fes-hammam-experience-new',
    'fes-chefchaouen-day-trip',
    'fes-middle-atlas-excursion',
    'fes-pottery-zellige-workshop'
  ];
  
  const cityActivities = activities.filter(a => 
    a.cityId === 'fes' && allowedActivityIds.includes(a.id)
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
      name: 'Isabella Rodriguez',
      location: 'Spain',
      rating: 5,
      text: 'The Fes Medina tour was absolutely incredible! Our guide navigated us through the maze-like alleys and shared fascinating stories. The Chouara Tannery visit was a highlight - such a unique experience!',
      activity: 'Fes Medina Guided Tour'
    },
    {
      name: 'Thomas Anderson',
      location: 'United States',
      rating: 5,
      text: 'Al Quaraouiyine University was breathtaking. Standing in the world\'s oldest university was a profound experience. The architecture and history are simply amazing. Highly recommend!',
      activity: 'Al Quaraouiyine University Tour'
    },
    {
      name: 'Sophie Dubois',
      location: 'France',
      rating: 5,
      text: 'The cooking class in Fes was wonderful! We learned to make authentic tagine and couscous in a beautiful traditional riad. The chef was patient and the food was delicious. A must-do experience!',
      activity: 'Fes Cooking Class'
    },
    {
      name: 'James Mitchell',
      location: 'United Kingdom',
      rating: 5,
      text: 'Chefchaouen day trip from Fes was magical! The blue city is even more beautiful in person. The mountain views and charming streets made it a perfect day trip. Our guide was excellent!',
      activity: 'Day Trip to Chefchaouen'
    }
  ];

  const faqs = [
    {
      question: 'What are the best things to do in Fes?',
      answer: 'The best things to do in Fes include exploring the ancient medina, visiting Chouara Tannery, touring Al Quaraouiyine University, admiring Bou Inania Madrasa, taking a cooking class, and experiencing a traditional hammam. Fes cultural tours offer deep insights into Moroccan heritage.'
    },
    {
      question: 'Is the Fes Medina tour worth it?',
      answer: 'Absolutely! The Fes Medina is the world\'s largest car-free urban area and a UNESCO World Heritage site. A guided Fes Medina tour is essential to navigate the labyrinthine alleys and discover hidden gems, historic medersas, and artisan workshops.'
    },
    {
      question: 'What is Chouara Tannery?',
      answer: 'Chouara Tannery is one of Fes\'s most iconic sights, where leather has been processed using traditional methods for centuries. Visitors can observe the colorful dyeing vats from rooftop terraces. It\'s a must-see Fes activity for photography and cultural understanding.'
    },
    {
      question: 'Can I visit Chefchaouen from Fes?',
      answer: 'Yes! Chefchaouen day trips from Fes are very popular. The Blue City is located about 3-4 hours away and offers stunning blue-washed streets, mountain views, and a unique atmosphere. It\'s one of the best day trips from Fes for photography and culture.'
    },
    {
      question: 'What should I know about Fes cultural tours?',
      answer: 'Fes cultural tours typically include visits to historic medersas, the tanneries, Al Quaraouiyine University, artisan workshops, and traditional markets. These tours provide deep insights into Islamic architecture, traditional crafts, and Moroccan culture. Wear comfortable shoes for walking!'
    },
    {
      question: 'How long should I spend in Fes?',
      answer: 'We recommend at least 2-3 days in Fes to fully experience the medina, visit key attractions, take a cooking class or workshop, and enjoy day trips to places like Chefchaouen or the Middle Atlas Mountains. Fes has so much to offer!'
    }
  ];

  const attractions = [
    { name: 'Fes el-Bali', description: 'The ancient medina, a UNESCO World Heritage site', lat: 34.0631, lng: -4.9750 },
    { name: 'Al-Qarawiyyin University', description: 'The world\'s oldest university', lat: 34.0647, lng: -4.9736 },
    { name: 'Chouara Tannery', description: 'Traditional leather dyeing pits', lat: 34.0625, lng: -4.9744 },
    { name: 'Bou Inania Madrasa', description: 'Stunning Islamic architecture', lat: 34.0642, lng: -4.9753 },
  ];

  return (
    <div>
      <Hero
        title="Best Things to Do in Fes"
        subtitle="Explore the cultural heart of Morocco with unforgettable experiences in Fes."
        image="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=80"
        showButtons={true}
        buttonText="Book Your Experience"
        buttonLink="#activities"
      />

      {/* Activities Section */}
      <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Best Things to Do in Fes
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Explore the best Fes activities including Fes Medina tour, Chouara Tannery, Fes cultural tours, and day trips from Fes. Discover the cultural heart of Morocco with unforgettable experiences.
            </p>
          </div>

          <FesFilterBar onFilterChange={setFilters} />

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
              Real experiences from travelers who explored Fes with us
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
              Everything you need to know about visiting Fes
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
                Discover Fes's top attractions and key locations on our interactive map
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108755.41712042948!2d-4.9750!3d34.0372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd78f8af4e4bd1d5%3A0x508ca9ce4db88f0b!2sFes%2C%20Morocco!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
                title="Fes Map"
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
        title="Ready to Explore Fes?"
        subtitle="Book your luxury experience today and discover the cultural heart of Morocco"
        buttonText="Book Your Experience"
        buttonLink="#activities"
      />

      <WhatsAppButton />
    </div>
  );
};

export default Fes;
