import { useEffect, useRef, useState } from 'react';

const ClientReviews = () => {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'United Kingdom',
      rating: 5,
      text: 'Our trip to Marrakech was absolutely magical! The desert tour and camel ride exceeded all expectations. The guides were knowledgeable and the experience was unforgettable.',
      date: '2 weeks ago',
      destination: 'Marrakech'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Canada',
      rating: 5,
      text: 'Paradise Valley in Agadir was breathtaking! The natural pools and rock formations were stunning. Our guide made the experience truly special. Highly recommend!',
      date: '1 month ago',
      destination: 'Agadir'
    },
    {
      id: 3,
      name: 'Emma Martinez',
      location: 'Spain',
      rating: 5,
      text: 'The Fes medina tour was incredible. We discovered hidden gems and learned so much about Moroccan culture. The traditional crafts workshop was a highlight!',
      date: '3 weeks ago',
      destination: 'Fes'
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'Australia',
      rating: 5,
      text: 'Surfing in Taghazout was amazing! Professional instructors and perfect waves. One of the best surf experiences I\'ve had. Will definitely return!',
      date: '1 week ago',
      destination: 'Agadir'
    },
    {
      id: 5,
      name: 'Sophie Laurent',
      location: 'France',
      rating: 5,
      text: 'The Atlas Mountains day trip from Marrakech was spectacular. Beautiful scenery, authentic Berber villages, and delicious traditional lunch. A must-do experience!',
      date: '2 months ago',
      destination: 'Marrakech'
    },
    {
      id: 6,
      name: 'James Wilson',
      location: 'United States',
      rating: 5,
      text: 'Agadir beach experience was perfect for relaxation. Golden sands, crystal-clear waters, and excellent service. The sunset dinner was romantic and memorable.',
      date: '3 weeks ago',
      destination: 'Agadir'
    },
    {
      id: 7,
      name: 'Maria Garcia',
      location: 'Italy',
      rating: 5,
      text: 'The quad biking adventure in Agadir was thrilling! Professional guides, amazing desert landscapes, and great safety measures. Perfect for adventure seekers!',
      date: '1 month ago',
      destination: 'Agadir'
    },
    {
      id: 8,
      name: 'Robert Brown',
      location: 'Germany',
      rating: 5,
      text: 'Jemaa el-Fnaa square tour in Marrakech was fascinating. The food stalls, street performers, and vibrant atmosphere were incredible. A true cultural immersion!',
      date: '2 weeks ago',
      destination: 'Marrakech'
    }
  ];

  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const scroll = () => {
      if (!isPaused && container) {
        scrollPosition += scrollSpeed;
        
        // Reset scroll position when reaching the end (halfway through duplicated content)
        const maxScroll = container.scrollHeight / 2;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        container.scrollTop = scrollPosition;
      }
      
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Client Reviews
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            See what our guests say about their experiences with Tourisc
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark via-dark/80 to-transparent pointer-events-none z-20" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark via-dark/80 to-transparent pointer-events-none z-20" />
          
          <div
            ref={scrollContainerRef}
            className="relative h-[600px] overflow-y-scroll scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex flex-col gap-6 pr-4">
              {duplicatedReviews.map((review, index) => (
                <div
                  key={`${review.id}-${index}`}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-orange/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange/10 flex-shrink-0"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-orange/20 rounded-full flex items-center justify-center">
                        <span className="text-orange font-bold text-lg">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{review.name}</h3>
                        <p className="text-white/60 text-sm">{review.location}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex text-orange mb-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-white/40 text-xs">{review.date}</p>
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-4 leading-relaxed italic">
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                    <svg className="w-4 h-4 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-orange text-sm font-medium">{review.destination}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
