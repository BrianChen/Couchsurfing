import React from 'react';

const handleChange = (filter, updateFilter) => (
  e => updateFilter(filter, e.currentTarget.value)
)

const FilterForm = ({ startDate, endDate, updateFilter }) => (
  <div>
    <span className="filter">Filter results:</span>
    <label>Start Date</label>
    <input
      type="number"
      value={startDate}
      onChange={handleChange('startDate', updateFilter)}/>
    <label>End Date</label>
    <input
      type="number"
      value={endDate}
      onChange={handleChange('endDate', updateFilter)}/>
  </div>
)

export default FilterForm;
