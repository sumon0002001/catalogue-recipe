import PropTypes from 'prop-types';
import './category.css';

const CategoryFilter = ({handleChange, categories}) => (
  <select name="categories" onChange={handleChange} defaultValue="default">
    <option value="default" disabled>Select a Category</option>
    {categories.map(item => <option key={`${item.strCategory}_option`} value={item.strCategory}>{item.strCategory}</option>)}
  </select>
);

CategoryFilter.prototype = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default CategoryFilter;