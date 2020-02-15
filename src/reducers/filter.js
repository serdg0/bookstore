const CHANGE_FILTER = 'CHANGE_FILTER';

const FilterReducer = (state = 'All', action) => {
  const actionate = action.category;
  switch (action.type) {
    case CHANGE_FILTER:
      return actionate;
    default:
      return state;
  }
};

export default FilterReducer;
