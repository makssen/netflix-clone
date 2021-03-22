import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { ContextProvider } from './components/context/ContextProvider';
import { Header } from './components/Header';
import { FilmPreview } from './pages';
import { routes } from './routes';

function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <Header routes={routes}>
          <Switch>
            {routes.map(item => <Route key={item.label} exact={item.exact} path={item.path} component={item.component} />)}
            <Route path="/film_preview" component={FilmPreview} />
          </Switch>
        </Header>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
