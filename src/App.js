
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import {Primeiro} from './components/Primeiro/'
function App() {
  return (
    
    <Router>
      <Link to='/primeiro'>Primeiro LInk</Link>
      <Link to='/segundo'>Segundo LInk</Link>
      <Link to='/terceiro'>Primeiro LInk</Link>
      <h1>Olá Mundo</h1>
      <hr/>
      <Switch>
        <Route path='/primeiro'>
         <Primeiro/>
        </Route>
        <Route path='/segundo'>
         <h2>Carregou o segundo Link</h2>
        </Route>
        <Route path='/terceiro'>
         <h2>Carregou o terceiro Link</h2>
        </Route>
      </Switch>
    </Router>
    

    
    
  );
}

export default App;
