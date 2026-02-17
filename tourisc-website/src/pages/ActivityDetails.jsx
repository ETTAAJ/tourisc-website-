import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { activities } from '../data/activities';

const ActivityDetails = () => {
  const { id } = useParams();
  const activity = activities.find(a => a.id === id);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '1',
    whatsapp: '',
  });

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Activity Not Found</h1>
          <Link to="/" className="text-orange hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hello! I'm interested in booking: ${activity.title}%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Date: ${formData.date}%0A` +
      `Guests: ${formData.guests}%0A` +
      `WhatsApp: ${formData.whatsapp}`;
    
    window.open(`https://wa.me/212600000000?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="bg-dark">
      {/* Hero Image */}
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="max-w-7xl mx-auto">
            <Link
              to={`/${activity.cityId}`}
              className="text-orange hover:underline text-sm mb-2 inline-block"
            >
              ← Back to {activity.cityId.charAt(0).toUpperCase() + activity.cityId.slice(1)}
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {activity.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-1">
                <svg className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white font-semibold">{activity.rating}</span>
              </div>
              <span className="text-white/80">{activity.duration}</span>
              <span className="text-orange text-2xl font-bold">${activity.price}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Overview</h2>
              <p className="text-white/80 leading-relaxed text-lg">
                {activity.overview}
              </p>
            </section>

            {/* What's Included */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">What's Included</h2>
              <ul className="space-y-3">
                {activity.included.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Itinerary</h2>
              <div className="space-y-4">
                {activity.itinerary.map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      {index < activity.itinerary.length - 1 && (
                        <div className="w-0.5 h-full bg-white/20 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="text-orange font-semibold mb-1">{item.time}</div>
                      <div className="text-white/80">{item.activity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activity.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${activity.title} ${index + 1}`}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Booking Form Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Book This Experience</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-orange transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-orange transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-orange transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Number of Guests
                  </label>
                  <select
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-orange transition-all duration-300"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num} className="bg-dark">{num}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-orange transition-all duration-300"
                    placeholder="+212 6XX XXX XXX"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-orange text-white font-semibold rounded-xl hover:bg-orange/90 transition-all duration-300 shadow-lg hover:shadow-orange/50"
                >
                  Book via WhatsApp
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/80">Price per person</span>
                  <span className="text-2xl font-bold text-orange">${activity.price}</span>
                </div>
                <p className="text-white/60 text-sm">
                  Free cancellation up to 24 hours before
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
