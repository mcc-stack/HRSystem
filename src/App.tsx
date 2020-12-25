import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import BasicLayout from './layouts/Basic';
import Login from './layouts/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/basic'>
          <BasicLayout />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/' exact>
          <Redirect to='/login' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
