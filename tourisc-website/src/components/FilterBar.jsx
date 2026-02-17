import { useState } from 'react';

const FilterBar = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'Cultural', label: 'Cultural' },
    { id: 'Adventure', label: 'Adventure' },
    { id: 'Historical', label: 'Historical' },
    { id: 'Leisure', label: 'Leisure' },
  ];

  const durations = [
    { id: 'all', label: 'Any Duration' },
    { id: 'Half day', label: 'Half Day' },
    { id: '4 hours', label: '4 Hours' },
    { id: '5 hours', label: '5 Hours' },
    { id: '6 hours', label: '6 Hours' },
    { id: 'Full day', label: 'Full Day' },
  ];

  const priceRanges = [
    { id: 'all', label: 'Any Price' },
    { id: '0-79', label: 'Under $80' },
    { id: '80-119', label: '$80 - $119' },
    { id: '120-149', label: '$120 - $149' },
    { id: '150+', label: '$150+' },
  ];

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
    onFilterChange({ category: filterId === 'all' ? null : filterId });
  };

  const handleDurationChange = (duration) => {
    onFilterChange({ duration: duration === 'all' ? null : duration });
  };

  const handlePriceChange = (priceRange) => {
    onFilterChange({ priceRange: priceRange === 'all' ? null : priceRange });
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10">
      <div className="space-y-6">
        {/* Category Filters */}
        <div>
          <h3 className="text-white font-semibold mb-4">Category</h3>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterClick(filter.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-orange text-white'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Duration Filter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Duration</h3>
          <select
            onChange={(e) => handleDurationChange(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-orange transition-all duration-300"
          >
            {durations.map((duration) => (
              <option key={duration.id} value={duration.id} className="bg-dark">
                {duration.label}
              </option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Price Range</h3>
          <select
            onChange={(e) => handlePriceChange(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-orange transition-all duration-300"
          >
            {priceRanges.map((range) => (
              <option key={range.id} value={range.id} className="bg-dark">
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
