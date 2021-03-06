import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import filterRecipes, { getRecipes } from '../../actions';
import CategoryFilter from '../../components/categoryFilter/CategoryFilter';
import ListItem from '../../components/listItem/ListItem';
import Loading from '../../components/loading/Loading';
import './recipeList.css';

const RecipeList = () => {
  const [loaded, setLoaded] = useState(false);
  const list = useSelector(state => state.recipeList.recipes);
  const categories = useSelector(state => state.filter.list);
  const current = useSelector(state => state.filter.current);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoaded(false);
    getRecipes(current, dispatch)
      .then(setLoaded(true));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const handleChange = ({ target: { value } }) => {
    dispatch(filterRecipes(value));
  };

  return (
    <div className="recipe-list">
      <div className="recipe-list-header">
        <h1>Welcome to My Recipe!</h1>
        <h3>Are you Ready to Cook?</h3>
        <CategoryFilter categories={categories} handleChange={handleChange} />
      </div>
      <div className="recipe-list-body">
        {loaded === true ? (list.map(item => <ListItem key={`${item.strMeal}_${Math.random() * 100}`} meal={item} dispatch={dispatch} />)) : <Loading /> }
      </div>
    </div>
  );
};

export default RecipeList;
