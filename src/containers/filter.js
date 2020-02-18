import React from 'react';
import PropTypes from 'prop-types';
import { selectStyle } from '../style';

const CategoryFilter = props => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoriesBox = categories.map(cg => <option key={cg}>{cg}</option>);
  const { handleChange } = props;
  return (
    <select onChange={handleChange} style={selectStyle}>
      {categoriesBox}
    </select>
  );
};

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
