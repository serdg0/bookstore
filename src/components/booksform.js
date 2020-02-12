import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoriesBox = categories.map(cg => <option key={cg + 1}>{cg}</option>);

  return (
    <form>
      <input type="text" />
      <select>{categoriesBox}</select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
