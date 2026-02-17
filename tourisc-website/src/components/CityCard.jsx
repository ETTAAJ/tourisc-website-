import { Link } from 'react-router-dom';

const CityCard = ({ city }) => {
  return (
    <Link
      to={`/${city.slug}`}
      className="group relative block overflow-hidden rounded-xl h-96 sm:h-[500px] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange/20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${city.image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent group-hover:bg-gradient-to-t group-hover:from-dark/90 group-hover:via-dark/70 group-hover:to-transparent transition-all duration-300"></div>
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange rounded-xl transition-all duration-300"></div>

      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:text-orange transition-all duration-300">
          {city.name}
        </h3>
        <p className="text-white/90 text-sm sm:text-base">
          {city.shortDescription}
        </p>
      </div>
    </Link>
  );
};

export default CityCard;
