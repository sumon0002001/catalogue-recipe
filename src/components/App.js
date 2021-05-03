import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipeItem from '../containers/recipe/RecipeItem';
import Navbar from './navbar/Navbar';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={RecipeItem}/>
    </Switch>
    </BrowserRouter>
   
  );
}

export default App;
