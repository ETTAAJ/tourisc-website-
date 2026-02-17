import { Link } from 'react-router-dom';

const ActivityCard = ({ activity }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-orange/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange/10 group">
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-dark/80 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-orange font-semibold text-sm">${activity.price}</span>
        </div>
      </div>

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

        <div className="flex items-center justify-between">
          <span className="text-white/80 text-sm">{activity.duration}</span>
          <Link
            to={`/activity/${activity.id}`}
            className="text-orange font-semibold text-sm hover:underline transition-all duration-300"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
