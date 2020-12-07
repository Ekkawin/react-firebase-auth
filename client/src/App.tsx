import logo from './logo.svg';
import './App.css';
import './styles.css';
import './tailwind.css';
import { Route } from 'react-router';
import { Login } from './Login';

const App = () => {
  return <Route exact path="/" component={Login} />;
};

export default App;
