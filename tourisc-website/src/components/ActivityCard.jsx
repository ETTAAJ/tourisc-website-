import { Link } from 'react-router-dom';

const ActivityCard = ({ activity }) => {
  const whatsappNumber = '212600000000';
  const handleBookNow = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(`Hello! I'm interested in booking: ${activity.title}%0A%0APrice: From ${activity.price}€%0ADuration: ${activity.duration}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const imageAlt = activity.imageAlt || activity.title;
  const imageTitle = activity.imageTitle || activity.title;
  const imageCaption = activity.imageCaption || activity.description;

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-orange/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange/10 group">
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <img
          src={activity.image}
          alt={imageAlt}
          title={imageTitle}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-dark/80 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-orange font-semibold text-sm">From {activity.price}€</span>
        </div>
      </div>
      
      {imageCaption && (
        <div className="px-6 pt-3 pb-2">
          <p className="text-white/50 text-xs italic line-clamp-2">{imageCaption}</p>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-orange text-sm font-medium">{activity.category}</span>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-orange" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-white/80 text-sm">{activity.rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange transition-all duration-300">
          {activity.title}
        </h3>
        <p className="text-white/60 text-sm mb-4 line-clamp-2">
          {activity.description}
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-white/80 text-sm">{activity.duration}</span>
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={handleBookNow}
              className="flex-1 sm:flex-none px-4 py-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-sm rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/30 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Book Now
            </button>
            <Link
              to={`/activity/${activity.id}`}
              className="px-4 py-2 border border-white/20 hover:border-orange text-white font-semibold text-sm rounded-lg hover:bg-orange/10 transition-all duration-300"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
