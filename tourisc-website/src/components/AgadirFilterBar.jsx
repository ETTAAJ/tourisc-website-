import { useState } from 'react';

const AgadirFilterBar = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'Beach', label: 'Beach' },
    { id: 'Adventure', label: 'Adventure' },
    { id: 'Nature', label: 'Nature' },
    { id: 'Culture', label: 'Culture' },
  ];

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
    onFilterChange({ category: filterId === 'all' ? null : filterId });
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10">
      <div>
        <h3 className="text-white font-semibold mb-4">Filter by Category</h3>
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterClick(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-orange text-white shadow-lg shadow-orange/30'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgadirFilterBar;
